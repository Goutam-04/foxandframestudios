'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Box, Code2, Sparkles, Layers, Zap } from 'lucide-react';

const tools = [
  {
    name: 'Next.js & React',
    description: 'Building lightning-fast, SEO-optimized web applications with modern Server Components.',
    icon: <Box className="w-6 h-6 text-white" />,
    color: 'bg-[#171717]',
  },
  {
    name: 'Framer Motion',
    description: 'Crafting buttery-smooth, physics-based micro-interactions that bring interfaces to life.',
    icon: <Sparkles className="w-6 h-6 text-white" />,
    color: 'bg-emerald-600',
  },
  {
    name: 'Figma',
    description: 'Designing pixel-perfect, accessible UI/UX systems and interactive prototypes.',
    icon: <Figma className="w-6 h-6 text-white" />,
    color: 'bg-[#A259FF]',
  },
  {
    name: 'TypeScript',
    description: 'Ensuring enterprise-grade reliability and zero-bug architecture through strict typing.',
    icon: <Code2 className="w-6 h-6 text-white" />,
    color: 'bg-[#3178C6]',
  },
  {
    name: 'Tailwind CSS',
    description: 'Rapidly scaling design systems with utility-first, highly responsive stylesheets.',
    icon: <Layers className="w-6 h-6 text-white" />,
    color: 'bg-[#06B6D4]',
  },
  {
    name: 'Vercel Edge',
    description: 'Deploying globally distributed, serverless infrastructure for zero-latency experiences.',
    icon: <Zap className="w-6 h-6 text-white" />,
    color: 'bg-slate-900',
  },
];

const capabilities = [
  'Web Applications',
  'Interactive Design',
  'E-Commerce',
  'Brand Identity',
  'Performance Optimization',
  'Headless CMS',
];

export default function ToolsSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm text-slate-500 mb-4">
            {'{02}'} — Tech Stack & Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">
            Our modern <span className="font-semibold">toolbox</span>
          </h2>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#FAFAFA] border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${tool.color}`} />

              {/* Icon */}
              <div className={`w-14 h-14 ${tool.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {tool.icon}
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{tool.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Marquee */}
        <div className="overflow-hidden py-6 bg-slate-900 rounded-3xl relative">
          {/* Fading edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />
          
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap"
          >
            {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((capability, index) => (
              <span
                key={index}
                className="mx-8 text-white/90 text-lg font-light tracking-wide flex items-center gap-4"
              >
                <span className="w-1.5 h-1.5 bg-[#FF6B4A] rounded-full" />
                {capability}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}