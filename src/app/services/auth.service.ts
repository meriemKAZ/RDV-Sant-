import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth'; // <-- à adapter à ton serveur

  constructor(private http: HttpClient) {}

  login(data: { email: string; motDePasse: string }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/auth/login', data);
  }
  creerRendezVous(data: any) {
    return this.http.post('http://localhost:3000/api/auth/rendezvous', data);
  }
  getMesRendezVous() {
    return this.http.get<[]>('http://localhost:3000/api/auth/rendezvous');
  }
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
