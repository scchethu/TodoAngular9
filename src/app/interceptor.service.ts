import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest,
  HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  constructor(public toastr: ToastrService
  ,           private router: Router
  ) { }
  handleError(error: HttpErrorResponse){

    // tslint:disable-next-line:triple-equals
    if (error.status.toString() !== '401') {
      alert(error.message);
    }
    return throwError(error);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{
    return next.handle(req)
      .pipe(
        catchError(this.handleError)
      );
  }
}
