'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Mohanty',
    location: 'Bhubaneswar, Odisha',
    text: 'Fox & Frame completely transformed our boutique\'s digital presence. We were struggling to get online sales, but their strategy-first approach made all the difference. The website is not just beautiful, it actually converts!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    initials: null,
  },
  {
    name: 'Bikash Rout',
    location: 'Cuttack, Odisha',
    text: 'I\'ve worked with many agencies before, but these guys are on another level. They didn\'t just give us a generic template; they built a solid foundation for our tech startup. Highly recommended for any growing business.',
    avatar: null,
    initials: 'BR',
  },
  {
    name: 'Rohan Desai',
    location: 'Mumbai, Maharashtra',
    text: 'Bhai, what a brilliant job! The aesthetics, the speed, the whole vibe is just perfect. Ekdam premium feel hai website ka. They understood our brand vision perfectly and delivered beyond expectations. Maza aa gaya kaam karke!',
    avatar: null,
    initials: 'RD',
  },
];

export default function TestimonialsSection() {
  // Triple the testimonials for smooth infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#EEE9E3] overflow-hidden text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest uppercase mb-4 opacity-60 text-[#2A2A2A]">
            Testimonials
          </p>
          <div className="flex items-end gap-4">
            <h2 className="text-4xl md:text-5xl font-light text-[#2A2A2A]">
              Client <span className="font-semibold">Stories</span>
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Marquee */}
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="flex gap-6"
      >
        {extendedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] flex flex-col bg-[#FAFAFA] border border-[#2A2A2A]/5 rounded-3xl p-8"
          >
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg font-semibold text-[#2A2A2A]">5.0</span>
              <span className="text-[#2A2A2A]/40">/ 5</span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#2A2A2A] text-[#2A2A2A]" />
                ))}
              </div>
            </div>

            {/* Quote */}
            <p className="text-[#2A2A2A]/80 text-lg leading-relaxed mb-8">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-auto">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover grayscale opacity-80"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#2A2A2A]/10 flex items-center justify-center text-[#2A2A2A] font-semibold text-lg">
                  {testimonial.initials}
                </div>
              )}
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-[#2A2A2A] leading-tight">{testimonial.name}</span>
                <span className="text-xs text-[#2A2A2A]/60 mt-0.5">{testimonial.location}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}