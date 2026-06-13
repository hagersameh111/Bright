import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const SponsorCTA = () => {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(90deg, #000000 0%, #112135 50%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[420px_1fr] gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#A50C0C] text-xl mb-6">
              Want to make a difference?
            </p>

            <h2 className="text-white text-5xl md:text-6xl font-semibold leading-tight mb-10">
              Become A Sponsor
            </h2>

            <button className="bg-[#A50C0C] text-white text-2xl px-14 py-5 rounded-3xl hover:scale-105 transition duration-300">
              Contact Us
            </button>
          </motion.div>

          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Map Background */}
            <img
              src="/map.png"
              alt="Location Map"
              loading="lazy"
              className="w-full h-[320px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#112135]/40"></div>

          

            {/* Location Pin */}
            <div className="absolute left-[38%] top-1/2 -translate-y-1/2">
              <MapPin
                size={55}
                className="text-[#FF0000] drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]"
                fill="currentColor"
              />
            </div>

            {/* Info Card */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#041426]/95 border border-white/10 rounded-2xl p-6 w-[280px]">
              <h3 className="text-white text-2xl mb-4">
                Event
              </h3>

              <div className="w-10 h-[2px] bg-[#A50C0C] mb-4"></div>

              <p className="text-white text-lg mb-4">
                New York, USA
              </p>

              <div className="w-10 h-[2px] bg-[#A50C0C] mb-4"></div>

              <p className="text-gray-300 text-sm leading-relaxed">
                we're always open to new ideas,
                partnerships and opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SponsorCTA;