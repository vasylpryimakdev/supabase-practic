export interface IUser {
  id: string;
  clerk_user_id: string;
  email: string;
  name: string;
  created_at: string;
  is_admin: boolean;
  is_active: boolean;
}

export interface IPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  monthly_price: number;
  quarterly_price: number;
  half_yearly_price: number;
  yearly_price: number;
  is_active: boolean;
  images: string[];
  created_at: string;
  updated_at: string;
}