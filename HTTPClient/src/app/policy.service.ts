import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Policy } from './policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyServices {

  private apiurl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.apiurl).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Unable to fetch policies'));
      })
    );
  }
}
