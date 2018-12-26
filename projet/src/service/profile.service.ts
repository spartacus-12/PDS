import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile = new Subject<any>();
  authUser = new Subject<any>();

  callepsedCardInfo = new Subject<boolean>();
}
