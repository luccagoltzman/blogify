export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  is_admin?: boolean;
  created_at?: string;
  updated_at?: string;
} 