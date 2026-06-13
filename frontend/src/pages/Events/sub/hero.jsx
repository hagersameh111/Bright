import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
} from "lucide-react";

const EventDetailsHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/event.jpg"
        alt="Event Details"
        loading="eager"
        className="absolute inset-0 w-full h-screen object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#112135]/65"></div>

      {/* Blue Glow */}
      <div className="absolute left-0 top-0 w-[350px] h-full bg-[#112135]/40 blur-[120px]" />
      <div className="absolute right-0 top-0 w-[350px] h-full bg-[#112135]/40 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Date Card */}
            <div className="border border-[#A50C0C] rounded-3xl px-6 py-5 text-center bg-[#112135]/40 backdrop-blur-sm">
              <p className="text-white text-3xl mb-2">
                June
              </p>

              <h3 className="text-white text-5xl font-bold">
                23
              </h3>
            </div>

            {/* Event Info */}
            <div>
                <span className="inline-block px-4 py-2 rounded-full bg-[#A50C0C] text-sm font-medium text-white mb-4">
            Bright Events
          </span>

              <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                The Javits Center
                <br />
                2026.
              </h1>

              {/* Event Meta */}
              <div className="flex flex-wrap gap-10 mt-10">
                <div className="flex items-center gap-3">
                  <MapPin
                    size={28}
                    className="text-[#A50C0C]"
                  />

                  <span className="text-white text-2xl">
                    11 Avu, Ny, US
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={28}
                    className="text-[#A50C0C]"
                  />

                  <span className="text-white text-2xl">
                    23-06-2026
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                className="mt-12 px-12 py-5 rounded-3xl text-white text-2xl transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#A50C0C",
                }}
              >
                Book Your Ticket
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetailsHero;