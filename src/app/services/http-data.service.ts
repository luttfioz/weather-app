import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpDataService {
  constructor(public http: HttpClient) {
  }

  get<T>(url: string, options?: HttpOptions) {
    return this.http.get<T>(url, { ...options, headers: this.prepareHeaders(options?.headers) }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  post<T>(url: string, body: any, options?: HttpOptions) {
    return this.http.post<T>(url, body, { ...options, headers: this.prepareHeaders(options.headers) }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  private prepareHeaders(headers: HttpHeaders = new HttpHeaders()): HttpHeaders {
    headers.set('X-Requested-With', 'XMLHttpRequest');
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'my-auth-token');
    return headers;
  }

  private handleError(error: Error) {
    const errMessage = error.message;
    console.error(errMessage);
    return throwError(errMessage);
  }
}

export class HttpOptions {
  headers?: HttpHeaders;
  observe: any;
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
