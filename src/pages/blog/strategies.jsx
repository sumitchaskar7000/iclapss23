import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Lightbulb } from '../../components/icons'

const Strategies = () => {
  const strategies = [
    {
      id: 1,
      title: '5 Proven Strategies to Increase Lead Generation by 300%',
      description: 'Real strategies used by 500+ companies to dramatically increase qualified leads.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '12 min read'
    },
    {
      id: 2,
      title: 'The Content Flywheel: How to Build Momentum',
      description: 'Learn how to create self-reinforcing content loops that compound over time.',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: '7 Conversion Rate Optimization Wins You Can Implement Today',
      description: 'Quick-win tactics proven to increase conversions within days.',
      author: 'Michael Chen',
      date: 'March 5, 2024',
      readTime: '8 min read'
    },
    {
      id: 4,
      title: 'How to Position Your Brand as an Industry Leader',
      description: 'Strategic positioning framework for thought leadership and market authority.',
      author: 'David Park',
      date: 'February 28, 2024',
      readTime: '11 min read'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Proven Growth Strategies</h1>
          <p className="text-xl text-blue-100">Real tactics from real businesses that achieved real results</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {strategies.map((strategy, idx) => (
              <motion.div
                key={strategy.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{strategy.title}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{strategy.author} • {strategy.date}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <Lightbulb className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Implement?</h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Get Strategy Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Strategies
