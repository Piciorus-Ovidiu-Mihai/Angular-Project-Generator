import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { AccountService } from './account.service';
import { AuthService } from './auth.service';
import { Account } from './models/account';
import { UserLogin } from './models/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private accountService: AccountService, private authService: AuthService) {}

  login(credentials: UserLogin): Observable<Account | null> {
    return this.authService.login(credentials).pipe(mergeMap(() => this.accountService.identity(true)));
  }

  logout(): void {
    this.authService.logout().subscribe({ complete: () => this.accountService.authenticate(null) });
  }
}
