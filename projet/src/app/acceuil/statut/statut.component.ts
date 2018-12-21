import { Component, OnInit } from '@angular/core';
import {FildactualiterComponent} from '../fildactualiter/fildactualiter.component';
import {Statut} from './Statut.model';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.css'],

})
export class StatutComponent implements OnInit {

  public counter = 0;
  public reapeat = [];
  public name = 'Name from Parent';
Statut: Statut[] = [
  new Statut('Bonjour'),
  new Statut('Bonjour2'),

];

  AddComponentAdd() {
    this.counter++;
    this.reapeat.push(this.counter);
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
