import { motion } from "framer-motion";

const EventsHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/events-hero.png"
        alt="Events Hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#112135]/65"></div>

      {/* Left Blue Glow */}
      <div className="absolute left-0 top-0 w-[400px] h-full bg-[#112135]/40 blur-[140px]" />

      {/* Right Blue Glow */}
      <div className="absolute right-0 top-0 w-[400px] h-full bg-[#112135]/40 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-[#A50C0C] text-2xl mb-6">
            Bright Events
          </p>

          <h1 className="text-white text-5xl md:text-5xl font-bold leading-tight">
            Experiences That Leave
            <br />
            An{" "}
            <span className="text-[#A50C0C]">
              Impact.
            </span>
          </h1>

          <p className="text-gray-200 text-2xl leading-relaxed mt-8 max-w-xl">
            From launches and creative production to exclusive
            brand experiences, we create events that connect
            people and business.
          </p>

          <button
            className="mt-12 px-12 py-5 rounded-xl text-white text-2xl transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#A50C0C",
            }}
          >
            Explore Events
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsHero;