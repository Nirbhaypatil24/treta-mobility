import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import type { UserRole } from '../types';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

const ROLES: { value: UserRole; label: string; emoji: string }[] = [
  { value: 'driver', label: 'Driver', emoji: '🚗' },
  { value: 'marketing', label: 'Marketing', emoji: '📢' },
  { value: 'admin', label: 'Admin', emoji: '⚙️' },
];

export default function AuthForm({ mode }: AuthFormProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>('driver');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error, setError } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    await login(email, password, selectedRole);

    const { isAuthenticated, user } = useAuthStore.getState();
    if (isAuthenticated && user) {
      const redirectMap: Record<UserRole, string> = {
        driver: '/dashboard/driver',
        marketing: '/dashboard/marketing',
        admin: '/dashboard/admin',
      };
      navigate(redirectMap[user.role]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        {mode === 'login' ? 'Welcome back' : 'Create account'}
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        {mode === 'login' ? 'Sign in to your Treta account' : 'Join thousands of Treta users'}
      </p>

      {/* Role selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
        <div className="grid grid-cols-3 gap-2">
          {ROLES.map((role) => (
            <button
              key={role.value}
              type="button"
              onClick={() => setSelectedRole(role.value)}
              className={`flex flex-col items-center gap-1 py-3 px-2 rounded-xl border-2 text-sm font-medium transition-all ${
                selectedRole === role.value
                  ? 'border-yellow-400 bg-yellow-50 text-yellow-700'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              <span className="text-xl">{role.emoji}</span>
              {role.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your full name"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
          />
        </div>

        {mode === 'login' && (
          <div className="flex justify-end">
            <Link to="/auth/forgot-password" className="text-xs text-yellow-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <p className="text-sm text-gray-500 text-center mt-6">
        {mode === 'login' ? (
          <>
            Don&apos;t have an account?{' '}
            <Link to="/auth/signup" className="text-yellow-600 font-medium hover:underline">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link to="/auth/login" className="text-yellow-600 font-medium hover:underline">
              Sign in
            </Link>
          </>
        )}
      </p>
    </motion.div>
  );
}
