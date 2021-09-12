import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify or log the outgoing request
    const modifiedReq = req.clone({
      withCredentials: true,
    });
    return next.handle(modifiedReq).pipe(
      tap((values) => {
        if (values.type === HttpEventType.Sent) {
          console.log('Request was sent to server');
        }
        if (values.type === HttpEventType.Response) {
          console.log('Got the response from API');
        }
      })
    );
  }
}
