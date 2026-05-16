import { motion } from 'framer-motion'
import { TrendingUp, Users, ShoppingCart, Zap, BarChart, Globe, ArrowRight } from '../components/icons'

const Industries = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const industries = [
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: <ShoppingCart className="w-12 h-12" />,
      challenge: 'Increase average order value and customer lifetime value',
      stats: ['280% avg ROI', '150K+ visitors/month', '3x conversion improvement'],
      services: ['SEO', 'PPC', 'Social Media', 'Email Marketing', 'CRO'],
      caseStudies: [
        {
          client: 'TechStore Pro',
          result: '300% organic traffic increase',
          duration: '6 months',
        },
        {
          client: 'Fashion Brand Co',
          result: '50% increase in ROAS',
          duration: '3 months',
        }
      ]
    },
    {
      id: 'saas',
      name: 'SaaS & Technology',
      icon: <Zap className="w-12 h-12" />,
      challenge: 'Reduce customer acquisition cost and improve product adoption',
      stats: ['200% avg ROAS', '45% MoM growth', '85% customer retention'],
      services: ['Content Marketing', 'PPC', 'Email Marketing', 'Data Analytics', 'Strategy'],
      caseStudies: [
        {
          client: 'CloudSync Solutions',
          result: '180% increase in qualified leads',
          duration: '4 months',
        },
        {
          client: 'DataViz Platform',
          result: '60% reduction in CAC',
          duration: '5 months',
        }
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Wellness',
      icon: <Users className="w-12 h-12" />,
      challenge: 'Build trust and increase patient acquisition',
      stats: ['350% patient growth', '92% trust score', '₹2.5M revenue growth'],
      services: ['SEO', 'Content Marketing', 'Local SEO', 'Social Media', 'PR'],
      caseStudies: [
        {
          client: 'MediCare Clinic',
          result: '250 new patient inquiries/month',
          duration: '6 months',
        }
      ]
    },
    {
      id: 'b2b',
      name: 'B2B Services',
      icon: <Globe className="w-12 h-12" />,
      challenge: 'Generate qualified leads and shorten sales cycles',
      stats: ['220% pipeline growth', '40% sales cycle reduction', '₹5M+ pipeline'],
      services: ['LinkedIn Ads', 'Content Marketing', 'Email Marketing', 'Strategy'],
      caseStudies: [
        {
          client: 'Consulting Group ABC',
          result: '120 qualified leads/month',
          duration: '3 months',
        }
      ]
    },
    {
      id: 'finance',
      name: 'Financial Services',
      icon: <BarChart className="w-12 h-12" />,
      challenge: 'Build credibility and acquire high-value clients',
      stats: ['₹8M+ client assets', '95% compliance rate', '180% lead quality improvement'],
      services: ['Content Marketing', 'SEO', 'Email Marketing', 'PR'],
      caseStudies: [
        {
          client: 'Wealth Partners Inc',
          result: '₹5M AUM increase',
          duration: '8 months',
        }
      ]
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: <TrendingUp className="w-12 h-12" />,
      challenge: 'Generate qualified buyer leads and accelerate sales',
      stats: ['300+ property listings', '25K+ monthly visits', '₹12M sales facilitated'],
      services: ['SEO', 'Paid Advertising', 'Social Media', 'Email Marketing'],
      caseStudies: [
        {
          client: 'Metro Real Estate',
          result: '45 qualified buyer leads/month',
          duration: '4 months',
        }
      ]
    }
  ]

  const results = [
    { metric: '500+', label: 'Successful Projects' },
    { metric: '95%', label: 'Client Satisfaction' },
    { metric: '280%', label: 'Average ROI' },
    { metric: '12+', label: 'Industries Served' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Proven Success Across Industries
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Industry-specific strategies tailored to your sector's unique challenges
          </p>
          <p className="text-lg text-blue-50">
            500+ successful projects across 12+ industries
          </p>
        </motion.div>
      </div>

      {/* Key Results */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-6 text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.id}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-blue-600 mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  <span className="font-semibold">Challenge:</span> {industry.challenge}
                </p>

                <div className="mb-4 space-y-2">
                  {industry.stats.map((stat, sidx) => (
                    <div key={sidx} className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-600 mb-2">TOP SERVICES</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.services.map((service, sidx) => (
                      <span
                        key={sidx}
                        className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-xs font-semibold text-gray-600 mb-2">RECENT SUCCESS</p>
                  {industry.caseStudies.map((study, sidx) => (
                    <div key={sidx} className="text-sm">
                      <p className="font-semibold text-gray-900">{study.client}</p>
                      <p className="text-gray-600">{study.result}</p>
                      <p className="text-gray-500 text-xs">{study.duration}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">See Your Industry Success</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a consultation with our industry experts to discuss your specific challenges.
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all">
            Schedule Free Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default Industries
