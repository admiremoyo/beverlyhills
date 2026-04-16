"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    value: "+263 787 699 048",
    href: "tel:+263787699048",
    color: "#0A1C44",
    description: "Call us during office hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+263 787 699 048",
    href: "https://wa.me/263787699048",
    color: "#25D366",
    description: "Chat with us anytime",
  },
  {
    icon: Mail,
    title: "Email",
    value: "beverlyhillsgroupofschools@gmail.com",
    href: "mailto:beverlyhillsgroupofschools@gmail.com",
    color: "#C0392B",
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "195 Raylands Estate, Along Lower Gweru Road, Zimbabwe",
    href: "#",
    color: "#C9A84C",
    description: "Visit us in person",
  },
  {
    icon: Clock,
    title: "Office Hours",
    value: "Monday \u2013 Friday: 09:00\u201317:00",
    href: "#",
    color: "#6B7280",
    description: "We're here to help",
  },
  {
    icon: ExternalLink,
    title: "Facebook",
    value: "Beverly Hills Group of Schools",
    href: "https://www.facebook.com/profile.php?id=61581574544005",
    color: "#1877F2",
    description: "Follow us for updates",
  },
];

export default function ContactPage() {
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
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border border-[#C9A84C]/10 animate-spin-slow" />
        <div className="page-container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#C9A84C]/40 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;d love to hear from you. Reach out to arrange a visit, request a prospectus, or ask any questions
            about Beverly Hills Group of Schools.
          </motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="bg-[#F8F6F1] py-20">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left: image + tagline */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-28">
                <div className="rounded-2xl overflow-hidden shadow-xl mb-6 group">
                  <img
                    src="/images/whatsapp-image-2025-11-06-at-11.56.27-am-1076x717.jpg"
                    alt="Beverly Hills School"
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="bg-[#0A1C44] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-[#C9A84C] mb-3 text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                    Visit Our Campus
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Get in touch to arrange a visit and see first-hand what we do to transform children into educated
                    beings, inspiring them to be just and ethical citizens.
                  </p>
                  <a
                    href="https://wa.me/263787699048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[#C0392B] hover:bg-[#a93226] text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                  >
                    Book a Visit
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: contact cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactCards.map((card, i) => (
                  <motion.a
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                        style={{ background: `${card.color}15` }}
                      >
                        <card.icon size={20} style={{ color: card.color }} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">{card.title}</div>
                        <div className="font-semibold text-[#0A1C44] text-sm leading-tight break-all">{card.value}</div>
                        <div className="text-gray-400 text-xs mt-1">{card.description}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl bg-[#0A1C44] h-72 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }} />
            <div className="text-center text-white/60 relative z-10">
              <MapPin size={48} className="mx-auto mb-3 text-[#C9A84C]" />
              <p className="font-bold text-white text-xl" style={{ fontFamily: "var(--font-playfair)" }}>195 Raylands Estate</p>
              <p className="text-sm mt-1">Along Lower Gweru Road, Zimbabwe</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
