import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Globe, ShoppingCart } from 'lucide-react';

const tools = [
  {
    name: 'Framer',
    description: 'Website builder',
    percentage: 80,
    icon: '⚡',
    color: 'bg-black'
  },
  {
    name: 'Figma',
    description: 'UI that sparks',
    percentage: 90,
    icon: '🎨',
    color: 'bg-purple-600'
  },
  {
    name: 'Wordpress',
    description: 'We build websites that leads',
    percentage: 60,
    icon: '🌐',
    color: 'bg-blue-600'
  },
];

const services = [
  'E-commerce',
  'Corporate website',
  'Landing page',
  'Blog',
  'Social network',
];

export default function ToolsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm text-slate-500 mb-4">
            {'{02}'} — Tools & Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">
            My creative <span className="font-semibold">toolbox</span>
          </h2>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${tool.color} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-2xl">{tool.icon}</span>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-slate-900 mb-1">{tool.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{tool.description}</p>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-slate-900">{tool.percentage}</span>
                  <span className="text-slate-400">%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full ${tool.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Marquee */}
        <div className="overflow-hidden py-4 bg-slate-900 rounded-2xl">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap"
          >
            {[...services, ...services, ...services, ...services].map((service, index) => (
              <span
                key={index}
                className="mx-6 text-white text-lg font-medium flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                {service}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}