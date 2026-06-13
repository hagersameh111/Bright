// components/projects/ProjectsFilter.jsx

import { Funnel } from "lucide-react";

const categories = [
  "All Projects",
  "Marketing",
  "Media Production",
  "Branding",
  "Web Development",
  "Business Development",
];

export default function ProjectsFilter({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <section className="bg-[#04162D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto py-8 gap-6">
          <div className="flex gap-5 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-2xl transition-all duration-300 whitespace-nowrap text-lg
                  ${
                    activeCategory === category
                      ? "bg-[#D20A11] text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button className="hidden md:flex items-center gap-3 text-white hover:text-[#D20A11] transition">
            <span className="text-lg">Filter</span>
            <Funnel size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}