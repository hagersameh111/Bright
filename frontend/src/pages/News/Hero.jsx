import { motion } from "framer-motion";

const NewsHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/earth.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#112135]/70"></div>

      {/* Blue Glow */}
      <div className="absolute left-0 top-0 w-[350px] h-full bg-[#112135]/40 blur-[120px]" />
      <div className="absolute right-0 top-0 w-[350px] h-full bg-[#112135]/40 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            Bright Global{" "}
            <span className="text-[#A50C0C]">
              News.
            </span>
          </h1>

          <p className="text-gray-200 text-xl md:text-2xl leading-relaxed mt-8">
            Bright News delivers real-time global coverage,
            breaking headlines, and in-depth reporting designed
            for a fast-moving world. From international affairs
            and technology to business, media, and culture.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsHero;