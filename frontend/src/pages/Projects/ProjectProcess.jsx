import {
  Search,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We analyze your goals, audience, competitors, and opportunities.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy",
    description:
      "We create a clear roadmap tailored to your business objectives.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execution",
    description:
      "Our team delivers creative solutions with precision and speed.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Growth",
    description:
      "We measure results, optimize performance, and scale success.",
  },
];

export default function ProjectProcess() {
  return (
    <section className="bg-[#031225] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#D20A11] font-semibold uppercase tracking-wider">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            How We Bring Ideas To Life
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Every successful project follows a proven process that
            transforms ideas into measurable results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative bg-[#071E3D] rounded-3xl p-8 border border-white/5 hover:border-[#D20A11]/40 transition"
              >
                <span className="absolute top-6 right-6 text-5xl font-bold text-white/5">
                  {step.number}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-[#D20A11] flex items-center justify-center mb-6">
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="text-white text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}