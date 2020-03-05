import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('TokenInterceptor....');
        const tokeniedRequest =  req.clone({
            setHeaders: {
                Authorization: 'Bearer xyz'
            }
        });
        return next.handle(tokeniedRequest);
    }
}
