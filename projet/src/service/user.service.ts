import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { User } from 'src/app/model/user';

@Injectable({  providedIn: 'root'
}
)
export class UserService {
 
  constructor(private http: HttpClient) { }
  create(user:any) :Observable<any> {
    return this.http.post(`httOp://localhost:5000/users/register`,JSON.stringify(user))
    .pipe(
      tap(calls => this.log('create')),
      catchError(this.handleError('create'))
    );
    
}
update(user_id:string, data): Observable<any> {
  // console.log(contact)
    return this.http.put('http://localhost:5000/users/edit/'+ user_id , JSON.stringify(data))
    .pipe(
      tap(calls => this.log('update')),
      catchError(this.handleError('update'))
    );
}
getAll() {
  return this.http.get<User[]>('http://localhost:5000/users/user/');
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

