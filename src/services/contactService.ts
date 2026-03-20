import axiosInstance from './axiosInstance';
import type { ContactForm } from '../types';

export const contactService = {
  submit: async (data: ContactForm): Promise<{ message: string }> => {
    const response = await axiosInstance.post<{ message: string }>('/contact', data);
    return response.data;
  },
};
