import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
      <p className="text-sm text-gray-500">{event.date}</p>
      <p className="mt-2 text-gray-700">{event.description}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Book Now
      </button>
    </motion.div>
  );
};

const EventsBookings = ({ events }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Upcoming Events & Bookings
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsBookings;
