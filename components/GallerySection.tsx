"use client";

import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    title: "Career Day 2025",
    description:
      "Learners come dressed as their future selves \u2014 from doctors and engineers to police officers and soldiers \u2014 expressing their dreams and gaining inspiration for their life goals.",
    images: [
      "/images/whatsapp-image-2025-11-06-at-11.56.57-am-1-765x1020.jpg",
      "/images/whatsapp-image-2025-11-06-at-11.56.54-am-1-1080x720.jpg",
    ],
    tag: "Annual Event",
    tagColor: "#1a6b3c",
  },
  {
    title: "Swimming Day",
    description:
      "Students develop water confidence, physical fitness, and team spirit. Guided by our qualified instructors, pupils learn essential swimming techniques and enjoy friendly competitions.",
    images: [
      "/images/whatsapp-image-2025-11-06-at-11.56.20-am-1-1020x574.jpg",
      "/images/whatsapp-image-2025-11-06-at-11.56.23-am-1-574x1020.jpg",
    ],
    tag: "Sports & Health",
    tagColor: "#0A1C44",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <section id="gallery" aria-label="School life and events gallery" className="bg-white py-24 lg:py-32">
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
              <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">School Life</span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A1C44] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Beyond the Classroom
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg">
              At Beverly Hills, we believe in nurturing the whole child. Our rich calendar of events builds character,
              confidence, and lifelong memories.
            </p>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Events */}
          <div className="space-y-20">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Text */}
                  <div className="lg:col-span-1 flex flex-col justify-center">
                    <span
                      className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 w-fit"
                      style={{ background: `${event.tagColor}15`, color: event.tagColor }}
                    >
                      {event.tag}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0A1C44] mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">{event.description}</p>
                  </div>

                  {/* Images with lightbox */}
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {event.images.map((img, j) => (
                      <motion.div
                        key={j}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer relative"
                        style={{ aspectRatio: j === 0 ? "4/3" : "3/4" }}
                        onClick={() => setLightbox(img)}
                      >
                        <img
                          src={img}
                          alt={`${event.title} — photo ${j + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[#0A1C44]/0 group-hover:bg-[#0A1C44]/40 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <ZoomIn size={24} className="text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightbox}
              alt="Gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
