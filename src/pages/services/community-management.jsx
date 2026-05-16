import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from '../../components/icons'

const CommunityManagement = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-blue-100/90 text-sm mb-2">Service: Community Management</p>
          <Link to="/services" className="inline-block text-sm text-white/90 hover:text-white mb-4">← Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Loyal Communities</h1>
          <p className="text-xl text-blue-100 mb-6">Expert engagement that turns followers into advocates</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ 24/7 monitoring</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Crisis management</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Brand advocacy</div>
          </div>
        </motion.div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Community is Your Asset</h2>
          <p className="text-gray-700 mb-4">Engaged communities drive word-of-mouth, provide valuable feedback, and become your best customers. But building and maintaining community requires expertise.</p>
          <p className="text-gray-700 mb-4">We monitor conversations, respond to inquiries, manage crises, and nurture relationships that drive long-term loyalty.</p>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mt-6">
            <p className="text-gray-900 font-semibold mb-2">Community Value:</p>
            <p className="text-gray-700">Engaged communities generate 3x more word-of-mouth referrals and 2x higher customer lifetime value.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services</h2>
          <div className="space-y-4">
            {["Daily monitoring & engagement", "Comment & message response", "Crisis management", "Community growth strategies", "Member support", "Reputation management", "Influencer relations", "Monthly community reports"].map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Starting at ₹2,999/month</h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default CommunityManagement
