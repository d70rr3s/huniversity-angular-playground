import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((response: any) => {
        if (response && response.type !== 0) {
          if (request.method === 'GET') {
            console.log(
              // tslint:disable-next-line:prefer-template
              '%c REQUEST ' + request.method + ' ',
              'color: #e835e2; font-weigth: bold; background-color: #eee',
              {
                url: request.url,
                body: request.body,
                headers: request.headers,
              },
            );
          }
          if (request.method === 'POST') {
            console.log(
              // tslint:disable-next-line:prefer-template
              '%c REQUEST ' + request.method + ' ',
              'color: #8e35e8; font-weigth: bold; background-color: #eee',
              {
                url: request.url,
                body: request.body,
                headers: request.headers,
              },
            );
          }
          if (request.method === 'PUT') {
            console.log(
              // tslint:disable-next-line:prefer-template
              '%c REQUEST ' + request.method + ' ',
              'color: #3570e8; font-weigth: bold; background-color: #eee',
              {
                url: request.url,
                body: request.body,
                headers: request.headers,
              },
            );
          }
          if (request.method === 'DELETE') {
            console.log(
              // tslint:disable-next-line:prefer-template
              '%c REQUEST ' + request.method + ' ',
              'color: #e89536; font-weigth: bold; background-color: #eee',
              {
                url: request.url,
                body: request.body,
                headers: request.headers,
              },
            );
          }
          if (response.status && response.status >= 200 && response.status < 300) {
            console.log(
              // tslint:disable-next-line:prefer-template
              '%c RESPONSE STATUS ' + response.status + ' ',
              'color: #10ce10; font-weigth: bold; background-color: #eee',
              response.body ? JSON.parse(JSON.stringify(response.body)) : '',
            );
          }
        }
      }),
    );
  }
}
