import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Heart, TrendingUp, Check, ArrowRight } from '../../components/icons'

const SocialMedia = () => {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-blue-100/90 text-sm mb-2">Service: Social Media</p>
          <Link to="/services" className="inline-block text-sm text-white/90 hover:text-white mb-4">← Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Build a Thriving Community on Social Media</h1>
          <p className="text-xl text-blue-100 mb-6">Engage your audience, build brand loyalty, and drive sales through strategic social media</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ 400% avg engagement increase</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Community building expertise</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Multi-platform strategy</div>
          </div>
        </motion.div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Social Media Matters</h2>
            <p className="text-gray-700 mb-4">Your audience lives on social media. Without a strategic presence, your competitors are capturing your customers and building relationships you should have.</p>
            <p className="text-gray-700 mb-4">Social media isn't just about posting—it's about building a community that advocates for your brand, drives traffic to your site, and ultimately increases revenue.</p>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mt-6">
              <p className="text-gray-900 font-semibold mb-2">The Opportunity:</p>
              <p className="text-gray-700">Businesses with engaged social communities see 3x more customer loyalty and 2x higher conversion rates.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="space-y-4">
            {[
              'Social media strategy & planning',
              'Content creation & calendar management',
              'Community management & engagement',
              'Influencer partnerships',
              'Paid social advertising (Facebook, Instagram, TikTok)',
              'Social media analytics & reporting',
              'Competitor analysis',
              'Crisis management & reputation'
            ].map((service, idx) => (
              <motion.div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Investment Starts at ₹2,999/month</h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default SocialMedia
