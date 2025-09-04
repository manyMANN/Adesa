import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent {
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  router = inject(Router);
  hasError = signal(false);
  isPosting = signal(false);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  onSubmit() {
    if (this.loginForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return;
    }
    const { email = 'sin', password = 'sin' } = this.loginForm.value;

    this.isPosting.set(true);

    this.authService.login(email!, password!).subscribe({
      next: (res) => {
        this.isPosting.set(false);

        // Guardar token en localStorage
        localStorage.setItem('token', res.token);

        console.log('Login exitoso, token guardado');
        this.router.navigate(['/dashboard/home']);
      },
      error: (err) => {
        this.isPosting.set(false);
        this.hasError.set(true);
        console.error('Error en login:', err);
      }
    });
  }

}
