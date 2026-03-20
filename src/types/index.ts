export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  date: string;
  readTime: number;
  featured?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  token?: string;
}

export type UserRole = 'driver' | 'marketing' | 'admin';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}
