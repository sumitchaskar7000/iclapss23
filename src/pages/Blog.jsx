import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/icons'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential SEO Tips for 2024',
      excerpt:
        'Discover the latest SEO strategies that will help boost your website rankings and drive organic traffic.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Social Media Marketing: Best Practices',
      excerpt:
        'Learn how to create engaging social media content that resonates with your audience and drives conversions.',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'PPC Campaign Optimization Guide',
      excerpt:
        'Maximize your ROI with these proven PPC optimization techniques and strategies.',
      author: 'Emily Rodriguez',
      date: 'March 5, 2024',
      category: 'PPC',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Building a Strong Brand Identity',
      excerpt:
        'Discover the key elements of a successful brand identity and how to create one for your business.',
      author: 'John Smith',
      date: 'February 28, 2024',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'Content Marketing Strategy That Works',
      excerpt:
        'Learn how to create a content marketing strategy that attracts, engages, and converts your target audience.',
      author: 'Sarah Johnson',
      date: 'February 20, 2024',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Website Performance Optimization',
      excerpt:
        'Speed up your website and improve user experience with these performance optimization tips.',
      author: 'Michael Chen',
      date: 'February 15, 2024',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
      readTime: '6 min read',
    },
  ]

  const categories = [
    'All Posts',
    'SEO',
    'Social Media',
    'PPC',
    'Branding',
    'Content Marketing',
    'Web Development',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-saffron-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-saffron-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest trends, tips, and insights in digital
              marketing. Learn from our experts and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {post.author}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get the latest digital marketing tips and insights delivered
              straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog

