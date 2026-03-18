import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Blog – Treta Mobility</title>
        <meta name="description" content="Read the latest insights on auto mobility, driver success stories, smart cities, and tech innovation." />
      </Helmet>

      <section className="bg-gradient-to-br from-yellow-50 via-white to-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
              Insights & Stories
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              The Treta Blog
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Stories, insights, and updates from the Treta team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginated.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors ${
                    page === p ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
