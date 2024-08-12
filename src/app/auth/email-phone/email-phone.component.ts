// src/app/auth/email-phone/email-phone.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { checkUser } from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-phone',
  templateUrl: './email-phone.component.html',
  styleUrls: ['./email-phone.component.css']
})
export class EmailPhoneComponent {
  emailOrPhone: string = '';

  constructor(private store: Store, private router: Router) {}

  checkUser() {
    this.store.dispatch(checkUser({ emailOrPhone: this.emailOrPhone }));
    this.store.select('auth').subscribe((state: any) => {
      if (state.userExists !== null) {
        if (state.userExists) {
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/signup-step1']);
        }
      }
    });
  }
}