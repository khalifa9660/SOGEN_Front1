import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/authentificationModels/login';
import { Register } from 'src/app/models/authentificationModels/register';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { JwtAuth } from 'src/app/models/authentificationModels/jwtAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = "AuthManagement/Register";
  loginUrl = "AuthManagement/Login"
  constructor(private Http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.Http.post<JwtAuth>(`${environment.apiUrl}/${this.registerUrl}`, user)
  }

  public login(user: Login): Observable<JwtAuth> {
    return this.Http.post<JwtAuth>(`${environment.apiUrl}/${this.loginUrl}`, user)
  }
}
