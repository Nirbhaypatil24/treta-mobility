import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import { STATS, TESTIMONIALS, BLOG_POSTS } from '../utils/constants';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight, scaleIn } from '../utils/motionVariants';

const FEATURES = [
  {
    icon: '📍',
    title: 'GPS Smart Meter',
    description: 'Eliminate fare disputes with automated, GPS-verified fare calculation and digital receipts.',
  },
  {
    icon: '📊',
    title: 'Earnings Analytics',
    description: 'Track daily, weekly, and monthly earnings with actionable insights to boost income.',
  },
  {
    icon: '📺',
    title: 'Transit Advertising',
    description: 'Earn additional income through hyperlocal targeted ads displayed on your auto.',
  },
  {
    icon: '🗺️',
    title: 'Route Intelligence',
    description: 'AI-powered route suggestions to find more passengers and reduce empty runs.',
  },
  {
    icon: '💳',
    title: 'Digital Payments',
    description: 'Accept UPI, cards, and wallets. No change hassles, instant settlements.',
  },
  {
    icon: '🔒',
    title: 'Safety & Security',
    description: 'Emergency SOS, trip sharing, and driver verification for safe rides.',
  },
];

export default function HomePage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const recentPosts = BLOG_POSTS.filter((p) => !p.featured).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Treta Mobility – Smart Auto Rickshaw Technology</title>
        <meta name="description" content="Empowering India's auto rickshaw drivers with smart meters, analytics, and transit advertising." />
      </Helmet>

      <HeroSection />

      {/* What is Treta */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              What is Treta Mobility?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Treta Mobility is a technology company on a mission to transform India's three-wheeler ecosystem. We build smart hardware and software solutions that empower auto rickshaw drivers to earn more, work smarter, and thrive in the digital economy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our platform connects drivers, brands, and commuters through an intelligent mobility network — turning every auto into a connected, data-driven vehicle.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-600 font-semibold rounded-xl hover:bg-yellow-50 transition-colors"
            >
              Our Story →
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 text-center border border-yellow-100">
                <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Everything a Driver Needs
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Our end-to-end platform covers every aspect of the auto-driving experience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Drivers Love Treta
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex text-yellow-400 text-lg mb-4">{'★★★★★'}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Latest News</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">From the Blog</h2>
            </motion.div>
            <Link to="/blog" className="text-sm font-semibold text-yellow-600 hover:underline hidden sm:block">
              View all posts →
            </Link>
          </div>

          {featuredPost && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-6 grid grid-cols-1 md:grid-cols-2"
            >
              <div className="h-64 md:h-auto overflow-hidden">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full mb-3">Featured</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredPost.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-5">
                  <span>{featuredPost.author}</span>
                  <span>·</span>
                  <span>{featuredPost.readTime} min read</span>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="inline-block px-6 py-2.5 bg-yellow-400 text-black font-semibold text-sm rounded-xl hover:bg-yellow-500 transition-colors w-fit">
                  Read Article
                </Link>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recentPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-400">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Transform Your Auto Business?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-800 mb-8 text-lg">
            Join 10,000+ drivers already earning more with Treta Mobility.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth/signup"
              className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors text-base"
            >
              Get Started Free
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-colors text-base"
            >
              Contact Sales
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
