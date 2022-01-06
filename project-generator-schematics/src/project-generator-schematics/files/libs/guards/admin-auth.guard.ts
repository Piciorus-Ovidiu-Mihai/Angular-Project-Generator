// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { forkJoin, from, Observable, of } from 'rxjs';
// import { catchError, map, take } from 'rxjs/operators';
// import { AuthService } from 'src/app/libs/services/auth.service';

// @Injectable({
// 	providedIn: 'root',
// })
// // export class AdminAuthGuard implements CanActivate {
// // 	constructor(protected authService: AuthService, protected firestore: AngularFirestore, protected router: Router) {}
// // 	canActivate(
// // 		route: ActivatedRouteSnapshot,
// // 		state: RouterStateSnapshot
// // 	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// // 		return forkJoin([this.authService.user.pipe(take(1)), from(this.authService.getUserRole()).pipe(take(1))]).pipe(
// // 			map((res) => {
// // 				console.log(res);
// // 				const isLogged = res[0];
// // 				const userRole = res[1];
// // 				const isNotAllowed = !isLogged || userRole !== 'admin';
// // 				if (isNotAllowed) this.router.navigate(['/auth/login']);
// // 				return !isNotAllowed;
// // 			}),
// // 			catchError(() => {
// // 				this.router.navigate(['/auth/login']);
// // 				return of(false);
// // 			})
// // 		);
// // 	}

// // 	canActivateChild(
// // 		route: ActivatedRouteSnapshot,
// // 		state: RouterStateSnapshot
// // 	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// // 		return forkJoin([this.authService.user.pipe(take(1)), from(this.authService.getUserRole()).pipe(take(1))]).pipe(
// // 			map((res) => {
// // 				console.log(res);
// // 				const isLogged = res[0];
// // 				const userRole = res[1];
// // 				const isNotAllowed = !isLogged || userRole !== 'admin';
// // 				if (isNotAllowed) this.router.navigate(['/auth/login']);
// // 				return !isNotAllowed;
// // 			}),
// // 			catchError(() => {
// // 				this.router.navigate(['/auth/login']);
// // 				return of(false);
// // 			})
// // 		);
// // 	}
// // }
