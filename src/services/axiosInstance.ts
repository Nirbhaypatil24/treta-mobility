import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://api.tretamobility.com/v1';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const stored = localStorage.getItem('auth-storage');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as { state?: { token?: string } };
        const token = parsed?.state?.token;
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch {
        // ignore parse errors
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem('auth-storage');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
