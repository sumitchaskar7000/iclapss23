import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from '../../components/icons'

const StrategyConsulting = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-blue-100/90 text-sm mb-2">Service: Strategy & Consulting</p>
          <Link to="/services" className="inline-block text-sm text-white/90 hover:text-white mb-4">← Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Strategic Foundation for Growth</h1>
          <p className="text-xl text-blue-100 mb-6">Expert consulting that transforms your digital presence</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Strategic planning</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Competitive analysis</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Roadmap development</div>
          </div>
        </motion.div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategy is the Foundation</h2>
          <p className="text-gray-700 mb-4">Without a solid strategy, individual tactics fail to deliver results. We start by understanding your business, market, and opportunities, then develop a comprehensive roadmap for success.</p>
          <p className="text-gray-700 mb-4">Our strategic consulting combines data analysis, competitive intelligence, and industry expertise to position you for sustainable growth.</p>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mt-6">
            <p className="text-gray-900 font-semibold mb-2">Strategy Impact:</p>
            <p className="text-gray-700">Companies with defined strategies achieve 2x faster growth and 3x higher ROI than those without.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services</h2>
          <div className="space-y-4">
            {["Marketing strategy development", "Competitive analysis", "Market opportunity assessment", "Digital transformation planning", "Customer journey mapping", "Growth roadmap creation", "KPI & metrics definition", "Quarterly strategy reviews"].map((service, idx) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Starting at ₹5,999/month</h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Get Strategic Audit <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default StrategyConsulting
