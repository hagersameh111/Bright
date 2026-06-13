// ClientLogos.jsx

const logos = [
  "/event.jpg",
  "/event.jpg",
  "/client1.png",
  "/client1.png",
  "/client1.png",
  "/client1.png",
];

export default function ClientLogos() {
  return (
    <section className="bg-[#04162D] py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D20A11] font-semibold">
            Trusted By
          </span>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-4">
            Brands We've Worked With
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition"
            >
              <img
                src={logo}
                alt="client logo"
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}