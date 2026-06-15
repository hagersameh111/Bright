const projects = [
  {
    id: 1,
    title: "Brand Campaign",
    category: "Marketing",
    image: "/abouthero.png",
    size: "large",
  },
  {
    id: 2,
    title: "Corporate Shoot",
    category: "Media",
    image: "/proj.jpg",
    size: "tall",
  },
  {
    id: 3,
    title: "Website Design",
    category: "Development",
    image: "/proj1.jpeg",
    size: "small",
  },
  {
    id: 4,
    title: "Social Strategy",
    category: "Marketing",
    image: "/proj2.jpeg",
    size: "small",
  },
  {
    id: 5,
    title: "Business Expansion",
    category: "Business",
    image: "/whowe.png",
    size: "wide",
  },
  {
    id: 6,
    title: "Product Launch",
    category: "Branding",
    image: "/sched.png",
    size: "medium",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="bg-[#04162D] py-20">
        
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                relative overflow-hidden rounded-3xl group cursor-pointer

                ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${project.size === "wide" ? "md:col-span-2" : ""}
                ${project.size === "tall" ? "md:row-span-2" : ""}
              `}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[#D20A11] text-sm font-medium">
                  {project.category}
                </span>

                <h3 className="text-white text-2xl font-bold mt-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}