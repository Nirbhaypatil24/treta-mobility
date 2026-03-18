import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { staggerContainer, fadeInUp } from '../utils/motionVariants';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Treta Mobility</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-50 flex items-center justify-center px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-md"
        >
          <motion.div variants={fadeInUp} className="text-8xl mb-6">🚗</motion.div>
          <motion.h1 variants={fadeInUp} className="text-7xl font-extrabold text-yellow-400 mb-4">
            404
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-gray-900 mb-3">
            Oops! Wrong Route
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 mb-8 leading-relaxed">
            Looks like this auto took a wrong turn. The page you're looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-colors"
            >
              Go Home
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border-2 border-gray-200 hover:border-yellow-400 text-gray-700 font-semibold rounded-xl transition-colors hover:bg-yellow-50"
            >
              Contact Support
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
