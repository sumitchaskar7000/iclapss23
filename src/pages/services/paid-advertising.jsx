import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, TrendingUp, ArrowRight } from '../../components/icons'

const PaidAdvertising = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-blue-100/90 text-sm mb-2">Service: Paid Advertising</p>
          <Link to="/services" className="inline-block text-sm text-white/90 hover:text-white mb-4">← Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Maximize ROI with Strategic Paid Advertising</h1>
          <p className="text-xl text-blue-100 mb-6">Get results fast with Google Ads, Facebook, LinkedIn, and multi-platform campaigns</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ 250% avg ROAS</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ 60% CPA reduction</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Real-time optimization</div>
          </div>
        </motion.div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">PPC Gets Results Fast</h2>
            <p className="text-gray-700 mb-4">Paid advertising gives you immediate visibility, but only if managed correctly. Poorly optimized campaigns waste budget while delivering minimal results.</p>
            <p className="text-gray-700 mb-4">We combine data science, creative testing, and continuous optimization to deliver campaigns that maximize every advertising dollar.</p>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mt-6">
              <p className="text-gray-900 font-semibold mb-2">Key Stat:</p>
              <p className="text-gray-700">Properly optimized campaigns deliver 8x ROI compared to average campaigns across all platforms.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our PPC Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Google Ads (Search, Display, Shopping)',
              'Facebook & Instagram Ads',
              'LinkedIn Advertising',
              'Conversion rate optimization',
              'Landing page creation & testing',
              'Audience segmentation & targeting',
              'Bid strategy optimization',
              'Monthly performance analysis'
            ].map((service, idx) => (
              <motion.div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Starts at ₹3,999/month + Ad Spend</h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Get PPC Audit <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default PaidAdvertising
