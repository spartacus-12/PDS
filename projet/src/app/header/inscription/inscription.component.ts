import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Observable,of, from } from 'rxjs';
import { Router } from '@angular/router';

import{UserService} from '../../../service/user.service' ;
import{AlertService} from '../../../service/alert.service' ;
import { stringify } from 'querystring';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent  {
  closeResult: string;
  user: any;
  name:string;
  username:string;
  email:string;
  password:string;
  password2:string ;
  registerForm= new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    password2: new FormControl(),

  });
  constructor( private fb: FormBuilder,private modalService: NgbModal,  private userService: UserService,private alertService: AlertService,private router: Router,) {}

 
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  buildForm(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',  Validators.required],
      password2: ['',    Validators.required],
      
      
    })

  }

  

//signup(){
 // this.http.get('https://jsonplaceholder.typicode.com/todos/1')
 // .subscribe(val => console.log(val));
//}
  //signup( user:User):Observable<any> {
   // return this.http.post<any>('http://localhost:5000/users/register',JSON.stringify(user))

    //.pipe(
     // tap(calls => this.log('signup')),
    //  catchError(this.handleError('signup'))
    //);

  //}

  register(){
    const newUser ={
      name: this.registerForm.controls.name.value,
      username:this.registerForm.controls.username.value,
      
      email:this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      password2: this.registerForm.controls.password2.value,

    };

    this.userService.create(newUser)
    .subscribe(
      (resp) => {
        this.alertService.success('Votre demande a été envoyé!');
        this.router.navigate(['/']);
  
}
    );
}
}

     
    
  

 // signup(user: User): Observable<User> {
   // return this.http.post<User>('http://localhost:5000/users/register', user)
     // .pipe(
      //  catchError(this.handleError('signup', user))
     // );
  //}


