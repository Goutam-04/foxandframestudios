'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Web Design', href: '#' },
    { label: 'Web Development', href: '#' },
    { label: 'UI/UX Design', href: '#' },
    { label: 'Branding', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Process', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  social: [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2A2A2A] text-[#EEE9E3] py-20 px-6 border-t border-[#EEE9E3]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#EEE9E3] rounded-full flex items-center justify-center">
                <img src="/favicon.png" alt="Fox & Frame" className="h-7 w-auto opacity-80" />
              </div>
              <span className="font-bold text-xl">Fox & Frame</span>
            </div>
            <p className="opacity-60 max-w-sm mb-8 leading-relaxed">
              We specialize in building clear, credible digital foundations through structured strategy and thoughtful execution.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-[#EEE9E3]/5 rounded-full flex items-center justify-center hover:bg-[#EEE9E3] hover:text-[#2A2A2A] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-6 text-[#EEE9E3]">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="opacity-60 hover:opacity-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-6 text-[#EEE9E3]">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="opacity-60 hover:opacity-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#EEE9E3]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-40 text-sm">
            © {new Date().getFullYear()} Fox & Frame Creative Studios. All rights reserved.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 bg-[#EEE9E3]/10 rounded-full flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}