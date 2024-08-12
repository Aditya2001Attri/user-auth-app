// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { EmailPhoneComponent } from './auth/email-phone/email-phone.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupStep1Component } from './auth/signup-step1/signup-step1.component';
import { SignupStep2Component } from './auth/signup-step2/signup-step2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/email-phone', pathMatch: 'full' },
  { path: 'email-phone', component: EmailPhoneComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup-step1', component: SignupStep1Component },
  { path: 'signup-step2', component: SignupStep2Component },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/email-phone' }
];