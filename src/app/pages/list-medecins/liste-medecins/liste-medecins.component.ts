import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-liste-medecins',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './liste-medecins.component.html',
  styleUrls: ['./liste-medecins.component.css']
})
export class ListeMedecinsComponent implements OnInit {
  medecins = [
    { id: '1', nom: 'Dupont', prenom: 'Alice' },
    { id: '2', nom: 'Lemoine', prenom: 'Jean' },
    { id: '3', nom: 'Nguyen', prenom: 'Minh' }
  ];
  showModal = false;
  selectedMedecin: any = null;
  rdvForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.rdvForm = this.fb.group({
      date: ['', Validators.required],
      message: ['']
    });
  }

  openModal(medecin: any) {
    this.selectedMedecin = medecin;
    this.rdvForm.reset();
    this.showModal = true;
  }

  submitRdv() {
    const data = {
      professionnel:'client',
      date: this.rdvForm.value.date,
      message: this.rdvForm.value.message,
    };
  
    this.authService.creerRendezVous(data).subscribe({
      next: () => {
        alert('Rendez-vous confirmé');
        this.showModal = false;
        this.rdvForm.reset(); // optionnel : pour vider le formulaire
      },
      error: (err) => {
        alert(err.error?.message || 'Erreur lors de la prise de rendez-vous.');
      }
    });
  }
}
