import { Routes } from '@angular/router';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./post-list/post-list.component').then(c => c.PostListComponent),
  },
  {
    path: 'post/:slug',
    loadComponent: () => import('./post-detail/post-detail.component').then(c => c.PostDetailComponent),
  }
];

export const CATEGORY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./category-list/category-list.component').then(c => c.CategoryListComponent),
  },
  {
    path: ':slug',
    loadComponent: () => import('./category-posts/category-posts.component').then(c => c.CategoryPostsComponent),
  }
]; 