import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          if (this.keepAfterNavigationChange) {
              // only keep for a single location change
              this.keepAfterNavigationChange = false;
          } else {
              // clear alert
              this.subject.next();
          }
        }
   });
}
success(message: string, keepAfterNavigationChange = false) {
  this.keepAfterNavigationChange = keepAfterNavigationChange;
  this.subject.next({ type: 'success', text: message });
}

error(message: string, keepAfterNavigationChange = false) {
  this.keepAfterNavigationChange = keepAfterNavigationChange;
  this.subject.next({ type: 'error', text: message });
}

getMessage(): Observable<any> {
  return this.subject.asObservable();
}
}
