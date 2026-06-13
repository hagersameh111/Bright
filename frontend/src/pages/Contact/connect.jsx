import { motion } from "framer-motion";
import {

  MapPin,
} from "lucide-react";
import { FaBehance, FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";

const ConnectSection = () => {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(90deg, #000000 0%, #112135 50%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#A50C0C] text-xl mb-6">
              Let’s Connect
            </p>

            <h2 className="text-white text-4xl md:text-4xl font-bold leading-tight mb-12">
              Follow Connect
              <br />
              Stay Inspired.
            </h2>

            <div className="flex gap-4 flex-wrap">
             <a
                href="#"
                className="w-16 h-16 rounded-full bg-[#1B2E45] flex items-center justify-center text-white hover:bg-[#A50C0C] transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a> 

              <a
                href="#"
                className="w-16 h-16 rounded-full bg-[#1B2E45] flex items-center justify-center text-white hover:bg-[#A50C0C] transition-all duration-300"
              >
                <FaBehance size={24} />
              </a>

              <a
                href="#"
                className="w-16 h-16 rounded-full bg-[#1B2E45] flex items-center justify-center text-white hover:bg-[#A50C0C] transition-all duration-300"
              >
                <FaTiktok size={24} />
              </a>

               <a
                href="#"
                className="w-16 h-16 rounded-full bg-[#1B2E45] flex items-center justify-center text-white hover:bg-[#A50C0C] transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a> 
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl border border-white/10"
          >
            {/* Map Background */}
            <img
              src="/map.png"
              alt="Location"
              loading="lazy"
              className="w-full h-[320px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#021325]/40"></div>

            {/* Red Location Pin */}
            <div className="absolute left-[32%] top-1/2 -translate-y-1/2">
              <MapPin
                size={40}
                className="text-[#FF0000] drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]"
                fill="currentColor"
              />
            </div>

            {/* Info Card */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 bg-[#021325]/95 border border-white/10 rounded-3xl p-8 w-[280px]">
              <h3 className="text-white text-2xl font-semibold mb-4">
                Bright Marketing.
              </h3>

              <div className="w-16 h-[2px] bg-[#A50C0C] mb-5"></div>

              <p className="text-white text-lg mb-4">
                New York, USA
              </p>

              <div className="w-12 h-[2px] bg-[#A50C0C] mb-5"></div>

              <p className="text-gray-300 text-md leading-relaxed">
                we’re always open to new ideas,
                partnerships and opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;