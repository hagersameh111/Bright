import { ArrowRight } from "lucide-react";

export default function ProjectsCTA() {
  return (
    <section className="bg-[#04162D] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#D20A11] to-[#8B0000] p-12 md:p-20">
          <div className="max-w-3xl">
            <span className="text-white/80 font-medium">
              Let's Build Something Great
            </span>

            <h2 className="text-white text-4xl md:text-6xl font-bold mt-4">
              Ready To Start Your Next Project?
            </h2>

            <p className="text-white/80 text-lg mt-6">
              Whether it's branding, digital marketing,
              media production, or business growth, we're
              ready to help turn your vision into results.
            </p>

            <button className="mt-10 bg-white text-[#D20A11] px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">
              Start A Project
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/10" />
          <div className="absolute -right-10 bottom-0 w-48 h-48 rounded-full bg-white/10" />
        </div>
      </div>
    </section>
  );
}