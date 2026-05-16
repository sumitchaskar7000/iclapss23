import { motion } from 'framer-motion'
import { Search, TrendingUp, Users, Target, Zap, BarChart, Palette, Video, Globe } from '../components/icons'

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Search Engine Optimization (SEO)',
      description:
        'Improve your website\'s visibility on search engines and drive organic traffic that converts.',
      features: [
        'Keyword research & optimization',
        'On-page & off-page SEO',
        'Technical SEO audits',
        'Content optimization',
        'Link building strategies',
        'Local SEO optimization',
      ],
      color: 'bg-primary-600',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description:
        'Build a strong social media presence and engage with your audience across all platforms.',
      features: [
        'Content strategy & creation',
        'Community management',
        'Social media advertising',
        'Influencer partnerships',
        'Analytics & reporting',
        'Brand awareness campaigns',
      ],
      color: 'bg-primary-600',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Pay-Per-Click (PPC) Advertising',
      description:
        'Maximize ROI with targeted ad campaigns on Google, Facebook, and other platforms.',
      features: [
        'Google Ads management',
        'Facebook & Instagram ads',
        'LinkedIn advertising',
        'Ad copy optimization',
        'Landing page optimization',
        'Conversion tracking',
      ],
      color: 'bg-primary-600',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Brand Strategy & Design',
      description:
        'Create compelling brand identities that resonate with your target audience.',
      features: [
        'Brand identity development',
        'Logo & visual design',
        'Brand guidelines',
        'Marketing collateral',
        'Packaging design',
        'Brand positioning',
      ],
      color: 'bg-primary-600',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Content Marketing',
      description:
        'Create valuable content that attracts, engages, and converts your audience.',
      features: [
        'Content strategy',
        'Blog writing & SEO',
        'Video production',
        'Infographics & visuals',
        'Email marketing',
        'Content distribution',
      ],
      color: 'bg-primary-600',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development & Design',
      description:
        'Build beautiful, fast, and conversion-optimized websites that drive results.',
      features: [
        'Responsive web design',
        'E-commerce development',
        'WordPress customization',
        'Performance optimization',
        'UI/UX design',
        'Website maintenance',
      ],
      color: 'bg-primary-600',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description:
        'We analyze your business, target audience, and competition to create a custom strategy.',
    },
    {
      step: '02',
      title: 'Implementation',
      description:
        'Our team executes your marketing plan with precision and attention to detail.',
    },
    {
      step: '03',
      title: 'Optimization',
      description:
        'We continuously monitor, test, and optimize campaigns for maximum performance.',
    },
    {
      step: '04',
      title: 'Reporting & Growth',
      description:
        'Regular reports and insights help you understand ROI and plan for growth.',
    },
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
                Digital Marketing Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive solutions to help your business grow online. From
              SEO to social media, we've got everything you need to succeed in
              the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 overflow-hidden group"
              >
                <div
                  className={`${service.color} p-6 flex items-center justify-center`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-primary-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business
              goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

