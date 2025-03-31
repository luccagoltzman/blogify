import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
  },
  {
    path: 'posts',
    loadComponent: () => import('./posts/admin-posts.component').then(c => c.AdminPostsComponent),
  },
  {
    path: 'posts/criar',
    loadComponent: () => import('./posts/post-form/post-form.component').then(c => c.PostFormComponent),
  },
  {
    path: 'posts/editar/:id',
    loadComponent: () => import('./posts/post-form/post-form.component').then(c => c.PostFormComponent),
  },
  {
    path: 'categorias',
    loadComponent: () => import('./categories/admin-categories.component').then(c => c.AdminCategoriesComponent),
  },
  {
    path: 'comentarios',
    loadComponent: () => import('./comments/admin-comments.component').then(c => c.AdminCommentsComponent),
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./users/admin-users.component').then(c => c.AdminUsersComponent),
  }
]; 