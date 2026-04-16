"use client";

import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section aria-label="Enrolment call to action" className="bg-[#F8F6F1] py-20 sm:py-24">
      <div className="page-container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-[#0A1C44] px-6 py-12 text-center sm:px-8 md:px-12 md:py-16"
        >
          {/* Animated background decoration */}
          <div aria-hidden="true" className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#C9A84C]/10 -translate-y-1/2 translate-x-1/2 animate-float" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#C0392B]/10 translate-y-1/2 -translate-x-1/2" style={{ animationDelay: "3s" }} />
          <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#C9A84C]/5 animate-spin-slow" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 px-5 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">Enrol for 2026</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-6 text-2xl sm:text-3xl font-extrabold text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Give Your Child the
              <br />
              <span className="shimmer-text">Education They Deserve</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mx-auto mb-10 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8"
            >
              Places are limited. Contact us today to arrange a visit, request a prospectus, or begin the enrolment
              process for the 2026 academic year.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <a
                href="https://wa.me/263787699048"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#C0392B] px-8 py-4 text-base font-extrabold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#DA4A3A] hover:shadow-2xl hover:shadow-red-900/30 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#E8C96D] focus:ring-offset-2 focus:ring-offset-[#0A1C44] sm:text-lg"
              >
                Apply via WhatsApp
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+263787699048"
                className="glass inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:text-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#0A1C44] sm:text-lg"
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
