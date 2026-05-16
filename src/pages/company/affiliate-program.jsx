import { motion } from 'framer-motion'
import { Award, DollarSign, ArrowRight } from '../../components/icons'

const AffiliateProgram = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Affiliate Program</h1>
          <p className="text-xl text-blue-100">Earn while helping businesses grow</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Become an Affiliate</h2>
            <p className="text-gray-700 mb-4">Earn competitive commissions by referring businesses to iClapss. When you refer a client, you get a 20% recurring commission on their monthly service fees.</p>
            <p className="text-gray-700">It's a win-win: they get expert digital marketing, and you earn passive income.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Benefits</h2>
            <div className="space-y-4">
              {[{icon: '💰', title: '20% Recurring Commission', desc: 'Earn commission on every month the referred client stays with us'}, {icon: '🎯', title: 'Marketing Support', desc: 'Promotional materials and assets to share'}, {icon: '📊', title: 'Dashboard & Tracking', desc: 'Real-time dashboard to track referrals and earnings'}, {icon: '🤝', title: 'Dedicated Support', desc: 'Affiliate manager to help you succeed'}].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-3xl">{benefit.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Example Earnings</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">If you refer just 3 clients paying ₹5,000/month each:</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Monthly revenue:</strong> ₹15,000</li>
                <li><strong>Your commission (20%):</strong> ₹3,000/month</li>
                <li><strong>Annual earnings:</strong> ₹36,000+</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Earn?</h2>
            <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              Apply to Affiliate Program <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AffiliateProgram
