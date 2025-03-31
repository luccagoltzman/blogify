import { Routes } from '@angular/router';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]; 