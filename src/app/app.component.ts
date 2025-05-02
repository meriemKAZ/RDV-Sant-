import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ou .scss selon ton projet
})
export class AppComponent {
  title = 'rdv-app';
}
