import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'registro',
    loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent),
  }
]; 