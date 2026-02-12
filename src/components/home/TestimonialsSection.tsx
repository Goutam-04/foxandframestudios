import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Radhika Iyer',
    text: 'Their design thinking is top-notch. Every element on our site now feels intentional and elegant. Clients always compliment the UI!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    name: 'Priya Mehta',
    text: 'Fox & Frame understood our brand in ways we hadn\'t even imagined. The UI is sleek, fast, and makes our app stand out in a crowded market.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    name: 'Arjun Sinha',
    text: 'From wireframes to final build, the Fox & Frame team was insanely detail-oriented. Our bounce rate dropped by 42% after the redesign!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Ayesha Khan',
    text: 'They gave us more than a website — they gave us a brand identity. The aesthetics, responsiveness, and speed are on point!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
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
            className="flex-shrink-0 w-[400px] bg-[#FAFAFA] border border-[#2A2A2A]/5 rounded-3xl p-8"
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
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover grayscale opacity-80"
              />
              <span className="font-semibold text-[#2A2A2A]">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}