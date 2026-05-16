import { motion } from 'framer-motion'
import { useState } from 'react'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      category: 'seo',
      title: 'E-commerce SEO Success',
      client: 'TechStore Pro',
      description:
        'Increased organic traffic by 300% and improved search rankings for 50+ keywords.',
      results: [
        '300% increase in organic traffic',
        '150% increase in conversions',
        '50+ keywords ranking in top 10',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      id: 2,
      category: 'social',
      title: 'Social Media Campaign',
      client: 'Fashion Brand',
      description:
        'Built a community of 100K+ followers and increased engagement by 400%.',
      results: [
        '100K+ new followers',
        '400% increase in engagement',
        '50% increase in sales',
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    },
    {
      id: 3,
      category: 'ppc',
      title: 'PPC Campaign Optimization',
      client: 'SaaS Company',
      description:
        'Reduced cost per acquisition by 60% while increasing conversions by 200%.',
      results: [
        '60% reduction in CPA',
        '200% increase in conversions',
        '300% ROI improvement',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    },
    {
      id: 4,
      category: 'branding',
      title: 'Brand Identity Design',
      client: 'Startup Inc',
      description:
        'Complete brand overhaul resulting in increased brand recognition and market share.',
      results: [
        'Complete brand identity',
        '50% increase in brand awareness',
        'New market positioning',
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    },
    {
      id: 5,
      category: 'content',
      title: 'Content Marketing Strategy',
      client: 'B2B Company',
      description:
        'Developed content strategy that generated 500+ qualified leads per month.',
      results: [
        '500+ leads per month',
        '200% increase in website traffic',
        '60% conversion rate',
      ],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800',
    },
    {
      id: 6,
      category: 'web',
      title: 'E-commerce Website Redesign',
      client: 'Retail Store',
      description:
        'Complete website redesign resulting in 250% increase in online sales.',
      results: [
        '250% increase in sales',
        '40% faster page load',
        'Improved user experience',
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStore Pro',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      quote:
        'iClapss transformed our online presence. The results exceeded our expectations, and the team was professional throughout.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Startup Inc',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      quote:
        'Working with iClapss was a game-changer. They understood our vision and delivered beyond our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Fashion Brand',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      quote:
        'The social media campaign was outstanding. Our engagement and sales have never been better. Highly recommended!',
      rating: 5,
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'seo', label: 'SEO' },
    { id: 'social', label: 'Social Media' },
    { id: 'ppc', label: 'PPC' },
    { id: 'branding', label: 'Branding' },
    { id: 'content', label: 'Content' },
    { id: 'web', label: 'Web Design' },
  ]

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

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
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how we've helped businesses achieve remarkable results through
              innovative digital marketing strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-primary-600 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.client}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-primary-600 mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio





