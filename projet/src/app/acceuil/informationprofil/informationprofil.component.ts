import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/service/user.service';
import { AuthenticationService } from 'src/service/authentication.service';
import { Subscription } from 'rxjs';
import { ProfileService } from 'src/service/profile.service';
@Component({
  selector: 'app-informationprofil',
  templateUrl: './informationprofil.component.html',
  styleUrls: ['./informationprofil.component.css']
})
export class InformationprofilComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  currentUserSubscription: Subscription;
  
  constructor(private authenticationService: AuthenticationService,
    private userService: UserService,private profileService: ProfileService) {
    //  this.user = JSON.parse(localStorage.getItem('profile'));
     // if (this.user)
     // this.angularForm.controls.email.setValue(this.user.email);
     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

  ngOnInit() {
    this.loadAllUsers();

  }
 //   let userCredentials=JSON.parse(localStorage.getItem('user'));

//this.username=userCredentials.username;
//this.name=userCredentials.name;

   // this.loadAllUsers();
 // }
 private loadAllUsers() {
  this.userService.getAll().subscribe(users => { this.users = users; });
    }
}

