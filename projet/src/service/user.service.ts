import { Injectable } from '@angular/core';
import{User} from '../app/model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({  providedIn: 'root'
}
)
export class UserService {
 
  constructor(private http: HttpClient) { }
  create(user:any) : Observable<any>  {
    console.log(JSON.stringify(user))
    return this.http.post('http://localhost:5000/users/register',JSON.stringify(user))
    .pipe(
      tap(calls => this.log('create')),
      catchError(this.handleError('create'))
    )
    
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
private log(message: string) {
  // console.log('SkillService: ' + message);
}
}

