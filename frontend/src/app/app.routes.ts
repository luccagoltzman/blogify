import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/posts/posts.routes').then(m => m.POSTS_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./components/posts/posts.routes').then(m => m.CATEGORY_ROUTES)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./components/pages/about/about.component').then(c => c.AboutComponent)
  },
  {
    path: 'contato',
    loadComponent: () => import('./components/pages/contact/contact.component').then(c => c.ContactComponent)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./components/auth/profile/profile.component').then(c => c.ProfileComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./components/pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  }
];
