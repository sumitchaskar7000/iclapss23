import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TrendingUp, Check, Star, ArrowRight, BarChart } from '../../components/icons'

const SEO = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const processSteps = [
    { step: 1, title: 'SEO Audit', desc: 'Comprehensive technical, on-page, and off-page analysis' },
    { step: 2, title: 'Strategy', desc: 'Keyword research and competitive analysis' },
    { step: 3, title: 'Optimization', desc: 'On-page & technical improvements' },
    { step: 4, title: 'Content', desc: 'Create optimized content targeting keywords' },
    { step: 5, title: 'Building', desc: 'Strategic link building & authority growth' },
    { step: 6, title: 'Monitoring', desc: 'Continuous tracking and optimization' }
  ]

  const deliverables = [
    'Monthly keyword ranking reports',
    'Technical SEO optimization (Core Web Vitals)',
    'On-page SEO implementation',
    'Content optimization & strategy',
    'Backlink profile analysis & building',
    'Competitor analysis reports',
    'Local SEO optimization (if applicable)',
    'Schema markup implementation',
    'Site speed optimization',
    'Mobile optimization',
    'Search Console management',
    'Monthly performance review'
  ]

  const caseStudies = [
    {
      client: 'TechStore Pro',
      result: '300% organic traffic increase',
      time: '6 months',
      metrics: ['+300% traffic', '+150 keywords rank top 10', '+₹2.1M revenue']
    },
    {
      client: 'E-commerce Platform',
      result: '450% increase in organic conversions',
      time: '8 months',
      metrics: ['+450% conversions', '+250% traffic', '+₹5M revenue']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-100/90 text-sm mb-2">Service: SEO</p>
          <Link to="/services" className="inline-block text-sm text-white/90 hover:text-white mb-4">← Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dominate Search Rankings with Strategic SEO
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Proven strategies to increase organic visibility and drive qualified traffic
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ Average +300% traffic increase</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ 6-12 months to results</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">✓ 95% client satisfaction</div>
          </div>
        </motion.div>
      </div>

      {/* Problem Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The SEO Challenge</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Most businesses don't realize that 93% of online experiences start with a search engine. If your website isn't ranking for the keywords your customers are searching for, you're losing millions in potential revenue.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              DIY SEO often fails because algorithms change constantly, competitors are aggressively optimizing, and technical SEO requires specialized expertise. Without a coordinated strategy, you waste time and money on ineffective tactics.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mt-6">
              <p className="text-gray-900 font-semibold mb-2">Did you know?</p>
              <p className="text-gray-700">
                The average cost of inaction: businesses losing ranking positions pay ₹5-20 per click through paid advertising to get traffic they used to get for free.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our SEO Process
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-6 text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-300" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
            <p className="text-gray-700">
              <strong>Timeline:</strong> Initial results in 2-3 months, significant improvements in 6 months, optimal results by 12 months
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-8 text-gray-900">
            What You Get
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 text-gray-900">
            Proven Results
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-8 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.client}</h3>
                <p className="text-green-600 font-semibold mb-4">{study.result}</p>
                <p className="text-gray-600 text-sm mb-4">Duration: {study.time}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, midx) => (
                    <div key={midx} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 text-gray-900">
            SEO Investment
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: '₹2,499', features: ['Basic keyword research', 'On-page optimization', 'Monthly reporting', 'Email support'] },
              { name: 'Professional', price: '₹5,999', features: ['Advanced strategy', 'Content optimization', 'Link building', 'Bi-weekly calls'], highlight: true },
              { name: 'Enterprise', price: 'Custom', features: ['Full-stack strategy', 'Dedicated team', 'Priority support', 'Custom integrations'] }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                className={`p-6 rounded-lg border-2 ${plan.highlight ? 'border-orange-400 bg-orange-50' : 'border-gray-200 bg-white'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 text-gray-900">
            SEO Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              { q: 'How long before we see results?', a: 'Initial improvements in 2-3 months. Significant results in 6 months. Ongoing growth beyond that.' },
              { q: 'Do you guarantee top rankings?', a: 'No ethical SEO company can guarantee rankings. We guarantee effort, transparency, and proven methodologies.' },
              { q: 'What about algorithm changes?', a: 'We stay updated with all algorithm changes and adjust strategies accordingly. Our team follows Google\'s guidance.' },
              { q: 'Can we track progress?', a: 'Yes! Monthly reports with detailed metrics on traffic, rankings, conversions, and ROI.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-gray-900 mb-2">{item.q}</h4>
                <p className="text-gray-600">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Search?</h2>
          <p className="text-xl mb-8 text-blue-100">Get your free SEO audit and see the opportunity you're missing.</p>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Get Free SEO Audit <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default SEO
