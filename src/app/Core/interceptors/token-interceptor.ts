import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${userData.token}`
                }
            });
        }


        return next.handle(request);
    }
}