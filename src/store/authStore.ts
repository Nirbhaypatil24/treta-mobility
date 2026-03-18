import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, UserRole } from '../types';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      login: async (_email: string, _password: string, role: UserRole) => {
        set({ isLoading: true, error: null });
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const mockUser: User = {
            id: '1',
            name: 'Demo User',
            email: _email,
            role,
            token: 'mock-jwt-token',
          };
          set({
            user: mockUser,
            token: mockUser.token ?? null,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch {
          set({ error: 'Login failed. Please try again.', isLoading: false });
        }
      },
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
      setError: (error) => set({ error }),
    }),
    { name: 'auth-storage' }
  )
);
