import { motion } from 'framer-motion'
import { Award, ArrowRight } from '../../components/icons'

const Partners = () => {
  const partners = [
    { name: 'Google Premier Partner', category: 'Advertising', badge: '🔵' },
    { name: 'HubSpot Gold Partner', category: 'CRM & Marketing', badge: '🟠' },
    { name: 'Facebook Marketing Partner', category: 'Social Media', badge: '🔵' },
    { name: 'Salesforce Partner', category: 'CRM', badge: '🔵' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partnerships</h1>
          <p className="text-xl text-blue-100">Certified partners with leading platforms</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Platform Partnerships</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-3">{partner.badge}</div>
                  <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{partner.category}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Partnerships Mean</h2>
            <ul className="space-y-3 text-gray-700">
              {['Early access to new features and updates', 'Exclusive training and resources', 'Dedicated partner support', 'Co-marketing opportunities', 'Access to partner communities'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Partners
