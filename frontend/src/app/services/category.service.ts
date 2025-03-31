import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    // Durante o desenvolvimento, podemos retornar dados mockados
    return of([
      {
        id: 1,
        name: 'Política',
        slug: 'politica',
        description: 'Notícias e análises sobre política nacional e internacional',
        image: 'assets/images/categories/politica.jpg',
        posts_count: 12
      },
      {
        id: 2,
        name: 'Economia',
        slug: 'economia',
        description: 'Análises econômicas e notícias sobre mercado financeiro',
        image: 'assets/images/categories/economia.jpg',
        posts_count: 8
      },
      {
        id: 3,
        name: 'Tecnologia',
        slug: 'tecnologia',
        description: 'Novidades e tendências do mundo da tecnologia',
        image: 'assets/images/categories/tecnologia.jpg',
        posts_count: 15
      }
    ]);
    
    // Implementação real com API
    // return this.http.get<Category[]>(this.apiUrl);
  }

  getCategoryBySlug(slug: string): Observable<Category> {
    // Durante o desenvolvimento, podemos retornar dados mockados
    const mockCategories = [
      {
        id: 1,
        name: 'Política',
        slug: 'politica',
        description: 'Notícias e análises sobre política nacional e internacional',
        image: 'assets/images/categories/politica.jpg',
        posts_count: 12
      },
      {
        id: 2,
        name: 'Economia',
        slug: 'economia',
        description: 'Análises econômicas e notícias sobre mercado financeiro',
        image: 'assets/images/categories/economia.jpg',
        posts_count: 8
      },
      {
        id: 3,
        name: 'Tecnologia',
        slug: 'tecnologia',
        description: 'Novidades e tendências do mundo da tecnologia',
        image: 'assets/images/categories/tecnologia.jpg',
        posts_count: 15
      }
    ];
    
    const category = mockCategories.find(c => c.slug === slug);
    
    if (category) {
      return of(category);
    }
    
    // Fallback para uma categoria padrão (isso seria um erro 404 na implementação real)
    return of(mockCategories[0]);
    
    // Implementação real com API
    // return this.http.get<Category>(`${this.apiUrl}/slug/${slug}`);
  }

  getCategoryById(id: number): Observable<Category> {
    // Implementação real com API
    // return this.http.get<Category>(`${this.apiUrl}/${id}`);
    
    // Durante o desenvolvimento, podemos retornar dados mockados
    const mockCategories = [
      {
        id: 1,
        name: 'Política',
        slug: 'politica',
        description: 'Notícias e análises sobre política nacional e internacional',
        image: 'assets/images/categories/politica.jpg',
        posts_count: 12
      },
      {
        id: 2,
        name: 'Economia',
        slug: 'economia',
        description: 'Análises econômicas e notícias sobre mercado financeiro',
        image: 'assets/images/categories/economia.jpg',
        posts_count: 8
      },
      {
        id: 3,
        name: 'Tecnologia',
        slug: 'tecnologia',
        description: 'Novidades e tendências do mundo da tecnologia',
        image: 'assets/images/categories/tecnologia.jpg',
        posts_count: 15
      }
    ];
    
    const category = mockCategories.find(c => c.id === id);
    
    if (category) {
      return of(category);
    }
    
    // Fallback para uma categoria padrão (isso seria um erro 404 na implementação real)
    return of(mockCategories[0]);
  }
} 