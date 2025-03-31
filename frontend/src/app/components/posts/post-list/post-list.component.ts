import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  featuredPosts: Post[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.isLoading = true;
    this.postService.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        // Seleciona os 4 posts mais recentes como destacados
        this.featuredPosts = posts.slice(0, 4);
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