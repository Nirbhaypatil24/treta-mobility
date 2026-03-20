import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useAuthStore } from '../../store/authStore';
import { staggerContainer, fadeInUp, scaleIn } from '../../utils/motionVariants';

const CAMPAIGN_STATS = [
  { label: 'Active Campaigns', value: '3', icon: '📢' },
  { label: 'Impressions Today', value: '12,450', icon: '👁️' },
  { label: 'Unique Reach', value: '8,320', icon: '🎯' },
  { label: 'Budget Spent', value: '₹4,200', icon: '💰' },
];

const CAMPAIGNS = [
  { name: 'Summer Sale 2024', status: 'Active', impressions: '5,240', spend: '₹1,800', ctr: '3.2%' },
  { name: 'Brand Awareness Q1', status: 'Active', impressions: '4,100', spend: '₹1,600', ctr: '2.8%' },
  { name: 'Product Launch', status: 'Active', impressions: '3,110', spend: '₹800', ctr: '4.1%' },
  { name: 'Diwali Campaign', status: 'Paused', impressions: '22,400', spend: '₹9,200', ctr: '3.9%' },
];

export default function MarketingDashboard() {
  const { user } = useAuthStore();

  return (
    <>
      <Helmet>
        <title>Marketing Dashboard – Treta Mobility</title>
      </Helmet>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={fadeInUp} className="mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Marketing Dashboard 📢
          </h1>
          <p className="text-gray-500 mt-1">Welcome, {user?.name ?? 'Partner'}. Here are your campaign insights.</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {CAMPAIGN_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-900">Campaigns</h2>
            <button className="px-4 py-2 bg-yellow-400 text-black font-semibold text-xs rounded-lg hover:bg-yellow-500 transition-colors">
              + New Campaign
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-xs uppercase border-b border-gray-50">
                  <th className="text-left pb-3 font-medium">Campaign</th>
                  <th className="text-left pb-3 font-medium">Status</th>
                  <th className="text-right pb-3 font-medium">Impressions</th>
                  <th className="text-right pb-3 font-medium">Spend</th>
                  <th className="text-right pb-3 font-medium">CTR</th>
                </tr>
              </thead>
              <tbody>
                {CAMPAIGNS.map((c, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 font-medium text-gray-800">{c.name}</td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3 text-right text-gray-600">{c.impressions}</td>
                    <td className="py-3 text-right text-gray-600">{c.spend}</td>
                    <td className="py-3 text-right font-semibold text-gray-900">{c.ctr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
