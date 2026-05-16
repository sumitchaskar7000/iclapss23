import { motion } from 'framer-motion'
import { Users, Linkedin, ArrowRight } from '../../components/icons'

const OurAuthors = () => {
  const authors = [
    {
      name: 'Sarah Johnson',
      role: 'SEO Specialist',
      bio: '15+ years in SEO and organic growth. Google Analytics certified.',
      expertise: ['SEO', 'Content Strategy', 'Analytics'],
      articles: 12
    },
    {
      name: 'Michael Chen',
      role: 'Performance Marketing Lead',
      bio: 'Specializes in PPC and conversion optimization. Google Ads certified.',
      expertise: ['PPC', 'CRO', 'Analytics'],
      articles: 8
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Strategist',
      bio: 'Expert in content marketing and thought leadership. Author of 2 books.',
      expertise: ['Content', 'Strategy', 'Copywriting'],
      articles: 15
    },
    {
      name: 'David Park',
      role: 'Analytics & Data Expert',
      bio: 'Making data accessible and actionable. Passionate about insights.',
      expertise: ['Analytics', 'Data', 'Reporting'],
      articles: 10
    }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Expert Authors</h1>
          <p className="text-xl text-blue-100">Meet the specialists behind iClapss insights</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {authors.map((author, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{author.name}</h3>
                  <p className="text-orange-500 font-semibold text-sm mb-3">{author.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{author.bio}</p>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-xs font-semibold text-gray-600 mb-2">EXPERTISE</p>
                    <div className="flex flex-wrap gap-2">
                      {author.expertise.map((skill, sidx) => (
                        <span key={sidx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>{author.articles}</strong> published articles
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all">
                    <Linkedin className="w-4 h-4" />
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Guest Author</h2>
          <p className="text-gray-600 mb-8">Share your expertise with our 50K+ monthly readers. Contact us about contributing.</p>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Apply to Contribute <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default OurAuthors
