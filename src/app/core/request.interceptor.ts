import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  //Just a interceptor exemple, not using it because crudcrud dosent accept Authorization token :(
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('superSecretToken');
    if (!token) {
      this.loginService.logout();
    }
    const AUTH_TOKEN = localStorage.getItem('superSecretToken');
    let newRequest = request.clone({ setHeaders: { AUTH_TOKEN } });
    return next.handle(request);
  }
}
