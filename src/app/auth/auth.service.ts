// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { emailOrPhone: 'test@example.com', password: 'password123' },
    { emailOrPhone: '1234567890', password: 'password123' }
  ];

  private allowedOrganizations = ['Org1', 'Org2'];

  checkUser(emailOrPhone: string) {
    const userExists = this.users.some(user => user.emailOrPhone === emailOrPhone);
    return of(userExists).pipe(delay(1000)); // Simulate API call
  }

  login(emailOrPhone: string, password: string) {
    const user = this.users.find(user => user.emailOrPhone === emailOrPhone && user.password === password);
    return of(!!user).pipe(delay(1000)); // Simulate API call
  }

  signupStep1(name: string, emailOrPhone: string, password: string) {
    this.users.push({ emailOrPhone, password });
    return of(true).pipe(delay(1000)); // Simulate API call
  }

  signupStep2(organizationName: string, designation: string, birthDate: string, city: string, pincode: string) {
    const isValidOrganization = this.allowedOrganizations.includes(organizationName);
    return of(isValidOrganization).pipe(delay(1000)); // Simulate API call
  }
}