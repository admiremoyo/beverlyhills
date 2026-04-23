"use client";

import Image from "next/image";
import { GraduationCap, BookOpen, Home as HomeIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const schools = [
  {
    id: "junior",
    icon: BookOpen,
    tag: "Junior School",
    title: "Junior School",
    subtitle: "ECD A & B - Grade 7",
    description:
      "Our Junior School provides a strong academic foundation for young learners. We emphasize literacy, numeracy, creativity, and moral development through play, exploration, and guided instruction.",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Shona", "ICT", "Physical Education"],
    image: "/images/whatsapp-image-2025-11-06-at-11.56.27-am-2-1080x720.jpg",
    color: "#1A6B3C",
    fee: "USD $170-220 / term",
  },
  {
    id: "senior",
    icon: GraduationCap,
    tag: "Senior School",
    title: "Senior School",
    subtitle: "Form 1 - Form 6",
    description:
      "The Senior School offers a broad curriculum preparing learners for national and international examinations. We combine traditional subjects with modern electives for the modern world.",
    subjects: ["Mathematics", "English", "Sciences", "Computer Science", "Business Studies", "Agriculture", "Arts"],
    image: "/images/whatsapp-image-2025-11-06-at-11.56.24-am-1-1080x720.jpg",
    color: "#0A1C44",
    fee: "USD $270-320 / term",
  },
  {
    id: "boarding",
    icon: HomeIcon,
    tag: "Full Boarding",
    title: "Boarding School",
    subtitle: "Boys & Girls",
    description:
      "We offer comfortable, supervised boarding facilities for both boys and girls. Our boarding life encourages independence, teamwork, and responsibility in a family-like atmosphere.",
    subjects: ["Nutritious Meals", "Supervised Study", "Weekend Recreation", "Pastoral Care", "Security", "Sports"],
    image: "/images/dsc-3239-300x200.jpg",
    color: "#7B2D2D",
    fee: "USD $620 / term",
  },
];

export default function SchoolsSection() {
  return (
    <section id="school" className="bg-[#F8F6F1] py-20 sm:py-24 lg:py-32" aria-label="Our Schools">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-[#C9A84C]" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">Our School</span>
          </div>
          <h2
            className="mb-6 text-3xl font-extrabold text-[#0A1C44] sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Complete Education Journey
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            From Early Childhood Development through Advanced Level, we provide a seamless, world-class education at
            every stage of your child&apos;s growth.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#C9A84C]" aria-hidden="true" />
        </motion.div>

        <div className="space-y-10 sm:space-y-12">
          {schools.map((school, i) => (
            <motion.article
              key={school.id}
              id={school.id}
              role="article"
              aria-label={`${school.title} - ${school.subtitle}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[2rem]"
              style={{ borderBottom: `4px solid ${school.color}` }}
            >
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                <div className={`relative h-56 overflow-hidden sm:h-64 md:h-72 lg:h-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={school.image}
                    alt={`${school.title} - ${school.subtitle} students at Beverly Hills`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(145deg, ${school.color}B3 0%, ${school.color}33 45%, transparent 100%)` }}
                    aria-hidden="true"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="absolute left-4 top-4 rounded-2xl px-4 py-2.5 shadow-xl sm:left-6 sm:top-6"
                    style={{ background: school.color }}
                    aria-label={`Fees from ${school.fee}`}
                  >
                    <div className="text-[10px] font-medium uppercase tracking-wider text-white/80">Fees from</div>
                    <div className="text-sm font-extrabold text-white sm:text-base">{school.fee}</div>
                  </motion.div>
                </div>

                <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-4 inline-flex items-center gap-2.5">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${school.color}15` }}
                      aria-hidden="true"
                    >
                      <school.icon size={18} style={{ color: school.color }} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: school.color }}>
                      {school.tag}
                    </span>
                  </div>

                  <h3
                    className="mb-1 text-2xl font-extrabold text-[#0A1C44] sm:text-3xl lg:text-4xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {school.title}
                  </h3>
                  <p className="mb-4 text-sm font-semibold text-[#C9A84C]">{school.subtitle}</p>
                  <p className="mb-6 text-sm leading-7 text-gray-600 sm:text-base">{school.description}</p>

                  <div className="mb-7 flex flex-wrap gap-2.5 sm:gap-3" role="list" aria-label={`${school.title} subjects and features`}>
                    {school.subjects.map((subject) => (
                      <span
                        key={subject}
                        role="listitem"
                        className="inline-flex min-h-10 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm sm:px-[18px]"
                        style={{
                          backgroundColor: `${school.color}10`,
                          color: school.color,
                          borderColor: `${school.color}22`,
                        }}
                      >
                        <span
                          className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: `${school.color}40` }}
                          aria-hidden="true"
                        />
                        {subject}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3 sm:text-base"
                    style={{ color: school.color }}
                    aria-label={`View fees and apply for ${school.title}`}
                  >
                    View Fees &amp; Apply
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
