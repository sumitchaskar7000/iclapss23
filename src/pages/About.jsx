import { motion } from 'framer-motion'
import { Users, Target, Award, Heart } from '../components/icons'

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description:
        'We focus on delivering measurable results that drive business growth.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description:
        'Your success is our priority. We build long-term partnerships.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, from strategy to execution.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Innovation',
      description:
        'We stay ahead of trends and use cutting-edge tools and strategies.',
    },
  ]

  const team = [
    {
      name: 'Sumit Chaskar',
      role: 'CEO',
      image: '/images/team.png',
      bio: 'Sumit Chaskar is the creative mind behind iClapss, leading brand strategy, bold campaigns, and growth-focused digital execution.',
    },
  ]

  const timeline = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Started with a vision to help businesses grow online.',
    },
    {
      year: '2024',
      title: 'First 10 Clients',
      description: 'Built trust quickly with strong execution and transparent communication.',
    },
    {
      year: '2025',
      title: 'Team Expansion',
      description: 'Expanded the team and delivery capabilities across core services.',
    },
    {
      year: '2025',
      title: 'Performance Milestones',
      description: 'Helped clients scale with SEO, paid ads, and conversion-focused strategy.',
    },
    {
      year: '2026',
      title: '40+ Clients',
      description: 'Now serving 40+ clients with a quality-first growth model.',
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
              About{' '}
              <span className="bg-gradient-to-r from-primary-600 to-saffron-500 bg-clip-text text-transparent">
                iClapss
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a team of passionate digital marketers dedicated to helping
              businesses achieve their online goals. With years of experience
              and a proven track record, we deliver results that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At iClapss, our mission is to empower businesses of all sizes to
                succeed in the digital landscape. We believe that every
                business, regardless of size, deserves access to world-class
                digital marketing services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine creativity, data-driven insights, and cutting-edge
                technology to deliver marketing strategies that drive real
                business results. Our client-centric approach ensures that we
                understand your unique needs and create customized solutions
                that align with your goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-saffron-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become the leading digital marketing agency that
                    businesses trust to transform their online presence and
                    achieve sustainable growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-saffron-500/20"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company's history
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-8 mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white rounded-xl p-6 shadow-lg ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-primary-500 to-saffron-500 rounded-full"></div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary-500 to-saffron-500"></div>
                  )}
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
