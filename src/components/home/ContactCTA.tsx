import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactCTA() {
  return (
    <section id="about" className="py-24 px-6 bg-[#2A2A2A] text-[#EEE9E3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest uppercase mb-4 opacity-60">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              Let's create something{' '}
              <span className="font-semibold text-white">extraordinary</span>{' '}
              together
            </h2>
            <p className="opacity-70 text-lg mb-12 max-w-md">
              Ready to transform your digital presence? We're just a message away from
              making your vision a reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EEE9E3]/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#EEE9E3]" />
                </div>
                <div>
                  <p className="text-sm opacity-60">Email us</p>
                  <p className="font-medium">hello@foxandframe.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EEE9E3]/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#EEE9E3]" />
                </div>
                <div>
                  <p className="text-sm opacity-60">Call us</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EEE9E3]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#EEE9E3]" />
                </div>
                <div>
                  <p className="text-sm opacity-60">Location</p>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#EEE9E3]/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#EEE9E3]/10"
          >
            <h3 className="text-2xl font-semibold mb-8 text-[#EEE9E3]">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm opacity-60 mb-2 block">Your name</label>
                  <Input
                    placeholder="John Doe"
                    className="bg-[#EEE9E3]/5 border-[#EEE9E3]/10 text-[#EEE9E3] placeholder:text-[#EEE9E3]/30 rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-60 mb-2 block">Email address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-[#EEE9E3]/5 border-[#EEE9E3]/10 text-[#EEE9E3] placeholder:text-[#EEE9E3]/30 rounded-xl h-12"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm opacity-60 mb-2 block">Project type</label>
                <Input
                  placeholder="Website redesign, mobile app, etc."
                  className="bg-[#EEE9E3]/5 border-[#EEE9E3]/10 text-[#EEE9E3] placeholder:text-[#EEE9E3]/30 rounded-xl h-12"
                />
              </div>
              <div>
                <label className="text-sm opacity-60 mb-2 block">Tell us about your project</label>
                <Textarea
                  placeholder="Share your ideas, goals, and timeline..."
                  className="bg-[#EEE9E3]/5 border-[#EEE9E3]/10 text-[#EEE9E3] placeholder:text-[#EEE9E3]/30 rounded-xl min-h-[120px] resize-none"
                />
              </div>
              <Button className="w-full bg-[#EEE9E3] hover:bg-white text-[#2A2A2A] rounded-full py-6 text-lg group">
                Send Message
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}