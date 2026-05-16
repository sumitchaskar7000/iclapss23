import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin } from '../../components/icons'

const Contacts = () => {
  const offices = [
    { city: 'Pune', address: 'iClapss Digital Office, Pune, Maharashtra', phone: '+91 7666519682', hours: 'Mon-Sat 10AM-7PM IST' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">We're here to help and would love to hear from you</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-gray-500 mt-0.5">⏰</span>
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="bg-blue-50 rounded-lg p-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Contact Options</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:info@iclapss.com" className="hover:text-blue-600 transition">info@iclapss.com</a>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="https://wa.me/917666519682" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                  WhatsApp: +91 7666519682
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span>Connect on LinkedIn</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contacts
