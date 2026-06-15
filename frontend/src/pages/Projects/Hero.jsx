export default function ProjectsHero() {
  return (
    <section className="relative h-[75vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/abouthero.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#02152f]/80" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02152f]/20 via-[#02152f]/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
             <span className="inline-block px-4 py-2 rounded-full bg-[#A50C0C] text-sm font-medium text-white mb-4">
            About Us
          </span>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold text-white leading-tight">
            Projects That Turn
            <br />
            Ideas Into
            <span className="text-[#D20A11]"> Results.</span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-gray-300 leading-relaxed max-w-xl">
            From branding and digital campaigns to media production and
            business growth initiatives, we create impactful projects that
            help businesses stand out and scale.
          </p>

          
        </div>
      </div>
    </section>
  );
}