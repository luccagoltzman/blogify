import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Category } from '../../../models/category.model';
import { Post } from '../../../models/post.model';
import { CategoryService } from '../../../services/category.service';
import { PostService } from '../../../services/post.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category-posts',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [CategoryService, PostService],
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.scss']
})
export class CategoryPostsComponent implements OnInit {
  category: Category | null = null;
  posts: Post[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadCategory(slug);
      }
    });
  }

  loadCategory(slug: string): void {
    this.isLoading = true;
    this.error = null;
    this.categoryService.getCategoryBySlug(slug).subscribe({
      next: (category) => {
        this.category = category;
        this.loadPosts(category.id);
      },
      error: (err) => {
        this.error = 'Erro ao carregar a categoria. Por favor, tente novamente mais tarde.';
        this.isLoading = false;
        console.error('Erro ao carregar categoria:', err);
      }
    });
  }

  loadPosts(categoryId: number): void {
    this.postService.getPostsByCategory(categoryId).subscribe({
      next: (posts) => {
        this.posts = posts;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar os posts. Por favor, tente novamente mais tarde.';
        this.isLoading = false;
        console.error('Erro ao carregar posts:', err);
      }
    });
  }
} 