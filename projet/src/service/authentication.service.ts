import {throwError as observableThrowError,   Observable ,  Subject ,  BehaviorSubject, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from "rxjs/operators";
interface myData {
    success: boolean,
    message: string
  }
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    private loggedInStatus = false;
  constructor(private http: HttpClient) { }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }
  getUserDetails(username, password) {
    // post these details to API server return user info if correct
    return this.http.post<myData>('http://localhost:5000/users/login',{
      username,
      password
    })
  }

  //  login(username: string, password: string):Observable<any> {
    //    return this.http.post('http://localhost:5000/users/login', { username: username, password: password })
      //      .pipe(map(user => {
                // login successful if there's a jwt token in the response
        //        if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
            //        localStorage.setItem('currentUser', JSON.stringify(user)),
          //          catchError(this.handleError('create'))
             //   }

             //   return user;
      //      }));
    //}
    login(username:string,password:string) {
        return this.http.post<any>('http://localhost:5000/users/login',{username:username,password:password})
        .pipe(map(user =>{
          if(user ){
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;

      }));
    }
      currentUser(){

        return JSON.parse(localStorage.getItem('currentUser'));
      }

      private extractData(res: Response) {
        return res.json || {};
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
  
    logout() {
        // remove user from local storage to log user out
     return   localStorage.removeItem('currentUser');
    }
}
