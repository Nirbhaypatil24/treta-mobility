import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { BlogPost } from '../types';
import { scaleIn } from '../utils/motionVariants';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  Technology: 'bg-blue-100 text-blue-700',
  'Driver Stories': 'bg-green-100 text-green-700',
  Advertising: 'bg-purple-100 text-purple-700',
  'Smart Cities': 'bg-teal-100 text-teal-700',
  AI: 'bg-orange-100 text-orange-700',
};

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const formatted = new Date(post.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
    >
      <Link to={`/blog/${post.id}`} className="block relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${CATEGORY_COLORS[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
          {post.category}
        </span>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors leading-snug">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-600">{post.author}</span>
            <span>·</span>
            <span>{formatted}</span>
          </div>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </motion.article>
  );
}
