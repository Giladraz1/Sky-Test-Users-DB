import { Injectable } from '@angular/core';
import { Tehula } from './Tehula';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add
  addTehula(data: Tehula): Observable<any> {
    let API_URL = `${this.REST_API}/add-tehula`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all objects
  getTehulot() {
    return this.httpClient.get<Tehula[]>(`${this.REST_API}`);
  }

  // Get single object
  getTehula(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-tehula/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update
  updateTehula(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-tehula/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  deleteTehula(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-tehula/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
