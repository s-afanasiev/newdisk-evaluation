import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/modules/simplest-auth/auth.service';
import {AuthModeOff} from "src/consts/auth-mode-off";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private reflector: Reflector
    ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isAuthModeOff = this.reflector.get<string[]>(AuthModeOff, context.getHandler());
    if(isAuthModeOff){
      console.log("AuthGuard: AuthModeOff=", AuthModeOff);
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authToken = request.get("authorization");
    if(authToken) {
        console.log("AuthGuard: authToken=", authToken);
        return this.authService.checkToken(authToken);
    } else {
        console.log("AuthGuard: NO authToken !");
        return false;
    }
  }
}