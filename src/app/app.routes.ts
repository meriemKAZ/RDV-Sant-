import { Routes } from '@angular/router';
import { LoginClientComponent } from './pages/login-client/login-client.component';
import { CalendarMedecinComponent } from './pages/calendar-medecin/calendar-medecin.component';
import { LoginMedecinComponent } from './pages/login-medecin/login-medecin.component';
import { HomeComponent } from './pages/home/home.component';
import { ListeMedecinsComponent } from './pages/list-medecins/liste-medecins/liste-medecins.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-client', component: LoginClientComponent },
  { path: 'login-medecin', component: LoginMedecinComponent },
  { path: 'calendrier', component: ListeMedecinsComponent }

  ];

