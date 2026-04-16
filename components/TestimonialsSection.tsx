"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Mrs. T. Moyo",
    role: "Parent \u2014 Grade 5 Student",
    quote:
      "Beverly Hills has been a transformative experience for my child. The teachers are dedicated, the environment is safe, and the values they instil go beyond what any textbook can teach. My son loves going to school every day.",
    rating: 5,
  },
  {
    name: "Mr. D. Sibanda",
    role: "Parent \u2014 Form 3 Boarder",
    quote:
      "Choosing Beverly Hills for our daughter was the best decision we ever made. The boarding facilities are excellent, and the pastoral care ensures she is always looked after. Her grades have improved tremendously since she joined.",
    rating: 5,
  },
  {
    name: "Mrs. L. Chigwedere",
    role: "Parent \u2014 ECD B Student",
    quote:
      "From the very first day, we knew this was the right school. The ECD programme is incredible \u2014 play-based learning with qualified teachers who truly care about every child\u2019s development. Our little one has blossomed here.",
    rating: 5,
  },
  {
    name: "Mr. K. Nyathi",
    role: "Parent \u2014 Form 6 Student",
    quote:
      "Beverly Hills prepared our son for his A-Level examinations with excellent teachers and resources. The Christian values and discipline have shaped him into a young man we are incredibly proud of.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section aria-label="Parent testimonials" className="bg-[#F8F6F1] py-24 lg:py-32 overflow-hidden">
      <div className="page-container-narrow">
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
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A1C44] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Parents Say
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full" />
        </motion.div>

        {/* Testimonial card */}
        <div className="relative" role="region" aria-roledescription="carousel" aria-label="Parent testimonials carousel">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 min-h-[280px] flex items-center relative overflow-hidden">
            {/* Large decorative quote */}
            <div className="absolute top-6 left-8 text-[#C9A84C]/10">
              <Quote size={80} />
            </div>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full text-center"
                aria-live="polite"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#0A1C44] text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#0A1C44] text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {testimonials[current].name.charAt(0)}{testimonials[current].name.split(" ").pop()?.charAt(0)}
                  </div>
                  <div className="font-bold text-[#0A1C44] text-lg">{testimonials[current].name}</div>
                  <div className="text-gray-500 text-sm">{testimonials[current].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-[#0A1C44]/20 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-white text-[#0A1C44] flex items-center justify-center transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#C9A84C] w-8" : "bg-[#0A1C44]/20 w-2 hover:bg-[#C9A84C]/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-[#0A1C44]/20 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-white text-[#0A1C44] flex items-center justify-center transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
