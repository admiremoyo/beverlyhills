"use client";

import { useRef } from "react";
import { BookOpen, Heart, Star, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Rigorous curriculum from ECD to A-Level, preparing students for national and international success.",
  },
  {
    icon: Heart,
    title: "Christian Foundation",
    description: "A safe, faith-based environment encouraging students to discover their God-given potential.",
  },
  {
    icon: Star,
    title: "Holistic Development",
    description: "Balancing academics with sports, arts and co-curricular activities for well-rounded growth.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Qualified, passionate teachers maintaining a 1:25 teacher-student ratio for personal attention.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" aria-label="About Beverly Hills Group of Schools" className="bg-white py-24 lg:py-32">
      <div className="page-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">About Us</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A1C44] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Who We Are
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            Discover what makes Beverly Hills a leading independent institution in Zimbabwe.
          </p>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mt-6" aria-hidden="true" />
        </motion.div>

        {/* Content grid */}
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/images/whatsapp-image-2025-11-06-at-11.56.28-am-980x653.jpg"
                alt="Students at Beverly Hills Group of Schools campus in Raylands Estate"
                loading="lazy"
                className="w-full h-60 sm:h-72 md:h-80 lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C44]/30 to-transparent" aria-hidden="true" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 right-4 lg:-bottom-6 lg:right-6 bg-[#0A1C44] rounded-2xl p-5 lg:p-6 shadow-2xl animate-glow"
            >
              <div className="text-[#C9A84C] text-3xl font-extrabold">15+</div>
              <div className="text-white text-xs mt-1">Years of Excellence</div>
            </motion.div>
            {/* Gold accent corner */}
            <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-10 h-10 sm:w-12 sm:h-12 border-t-4 border-l-4 border-[#C9A84C] rounded-tl-xl" aria-hidden="true" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1C44] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              An Oasis of Excellence in Southern Africa
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
              Beverly Hills Group of Schools is one of Zimbabwe&apos;s leading independent schools, dedicated to nurturing
              young minds through a balanced mix of academic excellence, moral values, and practical skills.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base sm:text-lg">
              Bordered by the picturesque Quiet Waters Nature Reserve, we offer a holistic, co-educational, full boarding
              experience. We are proud of the well-rounded, polite and responsible students who leave through our gates
              as future leaders of Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/admissions"
                aria-label="View admissions information"
                className="inline-flex items-center justify-center bg-[#0A1C44] hover:bg-[#112258] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-navy-500/20 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2"
              >
                View Admissions
              </a>
              <a
                href="/contact"
                aria-label="Contact Beverly Hills Group of Schools"
                className="inline-flex items-center justify-center border-2 border-[#0A1C44] text-[#0A1C44] hover:bg-[#0A1C44] hover:text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div role="list" aria-label="Our core values" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              role="listitem"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[#F8F6F1] rounded-2xl p-7 group hover:bg-[#0A1C44] transition-all duration-400 hover:shadow-2xl cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-[#C9A84C]/20 group-hover:bg-[#C9A84C]/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                <v.icon size={24} className="text-[#C9A84C]" />
              </div>
              <h4 className="font-bold text-lg text-[#0A1C44] group-hover:text-white mb-3 transition-colors">{v.title}</h4>
              <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
