import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

import { ApplicationConfigService } from '../config/application-config.service';
import { Account } from './models/account';
import { StateStorageService } from './state-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userIdentity: Account | null = null;
  private authenticationState = new ReplaySubject<Account | null>(1);
  private accountCache$?: Observable<Account | null>;

  private userSubject: BehaviorSubject<Account>;
  public user: Observable<Account>;

  constructor(
    private sessionStorageService: SessionStorageService,
    private http: HttpClient,
    private stateStorageService: StateStorageService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private applicationConfigService: ApplicationConfigService
  ) {
    this.userSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('accountDetails') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  save(account: Account): Observable<{}> {
    return this.http.post(this.applicationConfigService.getEndpointFor('api/account'), account);
  }

  authenticate(identity: Account | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }

  identity(force?: boolean): Observable<Account | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.fetch().pipe(
        catchError(() => of(null)),
        tap((account: Account | null) => {
          this.authenticate(account);

          // After retrieve the account info, the language will be changed to
          // the user's preferred language configured in the account setting
          // unless user have choosed other language in the current session
          if (!this.sessionStorageService.retrieve('locale') && account) {
            // this.translateService.use(account.langKey);
          }

          if (account) {
            this.navigateToStoredUrl();
          }
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<Account | null> {
    return this.authenticationState.asObservable();
  }

  private fetch(): Observable<Account> {
    return this.http.get<Account>(this.applicationConfigService.getEndpointFor('api/account')).pipe(map((account: Account)=>{
      localStorage.setItem('accountDetails', JSON.stringify(account));
      this.userSubject.next(account);
      return account;
    }));
  }

  private navigateToStoredUrl(): void {
    const previousUrl = this.stateStorageService.getUrl();
    if (previousUrl) {
      this.stateStorageService.clearUrl();
      this.router.navigateByUrl(previousUrl);
    }
  }

  get getAccountDetails(): Account {
    return this.userSubject.value;
  }
}
