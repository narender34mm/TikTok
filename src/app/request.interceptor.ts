import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor',request);

    console.log('token',localStorage.getItem('value'));
  
      const newRequest=request.clone({setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('value')}`
      }});
      return next.handle(newRequest);

  }
}
