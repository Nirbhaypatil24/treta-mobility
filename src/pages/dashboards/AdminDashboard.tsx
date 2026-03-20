import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { staggerContainer, fadeInUp, scaleIn } from '../../utils/motionVariants';

const PLATFORM_STATS = [
  { label: 'Total Drivers', value: '10,248', change: '+124 this week', icon: '🚗' },
  { label: 'Active Cities', value: '52', change: '+2 this month', icon: '🏙️' },
  { label: 'Active Campaigns', value: '87', change: '+12 this week', icon: '📢' },
  { label: 'Revenue (MTD)', value: '₹24.5L', change: '+18% MoM', icon: '💰' },
];

const RECENT_ACTIVITY = [
  { event: 'New driver registered', detail: 'Ravi Kumar – Hyderabad', time: '5 min ago' },
  { event: 'Campaign approved', detail: 'BigBasket Q2 Campaign', time: '23 min ago' },
  { event: 'Support ticket resolved', detail: 'Ticket #4521 – Payment issue', time: '1 hr ago' },
  { event: 'New city onboarded', detail: 'Nagpur, Maharashtra', time: '2 hr ago' },
  { event: 'Driver milestone', detail: '10,000th driver joined!', time: '3 hr ago' },
];

export default function AdminDashboard() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard – Treta Mobility</title>
      </Helmet>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={fadeInUp} className="mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900">Admin Dashboard ⚙️</h1>
          <p className="text-gray-500 mt-1">Platform overview and management.</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {PLATFORM_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <p className="text-sm text-gray-500 mb-0.5">{stat.label}</p>
              <p className="text-2xl font-extrabold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs text-green-600 font-medium">{stat.change}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Recent Activity</h2>
            <ul className="space-y-4">
              {RECENT_ACTIVITY.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{item.event}</p>
                    <p className="text-xs text-gray-500">{item.detail}</p>
                  </div>
                  <span className="text-xs text-gray-400 shrink-0">{item.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Add City', icon: '🏙️' },
                { label: 'Review Drivers', icon: '👤' },
                { label: 'Manage Campaigns', icon: '📢' },
                { label: 'View Reports', icon: '📊' },
                { label: 'Support Tickets', icon: '🎫' },
                { label: 'System Settings', icon: '⚙️' },
              ].map((action) => (
                <button
                  key={action.label}
                  className="flex items-center gap-2 p-3 border border-gray-100 rounded-xl hover:border-yellow-300 hover:bg-yellow-50 transition-colors text-left text-sm font-medium text-gray-700"
                >
                  <span>{action.icon}</span>
                  {action.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
