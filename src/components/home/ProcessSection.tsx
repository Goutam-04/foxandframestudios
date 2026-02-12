'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: "We'll dive deep into your personal goals and long-term vision",
    duration: '3-5 days',
    steps: [
      { title: 'Initial Consultation', desc: "Understand the client's vision, goals, and target audience." },
      { title: 'Research', desc: 'Analyze competitors and industry trends to gather insights.' },
      { title: 'Define Scope', desc: "Set the project's objectives, deliverables, and timelines." },
    ]
  },
  {
    number: '02',
    title: 'Design',
    subtitle: "We'll create mockups that bring your brand to life",
    duration: '1-2 weeks',
    steps: [
      { title: 'Wireframing', desc: "Create low-fidelity wireframes to map out the site's structure." },
      { title: 'Style Guide Creation', desc: 'Develop a design language including colors, fonts, and UI elements.' },
      { title: 'Prototype Development', desc: 'Build clickable prototypes for client feedback.' },
      { title: 'Finalize Design', desc: 'Approve the final design with detailed mockups for all pages.' },
    ]
  },
  {
    number: '03',
    title: 'Build',
    subtitle: "Using no-code tools, we'll construct your site",
    duration: '1 week',
    steps: [
      { title: 'Page Construction', desc: 'Build out the website structure using selected tools.' },
      { title: 'Content Integration', desc: 'Import and format content (text, images, videos).' },
      { title: 'Basic SEO Setup', desc: 'Optimize on-page elements for search engines.' },
    ]
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: 'Your site goes live, ready to make an impact',
    duration: '2-3 days',
    steps: [
      { title: 'Client Review', desc: 'Present the site to the client for feedback.' },
      { title: 'Revisions', desc: 'Make necessary changes based on client feedback.' },
    ]
  },
];

const stats = [
  { value: '95+', label: 'Percent', desc: 'customer satisfaction' },
  { value: '2+', label: 'Years', desc: 'of experience' },
  { value: '24+', label: 'Projects', desc: 'completed' },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm text-slate-500 mb-4">
            {'{03}'} — Process
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">
            How it <span className="font-semibold">works</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-4 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm"
            >
              {/* Step Header */}
              <button
                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="text-5xl font-bold text-slate-200">/{step.number}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-slate-500 mt-1">{step.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:flex items-center gap-2 text-sm text-slate-400 bg-slate-100 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    {step.duration}
                  </span>
                  <ChevronRight
                    className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${activeStep === index ? 'rotate-90' : ''
                      }`}
                  />
                </div>
              </button>

              {/* Step Content */}
              <AnimatePresence>
                {activeStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-0">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                        {step.steps.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="p-4 bg-slate-50 rounded-xl"
                          >
                            <h4 className="font-medium text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-slate-400 md:hidden">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center"
            >
              <span className="text-5xl md:text-6xl font-bold text-slate-900">{stat.value}</span>
              <p className="text-blue-600 font-medium mt-2">{stat.label}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}