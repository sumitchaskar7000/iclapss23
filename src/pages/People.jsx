import { motion } from 'framer-motion'
import { Linkedin, Mail, Award, Zap } from '../components/icons'

const People = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const team = [
    {
      name: 'Sumit Chaskar',
      role: 'CEO',
      expertise: 'Digital Strategy, Performance Growth',
      image: '/images/team.png',
      bio: 'Sumit Chaskar is the creative mind of iClapss, leading strategy with innovative ideas and performance-driven execution.',
      stats: ['Creative leadership', 'Brand-first growth strategy', 'Client-focused execution']
    }
  ]

  const stats = [
    { number: '2024', label: 'Founded', icon: '🚀' },
    { number: '40+', label: 'Happy Clients', icon: '😊' },
    { number: '1', label: 'CEO Leadership', icon: '👤' },
    { number: '100%', label: 'Creative Focus', icon: '⭐' },
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'Every strategy, every tactic, every dollar spent focuses on measurable outcomes for your business.'
    },
    {
      icon: '🤝',
      title: 'Client-Centric',
      description: 'Your success is our north star. We build partnerships, not just vendor relationships.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We stay ahead of trends, constantly learning and implementing cutting-edge strategies.'
    },
    {
      icon: '💡',
      title: 'Transparency',
      description: 'No surprises, no hidden fees. Clear communication and open reporting on all metrics that matter.'
    }
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
            Meet Our Expert Team
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Experienced professionals dedicated to your growth
          </p>
          <p className="text-lg text-blue-50">
            Founded in 2024 and proudly serving 40+ clients
          </p>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-6 text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Leadership Team
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                  <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                    {member.stats.map((stat, sidx) => (
                      <div key={sidx} className="flex items-center gap-2 text-xs text-gray-600">
                        <Award className="w-3 h-3 text-blue-600" />
                        <span>{stat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition-all">
                      <Linkedin className="inline-block w-4 h-4 mr-1" /> LinkedIn
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg text-sm font-semibold transition-all">
                      <Mail className="inline-block w-4 h-4 mr-1" /> Email
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Culture
          </motion.h2>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-4 leading-relaxed">
              At iClapss, we believe that great work comes from great people working together. We foster a culture of collaboration, innovation, and continuous learning. Our team is passionate about helping businesses grow, and we take pride in the relationships we build with our clients.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We invest in our people through ongoing training, certification programs, and professional development opportunities. We celebrate wins together, learn from challenges, and maintain a work environment where creativity thrives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Work-life balance, professional growth, and meaningful work are core to who we are. When you partner with iClapss, you're working with a team that genuinely cares about your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals to join our mission.
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all">
            View Open Positions
            <Zap className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default People
