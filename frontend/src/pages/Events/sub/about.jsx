import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Clock3,
  Users,
} from "lucide-react";

const EventAbout = () => {
  const highlights = [
    "Event highlights",
    "Event highlights",
    "Event highlights",
    "Event highlights",
  ];

  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(90deg, #112135 0%, #000000 50%, #112135 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.2fr_420px] gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-5xl font-semibold mb-4">
              About The Event
            </h2>

            <div className="w-24 h-[2px] bg-[#A50C0C] mb-10"></div>

            <div className="space-y-8 text-gray-200 text-xl leading-loose max-w-3xl">
              <p>
                For more than four decades, the Jacob K. Javits
                Convention Center has anchored large-scale events
                on Manhattan’s West Side, serving industries and
                communities in New York City and beyond.
              </p>

              <p>
                For more than four decades, the Jacob K. Javits
                Convention Center has anchored large-scale events
                on Manhattan’s West Side, serving industries and
                communities in New York City and beyond.
              </p>
            </div>
          </motion.div>

          {/* Event Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#041426] rounded-3xl p-10 shadow-2xl"
          >
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <CalendarDays
                  size={34}
                  className="text-[#FF0000]"
                />

                <div>
                  <p className="text-gray-400 mb-1">
                    Date
                  </p>

                  <p className="text-white text-2xl">
                    23-06-2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <MapPin
                  size={34}
                  className="text-[#FF0000]"
                />

                <div>
                  <p className="text-gray-400 mb-1">
                    Location
                  </p>

                  <p className="text-white text-2xl">
                    11 Avu, Ny, US
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Clock3
                  size={34}
                  className="text-[#FF0000]"
                />

                <div>
                  <p className="text-gray-400 mb-1">
                    Time
                  </p>

                  <p className="text-white text-2xl">
                    10:00 AM - 08:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Users
                  size={34}
                  className="text-[#FF0000]"
                />

                <div>
                  <p className="text-gray-400 mb-1">
                    Guests
                  </p>

                  <p className="text-white text-2xl">
                    500+ Attendance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6"
              >
                <span className="text-white text-xl">
                  {item}
                </span>

                {index !== highlights.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-[#A50C0C]"></span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventAbout;