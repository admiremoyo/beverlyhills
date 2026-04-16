"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section id="team" aria-label="Our teaching team" className="bg-[#0A1C44] py-24 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                            radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full border border-[#C9A84C]/10 animate-spin-slow" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#C9A84C]/5" />

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-[#C9A84C]/40 rounded-full px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">Our Team</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Passionate Educators,
              <br />
              <span className="text-[#C9A84C]">Dedicated to Excellence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/70 leading-relaxed mb-8 text-lg"
            >
              We work as a team but acknowledge the individuality of each member. We embrace diversity, pro-activeness
              and plurality of thought within a framework of collective principles &mdash; attending to students&apos; needs
              promptly, practically and effectively.
            </motion.p>

            {/* Team stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 md:gap-6"
              role="list"
              aria-label="Team statistics"
            >
              {[
                { value: "100%", label: "Qualified Staff" },
                { value: "1:25", label: "Student Ratio" },
                { value: "24/7", label: "Boarding Care" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  role="listitem"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-4 text-center cursor-default"
                >
                  <div className="text-[#C9A84C] text-2xl md:text-3xl font-extrabold">{stat.value}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="/images/whatsapp-image-2025-11-06-at-11.56.49-am-1-1012x675.jpg"
                  alt="Beverly Hills Group of Schools teaching staff and faculty members"
                  loading="lazy"
                  className="w-full h-72 sm:h-80 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C44]/60 to-transparent" />
              </div>

              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 left-2 sm:-bottom-6 sm:left-4 lg:-bottom-8 lg:-left-8 bg-[#C9A84C] rounded-2xl p-4 sm:p-5 lg:p-6 max-w-[200px] sm:max-w-[260px] shadow-2xl"
              >
                <Quote size={20} className="text-[#0A1C44] mb-2" />
                <p className="text-[#0A1C44] text-sm font-semibold leading-snug">
                  &ldquo;We inspire children to be just, ethical citizens and wise, principled leaders.&rdquo;
                </p>
              </motion.div>

              {/* Corner accent */}
              <div aria-hidden="true" className="absolute top-3 right-3 lg:top-4 lg:right-4 w-10 h-10 sm:w-12 sm:h-12 border-t-4 border-r-4 border-[#C9A84C] rounded-tr-xl" />
            </div>
          </motion.div>
        </div>

        {/* Features row */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "\uD83C\uDF93", title: "Expert Faculty", desc: "All teachers are qualified and certified professionals" },
            { icon: "\u26EA", title: "Christian Values", desc: "Faith-based environment with morning devotions daily" },
            { icon: "\uD83C\uDFC6", title: "Award-Winning", desc: "Recognized for academic and sporting achievements" },
            { icon: "\uD83C\uDF0D", title: "Global Outlook", desc: "Preparing students for the modern international world" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-white font-bold mb-2 text-lg">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
