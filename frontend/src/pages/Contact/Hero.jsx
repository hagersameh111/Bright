import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/abouthero.png"
        alt="Contact Hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#112135]/55"></div>

      {/* Side Blue Glows */}
      <div className="absolute left-0 top-0 w-[350px] h-full bg-[#112135]/40 blur-[120px]" />
      <div className="absolute right-0 top-0 w-[350px] h-full bg-[#112135]/50 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 items-center gap-10 w-full">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
              <span className="inline-block px-4 py-2 rounded-full bg-[#A50C0C] text-sm font-medium text-white mb-4">
                Contact Us
          </span>

            <h1 className="text-white text-5xl md:text-5xl font-bold leading-tight">
              Let’s Create Something
              <br />
              <span className="text-[#A50C0C]">
                Impactful.
              </span>
            </h1>

            <div className="w-20 h-[2px] bg-[#A50C0C] mt-6 mb-8"></div>

            <p className="text-gray-200 text-2xl leading-relaxed max-w-2xl">
              Have a Project In mind or Plan your Business?
              <br />
              We’d Love to hear from you.
            </p>
          </motion.div>

          
        </div>
      </div>

     
    </section>
  );
};

export default ContactHero;