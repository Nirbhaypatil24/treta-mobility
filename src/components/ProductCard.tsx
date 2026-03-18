import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { scaleIn } from '../utils/motionVariants';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const categoryColors: Record<string, string> = {
    Hardware: 'bg-orange-100 text-orange-700',
    Software: 'bg-blue-100 text-blue-700',
    Advertising: 'bg-purple-100 text-purple-700',
    AI: 'bg-green-100 text-green-700',
    API: 'bg-indigo-100 text-indigo-700',
  };

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[product.category] ?? 'bg-gray-100 text-gray-700'}`}>
          {product.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
        <ul className="space-y-1 mb-5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-gray-600">
              <span className="w-4 h-4 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="block text-center px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm rounded-lg transition-colors"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}
