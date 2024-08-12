// src/app/auth/signup-step1/signup-step1.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signupStep1 } from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-step1',
  templateUrl: './signup-step1.component.html',
  styleUrls: ['./signup-step1.component.css']
})
export class SignupStep1Component {
  name: string = '';
  emailOrPhone: string = '';
  password: string = '';

  constructor(private store: Store, private router: Router) {}

  signupStep1() {
    this.store.dispatch(signupStep1({ name: this.name, emailOrPhone: this.emailOrPhone, password: this.password }));
    this.router.navigate(['/signup-step2']);
  }
}
