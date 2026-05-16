import { motion } from 'framer-motion'
import { Check, BookOpen } from '../../components/icons'

const EditorialStandards = () => {
  const standards = [
    { title: 'Fact Checking', desc: 'Every claim is verified against primary sources and current data.' },
    { title: 'Original Research', desc: 'We conduct our own studies and testing, not just rehashing other content.' },
    { title: 'Expert Review', desc: 'Industry experts review all content before publication.' },
    { title: 'Transparency', desc: 'We disclose relationships, sponsored content, and affiliate links.' },
    { title: 'Regular Updates', desc: 'Content is refreshed to ensure accuracy and relevance.' },
    { title: 'Corrections', desc: 'Errors are corrected promptly and transparently.' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Editorial Standards & Practices</h1>
          <p className="text-xl text-blue-100">Our commitment to quality, accuracy, and transparency</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Editorial Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We're committed to providing the highest quality marketing education and insights. Every piece of content we publish meets strict editorial standards to ensure accuracy, relevance, and value.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trust is everything. We earn it through consistent quality and transparency in everything we publish.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Standards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {standards.map((standard, idx) => (
                <div key={idx} className="flex gap-4">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{standard.title}</h3>
                    <p className="text-gray-600 text-sm">{standard.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sources & Attribution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We properly attribute all sources and data. When we reference studies, reports, or other content, we link directly to the original source so readers can verify information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Original research and case studies are conducted by our team and clearly labeled as such.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conflicts of Interest</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We're transparent about any relationships that could influence our recommendations. If we recommend a tool we're affiliated with or a partner company, we disclose it clearly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our recommendations are always based first on what's best for our readers, not affiliate commissions.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Guest Contributions</h2>
            <p className="text-gray-700 leading-relaxed">
              We welcome guest contributions from industry experts. All guest content goes through the same editorial review process and meets the same standards as our internal content. We clearly label guest contributions and provide author information.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default EditorialStandards
