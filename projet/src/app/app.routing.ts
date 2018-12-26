import { Routes, RouterModule } from "@angular/router";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./header/login/login.component";
import { InscriptionComponent } from "./header/inscription/inscription.component";

const appRoutes: Routes = [
    { path: 'acceuil', component: AcceuilComponent, canActivate: [AuthGuard] },
    { path: 'gamy', component: LoginComponent },
    { path: 'gamy', component: InscriptionComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'acceuil' }
];

export const routing = RouterModule.forRoot(appRoutes);