import {throwError as observableThrowError,   Observable ,  Subject ,  BehaviorSubject } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  getLoggedInName = new Subject<any>(); 
  getLoggedInPic = new Subject<any>();
  getLoggedInId = new Subject<any>();
  getLoggedInNotifications = new Subject<any>();
  getConnected = new Subject<any>(); 

    userProfile: any;
  constructor(private http: HttpClient,
    private router: Router) { }
    login(cridentials: any): Observable<any> {
      return this.http.post('http://localhost:5000/users/login',JSON.stringify(cridentials))
      .pipe(
        map(this.extractData),
        catchError(this.handleError),);
      
    }
    private extractData(res: Response) {
      return res || {};
    }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else {
      errMsg = error.message ? error.message : error.toString();
    }
    return observableThrowError(error /* errMsg */);
  }
}
