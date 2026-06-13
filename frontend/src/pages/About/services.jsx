import { motion } from "framer-motion";

const services = [
  {
    title: "Media Production",
    description:
      "We believe creativity is the foundation of every memorable brand experience.",
    image: "/proj.jpg",
  },
  {
    title: "Content Creation",
    description:
      "Engaging content designed to connect brands with their audiences.",
    image: "/proj.jpg",
  },
  {
    title: "Brand Strategy",
    description:
      "Building powerful brand identities that leave lasting impressions.",
    image: "/proj.jpg",
  },
  {
    title: "Photography",
    description:
      "Capturing moments and visuals that elevate your brand presence.",
    image: "/proj.jpg",
  },
  {
    title: "Social Media",
    description:
      "Creative campaigns that drive engagement and measurable growth.",
    image: "/proj.jpg",
  },
  {
    title: "Paid Advertising",
    description:
      "Performance-focused campaigns that maximize reach and results.",
    image: "/proj.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(90deg, #000000 0%, #112135 50%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[#A50C0C] text-xl mb-4">
            Our Services
          </p>

          <h2 className="text-white text-4xl md:text-4xl font-bold">
            Creative Solutions.
            <span className="text-[#A50C0C]">
              {" "}Real Impact.
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="relative overflow-hidden h-[240px] group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <h3 className="text-white text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                <div className="w-16 h-[2px] bg-[#A50C0C] mb-5"></div>

                <p className="text-gray-200 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;