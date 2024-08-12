// src/app/auth/store/auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../auth.service';
import * as AuthActions from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  checkUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkUser),
      switchMap(({ emailOrPhone }) =>
        this.authService.checkUser(emailOrPhone).pipe(
          map(exists => AuthActions.checkUserSuccess({ exists })),
          catchError(error => of(AuthActions.checkUserFailure({ error: error.message })))
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ emailOrPhone, password }) =>
        this.authService.login(emailOrPhone, password).pipe(
          map(() => AuthActions.loginSuccess()),
          catchError(error => of(AuthActions.loginFailure({ error: error.message })))
        )
      )
    )
  );

  signupStep1$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signupStep1),
      switchMap(({ name, emailOrPhone, password }) =>
        this.authService.signupStep1(name, emailOrPhone, password).pipe(
          map(() => AuthActions.signupSuccess()),
          catchError(error => of(AuthActions.signupFailure({ error: error.message })))
        )
      )
    )
  );

  signupStep2$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signupStep2),
      switchMap(({ organizationName, designation, birthDate, city, pincode }) =>
        this.authService.signupStep2(organizationName, designation, birthDate, city, pincode).pipe(
          map(() => AuthActions.signupSuccess()),
          catchError(error => of(AuthActions.signupFailure({ error: error.message })))
        )
      )
    )
  );
}