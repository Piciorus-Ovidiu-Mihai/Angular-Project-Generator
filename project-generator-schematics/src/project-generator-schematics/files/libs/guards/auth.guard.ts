// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { AuthService } from 'src/app/libs/services/auth.service';

// @Injectable({
// 	providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
// 	constructor(protected authService: AuthService, protected firestore: AngularFirestore, protected router: Router) {}
// 	canActivate(
// 		route: ActivatedRouteSnapshot,
// 		state: RouterStateSnapshot
// 	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// 		return this.authService.user.pipe(
// 			map((res) => {
// 				if (!res) this.router.navigate(['/auth/login']);
// 				return !!res;
// 			}),
// 			catchError(() => {
// 				this.router.navigate(['/auth/login']);
// 				return of(false);
// 			})
// 		);
// 	}

// 	canActivateChild(
// 		route: ActivatedRouteSnapshot,
// 		state: RouterStateSnapshot
// 	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// 		return this.authService.user.pipe(
// 			map((res) => {
// 				if (!res) this.router.navigate(['/auth/login']);
// 				return !!res;
// 			}),
// 			catchError(() => {
// 				this.router.navigate(['/auth/login']);
// 				return of(false);
// 			})
// 		);
// 	}
// }
