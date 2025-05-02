import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginClientComponent } from './pages/login-client/login-client.component';
import { CalendarMedecinComponent } from './pages/calendar-medecin/calendar-medecin.component';
import { LoginMedecinComponent } from './pages/login-medecin/login-medecin.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [ // ✅ TOUS LES COMPOSANTS ICI
  
  ],
  imports: [ // ✅ UNIQUEMENT LES MODULES ICI
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppComponent,
    LoginClientComponent,
    CalendarMedecinComponent,
    LoginMedecinComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
