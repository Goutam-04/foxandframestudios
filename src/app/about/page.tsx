'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { ArrowDown } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#EEE9E3] text-[#2A2A2A]">
            <Navbar />

            {/* Hero / Opening */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm tracking-widest uppercase mb-8 opacity-60">
                            Fox & Frame Creative Studios
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-16">
                            Good design without strategy is decoration. <br />
                            <span className="font-normal italic opacity-60">
                                Strategy without execution is wasted thinking.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex justify-center"
                    >
                        <ArrowDown className="w-8 h-8 opacity-20 animate-bounce" />
                    </motion.div>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl font-light mb-4">The Fox</h2>
                            <p className="text-lg opacity-70 leading-relaxed">
                                Represents intelligence, planning, and adaptability — understanding the business before touching the design.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-light mb-4">The Frame</h2>
                            <p className="text-lg opacity-70 leading-relaxed">
                                Represents structure, visual clarity, and professional execution — turning ideas into something solid and scalable.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#FAFAFA] p-12 rounded-[2rem] border border-[#2A2A2A]/5 text-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-light leading-snug mb-6">
                            "We don't chase trends. <br />
                            <span className="font-medium">We build digital foundations businesses can grow on."</span>
                        </h3>
                    </motion.div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 px-6 bg-[#EEE9E3]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-24 h-24 bg-[#2A2A2A] rounded-full mx-auto mb-8 flex items-center justify-center text-white text-3xl font-light">
                            G
                        </div>
                        <p className="text-sm tracking-widest uppercase mb-4 opacity-60">Founded by</p>
                        <h2 className="text-4xl font-light mb-6">Goutam Kumar Nayak</h2>
                        <p className="text-xl opacity-70 leading-relaxed max-w-2xl mx-auto mb-16">
                            Fox & Frame works closely with clients to bring clarity, structure, and calm confidence to their digital presence.
                        </p>

                        <div className="inline-block border-t border-[#2A2A2A]/20 pt-8 mt-8">
                            <p className="text-2xl font-light italic">
                                "This studio is built for long-term credibility, not quick wins."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
