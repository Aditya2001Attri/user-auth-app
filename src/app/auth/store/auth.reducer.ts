// src/app/auth/store/auth.reducer.ts
import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  userExists: boolean | null;
  error: string | null;
  loading: boolean;
}

export const initialState: AuthState = {
  userExists: null,
  error: null,
  loading: false,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.checkUser, state => ({ ...state, loading: true })),
  on(AuthActions.checkUserSuccess, (state, { exists }) => ({ ...state, userExists: exists, loading: false })),
  on(AuthActions.checkUserFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(AuthActions.login, state => ({ ...state, loading: true })),
  on(AuthActions.loginSuccess, state => ({ ...state, loading: false })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(AuthActions.signupStep1, state => ({ ...state, loading: true })),
  on(AuthActions.signupStep2, state => ({ ...state, loading: true })),
  on(AuthActions.signupSuccess, state => ({ ...state, loading: false })),
  on(AuthActions.signupFailure, (state, { error }) => ({ ...state, error, loading: false })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}