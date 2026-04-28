"use client";
import { motion } from "framer-motion";

export const ScrollEntry = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1], // The "Classic Framer" cubic bezier
    }}
  >
    {children}
  </motion.div>
);