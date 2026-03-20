import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { TEAM_MEMBERS, COMPANY_TIMELINE } from '../utils/constants';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '../utils/motionVariants';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us – Treta Mobility</title>
        <meta name="description" content="Learn about Treta Mobility's mission to revolutionize the auto rickshaw industry with smart technology." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
              Our Story
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Driving Change for <span className="text-yellow-500">5 Crore Drivers</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Treta Mobility was born from a simple observation: India's auto drivers work hard but lack the tools to work smart. We set out to change that.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower every auto rickshaw driver in India with smart technology, fair earnings, and dignity through digital tools that make their work safer, smarter, and more rewarding.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-900 text-white rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">🔭</div>
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              A world where every three-wheeler is a connected smart vehicle — contributing to cleaner cities, better livelihoods, and a seamlessly integrated urban mobility network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">The People</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Meet Our Team</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                variants={scaleIn}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm text-center group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-yellow-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Journey</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Our Timeline</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-200" />
            <div className="space-y-10">
              {COMPANY_TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative flex gap-6 pl-16"
                >
                  <div className="absolute left-0 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="text-xs font-extrabold text-gray-900 text-center leading-tight">{item.year}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
