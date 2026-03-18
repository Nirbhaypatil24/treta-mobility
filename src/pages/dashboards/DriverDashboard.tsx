import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useAuthStore } from '../../store/authStore';
import { staggerContainer, fadeInUp, scaleIn } from '../../utils/motionVariants';

const STATS = [
  { label: 'Today\'s Earnings', value: '₹1,240', change: '+12%', color: 'bg-green-50 text-green-700' },
  { label: 'Trips Today', value: '18', change: '+3', color: 'bg-blue-50 text-blue-700' },
  { label: 'Km Driven', value: '82 km', change: '-5%', color: 'bg-yellow-50 text-yellow-700' },
  { label: 'Ad Revenue', value: '₹320', change: '+8%', color: 'bg-purple-50 text-purple-700' },
];

const RECENT_TRIPS = [
  { from: 'Baner', to: 'Hinjewadi', fare: '₹85', time: '09:12 AM', km: '4.2 km' },
  { from: 'Aundh', to: 'Kothrud', fare: '₹120', time: '10:45 AM', km: '6.1 km' },
  { from: 'Wakad', to: 'Pimpri', fare: '₹95', time: '12:30 PM', km: '5.0 km' },
  { from: 'Shivajinagar', to: 'Camp', fare: '₹75', time: '02:15 PM', km: '3.8 km' },
];

export default function DriverDashboard() {
  const { user } = useAuthStore();

  return (
    <>
      <Helmet>
        <title>Driver Dashboard – Treta Mobility</title>
      </Helmet>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={fadeInUp} className="mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Welcome back, {user?.name ?? 'Driver'} 👋
          </h1>
          <p className="text-gray-500 mt-1">Here's how you're doing today.</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-extrabold text-gray-900 mb-1">{stat.value}</p>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stat.color}`}>
                {stat.change}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Today's Trips</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-xs uppercase border-b border-gray-50">
                  <th className="text-left pb-3 font-medium">Route</th>
                  <th className="text-left pb-3 font-medium">Distance</th>
                  <th className="text-left pb-3 font-medium">Time</th>
                  <th className="text-right pb-3 font-medium">Fare</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_TRIPS.map((trip, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 font-medium text-gray-800">{trip.from} → {trip.to}</td>
                    <td className="py-3 text-gray-500">{trip.km}</td>
                    <td className="py-3 text-gray-500">{trip.time}</td>
                    <td className="py-3 text-right font-semibold text-gray-900">{trip.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Route suggestion */}
        <motion.div
          variants={fadeInUp}
          className="mt-5 bg-yellow-50 border border-yellow-100 rounded-2xl p-6"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">🗺️</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">AI Route Suggestion</h3>
              <p className="text-sm text-gray-600">
                High demand detected near <strong>Magarpatta City</strong> between 5–7 PM. Head there for 30% more trips.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
