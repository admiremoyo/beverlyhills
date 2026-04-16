"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer aria-label="Site footer" className="bg-[#0A1C44] text-white relative">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#C9A84C] via-[#E8D96D] to-[#C9A84C]" />

      {/* Main footer */}
      <div className="page-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png"
                alt="Beverly Hills Group of Schools"
                className="w-14 h-14 object-contain"
              />
              <div>
                <div className="font-bold text-sm text-white leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  Beverly Hills
                </div>
                <div className="text-[#C9A84C] text-xs">Group of Schools</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A school built on imagination, perseverance and sustainability. Nurturing future leaders of Zimbabwe since 2009.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61581574544005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A84C] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://wa.me/263787699048"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Junior School", href: "/#junior" },
                { label: "Senior School", href: "/#senior" },
                { label: "Boarding School", href: "/#boarding" },
                { label: "Admissions & Fees", href: "/admissions" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#C9A84C] text-sm transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/50 group-hover:bg-[#C9A84C] transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                195 Raylands Estate, Along Lower Gweru Road, Zimbabwe
              </li>
              <li>
                <a href="tel:+263787699048" className="flex items-center gap-3 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Phone size={16} className="text-[#C9A84C] shrink-0" />
                  +263 787 699 048
                </a>
              </li>
              <li>
                <a href="mailto:beverlyhillsgroupofschools@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Mail size={16} className="text-[#C9A84C] shrink-0" />
                  beverlyhillsgroupofschools@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Clock size={16} className="text-[#C9A84C] shrink-0" />
                Mon &ndash; Fri: 09:00 &ndash; 17:00
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-6">Get In Touch</h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Ready to give your child a world-class education? Contact us today for admissions information.
            </p>
            <a
              href="https://wa.me/263787699048"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#C0392B] hover:bg-[#a93226] text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 mb-3"
            >
              Apply via WhatsApp
            </a>
            <a
              href="mailto:beverlyhillsgroupofschools@gmail.com"
              className="inline-flex items-center justify-center w-full border border-white/20 hover:border-[#C9A84C] text-white/70 hover:text-[#C9A84C] py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Send an Email
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="page-container py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Beverly Hills Group of Schools. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-white/30 hover:text-[#C9A84C] text-sm transition-colors group focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#0A1C44] rounded"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
