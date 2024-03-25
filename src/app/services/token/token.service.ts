import { Injectable } from '@angular/core';

export const TokenKey = "jwtToken"
export const RefreshToken = "refreshJwtToken";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public getToken(): string {
    const token = sessionStorage.getItem(TokenKey);
    return token !== null ? token : '';
  }

  public deleteToken(): void {
   sessionStorage.removeItem(TokenKey);
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TokenKey);
    window.sessionStorage.setItem(TokenKey, token)
  }

  signOut(){
    window.sessionStorage.clear()
  }

}
