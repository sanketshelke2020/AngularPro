import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService) { }

  // intercept method implement from httpinterface
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization : `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }

}
