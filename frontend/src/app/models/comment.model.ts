import { User } from './user.model';

export interface Comment {
  id: number;
  content: string;
  user: User;
  post_id: number;
  created_at: string;
  updated_at: string;
} 