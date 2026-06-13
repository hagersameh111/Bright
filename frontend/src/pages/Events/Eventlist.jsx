import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  Users,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";

const featuredEvent = {
  title: "The Javits Center 2026",
  image: "/event.jpg",
  description:
    "From launches and creative production to exclusive brand experiences, we create events that connect people and business.",
  location: "11 Avu, NY, US",
  date: "23-06-2026",
  guests: "+300",
};

const events = Array(4).fill({
  title: "The Javits Center 2026",
  category: "Upcoming",
  image: "/event.jpg",
  location: "11 Avu, NY, US",
  date: "23-06-2026",
  guests: "+300",
});

const EventsListing = () => {
  return (
    <section
      className="min-h-screen pb-24"
      style={{
        background:
          "linear-gradient(90deg, #000000 0%, #112135 50%, #000000 100%)",
      }}
    >
      {/* Filter Bar */}
      <div className="bg-[#021325] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between py-6 gap-4">
            <div className="flex flex-wrap gap-5">
              <button className="bg-[#A50C0C] text-white px-8 py-3 rounded-2xl">
                All Events
              </button>

              <button className="text-white px-6 py-3">
                Upcoming Events
              </button>

              <button className="text-white px-6 py-3">
                Past Events
              </button>
            </div>

            <button className="flex items-center gap-2 text-white">
              Filter
              <SlidersHorizontal
                size={18}
                className="text-[#A50C0C]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14">
        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-[1.1fr_1fr] overflow-hidden rounded-3xl bg-[#021325]/95 mb-10"
        >
          <img
            src={featuredEvent.image}
            alt={featuredEvent.title}
            loading="lazy"
            className="w-full h-full min-h-[320px] object-cover"
          />

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-[#A50C0C] mb-2">
              Featured
            </p>

            <h2 className="text-white text-4xl mb-5">
              {featuredEvent.title}
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {featuredEvent.description}
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 text-[#A50C0C] mb-2">
                  <MapPin size={18} />
                  <span>Location</span>
                </div>

                <p className="text-white">
                  {featuredEvent.location}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#A50C0C] mb-2">
                  <CalendarDays size={18} />
                  <span>Date</span>
                </div>

                <p className="text-white">
                  {featuredEvent.date}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#A50C0C] mb-2">
                  <Users size={18} />
                  <span>Guest</span>
                </div>

                <p className="text-white">
                  {featuredEvent.guests}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="grid grid-cols-[1fr_180px] overflow-hidden rounded-3xl bg-[#021325]/95"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#112135]/55"></div>

                <div className="absolute bottom-6 left-6">
                  <p className="text-[#A50C0C] mb-2">
                    {event.category}
                  </p>

                  <h3 className="text-white text-3xl">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <a href="/events/event-details"> <button className="flex items-center gap-2 text-white mb-8 hover:text-[#A50C0C] transition">
                  View Details
                  <ArrowRight size={18} />
                </button>
</a>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-[#A50C0C] mb-2">
                      <MapPin size={16} />
                      Location
                    </div>

                    <p className="text-white text-sm">
                      {event.location}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[#A50C0C] mb-2">
                      <CalendarDays size={16} />
                      Date
                    </div>

                    <p className="text-white text-sm">
                      {event.date}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[#A50C0C] mb-2">
                      <Users size={16} />
                      Guest
                    </div>

                    <p className="text-white text-sm">
                      {event.guests}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsListing;