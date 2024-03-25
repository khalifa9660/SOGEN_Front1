import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorageService } from "./token/token.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenStorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.getToken();
        if(token){
            req = req.clone({
                setHeaders: {Authorization: `Bearer ${token}`}
            });
        }

        return next.handle(req);
    }
}