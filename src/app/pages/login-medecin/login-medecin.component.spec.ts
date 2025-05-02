import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-medecin',
  templateUrl: './login-medecin.component.html',
  styleUrls: ['./login-medecin.component.css'] // ou retire si tu n'utilises pas ce fichier
})
export class LoginMedecinComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = "Veuillez remplir correctement tous les champs.";
      return;
    }

    const { email, password } = this.loginForm.value;

    // 👉 Remplace ceci par un appel à ton service backend de connexion médecin
    if (email === 'medecin@example.com' && password === 'password123') {
      this.router.navigate(['/dashboard-medecin']); // remplace avec ta vraie route
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect.';
    }
  }
}
