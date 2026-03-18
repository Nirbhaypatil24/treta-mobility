import axiosInstance from './axiosInstance';
import type { Product } from '../types';

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    const response = await axiosInstance.get<Product[]>('/products');
    return response.data;
  },
  getProduct: async (id: string): Promise<Product> => {
    const response = await axiosInstance.get<Product>(`/products/${id}`);
    return response.data;
  },
};
