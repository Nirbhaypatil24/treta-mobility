import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';
import { useUIStore } from '../store/uiStore';

export default function Navbar() {
  const location = useLocation();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2">
          <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">T</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Treta Mobility</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-yellow-600 bg-yellow-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/auth/login"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                    location.pathname === link.href
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  to="/auth/login"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 text-center bg-yellow-400 text-black font-semibold text-sm rounded-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
