import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from '../../components/icons'

const InfluencerMarketing = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-blue-100/90 text-sm mb-2">Service: Influencer Marketing</p>
          <Link to="/services" className="inline-block text-sm text-white/90 hover:text-white mb-4">← Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Leverage Influencer Power</h1>
          <p className="text-xl text-blue-100 mb-6">Authentic partnerships that expand your reach and credibility</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Authentic partnerships</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Verified ROI</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Niche targeting</div>
          </div>
        </motion.div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Influencer Marketing Done Right</h2>
          <p className="text-gray-700 mb-4">Influencer partnerships can be incredibly effective, but only when done strategically. Poor partnerships waste money and damage your brand.</p>
          <p className="text-gray-700 mb-4">We identify authentic influencers aligned with your brand, negotiate partnerships, manage campaigns, and measure results.</p>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mt-6">
            <p className="text-gray-900 font-semibold mb-2">Influencer ROI:</p>
            <p className="text-gray-700">Strategic influencer campaigns deliver 11x ROI and build authentic brand advocacy.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services</h2>
          <div className="space-y-4">
            {["Influencer identification & vetting", "Partnership negotiation", "Campaign management", "Content collaboration", "Performance tracking", "Contract management", "Crisis prevention", "Long-term relationship building"].map((service, idx) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Starting at ₹3,999/month + partnership fees</h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Discuss Partnerships <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default InfluencerMarketing
