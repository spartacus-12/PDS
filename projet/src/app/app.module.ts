import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';

import { DescriptionComponent } from './description/description.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import {CarouselModule} from 'angular2-carousel';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListliveComponent } from './listlive/listlive.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './header/login/login.component';
import { InscriptionComponent } from './header/inscription/inscription.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListamisComponent } from './acceuil/listamis/listamis.component';
import { InformationprofilComponent } from './acceuil/informationprofil/informationprofil.component';
import { DonneprofilComponent } from './acceuil/informationprofil/donneprofil/donneprofil.component';
import { PhotoComponent } from './acceuil/informationprofil/photo/photo.component';
import { StatutComponent } from './acceuil/statut/statut.component';
import { FildactualiterComponent } from './acceuil/fildactualiter/fildactualiter.component';
import { UserStatutComponent } from './acceuil/listamis/user-statut/user-statut.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DescriptionComponent,

    ListliveComponent,

    PaginationComponent,

    FooterComponent,

    LoginComponent,

    InscriptionComponent,

    AcceuilComponent,

    ListamisComponent,

    InformationprofilComponent,

    DonneprofilComponent,

    PhotoComponent,

    StatutComponent,

    FildactualiterComponent,

    UserStatutComponent,

    WelcomepageComponent,
  ],
  imports: [
    NgbModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    FormsModule, ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
