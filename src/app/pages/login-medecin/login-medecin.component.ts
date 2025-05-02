import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-medecin',
  templateUrl: './login-medecin.component.html',
  imports: [ReactiveFormsModule,CommonModule],
  styleUrls: ['./login-medecin.component.css']
})
export class LoginMedecinComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode: boolean = true;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
    
   }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.submitted = false;
    this.authForm.reset();
  }

  onSubmit() {
    this.submitted = true;

    if (this.authForm.invalid) return;

    if (!this.isLoginMode) {
      const { password, confirmPassword } = this.authForm.value;
      if (password !== confirmPassword) {
        this.authForm.get('confirmPassword')?.setErrors({ mismatch: true });
        return;
      }
    }

    console.log(`${this.isLoginMode ? 'Connexion' : 'Inscription'} réussie`, this.authForm.value);
    this.router.navigate(['/calendrier']);
  }

  get f() {
    return this.authForm.controls;
  }
}
