// src/app/store/store.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from '../auth/store/auth.reducer';
import { AuthEffects } from '../auth/store/auth.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects])
  ]
})
export class AppStoreModule { }