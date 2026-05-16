import { motion } from 'framer-motion'
import { TrendingUp, Users, BarChart, Award, ArrowRight, Star } from '../components/icons'

const Success = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const successStories = [
    {
      id: 1,
      client: 'TechStore Pro',
      industry: 'E-commerce',
      challenge: 'Struggling with organic visibility and high CAC',
      strategy: 'Comprehensive SEO overhaul + content strategy',
      results: {
        'Organic Traffic': '+300%',
        'Keyword Rankings': '150+ top 10',
        'Conversions': '+150%',
        'Revenue': '+₹2.1M'
      },
      duration: '6 months',
      testimonial: 'iClapss transformed our digital presence. Within 6 months, we went from minimal organic traffic to becoming the top-ranked e-commerce site in our category.',
      testimonialAuthor: 'Sarah Chen, CEO',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    },
    {
      id: 2,
      client: 'CloudSync Solutions',
      industry: 'SaaS',
      challenge: 'High customer acquisition cost, low conversion rates',
      strategy: 'Lead nurturing + PPC optimization + email marketing',
      results: {
        'Qualified Leads': '+180%',
        'CAC Reduction': '-45%',
        'Conversion Rate': '+220%',
        'MRR Growth': '+₹250K'
      },
      duration: '4 months',
      testimonial: 'The team at iClapss completely changed how we think about marketing. Their data-driven approach reduced our CAC by 45% while increasing qualified leads.',
      testimonialAuthor: 'Michael Rodriguez, VP Sales',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    },
    {
      id: 3,
      client: 'Fashion Brand Co',
      industry: 'Retail',
      challenge: 'Low social media engagement, brand awareness',
      strategy: 'Social media strategy + influencer partnerships + paid campaigns',
      results: {
        'Followers': '+100K',
        'Engagement Rate': '+400%',
        'Sales Attribution': '+50%',
        'ROI': '320%'
      },
      duration: '5 months',
      testimonial: 'iClapss created a social media strategy that resonated with our audience. Our engagement exploded and sales followed.',
      testimonialAuthor: 'Amanda Wells, Marketing Director',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800'
    },
    {
      id: 4,
      client: 'MediCare Clinic',
      industry: 'Healthcare',
      challenge: 'Need to increase patient inquiries and build trust',
      strategy: 'Local SEO + content marketing + reputation management',
      results: {
        'Patient Inquiries': '+250/month',
        'Online Visibility': '+95%',
        'Trust Score': '4.9/5 stars',
        'Revenue': '+₹1.8M/year'
      },
      duration: '6 months',
      testimonial: 'Within 6 months, we went from 10 patient inquiries per month to over 250. The trust-building content strategy was key.',
      testimonialAuthor: 'Dr. James Patterson, Clinic Director',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'
    },
    {
      id: 5,
      client: 'Consulting Group ABC',
      industry: 'B2B Services',
      challenge: 'Difficult to generate qualified B2B leads',
      strategy: 'LinkedIn advertising + content marketing + email nurturing',
      results: {
        'Qualified Leads': '120+/month',
        'Sales Cycle': '-40%',
        'Pipeline Value': '+₹5M',
        'Deal Close Rate': '+65%'
      },
      duration: '3 months',
      testimonial: 'iClapss understood our B2B market and created a lead generation machine. We\'ve more than doubled our pipeline.',
      testimonialAuthor: 'Robert Thompson, Managing Partner',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
    },
    {
      id: 6,
      client: 'Metro Real Estate',
      industry: 'Real Estate',
      challenge: 'Slow property sales, limited digital reach',
      strategy: 'SEO + PPC + virtual tours + email marketing',
      results: {
        'Website Traffic': '+250%',
        'Property Inquiries': '+45/month',
        'Sales Facilitated': '+₹12M',
        'Avg Sale Cycle': '-25%'
      },
      duration: '4 months',
      testimonial: 'The digital transformation iClapss provided increased our property visibility dramatically. Sales are up and we\'re closing deals faster.',
      testimonialAuthor: 'Lisa Kim, Sales Manager',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800'
    }
  ]

  const overallMetrics = [
    {
      icon: <BarChart className="w-8 h-8" />,
      metric: '280%',
      label: 'Average ROI Increase'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: '+₹150M+',
      label: 'Total Client Revenue Growth'
    },
    {
      icon: <Users className="w-8 h-8" />,
      metric: '500+',
      label: 'Successful Projects'
    },
    {
      icon: <Award className="w-8 h-8" />,
      metric: '95%',
      label: 'Client Satisfaction Rate'
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
            Success Stories That Speak for Themselves
          </h1>
          <p className="text-xl text-blue-100">
            Real clients, real results, real growth
          </p>
        </motion.div>
      </div>

      {/* Overall Metrics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {overallMetrics.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-6 text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-blue-600 flex justify-center mb-3">{item.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.metric}</div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Success Stories
          </motion.h2>

          <div className="space-y-12">
            {successStories.map((story, idx) => (
              <motion.div
                key={story.id}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="h-64 md:h-auto overflow-hidden bg-gray-200">
                    <img
                      src={story.image}
                      alt={story.client}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{story.client}</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {story.industry}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 font-semibold">
                      Challenge: <span className="font-normal">{story.challenge}</span>
                    </p>

                    <p className="text-gray-600 mb-6 font-semibold">
                      Strategy: <span className="font-normal">{story.strategy}</span>
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
                      {Object.entries(story.results).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-green-600 font-bold text-lg">{value}</p>
                          <p className="text-gray-600 text-xs">{key}</p>
                        </div>
                      ))}
                    </div>

                    {/* Duration */}
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Timeline:</strong> {story.duration}
                    </p>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-orange-400 pl-4 mb-4">
                      <p className="text-gray-700 italic text-sm">"{story.testimonial}"</p>
                      <p className="text-gray-600 text-sm font-semibold mt-2">
                        — {story.testimonialAuthor}
                      </p>
                    </blockquote>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 500+ businesses that have transformed their growth with iClapss.
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all">
            Schedule Free Strategy Session
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default Success
