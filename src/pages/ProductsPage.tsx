import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Products – Treta Mobility</title>
        <meta name="description" content="Explore Treta Mobility's smart auto rickshaw products: smart meters, transit ads, analytics, and more." />
      </Helmet>

      <section className="bg-gradient-to-br from-yellow-50 via-white to-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
              Our Products
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Smart Solutions for <span className="text-yellow-500">Modern Mobility</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              From hardware smart meters to AI-powered analytics, our integrated product suite covers every aspect of the auto rickshaw business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Treta?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🛠️', title: 'Easy Installation', description: 'Our devices fit any auto in under 30 minutes with no technical expertise needed.' },
              { icon: '📱', title: 'Works Offline', description: 'Core features work without internet connectivity. Data syncs when online.' },
              { icon: '🤝', title: '24/7 Support', description: 'Dedicated support team available in Hindi, Marathi, and Kannada.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
