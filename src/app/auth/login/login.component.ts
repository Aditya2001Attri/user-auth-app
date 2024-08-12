// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrPhone: string = '';
  password: string = '';

  constructor(private store: Store) {}

  login() {
    this.store.dispatch(login({ emailOrPhone: this.emailOrPhone, password: this.password }));
    this.store.select('auth').subscribe((state: any) => {
      if (state.error) {
        alert('Invalid credentials');
      } else {
        alert('Login successful');
      }
    });
  }
}