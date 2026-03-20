import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../utils/motionVariants';

function AutoRickshawSVG() {
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
      {/* Body */}
      <motion.rect
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        x="60" y="80" width="250" height="130" rx="20"
        fill="#FBBF24"
      />
      {/* Roof */}
      <motion.path
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        d="M90 80 L100 40 L280 40 L310 80 Z"
        fill="#F59E0B"
      />
      {/* Windshield */}
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        d="M105 50 L112 80 L200 80 L200 50 Z"
        fill="#BAE6FD"
        opacity="0.8"
      />
      {/* Side window */}
      <motion.rect
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        x="220" y="90" width="70" height="55" rx="8"
        fill="#BAE6FD" opacity="0.7"
      />
      {/* Rear window */}
      <motion.rect
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        x="140" y="90" width="65" height="55" rx="8"
        fill="#BAE6FD" opacity="0.7"
      />
      {/* Front wheel */}
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: 'spring' }}
        cx="110" cy="210" r="35" fill="#1F2937"
      />
      <circle cx="110" cy="210" r="22" fill="#374151" />
      <circle cx="110" cy="210" r="10" fill="#6B7280" />
      {/* Rear wheel */}
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: 'spring' }}
        cx="285" cy="210" r="35" fill="#1F2937"
      />
      <circle cx="285" cy="210" r="22" fill="#374151" />
      <circle cx="285" cy="210" r="10" fill="#6B7280" />
      {/* Screen on vehicle */}
      <motion.rect
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        x="155" y="100" width="55" height="40" rx="5"
        fill="#0F172A"
      />
      <motion.rect
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        x="159" y="104" width="47" height="32" rx="3"
        fill="#10B981"
      />
      {/* GPS signal dots */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={330 + i * 15}
          cy={60}
          r={5}
          fill="#FBBF24"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-yellow-50 via-white to-gray-50 flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-30 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
              🚗 Smart Mobility for Bharat
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInLeft}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Reinventing Auto Mobility with{' '}
            <span className="text-yellow-500">Smart Technology</span>
          </motion.h1>

          <motion.p variants={fadeInLeft} className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Empowering India's 5 crore auto rickshaw drivers with GPS-enabled smart meters, AI-driven route intelligence, and extra income through transit advertising.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/auth/signup"
              className="px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl text-base transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Free Trial
            </Link>
            <Link
              to="/products"
              className="px-8 py-3.5 border-2 border-gray-200 hover:border-yellow-400 text-gray-700 font-semibold rounded-xl text-base transition-all hover:bg-yellow-50"
            >
              Explore Products
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-2">
            <div className="flex -space-x-3">
              {['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
              ].map((src, i) => (
                <img key={i} src={src} alt="Driver" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-bold text-gray-900">10,000+</span> drivers trust Treta
            </p>
          </motion.div>
        </motion.div>

        {/* Right - SVG illustration */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="relative h-72 lg:h-96"
        >
          <AutoRickshawSVG />
        </motion.div>
      </div>
    </section>
  );
}
