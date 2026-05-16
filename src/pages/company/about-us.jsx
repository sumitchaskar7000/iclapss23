import { motion } from 'framer-motion'
import { ArrowRight, Heart, Zap } from '../../components/icons'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Story Behind iClapss</h1>
          <p className="text-xl text-blue-100">Founded in 2024 and trusted by 40+ clients</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              iClapss was founded in 2024 with a clear goal: help businesses grow faster using creative ideas and performance-focused digital strategy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Led by CEO Sumit Chaskar, the creative mind behind iClapss, we now support 40+ active clients with practical, measurable and scalable growth solutions.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="space-y-6">
              {[{icon: '🎯', title: 'Results-Driven', desc: 'Every strategy tied to measurable outcomes'}, {icon: '🤝', title: 'Client-Centric', desc: 'Your success is our north star'}, {icon: '🚀', title: 'Innovation', desc: 'Always learning and improving'}, {icon: '💡', title: 'Transparency', desc: 'Clear communication and honest reporting'}].map((v, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-4xl">{v.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{v.title}</h3>
                    <p className="text-gray-600">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{num: '2024', label: 'Year Founded'}, {num: '40+', label: 'Happy Clients'}, {num: '1', label: 'CEO: Sumit Chaskar'}, {num: '100%', label: 'Creative Focus'}].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.num}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
