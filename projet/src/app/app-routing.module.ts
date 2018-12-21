import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {WelcomepageComponent} from './welcomepage/welcomepage.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'gamy', component: WelcomepageComponent},
  {path: 'acceuil', component: AcceuilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
