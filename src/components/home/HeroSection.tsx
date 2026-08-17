'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#2A2A2A] leading-[1.1]">
              Strategy-First <br className="hidden md:block" />
              Digital Foundations for <br className="hidden md:block" />
              <span className="font-normal italic">Growing Businesses</span>
            </h1>

            <p className="text-lg md:text-xl text-[#2A2A2A]/70 font-light max-w-3xl mx-auto leading-relaxed">
              Fox & Frame Creative Studios partners with businesses to build clear,
              credible digital foundations through structured strategy and thoughtful execution.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="pt-4"
            >
              <Link href="/contact">
                <Button
                  className="bg-[#2A2A2A] hover:bg-black text-[#EEE9E3] rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  Talk to Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}