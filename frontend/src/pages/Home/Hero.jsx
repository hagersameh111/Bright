import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Hero() {
  
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/bgn.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

    

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-6 text-4xl font-bold text-white md:text-6xl"
          >
            Strategy meets creativity.
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-3xl"
          >
            We create content, campaigns, and visuals that
            connect brands with the right audience.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/contact">
            <button
              className="
                rounded-xl
                bg-[#A50C0C]
                px-8
                py-4
                text-lg
                text-white
                transition
                hover:scale-105
              "
            >
              Start Your Project
            </button>
            </Link>

<Link to="/about">
            <button
              className="
                rounded-xl
                border
                border-[#A50C0C]
                bg-transparent
                px-8
                py-4
                text-lg
                text-white
                transition
                hover:bg-[#A50C0C]
              "
            >
              See Our Services
            </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}