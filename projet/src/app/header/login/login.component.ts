import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/service/authentication.service';
import { Router,ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/service/alert.service';
import { error } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  model: any = {};
  returnUrl: string;
  constructor( private route: ActivatedRoute,private authenticationService: AuthenticationService,private router:Router ) { }


  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
  loginUser() {
   // event.preventDefault()
   // const target = event.target
   // const username = target.querySelector('#username').value
   // const password = target.querySelector('#password').value
   this.authenticationService.login(this.model.username, this.model.password)
   .subscribe(data => {
        this.router.navigate(['acceuil']);

   },
   error =>{
     console.log(error);
   });
    }
 
  }

