import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, #112135 49%, #000000 93%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-light mb-4">
              Who are we
            </h2>

            <div className="w-48 h-[2px] bg-[#A50C0C] mb-10"></div>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-xl">
              Bright is a creative marketing and media agency built to help
              brands stand out in a fast-moving digital world. We combine
              strategy, storytelling, content creation, and performance
              marketing to turn ideas into impactful experiences.
            </p>

            <button
              className="mt-12 px-18 py-4 rounded-xl text-white text-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#A50C0C" }}
            >
              About Us
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/whowe.png"
              alt="Who We Are"
              loading="lazy"
              decoding="async"
              className="w-full max-w-[500px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhoWeAre;