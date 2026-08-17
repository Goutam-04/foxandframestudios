'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#EEE9E3] text-[#2A2A2A]">
            <Navbar />

            <section className="pt-40 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 max-w-4xl"
                    >
                        <p className="text-sm tracking-widest uppercase mb-6 opacity-60">
                            Contact
                        </p>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
                            Let's start a <br />
                            <span className="font-normal italic">conversation</span>
                        </h1>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Contact Info (Left) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="space-y-12"
                        >
                            <div className="space-y-8">
                                <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80 max-w-md">
                                    We're here to help you build a clear, credible digital foundation.
                                    Tell us about your project or just say hello.
                                </p>
                            </div>

                            <div className="space-y-8 py-8 border-t border-[#2A2A2A]/10">
                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full border border-[#2A2A2A]/10 flex items-center justify-center group-hover:bg-[#2A2A2A] group-hover:text-[#EEE9E3] transition-colors duration-300">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-50 mb-1">Email us</p>
                                        <p className="text-lg font-medium">hello@foxandframe.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full border border-[#2A2A2A]/10 flex items-center justify-center group-hover:bg-[#2A2A2A] group-hover:text-[#EEE9E3] transition-colors duration-300">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-50 mb-1">Call us</p>
                                        <p className="text-lg font-medium">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full border border-[#2A2A2A]/10 flex items-center justify-center group-hover:bg-[#2A2A2A] group-hover:text-[#EEE9E3] transition-colors duration-300">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-50 mb-1">Visit us</p>
                                        <p className="text-lg font-medium">Mumbai, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form (Right) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm"
                        >
                            <h3 className="text-2xl font-medium mb-8">Send a message</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm opacity-60 ml-1">Your Name</label>
                                        <Input
                                            placeholder="John Doe"
                                            className="bg-[#FAFAFA] border-[#2A2A2A]/5 focus:border-[#2A2A2A]/20 text-[#2A2A2A] placeholder:text-[#2A2A2A]/30 rounded-xl h-14 px-6"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm opacity-60 ml-1">Email Address</label>
                                        <Input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="bg-[#FAFAFA] border-[#2A2A2A]/5 focus:border-[#2A2A2A]/20 text-[#2A2A2A] placeholder:text-[#2A2A2A]/30 rounded-xl h-14 px-6"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm opacity-60 ml-1">Subject</label>
                                    <Input
                                        placeholder="Project inquiry, partnership, etc."
                                        className="bg-[#FAFAFA] border-[#2A2A2A]/5 focus:border-[#2A2A2A]/20 text-[#2A2A2A] placeholder:text-[#2A2A2A]/30 rounded-xl h-14 px-6"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm opacity-60 ml-1">Message</label>
                                    <Textarea
                                        placeholder="Tell us about your project goals and timeline..."
                                        className="bg-[#FAFAFA] border-[#2A2A2A]/5 focus:border-[#2A2A2A]/20 text-[#2A2A2A] placeholder:text-[#2A2A2A]/30 rounded-xl min-h-[160px] resize-none p-6"
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button className="w-full bg-[#2A2A2A] hover:bg-black text-[#EEE9E3] rounded-full py-7 text-lg group transition-all duration-300">
                                        Send Message
                                        <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
