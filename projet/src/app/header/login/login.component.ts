import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/service/authentication.service';
import { Router } from '@angular/router';
import{AlertService} from 'src/service/alert.service' ;
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm= new FormGroup({
    username: new FormControl(),
    password: new FormControl(),

  });
  constructor(private fb: FormBuilder,private authenticationService: AuthenticationService,private router:Router ) { }
  buildForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['',  Validators.required],
      
      
    })

  }
  login(){
  const auth ={
    username:this.loginForm.controls.username.value,
    
    password: this.loginForm.controls.password.value,

  };
  this.authenticationService.login(auth)
  .subscribe(
    data => {
      this.router.navigate( ['acceuil']);
},
error => {
  console.log(error);
});

}
}
