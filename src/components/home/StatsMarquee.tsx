import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'years of experience' },
  { value: '>95%', label: 'client retention rate' },
  { value: '18', label: 'satisfied clients' },
  { value: '45', label: 'projects finished' },
];

export default function StatsMarquee() {
  // Double the stats for seamless loop
  const doubledStats = [...stats, ...stats, ...stats, ...stats];

  return (
    <section className="py-8 bg-white border-y border-slate-100 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="flex whitespace-nowrap"
      >
        {doubledStats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-12 flex-shrink-0"
          >
            <span className="text-3xl md:text-4xl font-bold text-slate-900">
              {stat.value}
            </span>
            <span className="text-slate-400 mx-2">/</span>
            <span className="text-slate-500 text-sm md:text-base">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}