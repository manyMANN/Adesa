import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './Home.component.html',
})
export default class HomeComponent {
  authService = inject(AuthService);
  n1 = signal(0);
  n2 = signal(0);

  result = computed(() => this.n1() * this.n2());

  onLogout() {
    this.authService.logout();
  }
}
