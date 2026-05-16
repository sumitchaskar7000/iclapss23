import { motion } from 'framer-motion'
import { Briefcase, ArrowRight } from '../../components/icons'

const Careers = () => {
  const jobs = [
    { title: 'SEO Specialist', level: 'Senior', location: 'Remote', type: 'Full-time' },
    { title: 'Content Writer', level: 'Mid-level', location: 'Remote', type: 'Full-time' },
    { title: 'PPC Manager', level: 'Senior', location: 'San Francisco', type: 'Full-time' },
    { title: 'Web Developer', level: 'Mid-level', location: 'Remote', type: 'Full-time' },
    { title: 'Data Analyst', level: 'Junior', location: 'Austin', type: 'Full-time' },
    { title: 'Account Manager', level: 'Mid-level', location: 'Remote', type: 'Full-time' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100">Help us help 1000+ businesses grow</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work at iClapss</h2>
            <ul className="space-y-3 text-gray-700">
              {['Meaningful work - directly impact client success', 'Continuous learning - training budget & certifications', 'Work-life balance - flexible hours & remote options', 'Great culture - collaborative team environment', 'Competitive salary - top of market compensation'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.level} • {job.location} • {job.type}</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Role?</h2>
          <p className="text-gray-600 mb-8">We're always looking for talented people. Send us your resume and tell us what you're interested in.</p>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Send Resume <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Careers
