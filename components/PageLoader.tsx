"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-[#0A1C44] flex flex-col items-center justify-center"
        >
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <img
              src="/images/logo.png"
              alt="Beverly Hills Group of Schools"
              className="w-24 h-24 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* School name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Beverly Hills
            </div>
            <div className="text-[#C9A84C] text-sm tracking-widest uppercase">Group of Schools</div>
          </motion.div>

          {/* Loading bar */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#C9A84C] to-[#E8D96D] rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
