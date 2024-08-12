// src/app/auth/signup-step2/signup-step2.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signupStep2 } from '../store/auth.actions';

@Component({
  selector: 'app-signup-step2',
  templateUrl: './signup-step2.component.html',
  styleUrls: ['./signup-step2.component.css']
})
export class SignupStep2Component {
  organizationName: string = '';
  designation: string = '';
  birthDate: string = '';
  city: string = '';
  pincode: string = '';

  constructor(private store: Store) {}

  signupStep2() {
    this.store.dispatch(signupStep2({ organizationName: this.organizationName, designation: this.designation, birthDate: this.birthDate, city: this.city, pincode: this.pincode }));
    this.store.select('auth').subscribe((state: any) => {
      if (state.error) {
        alert('Unknown organization-id');
      } else {
        alert('Signup successful');
      }
    });
  }
}