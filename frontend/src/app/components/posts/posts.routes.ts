import { Routes } from '@angular/router';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./post-list/post-list.component').then(m => m.PostListComponent)
  },
  {
    path: 'post/:slug',
    loadComponent: () => import('./post-detail/post-detail.component').then(m => m.PostDetailComponent)
  },
  {
    path: 'categorias',
    loadComponent: () => import('./category-list/category-list.component').then(m => m.CategoryListComponent)
  },
  {
    path: 'categorias/:slug',
    loadComponent: () => import('./category-posts/category-posts.component').then(m => m.CategoryPostsComponent)
  }
]; 