import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 flex flex-col">
      <header className="p-6">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">T</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Treta Mobility</span>
        </Link>
      </header>
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </div>
    </div>
  );
}
