import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [CategoryService],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.isLoading = true;
    this.categoryService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar as categorias. Por favor, tente novamente mais tarde.';
        this.isLoading = false;
        console.error('Erro ao carregar categorias:', err);
      }
    });
  }
} 