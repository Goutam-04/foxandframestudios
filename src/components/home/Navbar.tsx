
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-900 ${isScrolled ? 'bg-[#EEE9E3]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Fox & Frame"
            className={`w-auto object-contain transition-all duration-900 ${isScrolled ? 'h-12' : 'h-16'}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/home#projects" className="text-[#2A2A2A] hover:text-[#2A2A2A]/70 transition-colors font-medium">
            Projects
          </Link>
          <Link href="/about" className="text-[#2A2A2A] hover:text-[#2A2A2A]/70 transition-colors font-medium">
            About
          </Link>
          <Link href="/blog" className="text-[#2A2A2A] hover:text-[#2A2A2A]/70 transition-colors font-medium">
            Blog
          </Link>
          <Link href="/careers" className="text-[#2A2A2A] hover:text-[#2A2A2A]/70 transition-colors font-medium">
            Careers
          </Link>
          <Link href="/contact">
            <Button className="bg-[#2A2A2A] hover:bg-black text-[#EEE9E3] rounded-full px-6 py-2 transition-transform hover:scale-105">
              Talk to Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#2A2A2A]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#EEE9E3] border-t border-[#2A2A2A]/10 px-6 py-4 space-y-4 overflow-hidden"
          >
            <Link href="/home#projects" className="block text-[#2A2A2A] font-medium py-2" onClick={() => setMobileOpen(false)}>Projects</Link>
            <Link href="/about" className="block text-[#2A2A2A] font-medium py-2" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog" className="block text-[#2A2A2A] font-medium py-2" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/careers" className="block text-[#2A2A2A] font-medium py-2" onClick={() => setMobileOpen(false)}>Careers</Link>
            <Link href="/contact" className="block text-[#2A2A2A] font-medium py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
            <div className="pt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-[#2A2A2A] hover:bg-black text-[#EEE9E3] rounded-full">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}