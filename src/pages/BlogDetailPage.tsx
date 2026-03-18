import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { BLOG_POSTS } from '../utils/constants';
import { fadeInUp } from '../utils/motionVariants';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Article not found</h1>
          <Link to="/blog" className="text-yellow-600 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const formatted = new Date(post.date).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const related = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} – Treta Mobility Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-yellow-600 mb-8 transition-colors">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
              <span>·</span>
              <span>{formatted}</span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime} min read
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden mb-10"
          >
            <img src={post.image} alt={post.title} className="w-full h-72 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-gray max-w-none"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-medium">{post.excerpt}</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The auto rickshaw industry in India is one of the largest informal transport sectors in the world, with over 5 crore drivers serving hundreds of millions of passengers daily. Despite this scale, the sector has historically been underserved by technology.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Treta Mobility is changing that narrative. By combining GPS hardware, mobile applications, and AI-powered analytics, we're bringing the benefits of the digital revolution directly to auto drivers on the ground.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-3 mt-8">The Technology Behind the Change</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our smart meter integrates with GPS modules, 4G connectivity, and a driver-facing app to provide real-time data on earnings, routes, and performance metrics. The device installs in under 30 minutes and works seamlessly with the auto's existing electrical system.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Beyond the hardware, our AI models analyze thousands of trips to identify patterns in demand, traffic, and earnings — providing actionable recommendations that help drivers earn up to 40% more per day.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-3 mt-8">What's Next</h2>
            <p className="text-gray-600 leading-relaxed">
              We're expanding to 100 cities by end of 2024, with plans to integrate electric vehicle charging network data, insurance products, and microfinance for vehicle upgrades. The future of auto mobility in India is smart, connected, and driver-first.
            </p>
          </motion.div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/blog/${p.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-yellow-600 font-semibold mb-1">{p.category}</p>
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2">{p.title}</h3>
                    <p className="text-xs text-gray-400 mt-2">{p.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
