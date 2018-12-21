import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-statut',
  templateUrl: './user-statut.component.html',
  styleUrls: ['./user-statut.component.css']
})
export class UserStatutComponent  {


  @Input() status: string;

}
