import { motion } from 'framer-motion'
import { Star, ArrowRight } from '../../components/icons'

const Ratings = () => {
  const reviews = [
    {
      id: 1,
      title: 'HubSpot vs Marketo: Which is Right for Your Business?',
      rating: 4.5,
      description: 'Detailed comparison of two leading marketing platforms.',
      author: 'Michael Chen',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      title: 'Best Email Marketing Tools: 2024 Comparison',
      rating: 4.8,
      description: 'We tested 15+ email platforms. Here are the winners.',
      author: 'Sarah Johnson',
      date: 'March 10, 2024'
    },
    {
      id: 3,
      title: 'Google Analytics 4 vs Universal Analytics',
      rating: 4.7,
      description: 'Complete guide to understanding GA4 and making the migration.',
      author: 'David Park',
      date: 'March 5, 2024'
    },
    {
      id: 4,
      title: 'SEO Tools Roundup: Ahrefs vs SEMrush vs Moz',
      rating: 4.6,
      description: 'Honest comparison of the top 3 SEO platforms.',
      author: 'Emily Rodriguez',
      date: 'February 28, 2024'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tool Reviews & Ratings</h1>
          <p className="text-xl text-blue-100">Honest reviews of marketing tools and platforms we use and recommend</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-sm text-gray-600">{review.rating}/5</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{review.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{review.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
                  <span>{review.author} • {review.date}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">
                    Read Review <ArrowRight className="w-4 h-4 inline" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for a Specific Tool?</h2>
          <p className="text-gray-600 mb-8">We review hundreds of marketing tools. Contact us for a recommendation.</p>
        </div>
      </section>
    </div>
  )
}

export default Ratings
