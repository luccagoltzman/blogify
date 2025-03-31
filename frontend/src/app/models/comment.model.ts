import { User } from './user.model';

export interface Comment {
  id: number;
  content: string;
  is_approved: boolean;
  user: User;
  post_id: number;
  created_at: string;
  updated_at: string;
} 