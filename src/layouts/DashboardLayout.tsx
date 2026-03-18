import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-gray-900 text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-white">Treta Mobility</span>
          </Link>
        </div>
        <nav className="flex-1 p-4">
          <p className="text-gray-500 text-xs uppercase mb-2 tracking-wider">Menu</p>
          <ul className="space-y-1">
            <li>
              <Link
                to={user?.role === 'driver' ? '/dashboard/driver' : user?.role === 'marketing' ? '/dashboard/marketing' : '/dashboard/admin'}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                Products
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-1 font-medium">{user?.name}</p>
          <p className="text-gray-500 text-xs mb-3">{user?.email}</p>
          <button
            onClick={handleLogout}
            className="w-full px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors text-left"
          >
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
