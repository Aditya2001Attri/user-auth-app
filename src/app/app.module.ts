// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailPhoneComponent } from './auth/email-phone/email-phone.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupStep1Component } from './auth/signup-step1/signup-step1.component';
import { SignupStep2Component } from './auth/signup-step2/signup-step2.component';
import { AuthService } from './auth/auth.service';
import { AppStoreModule } from './store/store.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    EmailPhoneComponent,
    LoginComponent,
    SignupStep1Component,
    SignupStep2Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    AppStoreModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }