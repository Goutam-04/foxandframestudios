'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { ArrowDown, ArrowRight, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const openings = [
    {
        id: 1,
        title: 'Senior UI/UX Designer',
        location: 'Remote / Bhubaneswar',
        type: 'Full-time',
        department: 'Design',
        description:
            "We're looking for a thoughtful designer who can move between high-level strategic thinking and pixel-perfect execution. You'll shape the visual and experience language of our client work.",
        responsibilities: [
            'Translate complex brand strategies into clean, compelling interfaces',
            'Lead end-to-end design for client projects — from wireframes to final delivery',
            'Collaborate with developers to ensure implementation fidelity',
            'Build and maintain design systems',
        ],
        requirements: [
            '3+ years of UI/UX design experience',
            'Strong portfolio demonstrating brand and product design',
            'Proficiency in Figma',
            'Clear written and verbal communication',
        ],
    },
    {
        id: 2,
        title: 'Frontend Developer',
        location: 'Remote',
        type: 'Full-time',
        department: 'Engineering',
        description:
            "You'll build the things we design — with attention to detail, smooth animations, and performance-first thinking. We work in Next.js, Tailwind, and Framer Motion.",
        responsibilities: [
            'Implement responsive, performant web interfaces from Figma designs',
            'Build reusable component libraries and maintain code quality',
            'Integrate with CMS platforms and APIs',
            'Collaborate with designers on animation and interaction details',
        ],
        requirements: [
            '2+ years of experience with React/Next.js',
            'Solid grasp of CSS, layout, and animation',
            'Experience with Tailwind CSS and Framer Motion',
            'Attention to cross-browser and responsive behaviour',
        ],
    },
    {
        id: 3,
        title: 'Brand Strategist',
        location: 'Remote',
        type: 'Contract',
        department: 'Strategy',
        description:
            "We need someone who understands how businesses communicate — and how to sharpen that communication. You'll work directly with clients on brand positioning, messaging, and identity frameworks.",
        responsibilities: [
            'Conduct discovery sessions to understand client businesses and audiences',
            'Develop brand positioning frameworks and messaging documents',
            'Guide the creative team with strategic direction',
            'Present strategy to clients with clarity and confidence',
        ],
        requirements: [
            'Experience in brand strategy or brand consulting',
            'Strong writing and presentation skills',
            'Comfortable working with early-stage and growing businesses',
            'Understanding of visual identity and how it connects to strategy',
        ],
    },
];

const values = [
    {
        label: 'Substance over style',
        body: "We care deeply about craft — but craft in service of something real. Our work is strategic before it's beautiful.",
    },
    {
        label: 'Long-term thinking',
        body: 'We build for longevity. That applies to client work and to the people we work with.',
    },
    {
        label: 'Clarity in everything',
        body: 'In communication, in design, in process. If something is confusing, we fix it.',
    },
    {
        label: 'Ownership',
        body: "We're a small team. Everybody's work matters. Everybody's name is on it.",
    },
];

function JobCard({ job }: { job: (typeof openings)[0] }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            layout
            className="border border-[#2A2A2A]/10 rounded-2xl overflow-hidden bg-white"
        >
            <button
                className="w-full text-left px-8 py-6 flex items-start justify-between gap-4 hover:bg-[#EEE9E3]/40 transition-colors"
                onClick={() => setOpen(!open)}
            >
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs tracking-widest uppercase opacity-50">{job.department}</span>
                    </div>
                    <h3 className="text-xl font-light text-[#2A2A2A]">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-3">
                        <span className="flex items-center gap-1 text-sm opacity-60">
                            <MapPin className="w-3.5 h-3.5" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-sm opacity-60">
                            <Clock className="w-3.5 h-3.5" /> {job.type}
                        </span>
                    </div>
                </div>
                <div className="mt-1 opacity-40 shrink-0">
                    {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-8 pb-8 pt-2 border-t border-[#2A2A2A]/8 space-y-8">
                            <p className="opacity-70 leading-relaxed">{job.description}</p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase opacity-60">
                                        Responsibilities
                                    </h4>
                                    <ul className="space-y-2">
                                        {job.responsibilities.map((r) => (
                                            <li key={r} className="flex items-start gap-2 opacity-70 text-sm leading-relaxed">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#2A2A2A] shrink-0" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase opacity-60">
                                        Requirements
                                    </h4>
                                    <ul className="space-y-2">
                                        {job.requirements.map((r) => (
                                            <li key={r} className="flex items-start gap-2 opacity-70 text-sm leading-relaxed">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#2A2A2A] shrink-0" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <a href={`mailto:hello@foxandframe.studio?subject=Application – ${job.title}`}>
                                <Button className="bg-[#2A2A2A] hover:bg-black text-[#EEE9E3] rounded-full px-8 py-2.5 transition-transform hover:scale-105">
                                    Apply for this role <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#EEE9E3] text-[#2A2A2A]">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm tracking-widest uppercase mb-8 opacity-60">Careers at Fox &amp; Frame</p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-16">
                            We build slow,{' '}
                            <span className="font-normal italic opacity-60">on purpose.</span>
                        </h1>
                        <p className="text-xl opacity-70 leading-relaxed max-w-2xl">
                            Fox &amp; Frame is a small, deliberate studio. We don't scale for the sake of scaling. We're
                            looking for people who care about the quality of their work more than the volume of it.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 1 }}
                        className="flex justify-center mt-16"
                    >
                        <ArrowDown className="w-8 h-8 opacity-20 animate-bounce" />
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-sm tracking-widest uppercase opacity-50 mb-4">How we work</p>
                        <h2 className="text-3xl md:text-4xl font-light">What we believe in</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 border border-[#2A2A2A]/10 rounded-2xl bg-[#FAFAFA]"
                            >
                                <h3 className="text-lg font-medium mb-3">{v.label}</h3>
                                <p className="opacity-60 leading-relaxed">{v.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="py-24 px-6 bg-[#EEE9E3]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-sm tracking-widest uppercase opacity-50 mb-4">Open positions</p>
                        <h2 className="text-3xl md:text-4xl font-light">Current openings</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {openings.map((job, i) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <JobCard job={job} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* General Application */}
            <section className="py-24 px-6 bg-[#2A2A2A] text-[#EEE9E3]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm tracking-widest uppercase opacity-50 mb-6">Don't see a fit?</p>
                        <h2 className="text-3xl md:text-5xl font-light mb-8 leading-snug">
                            If you're exceptional,{' '}
                            <span className="italic opacity-60">we want to know you exist.</span>
                        </h2>
                        <p className="opacity-60 mb-10 max-w-xl mx-auto leading-relaxed">
                            Send us a note about who you are, what you do, and why Fox &amp; Frame interests you. We
                            keep brilliant people on our radar.
                        </p>
                        <a href="mailto:hello@foxandframe.studio?subject=General Application">
                            <Button className="bg-[#EEE9E3] text-[#2A2A2A] hover:bg-white rounded-full px-8 py-3 transition-transform hover:scale-105 font-medium">
                                Say hello <ArrowRight className="w-4 h-4 ml-2 inline" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
