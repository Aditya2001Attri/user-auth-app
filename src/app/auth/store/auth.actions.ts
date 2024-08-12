// src/app/auth/store/auth.actions.ts
import { createAction, props } from '@ngrx/store';

export const checkUser = createAction('[Auth] Check User', props<{ emailOrPhone: string }>());
export const checkUserSuccess = createAction('[Auth] Check User Success', props<{ exists: boolean }>());
export const checkUserFailure = createAction('[Auth] Check User Failure', props<{ error: string }>());

export const login = createAction('[Auth] Login', props<{ emailOrPhone: string, password: string }>());
export const loginSuccess = createAction('[Auth] Login Success');
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const signupStep1 = createAction('[Auth] Signup Step 1', props<{ name: string, emailOrPhone: string, password: string }>());
export const signupStep2 = createAction('[Auth] Signup Step 2', props<{ organizationName: string, designation: string, birthDate: string, city: string, pincode: string }>());
export const signupSuccess = createAction('[Auth] Signup Success');
export const signupFailure = createAction('[Auth] Signup Failure', props<{ error: string }>());