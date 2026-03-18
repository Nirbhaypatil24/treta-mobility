import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { fadeInUp } from '../../utils/motionVariants';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password – Treta Mobility</title>
      </Helmet>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      >
        {submitted ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl">📧</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h1>
            <p className="text-gray-500 text-sm mb-6">
              We've sent a password reset link to <strong>{email}</strong>.
            </p>
            <Link to="/auth/login" className="text-yellow-600 text-sm font-medium hover:underline">
              ← Back to Login
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Forgot Password?</h1>
            <p className="text-gray-500 text-sm mb-6">
              Enter your email and we'll send you a reset link.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-colors disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
            <p className="text-sm text-center mt-5 text-gray-500">
              Remember your password?{' '}
              <Link to="/auth/login" className="text-yellow-600 font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </>
        )}
      </motion.div>
    </>
  );
}
