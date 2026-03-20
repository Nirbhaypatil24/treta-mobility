import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';

import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

import DriverDashboard from './pages/dashboards/DriverDashboard';
import MarketingDashboard from './pages/dashboards/MarketingDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';

import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
          <Route path="/products" element={<MainLayout><ProductsPage /></MainLayout>} />
          <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
          <Route path="/blog/:id" element={<MainLayout><BlogDetailPage /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />

          <Route path="/auth/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
          <Route path="/auth/signup" element={<AuthLayout><SignupPage /></AuthLayout>} />
          <Route path="/auth/forgot-password" element={<AuthLayout><ForgotPasswordPage /></AuthLayout>} />

          <Route path="/dashboard/driver" element={
            <ProtectedRoute allowedRoles={['driver']}>
              <DashboardLayout><DriverDashboard /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/marketing" element={
            <ProtectedRoute allowedRoles={['marketing']}>
              <DashboardLayout><MarketingDashboard /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <DashboardLayout><AdminDashboard /></DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
