import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [PostService],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  isLoading = true;
  error: string | null = null;
  relatedPosts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadPost(slug);
      }
    });
  }

  loadPost(slug: string): void {
    this.isLoading = true;
    this.error = null;
    this.postService.getPostBySlug(slug).subscribe({
      next: (post) => {
        this.post = post;
        this.isLoading = false;
        this.loadRelatedPosts(post.id, post.categories[0]?.id);
      },
      error: (err) => {
        this.error = 'Erro ao carregar o post. Por favor, tente novamente mais tarde.';
        this.isLoading = false;
        console.error('Erro ao carregar post:', err);
      }
    });
  }

  loadRelatedPosts(postId: number, categoryId?: number): void {
    if (categoryId) {
      this.postService.getPostsByCategory(categoryId, 3).subscribe({
        next: (posts) => {
          // Excluir o post atual dos relacionados
          this.relatedPosts = posts.filter(p => p.id !== postId).slice(0, 3);
        },
        error: (err) => {
          console.error('Erro ao carregar posts relacionados:', err);
        }
      });
    }
  }

  likePost(): void {
    if (this.post) {
      this.postService.likePost(this.post.id).subscribe({
        next: (response) => {
          if (this.post) {
            this.post.likes_count = (this.post.likes_count || 0) + 1;
          }
        },
        error: (err) => {
          console.error('Erro ao curtir o post:', err);
        }
      });
    }
  }
} 