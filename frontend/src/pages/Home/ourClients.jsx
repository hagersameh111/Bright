import { motion } from "framer-motion";

const clients = [
  "/client1.png",
  "/client1.png",
  "/client1.png",
  "/client1.png",
  "/client1.png",
  "/client1.png",
];

const OurClients = () => {
  return (
    <section
      className="w-full overflow-hidden py-16"
      style={{
        background: "#112135",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white">
            <span className="text-[#A50C0C]">Our</span> Clients
          </h2>

          <div className="w-44 h-[2px] bg-[#A50C0C] mx-auto mt-4"></div>
        </motion.div>

        {/* Infinite Logo Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-24 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  loading="lazy"
                  className="h-35 md:h-35 object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;