"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Animated counter ─────────────────────────────────────────────────────── */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const increment = Math.ceil(value / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [started, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Carousel slides (mobile only) ────────────────────────────────────────── */
const SLIDES = [
  {
    src: "/images/whatsapp-image-2025-11-06-at-11.56.24-am-1-1080x720.jpg",
    alt: "Beverly Hills senior students in uniform",
    label: "Senior School",
    sub: "Form 1 — A-Level",
  },
  {
    src: "/images/whatsapp-image-2025-11-06-at-11.56.27-am-2-1080x720.jpg",
    alt: "Beverly Hills junior learners",
    label: "Junior School",
    sub: "ECD — Grade 7",
  },
  {
    src: "/images/whatsapp-image-2025-11-06-at-11.56.28-am-980x653.jpg",
    alt: "Beverly Hills school campus",
    label: "Our Campus",
    sub: "Raylands Estate",
  },
  {
    src: "/images/whatsapp-image-2025-11-06-at-11.56.49-am-1-1012x675.jpg",
    alt: "Beverly Hills faculty and staff",
    label: "Our Faculty",
    sub: "Qualified Educators",
  },
];

/* ─── Hero ──────────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  /* Auto-advance carousel */
  useEffect(() => {
    const t = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-[#0A1C44]"
      role="banner"
      aria-label="Beverly Hills Group of Schools hero section"
    >
      {/* Ambient background */}
      <Image
        src="/images/whatsapp-image-2025-11-06-at-11.56.24-am-1-1080x720.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-center opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,36,0.72)_0%,rgba(4,14,36,0.82)_40%,rgba(10,28,68,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.15),transparent_38%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      {/* ── Main layout ─────────────────────────────────────────────────────── */}
      <div className="page-container relative z-10 flex min-h-screen items-center">
        <div className="grid w-full grid-cols-1 items-center gap-8 pt-24 pb-16 sm:gap-10 sm:pt-28 sm:pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16 lg:py-24">

          {/* ── Text column ─────────────────────────────────────────────────── */}
          <div className="order-2 max-w-2xl lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Image
                src="/images/logo.png"
                alt="Beverly Hills Group of Schools crest"
                width={64}
                height={64}
                priority
                className="h-12 w-12 object-contain drop-shadow-lg sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
              <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm sm:px-3.5 sm:py-1.5">
                <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8C96D] sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                  Enrolling 2026
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontFamily: "var(--font-playfair)" }}
              className="mb-2"
            >
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-base">
                Excellence in Education
              </span>
              <span className="block text-[2.15rem] font-extrabold leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-[4.35rem]">
                Welcome to
              </span>
              <span className="mt-1 block text-[2.5rem] font-extrabold leading-[0.98] shimmer-text sm:text-6xl md:text-7xl lg:text-[5.2rem]">
                Beverly Hills
              </span>
              <span className="mt-3 block text-lg font-bold leading-tight text-white/88 sm:text-2xl md:text-3xl lg:text-4xl">
                Group of Schools
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 mb-6 h-[3px] rounded-full bg-[#C9A84C]"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-8 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-[1.15rem]"
            >
              A co-educational day and boarding school shaping confident, values-driven learners from ECD to
              Advanced Level in Raylands Estate, Zimbabwe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mb-8 flex flex-wrap gap-2.5 text-xs font-semibold text-white/80 sm:text-sm"
              aria-label="School highlights"
            >
              {["Boarding & Day School", "Christian-Based Learning", "ECD to A-Level"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="https://wa.me/263787699048"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-[#C0392B] px-8 py-4 text-base font-extrabold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#DA4A3A] hover:shadow-2xl hover:shadow-red-900/30 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#E8C96D] focus:ring-offset-2 focus:ring-offset-[#0A1C44] sm:w-auto"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enrol Now
              </a>
              <a
                href="tel:+263787699048"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#C9A84C] hover:bg-white/10 hover:text-[#E8C96D] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#0A1C44] sm:w-auto"
              >
                <Phone size={16} aria-hidden="true" />
                Call Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md sm:max-w-xl sm:gap-5 sm:p-5"
              role="list"
              aria-label="School statistics"
            >
              {([
                { value: 15,  suffix: "+",  display: null,   label: "Years" },
                { value: null, suffix: "", display: "1:25", label: "Ratio" },
                { value: 300, suffix: "+",  display: null,   label: "Students" },
              ] as const).map((stat) => (
                <div key={stat.label} className="text-center" role="listitem">
                  <div className="text-xl font-extrabold leading-none text-[#E8C96D] sm:text-2xl">
                    {stat.value !== null
                      ? <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      : stat.display}
                  </div>
                  <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Visual column ────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 relative lg:order-2"
          >

            {/* ── MOBILE PHOTO CAROUSEL (hidden at lg+) ── */}
            <div className="lg:hidden">
              <div
                className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/50"
                style={{ height: "clamp(260px, 62vw, 400px)" }}
              >
                {/* Crossfading photos with Ken Burns zoom */}
                <AnimatePresence>
                  {SLIDES.map((slide, i) =>
                    i === activeSlide ? (
                      <motion.div
                        key={slide.src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.1, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        {/* Ken Burns is applied via CSS animation on the img wrapper */}
                        <div className="absolute inset-0 animate-ken-burns">
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    ) : null
                  )}
                </AnimatePresence>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C44]/80 via-[#0A1C44]/10 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1C44]/25 via-transparent to-transparent z-10 pointer-events-none" />

                {/* Shimmer sweep */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
                >
                  <div className="animate-carousel-sweep absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                </div>

                {/* ── Floating badge: 15+ Years (top-right) ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 220 }}
                  className="absolute right-3 top-3 z-20 rounded-2xl bg-[#E8C96D] px-3 py-2 text-[#0A1C44] shadow-xl shadow-black/30"
                >
                  <div className="text-xl font-extrabold leading-none">15+</div>
                  <div className="mt-0.5 text-[9px] font-bold">Years of Excellence</div>
                </motion.div>

                {/* ── Floating badge: 1:25 ratio (left, vertically centered) ── */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                  className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white backdrop-blur-md shadow-lg"
                >
                  <div className="text-lg font-extrabold leading-none text-[#E8C96D]">1:25</div>
                  <div className="mt-1 text-[11px] font-semibold text-white/80 whitespace-nowrap">Teacher Ratio</div>
                </motion.div>

                {/* ── Floating badge: 300+ students (bottom-left area) ── */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                  className="absolute bottom-[4.5rem] left-3 z-20 rounded-xl border border-[#C9A84C]/30 bg-[#0A1C44]/75 px-4 py-3 text-white backdrop-blur-md shadow-lg"
                >
                  <div className="text-lg font-extrabold leading-none text-[#E8C96D]">300+</div>
                  <div className="mt-1 text-[11px] font-semibold text-white/80 whitespace-nowrap">Students Enrolled</div>
                </motion.div>

                {/* ── Bottom bar: dot indicators (top row) + slide label (below) ── */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4">
                  {/* Dot navigation row */}
                  <div className="flex gap-1.5 mb-2">
                    {SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        aria-label={`View ${SLIDES[i].label}`}
                        className={`h-1.5 rounded-full transition-all duration-400 ${
                          i === activeSlide
                            ? "w-6 bg-[#C9A84C]"
                            : "w-1.5 bg-white/35 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Animated slide label — full width, no clash with dots */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                        {SLIDES[activeSlide].label}
                      </div>
                      <div className="text-[11px] text-white/65 mt-0.5">
                        {SLIDES[activeSlide].sub}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* School name divider strip below carousel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-3 flex items-center gap-3"
              >
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/35">
                  Beverly Hills Group of Schools
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </motion.div>
            </div>

            {/* ── DESKTOP IMAGE COLLAGE (hidden on mobile, shown lg+) ── */}
            <div className="hidden lg:block">
              <div className="relative mx-auto w-full max-w-[38rem]">
                <div className="absolute -inset-2 rounded-[2rem] border border-[#C9A84C]/20" />

                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/25">
                  <Image
                    src="/images/whatsapp-image-2025-11-06-at-11.56.24-am-1-1080x720.jpg"
                    alt="Beverly Hills senior students in navy blazers standing together on school grounds"
                    width={1080}
                    height={720}
                    priority
                    sizes="42vw"
                    className="h-[520px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C44]/70 via-[#0A1C44]/10 to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-7 -left-6 h-36 w-36 overflow-hidden rounded-2xl border-[3px] border-[#0A1C44] shadow-2xl"
                >
                  <Image
                    src="/images/whatsapp-image-2025-11-06-at-11.56.28-am-980x653.jpg"
                    alt="Beverly Hills junior school students in red and gold uniforms"
                    width={980}
                    height={653}
                    sizes="144px"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                  className="absolute -right-5 -top-5 rounded-2xl bg-[#E8C96D] px-4 py-3 text-[#0A1C44] shadow-xl shadow-[#0A1C44]/15"
                >
                  <div className="text-3xl font-extrabold leading-none">15+</div>
                  <div className="mt-0.5 text-xs font-semibold">Years of Excellence</div>
                </motion.div>

                <div
                  aria-hidden="true"
                  className="absolute left-4 top-4 h-10 w-10 rounded-tl-lg border-l-[3px] border-t-[3px] border-[#C9A84C]/70"
                />
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/35 transition-colors hover:text-[#C9A84C] sm:flex"
        aria-label="Scroll to learn more"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
