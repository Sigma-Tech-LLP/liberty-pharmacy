"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Pill, Thermometer, Activity, HeartPulse } from 'lucide-react';

// You can use actual transparent PNGs of medicine bottles/pills for a more realistic look
const ICONS = [
  <Pill size={40} />,
  <Activity size={35} />,
  <HeartPulse size={30} />,
  <Pill size={24} className="rotate-45" />,
  <Thermometer size={20} />,
];

export function FloatingMedicine() {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      icon: ICONS[i % ICONS.length],
      initialX: Math.random() * 100, 
      initialY: Math.random() * 100,
      moveX: [0, Math.random() * 50 - 25, 0], // More controlled movement
      moveY: [0, Math.random() * 50 - 25, 0],
      rotate: [0, 180, 360],
      duration: 20 + Math.random() * 20, 
    }));
    setElements(newElements);
  }, []);

  return (
    // 1. Changed z-index to 50 to sit above backgrounds but maybe below text
    // 2. Increased opacity to 0.1 for subtle but visible presence
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-10">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          style={{ 
            left: `${el.initialX}%`, 
            top: `${el.initialY}%`,
            position: 'absolute' 
          }}
          animate={{
            x: el.moveX,
            y: el.moveY,
            rotate: el.rotate,
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          // Ensure color is standard Tailwind if 'navy' isn't defined
          className="text-blue-900" 
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
}