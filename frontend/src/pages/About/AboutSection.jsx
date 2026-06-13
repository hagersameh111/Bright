import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Lightbulb,
  Rocket,
  Star,
  Gem,
} from "lucide-react";

const values = [
  {
    icon: <Lightbulb size={32} />,
    title: "Creativity",
    text: "We transform ideas into memorable experiences that inspire and connect.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Innovation",
    text: "We continuously explore new ideas, trends, and technologies to keep brands ahead.",
  },
  {
    icon: <Star size={32} />,
    title: "Quality",
    text: "We pay attention to every detail to deliver premium visuals and experiences.",
  },
  {
    icon: <Gem size={32} />,
    title: "Authenticity",
    text: "We create honest and meaningful content that reflects each brand’s identity.",
  },
];

const AboutSection = () => {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(90deg, #000000 0%, #112135 50%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#A50C0C] text-2xl mb-4">
              Who we are
            </p>

            <h2 className="text-white text-4xl md:text-4xl font-bold mb-10">
              About Bright
            </h2>

            <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
              <p>
                Bright is a creative marketing and media agency focused on
                building brands that leave a lasting impression. We combine
                strategy, storytelling, content creation, and digital marketing
                to create experiences that connect with audiences and drive
                real growth.
              </p>

              <p>
                From social media campaigns and branding to photography,
                videography, and media production, we help businesses stand
                out in an increasingly competitive digital world.
              </p>

              <p>
                At Bright, creativity is not just about aesthetics — it’s
                about creating meaningful impact through every visual,
                campaign, and interaction.
              </p>
            </div>
          </motion.div>

          {/* Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/aboutpic.png"
              alt="About Bright"
              loading="lazy"
              className="w-full h-[425 px]"
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0D2139]/90 p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target
                size={42}
                className="text-white"
              />

              <h3 className="text-white text-4xl font-semibold">
                Our Mission
              </h3>
            </div>

            <div className="w-44 h-[2px] bg-[#A50C0C] mb-8"></div>

            <p className="text-gray-200 text-lg leading-relaxed">
              Our mission is to help brands grow through powerful
              storytelling, creative strategy, and impactful digital
              experiences. We aim to create content and campaigns that
              not only look good, but also inspire engagement, build trust,
              and deliver measurable results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0D2139]/90 p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Eye
                size={42}
                className="text-white"
              />

              <h3 className="text-white text-4xl font-semibold">
                Our Vision
              </h3>
            </div>

            <div className="w-44 h-[2px] bg-[#A50C0C] mb-8"></div>

            <p className="text-gray-200 text-lg leading-relaxed">
              Our vision is to become a leading creative marketing agency
              recognized for innovation, authenticity, and impactful brand
              experiences. We aspire to shape modern digital communication by
              helping brands connect with people in more meaningful and
              creative ways.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <p className="text-[#A50C0C] text-2xl mb-4">
            Values
          </p>

          <h2 className="text-white text-4xl md:text-4xl font-bold mb-14">
            What We Believe In
            <span className="text-[#A50C0C]">.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                className="relative overflow-hidden min-h-[320px] p-8 bg-[#0D2139]"
              >
                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#A50C0C]/80 to-transparent"></div>

                <div className="relative z-10">
                  <div className="text-white mb-4">
                    {value.icon}
                  </div>

                  <h3 className="text-white text-xl font-semibold">
                    {value.title}
                  </h3>

                  <div className="w-24 h-[2px] bg-[#A50C0C] my-4"></div>

                  <p className="text-gray-200 text-lg leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;