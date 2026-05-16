import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from '../components/icons'

const Pricing = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const plans = [
    {
      name: 'Starter',
      price: '₹2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        { name: '1-2 Services', included: true },
        { name: 'Monthly Reporting', included: true },
        { name: 'Basic Strategy', included: true },
        { name: 'Email Support', included: true },
        { name: 'Weekly Check-ins', included: false },
        { name: 'Dedicated Account Manager', included: false },
        { name: 'Custom Integrations', included: false },
        { name: 'Quarterly Strategy Review', included: false },
      ],
      highlighted: false,
      cta: 'Get Started'
    },
    {
      name: 'Standard',
      price: '₹7,999',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        { name: '3-5 Services', included: true },
        { name: 'Bi-weekly Reporting', included: true },
        { name: 'Advanced Strategy', included: true },
        { name: 'Phone & Email Support', included: true },
        { name: 'Weekly Check-ins', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Basic Integrations', included: true },
        { name: 'Quarterly Strategy Review', included: true },
      ],
      highlighted: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Premium',
      price: '₹15,999',
      period: '/month',
      description: 'Complete solution for established companies',
      features: [
        { name: 'All Services', included: true },
        { name: 'Weekly Reporting', included: true },
        { name: 'Full-Stack Strategy', included: true },
        { name: 'Priority Support (24/7)', included: true },
        { name: 'Bi-weekly Check-ins', included: true },
        { name: 'Senior Account Manager', included: true },
        { name: 'Custom Integrations', included: true },
        { name: 'Monthly Strategy Review', included: true },
      ],
      highlighted: false,
      cta: 'Schedule Consultation'
    },
  ]

  const comparison = [
    { feature: 'Basic Strategy Session', starter: true, standard: true, premium: true },
    { feature: 'Custom Strategy Plan', starter: false, standard: true, premium: true },
    { feature: 'Monthly Adjustments', starter: false, standard: true, premium: true },
    { feature: 'Performance Guarantee', starter: false, standard: false, premium: true },
    { feature: 'Contract Length', starter: 'Month-to-Month', standard: 'Month-to-Month', premium: 'Flexible' },
    { feature: 'Setup Included', starter: false, standard: true, premium: true },
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
            Transparent Pricing That Scales With You
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            No hidden fees. No lock-in contracts. Choose the plan that fits your business.
          </p>
          <p className="text-lg text-blue-50">
            All plans include our satisfaction guarantee: Results-driven approach or your money back
          </p>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`rounded-xl border-2 transition-all ${
                  plan.highlighted
                    ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-white shadow-2xl scale-105'
                    : 'border-gray-200 bg-white shadow-lg hover:shadow-xl'
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {plan.highlighted && (
                  <div className="bg-orange-400 text-white text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                      plan.highlighted
                        ? 'bg-orange-400 text-white hover:bg-orange-500'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="inline-block w-4 h-4 ml-2" />
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            className="bg-gray-50 rounded-xl p-8 overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Detailed Comparison</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600">Standard</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-600 text-sm">{row.starter}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.standard === 'boolean' ? (
                        row.standard ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-600 text-sm">{row.standard}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-600 text-sm">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pricing Questions Answered
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes, you can upgrade or downgrade your plan with 30 days notice. No penalties.'
              },
              {
                q: 'What if I am not satisfied?',
                a: 'We offer a 30-day satisfaction guarantee. If not satisfied with results, we\'ll work with you to improve or offer a full refund.'
              },
              {
                q: 'Are there any setup fees?',
                a: 'Setup is included in Standard and Premium plans. Starter plan includes a one-time ₹500 setup fee.'
              },
              {
                q: 'Do you offer annual discounts?',
                a: 'Yes! Pay annually and get 15% off your monthly rate. Contact us for details.'
              },
              {
                q: 'Can I get a custom plan?',
                a: 'Absolutely. Contact our sales team to discuss your specific needs and budget.'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">{item.q}</h4>
                <p className="text-gray-600">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a free consultation to find the perfect plan for your business.
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

export default Pricing
