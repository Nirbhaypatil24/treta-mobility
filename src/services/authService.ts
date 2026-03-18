import axiosInstance from './axiosInstance';
import type { User, UserRole } from '../types';

export const authService = {
  login: async (email: string, password: string, role: UserRole): Promise<{ user: User; token: string }> => {
    const response = await axiosInstance.post<{ user: User; token: string }>('/auth/login', { email, password, role });
    return response.data;
  },
  signup: async (data: { name: string; email: string; password: string; role: UserRole }): Promise<{ user: User; token: string }> => {
    const response = await axiosInstance.post<{ user: User; token: string }>('/auth/signup', data);
    return response.data;
  },
  forgotPassword: async (email: string): Promise<{ message: string }> => {
    const response = await axiosInstance.post<{ message: string }>('/auth/forgot-password', { email });
    return response.data;
  },
};
