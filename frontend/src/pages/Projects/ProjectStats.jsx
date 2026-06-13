// ProjectStats.jsx

const stats = [
  {
    value: "250+",
    label: "Projects Delivered",
  },
  {
    value: "50+",
    label: "Brands Served",
  },
  {
    value: "15+",
    label: "Industries",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function ProjectStats() {
  return (
    <section className="bg-[#031225] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/85 rounded-3xl p-10 text-center border border-white/5"
            >
              <h3 className="text-[#D20A11] text-5xl font-bold mb-4">
                {stat.value}
              </h3>

              <p className="text-gray text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}