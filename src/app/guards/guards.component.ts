import { CanActivateFn, Router } from "@angular/router";
import { TokenStorageService } from "../services/token/token.service";
import { inject } from "@angular/core";

const tokenService = new TokenStorageService();

export const AuthGuard: CanActivateFn = (route, state) => {
  const token = tokenService.getToken();
  const router = inject(Router);

  if(token){
    return true;
  } else {
    router.navigate(['login']);
    return false
  }
};