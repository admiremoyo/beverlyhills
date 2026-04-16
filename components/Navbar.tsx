"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Our School", href: "/#school" },
  { label: "Team", href: "/#team" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-[#0A1C44] text-white text-sm py-2">
        <div className="page-container flex justify-between items-center">
          <span className="text-[#C9A84C] font-medium">
            Zimbabwe&apos;s Premier Independent School &mdash; Raylands Estate, Lower Gweru Road
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+263787699048" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
              <Phone size={14} />
              +263 787 699 048
            </a>
            <a href="mailto:beverlyhillsgroupofschools@gmail.com" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
              <Mail size={14} />
              beverlyhillsgroupofschools@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 top-0"
            : "bg-transparent top-0 lg:top-[40px]"
        }`}
      >
        <nav className="page-container h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/images/logo.png"
              alt="Beverly Hills Group of Schools"
              className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
            />
            <div className="hidden sm:block">
              <div
                className={`font-bold text-sm leading-tight transition-colors duration-300 ${
                  scrolled ? "text-[#0A1C44]" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Beverly Hills
              </div>
              <div className="text-[11px] leading-tight text-[#C9A84C] font-medium">
                Group of Schools
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-[#C9A84C] ${
                    scrolled ? "text-[#0A1C44]" : "text-white"
                  } group`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C9A84C] rounded-full transition-all duration-300 group-hover:w-3/4" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              href="https://wa.me/263787699048"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105"
            >
              Enrol Now
            </motion.a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#0A1C44]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0A1C44] z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Close button */}
                <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img src="/images/logo.png" alt="Beverly Hills" className="w-10 h-10 object-contain" />
                    <div>
                      <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                        Beverly Hills
                      </div>
                      <div className="text-[#C9A84C] text-[11px] font-medium">Group of Schools</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-white p-1"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Links */}
                <ul className="flex-1 py-4 overflow-y-auto">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-6 py-4 text-white hover:text-[#C9A84C] hover:bg-white/5 transition-all duration-200 group"
                      >
                        <span className="font-medium">{link.label}</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom CTA */}
                <div className="p-6 border-t border-white/10">
                  <a
                    href="https://wa.me/263787699048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-[#C0392B] hover:bg-[#a93226] text-white py-3.5 rounded-full font-semibold transition-colors"
                  >
                    Enrol Now
                  </a>
                  <a
                    href="tel:+263787699048"
                    className="flex items-center justify-center gap-2 mt-3 text-white/60 hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    <Phone size={14} />
                    +263 787 699 048
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
