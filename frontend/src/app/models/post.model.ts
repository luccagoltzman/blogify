import { User } from './user.model';
import { Category } from './category.model';
import { Comment } from './comment.model';

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Post {
  id: number;
  title: string;
  subtitle?: string;
  slug: string;
  content: string;
  image?: string;
  is_published: boolean;
  user: User;
  categories: Category[];
  created_at: string;
  updated_at: string;
  comments?: Comment[];
  likes_count?: number;
  comments_count?: number;
  tags?: Tag[];
} 