import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

  interface LoginResponse {
    token: string;
  }

@Injectable({providedIn: 'root'})
export class AuthService {
  router = inject(Router);
  http = inject(HttpClient);
  private apiUrl = 'https://localhost:7172/api/auth';

  login(email: string, password: string) : Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/dashboard/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
