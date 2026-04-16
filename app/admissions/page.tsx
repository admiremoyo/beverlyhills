"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const feePackages = [
  {
    title: "ECD A & B",
    subtitle: "Ages 3\u20136",
    fee: "$250",
    period: "per term",
    image: "/images/whatsapp-image-2025-11-06-at-11.56.27-am-2-1076x717.jpg",
    color: "#1a6b3c",
    highlight: false,
    includes: [
      "Qualified ECD teacher",
      "Play-based learning",
      "Nutritious lunch",
      "Safe, caring environment",
      "Structured daily programme",
    ],
  },
  {
    title: "Grade 1 \u2013 7",
    subtitle: "Primary School",
    fee: "$300",
    period: "per term",
    image: "/images/whatsapp-image-2025-11-06-at-11.56.27-am-2-1080x720.jpg",
    color: "#0A1C44",
    highlight: true,
    includes: [
      "Fully qualified teachers",
      "Core & elective subjects",
      "Nutritious lunch included",
      "ICT & computer lab access",
      "Sports & co-curricular",
    ],
  },
  {
    title: "Form 1 \u2013 6",
    subtitle: "Secondary School",
    fee: "$450",
    period: "per term",
    image: "/images/whatsapp-image-2025-11-06-at-11.56.24-am-1-1076x717.jpg",
    color: "#7B2D2D",
    highlight: false,
    includes: [
      "ZIMSEC & Cambridge prep",
      "Science laboratory",
      "Computer Science classes",
      "Business Studies & Agriculture",
      "University guidance",
    ],
  },
  {
    title: "Boarding School",
    subtitle: "Full Boarding \u2014 All levels",
    fee: "$850",
    period: "per term",
    image: "/images/dsc-3238-300x200.jpg",
    color: "#C9A84C",
    highlight: false,
    includes: [
      "3 nutritious meals daily",
      "Supervised study time",
      "24/7 pastoral care",
      "Weekend recreation",
      "Laundry facilities",
    ],
  },
];

const inclusions = [
  "Lunch provided daily",
  "Qualified teachers (1:25 ratio)",
  "Christian learning environment",
  "Modern facilities",
  "Extra co-curricular activities",
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#0A1C44] pt-40 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-[#C9A84C]/10 animate-spin-slow" />
        <div className="page-container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#C9A84C]/40 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">2026 Enrolment Open</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Admissions &amp;
            <br />
            <span className="shimmer-text">Fees Structure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            At Beverly Hills Group of Schools, we are committed to offering quality education at an affordable cost.
            Our fees structure for the 2026 academic year is as follows:
          </motion.p>
          </div>
        </div>
      </div>

      {/* Fee packages */}
      <section className="bg-[#F8F6F1] py-20">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {feePackages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ${
                  pkg.highlight ? "ring-2 ring-[#C9A84C] shadow-xl" : ""
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-[#C9A84C] text-[#0A1C44] text-xs font-bold text-center py-2 tracking-widest uppercase z-10">
                    Most Popular
                  </div>
                )}
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent, ${pkg.color}CC)` }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white/80 text-xs font-semibold uppercase tracking-wide">{pkg.subtitle}</div>
                    <div className="text-white text-xl font-extrabold" style={{ fontFamily: "var(--font-playfair)" }}>
                      {pkg.title}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-end gap-1 mb-6">
                    <span
                      className="text-4xl font-extrabold"
                      style={{ color: pkg.color }}
                    >
                      {pkg.fee}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">USD / {pkg.period}</span>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle size={15} style={{ color: pkg.color }} className="shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/263787699048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100"
                    style={{ background: pkg.color, color: pkg.color === "#C9A84C" ? "#0A1C44" : "white" }}
                  >
                    Apply Now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0A1C44] rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 border border-[#C9A84C]/40 rounded-full px-5 py-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">All Inclusive</span>
                </div>
                <h3
                  className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  What&apos;s Included in Every Package
                </h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  Every child at Beverly Hills benefits from our comprehensive package of services designed to support
                  their full development.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inclusions.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 glass rounded-xl px-4 py-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0 text-[#0A1C44] font-extrabold text-xs">
                      {i + 1}
                    </div>
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 mb-6 text-lg">Ready to begin? Contact us on WhatsApp or by phone to start the enrolment process.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/263787699048"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 hover:scale-105 active:scale-100"
              >
                Apply via WhatsApp
              </a>
              <a
                href="tel:+263787699048"
                className="inline-flex items-center justify-center gap-2 bg-[#0A1C44] hover:bg-[#112258] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-xl"
              >
                Call +263 787 699 048
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
