import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/motionVariants';
import type { ContactForm } from '../types';

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us – Treta Mobility</title>
        <meta name="description" content="Get in touch with Treta Mobility. We'd love to hear from you." />
      </Helmet>

      <section className="bg-gradient-to-br from-yellow-50 via-white to-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
              Get in Touch
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              We'd Love to Hear from You
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Whether you're a driver, brand, or investor — we're here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reach us through any of the channels below, and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Office', value: '5th Floor, Wework, Baner, Pune – 411045, Maharashtra, India' },
                { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                { icon: Mail, label: 'Email', value: 'hello@tretamobility.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
                    <p className="text-sm text-gray-700">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 h-48 flex items-center justify-center mt-2">
              <div className="text-center">
                <MapPin size={32} className="text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Pune, Maharashtra</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">We'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="px-6 py-2.5 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition-colors text-sm">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center gap-2 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-colors disabled:opacity-60 text-sm"
                >
                  <Send size={16} />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
