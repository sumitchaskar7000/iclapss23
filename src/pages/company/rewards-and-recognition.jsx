import { motion } from 'framer-motion'
import { Trophy, Award, Star } from '../../components/icons'

const RewardsRecognition = () => {
  const awards = [
    { year: 2023, title: 'Best Digital Marketing Agency', org: 'MarketingProfs', category: 'Industry Recognition' },
    { year: 2023, title: 'Top 100 SaaS Agencies', org: 'Clutch', category: 'Client Reviews' },
    { year: 2022, title: 'Agency of the Year', org: 'Austin Business Journal', category: 'Regional' },
    { year: 2022, title: 'Google Premier Partner Certification', org: 'Google', category: 'Platform Partnership' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h1>
          <p className="text-xl text-blue-100">Recognized for excellence by industry leaders</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards & Certifications</h2>
            <div className="space-y-6">
              {awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 items-start p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Trophy className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{award.org} • {award.year}</p>
                    <p className="text-blue-600 text-sm font-semibold mt-2">{award.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[{rating: 4.9, count: '500+ reviews', text: 'Exceptional service and results-driven approach. Highly recommend!'}, {rating: 4.8, count: '200+ case studies', text: 'Transformed our digital presence and delivered measurable ROI.'}].map((testimonial, idx) => (
                <div key={idx} className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-gray-900 font-semibold mb-2">{testimonial.rating} Stars</p>
                  <p className="text-gray-600 mb-2">{testimonial.text}</p>
                  <p className="text-sm text-gray-500">{testimonial.count}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Award className="w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-blue-100 mb-8">Be part of 500+ businesses experiencing award-winning marketing.</p>
        </div>
      </section>
    </div>
  )
}

export default RewardsRecognition
