import { Routes } from '@angular/router';
import { LoginClientComponent } from './pages/login-client/login-client.component';

export const routes: Routes = [
  { path: 'login-client', component: LoginClientComponent },
  { path: '', redirectTo: 'login-client', pathMatch: 'full' } 
];
