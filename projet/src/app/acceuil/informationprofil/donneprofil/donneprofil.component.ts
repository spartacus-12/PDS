import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/service/alert.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-donneprofil',
  templateUrl: './donneprofil.component.html',
  styleUrls: ['./donneprofil.component.css']
})
export class DonneprofilComponent implements OnInit {

  user: User;
  email: string;
  name:string;
  username:string;
  angularForm = new FormGroup({
    email : new FormControl(),
    name: new FormControl(),
    username:new FormControl(),
  });

  closeResult: string;

  constructor(private modalService: NgbModal,private fb:FormBuilder,private alertService: AlertService,
    private userService:UserService) {
    this.createForm();
    this.user = JSON.parse(localStorage.getItem('profile'));
    if (this.user)
       this.angularForm.controls.email.setValue(this.user.email);

  }
  createForm(){
    this.angularForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      name:['', Validators.required],
      username:['', Validators.required],
    })
  }
  open(content,user) {
    const modalRef =  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  submitContactForm() {
    const form = {
      email: this.angularForm.controls.email.value,
      name : this.angularForm.controls.name.value,
      username: this.angularForm.controls.username.value,
    };
    this.userService.update(this.user.id,form)
    .subscribe(
      (resp) => {
        this.alertService.success('Votre demande a été envoyé!');
      }
    );
  }

  ngOnInit(): void {
  }


}
