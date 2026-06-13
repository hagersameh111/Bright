import { motion } from "framer-motion";

const schedule = [
  {
    time: "10:00 Am",
    title: "Registration & welcome",
  },
  {
    time: "11:00 Am",
    title: "Welcome speech",
  },
  {
    time: "12:00 Pm",
    title: "Booth Set Up",
  },
  {
    time: "01:00 Pm",
    title: "Shopping",
  },
  {
    time: "02:00 Pm",
    title: "Gates Closed",
  },
];

const EventSchedule = () => {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(90deg, #112135 0%, #000000 50%, #112135 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-5xl font-semibold mb-4">
              Event Schedule
            </h2>

            <div className="w-20 h-[2px] bg-[#A50C0C] mb-16"></div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-[#FF1A1A]"></div>

              <div className="space-y-12">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-8 relative"
                  >
                    {/* Dot */}
                    <div className="w-5 h-5 rounded-full bg-[#FF1A1A] relative z-10 flex-shrink-0"></div>

                    {/* Time */}
                    <p className="text-white text-2xl min-w-[120px]">
                      {item.time}
                    </p>

                    {/* Event */}
                    <p className="text-white text-2xl">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/sched.png"
              alt="Event Gallery"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;