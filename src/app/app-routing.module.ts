import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginClientComponent } from './pages/login-client/login-client.component';
import { CalendarMedecinComponent } from './pages/calendar-medecin/calendar-medecin.component';

const routes: Routes = [
  { path: 'login-client', component: LoginClientComponent },
  { path: '', redirectTo: 'login-client', pathMatch: 'full' },
  { path: 'calendrier', component: CalendarMedecinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
