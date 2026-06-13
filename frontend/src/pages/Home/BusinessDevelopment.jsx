// components/BusinessDevelopment.jsx

import {
  Handshake,
  Globe,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Build meaningful collaborations that expand reach, strengthen brand presence, and unlock new revenue streams.",
  },
  {
    icon: Globe,
    title: "Market Expansion",
    description:
      "Identify new markets, target audiences, and growth opportunities to accelerate business success.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Develop data-driven campaigns and sales strategies that attract qualified prospects and increase conversions.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description:
      "Optimize business processes and marketing performance to maximize profitability and long-term value.",
  },
];

export default function BusinessDevelopment() {
  return (
    <section className="py-24 bg-[#112135]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#A50C0C] text-sm font-medium text-white mb-4">
            Business Development
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Turning Opportunities Into Growth
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            We help businesses identify new opportunities, build valuable
            partnerships, and develop strategies that drive long-term success.
            Through market research, strategic planning, and
            performance-driven execution, we create pathways for sustainable
            growth and measurable results.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-black text-red-500 flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { number: "150+", label: "Projects Delivered" },
            { number: "50+", label: "Business Partners" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "10+", label: "Industries Served" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50"
            >
              <h3 className="text-4xl font-bold text-black mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-black/45 rounded-[32px] p-10 md:p-16 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Business?
          </h3>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let’s create a growth strategy tailored to your goals and turn
            potential opportunities into measurable success.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#A50C0C] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Book a Consultation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}