import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const AboutHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/abouthero.png"
        alt="About Hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#112135]/50"></div>

      {/* Blue Glow Left */}
      <div className="absolute left-0 top-0 w-[350px] h-full bg-[#112135]/40 blur-[120px]" />

      {/* Blue Glow Right */}
      <div className="absolute right-0 top-0 w-[350px] h-full bg-[#112135]/50 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 items-center gap-10 w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
              <span className="inline-block px-4 py-2 rounded-full bg-[#A50C0C] text-sm font-medium text-white mb-4">
            About Us
          </span>

            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              We Create Brands People
              <br />
              <span className="text-[#A50C0C]">
                Remember.
              </span>
            </h1>

            <p className="text-gray-200 text-xl md:text-2xl leading-relaxed max-w-2xl mt-8">
              Bright is a creative marketing and media agency
              focused on building impactful digital experiences
              through strategy, storytelling, and visual creativity.
            </p>
<Link to="/projects">
            <button
              className="mt-10 px-10 py-4 rounded-xl text-white text-2xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#A50C0C",
              }}
            >
              Explore Our Work
            </button>
            </Link>
          </motion.div>

       
        </div>
      </div>

   
    </section>
  );
};

export default AboutHero;