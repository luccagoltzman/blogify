import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = `${environment.apiUrl}/posts`;
  
  constructor(private http: HttpClient) { }
  
  getAllPosts(page: number = 1, limit: number = 10): Observable<Post[]> {
    // Implementação real com API
    // return this.http.get<Post[]>(`${this.apiUrl}?page=${page}&limit=${limit}`);
    
    // Durante o desenvolvimento, podemos retornar dados mockados
    return of(this.getMockPosts());
  }
  
  getPostBySlug(slug: string): Observable<Post> {
    // Implementação real com API
    // return this.http.get<Post>(`${this.apiUrl}/slug/${slug}`);
    
    // Durante o desenvolvimento, podemos retornar dados mockados
    const posts = this.getMockPosts();
    const post = posts.find(p => p.slug === slug);
    
    if (post) {
      return of(post);
    }
    
    // Fallback para um post padrão (isso seria um erro 404 na implementação real)
    return of(posts[0]);
  }
  
  getPostsByCategory(categoryId: number, limit: number = 10): Observable<Post[]> {
    // Implementação real com API
    // return this.http.get<Post[]>(`${this.apiUrl}/category/${categoryId}?limit=${limit}`);
    
    // Durante o desenvolvimento, podemos retornar dados mockados
    const posts = this.getMockPosts().filter(p => 
      p.categories.some(c => c.id === categoryId)
    );
    
    return of(posts.slice(0, limit));
  }
  
  createPost(postData: FormData): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts`, postData);
  }
  
  updatePost(id: number, postData: FormData): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/posts/${id}`, postData);
  }
  
  deletePost(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/posts/${id}`);
  }
  
  likePost(postId: number): Observable<any> {
    // Implementação real com API
    // return this.http.post(`${this.apiUrl}/${postId}/like`, {});
    
    // Durante o desenvolvimento, podemos retornar um sucesso simulado
    return of({ success: true });
  }
  
  unlikePost(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/posts/${id}/unlike`);
  }
  
  addComment(postId: number, content: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts/${postId}/comments`, { content });
  }
  
  private getMockPosts(): Post[] {
    return [
      {
        id: 1,
        title: 'Como a Inteligência Artificial está revolucionando o jornalismo',
        subtitle: 'Novas ferramentas estão mudando a forma como as notícias são produzidas e consumidas',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nunc.</p>',
        image: 'assets/images/posts/ia-jornalismo.jpg',
        slug: 'como-inteligencia-artificial-revolucionando-jornalismo',
        is_published: true,
        created_at: '2023-12-15T10:30:00',
        updated_at: '2023-12-15T10:30:00',
        likes_count: 42,
        comments_count: 12,
        user: {
          id: 1,
          name: 'Maria Silva',
          email: 'maria@exemplo.com',
          avatar: 'assets/images/users/maria-silva.jpg',
          bio: 'Jornalista especializada em tecnologia e inovação'
        },
        categories: [
          {
            id: 3,
            name: 'Tecnologia',
            slug: 'tecnologia'
          }
        ]
      },
      {
        id: 2,
        title: 'O impacto das eleições americanas na economia global',
        subtitle: 'Analistas apontam cenários possíveis para os mercados internacionais',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nunc.</p>',
        image: 'assets/images/posts/eleicoes-economia.jpg',
        slug: 'impacto-eleicoes-americanas-economia-global',
        is_published: true,
        created_at: '2023-12-10T14:20:00',
        updated_at: '2023-12-11T09:15:00',
        likes_count: 28,
        comments_count: 8,
        user: {
          id: 2,
          name: 'Carlos Oliveira',
          email: 'carlos@exemplo.com',
          avatar: 'assets/images/users/carlos-oliveira.jpg',
          bio: 'Economista e analista político'
        },
        categories: [
          {
            id: 1,
            name: 'Política',
            slug: 'politica'
          },
          {
            id: 2,
            name: 'Economia',
            slug: 'economia'
          }
        ]
      },
      {
        id: 3,
        title: 'Novas tendências de investimento para 2024',
        subtitle: 'Conheça as oportunidades que estão surgindo no mercado financeiro',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nunc.</p>',
        image: 'assets/images/posts/investimentos-2024.jpg',
        slug: 'novas-tendencias-investimento-2024',
        is_published: true,
        created_at: '2023-12-05T16:45:00',
        updated_at: '2023-12-06T11:30:00',
        likes_count: 35,
        comments_count: 15,
        user: {
          id: 3,
          name: 'Ana Pereira',
          email: 'ana@exemplo.com',
          avatar: 'assets/images/users/ana-pereira.jpg',
          bio: 'Especialista em finanças pessoais e investimentos'
        },
        categories: [
          {
            id: 2,
            name: 'Economia',
            slug: 'economia'
          }
        ]
      }
    ];
  }
} 