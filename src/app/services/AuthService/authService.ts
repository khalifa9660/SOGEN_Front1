import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthActionService {
  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  Authenticated(): boolean {
    return this.isAuthenticated;
  }
}