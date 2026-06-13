import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    "Social Media Marketing",
    "Content Creation",
    "Brand Strategy",
    "Media Production",
    "Photography & Shooting",
    "Paid Advertising",
  ];

  const links = [
    "Home",
    "About",
    "Projects",
    "Events",
    "News",
    "Contact",
  ];

  return (
    <footer
      className="w-full py-16"
      style={{
        background: "#112135",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-24">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-white text-xl font-light mb-6">
              Bright Marketing
            </h3>

            <div className="w-48 h-[2px] bg-[#A50C0C] mb-8"></div>

            <p className="text-gray-200 text-lg leading-loose max-w-sm">
              Creative marketing, media production,
              <br />
              and digital experiences designed
              <br />
              to help brands grow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#A50C0C] flex items-center justify-center text-white hover:bg-[#A50C0C] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#A50C0C] flex items-center justify-center text-white hover:bg-[#A50C0C] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#A50C0C] flex items-center justify-center text-white hover:bg-[#A50C0C] transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#A50C0C] flex items-center justify-center text-white hover:bg-[#A50C0C] transition"
              >
                <FaTiktok />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white text-xl font-light mb-6">
              Services
            </h3>

            <div className="w-28 h-[2px] bg-[#A50C0C] mb-8"></div>

            <ul className="space-y-5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-200 text-lg flex items-center gap-3"
                >
                  <span className="text-[#A50C0C] text-2xl">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-white text-xl font-light mb-6">
              Quick Links
            </h3>

            <div className="w-28 h-[2px] bg-[#A50C0C] mb-8"></div>

            <ul className="space-y-5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-200 text-lg flex items-center gap-3 hover:text-white transition"
                  >
                    <span className="text-[#A50C0C] text-2xl">•</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bright Marketing. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;