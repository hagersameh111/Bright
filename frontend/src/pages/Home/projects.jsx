import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LatestProjects = () => {
  const projects = [
    {
      id: 1,
      image: "/proj1.jpeg",
      category: "Digital marketing",
      title: "Hotel Launching Campaign",
    },
    {
      id: 2,
      image: "/proj2.jpeg",
      category: "shooting session",
      title: "Brand Content shooting",
    },
  ];

  return (
    <section
      className="w-full py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #112135 38%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl md:text-4xl font-light">
            Latest projects
          </h2>

          <div className="w-46 h-[2px] bg-[#A50C0C] mx-auto mt-2"></div>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45"></div>

              {/* Content */}
              <div className="absolute bottom-14 left-8 z-10">
                <p className="text-[#A50C0C] text-xl mb-4">
                  {project.category}
                </p>

                <h3 className="text-white text-3xl lg:text-5xl font-semibold max-w-md leading-tight">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <Link to="/projects">
          <button
            className="px-12 py-4 rounded-2xl text-white text-2xl border border-[#A50C0C] hover:bg-[#A50C0C] transition-all duration-300"
          >
            View All Projects
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestProjects;