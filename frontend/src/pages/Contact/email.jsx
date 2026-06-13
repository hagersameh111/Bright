import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock3,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(90deg, #000000 0%, #112135 50%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[420px_1fr] gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#A50C0C] text-2xl mb-6">
              Get In Touch
            </p>

            <h2 className="text-white text-4xl font-bold leading-tight">
              We’re Here
              To Help
            </h2>

            <div className="w-16 h-[2px] bg-[#A50C0C] mt-6 mb-12"></div>

            {/* Email */}
            <div className="flex gap-8 items-start">
              <div className="w-14 h-14 rounded-full bg-[#1B2E45] flex items-center justify-center text-[#FF1A1A]">
                <Mail size={24} />
              </div>

              <div>
                <h3 className="text-white text-xl mb-2">
                  Email
                </h3>

                <p className="text-gray-400 text-lg">
                  bright.marketing@email.com
                </p>
              </div>
            </div>

            <div className="w-[2px] h-10 bg-[#A50C0C] ml-7 my-2"></div>

            {/* Phone */}
            <div className="flex gap-8 items-start">
              <div className="w-14 h-14 rounded-full bg-[#1B2E45] flex items-center justify-center text-[#FF1A1A]">
                <Phone size={24} />
              </div>

              <div>
                <h3 className="text-white text-xl mb-2">
                  Phone
                </h3>

                <p className="text-gray-400 text-lg">
                  +5001234567890
                </p>
              </div>
            </div>

            <div className="w-[2px] h-10 bg-[#A50C0C] ml-7 my-2"></div>

            {/* Hours */}
            <div className="flex gap-8 items-start">
              <div className="w-14 h-14 rounded-full bg-[#1B2E45] flex items-center justify-center text-[#FF1A1A]">
                <Clock3 size={24} />
              </div>

              <div>
                <h3 className="text-white text-xl mb-2">
                  Working Hours
                </h3>

                <p className="text-gray-400 text-lg">
                  Mon-Fri: 9:00 AM-6:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#021325]/95 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <p className="text-[#A50C0C] text-2xl mb-4">
              Send Us a Message
            </p>

            <h3 className="text-white text-4xl font-bold mb-8">
              Tell us about your project.
            </h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 h-16 text-white outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 h-16 text-white outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 h-16 text-white outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 h-16 text-white outline-none"
                />
              </div>

              <textarea
                rows="7"
                placeholder="Write your message..."
                className="w-full bg-transparent border border-white/20 rounded-xl p-5 text-white outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full md:w-[70%] mx-auto block h-16 rounded-xl bg-[#A50C0C] text-white text-xl font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>

              <p className="text-center text-gray-400 mt-4">
                We will get to you as soon as possible
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;