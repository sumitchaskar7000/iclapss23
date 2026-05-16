import { motion } from 'framer-motion'
import { Download, BookOpen, ArrowRight } from '../../components/icons'

const Guides = () => {
  const guides = [
    {
      id: 1,
      title: 'The Complete SEO Guide for E-commerce 2024',
      description: 'Comprehensive guide covering keyword research, technical SEO, content strategy, and link building for online stores.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '25 min read',
      download: true,
      topics: ['SEO', 'E-commerce', 'Growth']
    },
    {
      id: 2,
      title: 'Social Media Strategy Blueprint for B2B',
      description: 'Step-by-step framework for building a social media strategy that generates qualified leads for B2B companies.',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      readTime: '20 min read',
      download: true,
      topics: ['Social Media', 'B2B', 'Strategy']
    },
    {
      id: 3,
      title: 'Content Marketing Framework That Converts',
      description: 'Learn the proven content strategy framework used by 500+ companies to drive traffic and engagement.',
      author: 'Emily Rodriguez',
      date: 'March 5, 2024',
      readTime: '22 min read',
      download: true,
      topics: ['Content', 'Strategy', 'Growth']
    },
    {
      id: 4,
      title: 'Email Marketing Automation Guide',
      description: 'Complete guide to setting up email workflows that nurture leads and drive conversions automatically.',
      author: 'David Park',
      date: 'February 28, 2024',
      readTime: '18 min read',
      download: true,
      topics: ['Email', 'Automation', 'Conversions']
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Guides & Strategies
          </h1>
          <p className="text-xl text-blue-100">
            In-depth resources to help you master digital marketing
          </p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, idx) => (
              <motion.div
                key={guide.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.topics.map((topic, tidx) => (
                    <span key={tidx} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-600 pb-4 border-b border-gray-200 mb-4">
                  <span>{guide.author} • {guide.date}</span>
                  <span>{guide.readTime}</span>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all">
                  <Download className="w-4 h-4" />
                  Download Guide
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Implementing?</h2>
          <p className="text-gray-600 mb-8">Our experts can help you apply these strategies to your business.</p>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Guides
