import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./adesa/pages/Dashboard/Dashboard.component'),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./adesa/pages/login/login.component'),
      },
      {
        path: 'home',
        loadComponent: () => import('./adesa/pages/Home/Home.component'),
        canActivate: [AuthGuard]
      }
    ]
  }
];
