import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#112135] flex items-center justify-center px-8 lg:px-16 py-16 lg:py-0 min-h-[300px]"
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-white text-4xl lg:text-4xl font-bold leading-tight">
                Let’s Build something
                <br />
                <span className="text-[#A50C0C]">
                  Unforgettable
                </span>
              </h2>
            </div>

            <button
              className="bg-[#A50C0C] text-white text-2xl px-12 py-5 rounded-[24px] hover:scale-105 transition duration-300 whitespace-nowrap"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[300px]"
        >
          <img
            src="/cta.jpeg"
            alt="Start Project"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;