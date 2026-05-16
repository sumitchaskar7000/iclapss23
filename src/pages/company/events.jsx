import { motion } from 'framer-motion'
import { Calendar, Users, ArrowRight } from '../../components/icons'

const Events = () => {
  const events = [
    { title: 'Digital Marketing Bootcamp 2024', date: 'April 15-17', location: 'San Francisco', type: 'In-Person', attendees: '200+' },
    { title: 'SEO Masterclass Webinar', date: 'April 22', location: 'Online', type: 'Webinar', attendees: '500+' },
    { title: 'Email Marketing Summit', date: 'May 10-12', location: 'Austin', type: 'In-Person', attendees: '150+' },
    { title: 'Content Strategy Workshop', date: 'May 30', location: 'Online', type: 'Webinar', attendees: '300+' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-blue-100">Learn from experts and grow your skills</p>
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {event.date}</span>
                      <span>{event.location}</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{event.type}</span>
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {event.attendees}</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold whitespace-nowrap">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Host Events at Your Location</h2>
          <p className="text-gray-600 mb-8">Interested in bringing our expertise to your city? Contact us about hosting a workshop or event.</p>
          <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            Host an Event <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Events
