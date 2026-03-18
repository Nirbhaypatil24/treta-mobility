import axiosInstance from './axiosInstance';
import type { BlogPost } from '../types';

export const blogService = {
  getPosts: async (page = 1, limit = 6, category?: string): Promise<{ posts: BlogPost[]; total: number }> => {
    const params = { page, limit, ...(category && { category }) };
    const response = await axiosInstance.get<{ posts: BlogPost[]; total: number }>('/blog/posts', { params });
    return response.data;
  },
  getPost: async (id: string): Promise<BlogPost> => {
    const response = await axiosInstance.get<BlogPost>(`/blog/posts/${id}`);
    return response.data;
  },
};
