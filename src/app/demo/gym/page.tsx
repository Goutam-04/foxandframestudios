'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

/* ───────────────────────────── IRONFORGE GYM ─────────────────────────────
   Theme: Dark Brutalist · Neon Lime · Raw Energy
   Palette: Jet #0A0A0A · Lime #CCFF00 · Charcoal #1A1A1A · Smoke #888
   Fonts: Bebas Neue (display) + Space Grotesk (body)
   ──────────────────────────────────────────────────────────────────────── */

// ─── Noise SVG filter for grain texture ───
function GrainOverlay() {
  return (
    <div className="grain-overlay" aria-hidden="true">
      <svg className="grain-svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}

// ─── Animated Counter ───
function Counter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = 0;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(start + (end - start) * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function GymPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  const navLinks = ['Programs', 'Trainers', 'Pricing', 'Testimonials', 'Join'];

  const programs = [
    { name: 'STRENGTH', desc: 'Raw power. Heavy iron. Build your foundation with structured progressive overload training.', icon: '🏋️' },
    { name: 'HIIT', desc: 'High-intensity intervals that torch fat and build explosive cardiovascular endurance.', icon: '⚡' },
    { name: 'CROSSFIT', desc: 'Functional fitness combining Olympic lifting, gymnastics, and metabolic conditioning.', icon: '🔥' },
    { name: 'BOXING', desc: 'Strike with precision. Full-body conditioning through combat-sport training.', icon: '🥊' },
    { name: 'YOGA', desc: 'Balance and flexibility. Restore your body and sharpen your mind through guided flow.', icon: '🧘' },
    { name: 'SPIN', desc: 'Ride hard. Rhythm-based indoor cycling that pushes your limits every session.', icon: '🚴' },
  ];

  const trainers = [
    { name: 'VIKRAM SINGH', specialty: 'Strength & Conditioning', exp: '12 Years', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80' },
    { name: 'PRIYA DESAI', specialty: 'HIIT & CrossFit', exp: '8 Years', image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80' },
    { name: 'ARJUN RAO', specialty: 'Boxing & MMA', exp: '10 Years', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80' },
    { name: 'MEERA NAIR', specialty: 'Yoga & Mobility', exp: '9 Years', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80' },
  ];

  const pricing = [
    { tier: 'STARTER', price: '1,999', period: '/mo', features: ['Gym Floor Access', 'Locker Room', '2 Group Classes/Week', 'Basic App Access'], highlight: false },
    { tier: 'FORGE', price: '3,499', period: '/mo', features: ['Everything in Starter', 'Unlimited Classes', '1 PT Session/Month', 'Nutrition Guide', 'Recovery Zone'], highlight: true },
    { tier: 'TITAN', price: '5,999', period: '/mo', features: ['Everything in Forge', '4 PT Sessions/Month', 'Custom Meal Plan', 'InBody Scans', '24/7 Priority Access', 'Guest Passes'], highlight: false },
  ];

  const testimonials = [
    { name: 'Rohan K.', text: 'IRONFORGE changed my life. 30kg down in 8 months. The trainers here don\'t let you quit.', rating: 5 },
    { name: 'Sneha M.', text: 'Best CrossFit box in the city. The community pushes you to become something you never thought possible.', rating: 5 },
    { name: 'Aditya P.', text: 'The Titan membership is worth every rupee. My personal trainer Vikram is an absolute beast. Incredible results.', rating: 5 },
  ];

  return (
    <>
      {/* ─── Google Fonts ─── */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style jsx global>{`
        .gym-page {
          --gym-black: #0A0A0A;
          --gym-charcoal: #1A1A1A;
          --gym-lime: #CCFF00;
          --gym-smoke: #888888;
          --gym-white: #FAFAFA;
          --font-bebas: 'Bebas Neue', sans-serif;
          --font-space: 'Space Grotesk', sans-serif;
          background: var(--gym-black);
          color: var(--gym-white);
          font-family: var(--font-space);
          overflow-x: hidden;
        }
        .gym-page * { box-sizing: border-box; }
        .grain-overlay {
          position: fixed; inset: 0; z-index: 9999;
          pointer-events: none; opacity: 0.04; mix-blend-mode: overlay;
        }
        .grain-svg { width: 100%; height: 100%; }
        .bebas { font-family: var(--font-bebas); }
        .glow-lime {
          text-shadow: 0 0 20px rgba(204,255,0,0.3), 0 0 40px rgba(204,255,0,0.15);
        }
        .card-glow:hover {
          box-shadow: 0 0 30px rgba(204,255,0,0.15), 0 0 60px rgba(204,255,0,0.05);
        }
        .diagonal-divider {
          position: relative;
          margin-top: -1px;
        }
        .diagonal-divider::before {
          content: '';
          position: absolute;
          top: -60px;
          left: 0;
          right: 0;
          height: 60px;
          background: inherit;
          clip-path: polygon(0 100%, 100% 0, 100% 100%);
        }
        .lime-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gym-lime), transparent);
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(204,255,0,0.2); }
          50% { box-shadow: 0 0 40px rgba(204,255,0,0.4); }
        }
        .btn-pulse { animation: pulse-glow 2s infinite; }
        .trainer-card img {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
          transition: clip-path 0.5s ease;
        }
        .trainer-card:hover img {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0);
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 768px) {
          .gym-desktop-nav { display: none !important; }
          .gym-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .gym-hamburger { display: none !important; }
        }
      `}</style>

      <div className="gym-page">
        <GrainOverlay />

        {/* ═══════════════ NAVBAR ═══════════════ */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(204,255,0,0.1)' }}
        >
          <div className="bebas" style={{ fontSize: '28px', letterSpacing: '3px', color: 'var(--gym-lime)' }}>
            IRON<span style={{ color: 'var(--gym-white)' }}>FORGE</span>
          </div>
          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="gym-desktop-nav">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ color: 'var(--gym-smoke)', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--gym-lime)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--gym-smoke)')}
              >{link}</a>
            ))}
          </div>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '6px', padding: '8px' }}
            className="gym-hamburger"
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '28px', height: '2px', background: menuOpen ? 'var(--gym-lime)' : 'var(--gym-white)', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none', transition: 'all 0.3s' }} />
            <span style={{ display: 'block', width: '28px', height: '2px', background: 'var(--gym-white)', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
            <span style={{ display: 'block', width: '28px', height: '2px', background: menuOpen ? 'var(--gym-lime)' : 'var(--gym-white)', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none', transition: 'all 0.3s' }} />
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'rgba(10,10,10,0.97)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '32px' }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="bebas"
                  style={{ fontSize: '48px', color: 'var(--gym-white)', textDecoration: 'none', letterSpacing: '4px' }}
                >{link}</motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════ HERO ═══════════════ */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale, position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', overflow: 'hidden' }}
        >
          {/* Background image */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.2) contrast(1.2)' }} />
          {/* Diagonal lime lines */}
          <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '120%', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(204,255,0,0.3), transparent)', transform: 'rotate(-5deg)' }} />
          <div style={{ position: 'absolute', top: '70%', left: '-10%', width: '120%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(204,255,0,0.2), transparent)', transform: 'rotate(3deg)' }} />

          <div style={{ position: 'relative', zIndex: 2, padding: '0 24px' }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ color: 'var(--gym-lime)', fontSize: '14px', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 500 }}
            >
              Est. 2019 · Premium Fitness
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bebas glow-lime"
              style={{ fontSize: 'clamp(60px, 15vw, 180px)', lineHeight: 0.9, color: 'var(--gym-white)', margin: 0 }}
            >
              FORGE YOUR<br />
              <span style={{ color: 'var(--gym-lime)' }}>LEGACY</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{ maxWidth: '500px', margin: '32px auto 0', color: 'var(--gym-smoke)', fontSize: '16px', lineHeight: 1.7 }}
            >
              Where discipline meets raw power. Not just a gym — a proving ground for those who refuse to settle.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              style={{ marginTop: '40px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <a href="#join" className="btn-pulse" style={{ padding: '16px 40px', background: 'var(--gym-lime)', color: 'var(--gym-black)', fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', border: 'none', cursor: 'pointer' }}>
                START NOW
              </a>
              <a href="#programs" style={{ padding: '16px 40px', background: 'transparent', color: 'var(--gym-white)', fontWeight: 500, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'border-color 0.3s' }}>
                VIEW PROGRAMS
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
          >
            <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--gym-lime), transparent)' }} />
          </motion.div>
        </motion.section>

        {/* ═══════════════ STATS ═══════════════ */}
        <section style={{ background: 'var(--gym-charcoal)', padding: '80px 24px', position: 'relative' }}>
          <div className="lime-line" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            {[
              { value: 500, suffix: '+', label: 'ACTIVE MEMBERS' },
              { value: 15, suffix: '', label: 'EXPERT TRAINERS' },
              { value: 24, suffix: '/7', label: 'ALWAYS OPEN' },
              { value: 98, suffix: '%', label: 'RETENTION RATE' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="bebas" style={{ fontSize: '64px', color: 'var(--gym-lime)', lineHeight: 1 }}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ color: 'var(--gym-smoke)', fontSize: '12px', letterSpacing: '3px', marginTop: '8px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════ PROGRAMS ═══════════════ */}
        <section id="programs" style={{ background: 'var(--gym-black)', padding: '120px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p style={{ color: 'var(--gym-lime)', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>01 — PROGRAMS</p>
              <h2 className="bebas" style={{ fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 0.95, marginBottom: '60px' }}>
                CHOOSE YOUR<br /><span style={{ color: 'var(--gym-lime)' }}>BATTLE</span>
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {programs.map((prog, i) => (
                <motion.div
                  key={prog.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-glow"
                  style={{ background: 'var(--gym-charcoal)', padding: '40px 32px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s ease', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(204,255,0,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: '40px', marginBottom: '20px' }}>{prog.icon}</div>
                  <h3 className="bebas" style={{ fontSize: '32px', letterSpacing: '2px', color: 'var(--gym-white)', marginBottom: '12px' }}>{prog.name}</h3>
                  <p style={{ color: 'var(--gym-smoke)', fontSize: '14px', lineHeight: 1.7 }}>{prog.desc}</p>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--gym-lime)', transform: 'scaleX(0)', transition: 'transform 0.4s ease', transformOrigin: 'left' }}
                    className="prog-underline" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ TRAINERS ═══════════════ */}
        <section id="trainers" style={{ background: 'var(--gym-charcoal)', padding: '120px 24px', position: 'relative' }}>
          <div className="diagonal-divider" style={{ background: 'var(--gym-charcoal)' }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p style={{ color: 'var(--gym-lime)', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>02 — TRAINERS</p>
              <h2 className="bebas" style={{ fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 0.95, marginBottom: '60px' }}>
                MEET THE<br /><span style={{ color: 'var(--gym-lime)' }}>FORGEMASTERS</span>
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
              {trainers.map((trainer, i) => (
                <motion.div
                  key={trainer.name}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="trainer-card"
                  style={{ background: 'var(--gym-black)', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.4s' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ height: '320px', overflow: 'hidden' }}>
                    <img src={trainer.image} alt={trainer.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 className="bebas" style={{ fontSize: '24px', letterSpacing: '2px', color: 'var(--gym-white)', marginBottom: '4px' }}>{trainer.name}</h3>
                    <p style={{ color: 'var(--gym-lime)', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>{trainer.specialty}</p>
                    <p style={{ color: 'var(--gym-smoke)', fontSize: '12px' }}>{trainer.exp} Experience</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ PRICING ═══════════════ */}
        <section id="pricing" style={{ background: 'var(--gym-black)', padding: '120px 24px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <p style={{ color: 'var(--gym-lime)', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>03 — PRICING</p>
              <h2 className="bebas" style={{ fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 0.95 }}>
                INVEST IN<br /><span style={{ color: 'var(--gym-lime)' }}>YOURSELF</span>
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
              {pricing.map((plan, i) => (
                <motion.div
                  key={plan.tier}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="card-glow"
                  style={{
                    background: plan.highlight ? 'linear-gradient(180deg, rgba(204,255,0,0.08) 0%, var(--gym-charcoal) 100%)' : 'var(--gym-charcoal)',
                    border: plan.highlight ? '2px solid var(--gym-lime)' : '1px solid rgba(255,255,255,0.05)',
                    padding: '48px 36px',
                    display: 'flex', flexDirection: 'column',
                    position: 'relative',
                    transition: 'transform 0.4s, box-shadow 0.4s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {plan.highlight && (
                    <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gym-lime)', color: 'var(--gym-black)', padding: '6px 20px', fontSize: '11px', fontWeight: 700, letterSpacing: '2px' }}>
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="bebas" style={{ fontSize: '28px', letterSpacing: '3px', color: plan.highlight ? 'var(--gym-lime)' : 'var(--gym-white)', marginBottom: '24px' }}>{plan.tier}</h3>
                  <div style={{ marginBottom: '32px' }}>
                    <span style={{ fontSize: '14px', color: 'var(--gym-smoke)', verticalAlign: 'top' }}>₹</span>
                    <span className="bebas" style={{ fontSize: '56px', color: 'var(--gym-white)' }}>{plan.price}</span>
                    <span style={{ fontSize: '14px', color: 'var(--gym-smoke)' }}>{plan.period}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                    {plan.features.map(f => (
                      <li key={f} style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--gym-smoke)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: 'var(--gym-lime)', fontSize: '16px' }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <button style={{
                    marginTop: '32px', padding: '16px', width: '100%', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-space)',
                    background: plan.highlight ? 'var(--gym-lime)' : 'transparent',
                    color: plan.highlight ? 'var(--gym-black)' : 'var(--gym-white)',
                    borderWidth: plan.highlight ? 0 : '1px', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.2)',
                    transition: 'all 0.3s',
                  }}>
                    GET STARTED
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ TESTIMONIALS ═══════════════ */}
        <section id="testimonials" style={{ background: 'var(--gym-charcoal)', padding: '120px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <p style={{ color: 'var(--gym-lime)', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>04 — TESTIMONIALS</p>
              <h2 className="bebas" style={{ fontSize: 'clamp(40px, 8vw, 60px)', lineHeight: 0.95 }}>
                FORGED BY<br /><span style={{ color: 'var(--gym-lime)' }}>THE PEOPLE</span>
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  style={{ background: 'var(--gym-black)', padding: '40px', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div style={{ color: 'var(--gym-lime)', fontSize: '20px', marginBottom: '16px' }}>{'★'.repeat(t.rating)}</div>
                  <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--gym-white)', marginBottom: '20px', fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                  <p className="bebas" style={{ fontSize: '18px', letterSpacing: '2px', color: 'var(--gym-lime)' }}>— {t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CTA / JOIN ═══════════════ */}
        <section id="join" style={{ background: 'var(--gym-black)', padding: '120px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* Background lime glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(204,255,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="bebas glow-lime" style={{ fontSize: 'clamp(48px, 12vw, 120px)', lineHeight: 0.9, marginBottom: '24px' }}>
              STOP WAITING.<br />
              <span style={{ color: 'var(--gym-lime)' }}>START FORGING.</span>
            </h2>
            <p style={{ color: 'var(--gym-smoke)', fontSize: '16px', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              Your first session is free. Walk in, feel the energy, and decide if you&apos;re ready to transform.
            </p>
            <a href="#" className="btn-pulse" style={{ display: 'inline-block', padding: '20px 60px', background: 'var(--gym-lime)', color: 'var(--gym-black)', fontWeight: 700, fontSize: '16px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--font-space)' }}>
              CLAIM FREE SESSION
            </a>
          </motion.div>
        </section>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer style={{ background: 'var(--gym-charcoal)', padding: '60px 24px 30px', borderTop: '1px solid rgba(204,255,0,0.1)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div className="bebas" style={{ fontSize: '28px', color: 'var(--gym-lime)', marginBottom: '16px', letterSpacing: '3px' }}>IRON<span style={{ color: 'var(--gym-white)' }}>FORGE</span></div>
              <p style={{ color: 'var(--gym-smoke)', fontSize: '14px', lineHeight: 1.7 }}>Where iron meets willpower.<br />Forging champions since 2019.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--gym-white)', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Hours</h4>
              <p style={{ color: 'var(--gym-smoke)', fontSize: '14px', lineHeight: 2 }}>Mon – Fri: 5 AM – 11 PM<br />Sat – Sun: 6 AM – 10 PM</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--gym-white)', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Contact</h4>
              <p style={{ color: 'var(--gym-smoke)', fontSize: '14px', lineHeight: 2 }}>+91 98765 43210<br />hello@ironforge.fit<br />Koramangala, Bangalore</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--gym-white)', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Follow</h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                {['Instagram', 'YouTube', 'Twitter'].map(s => (
                  <a key={s} href="#" style={{ color: 'var(--gym-smoke)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseOver={e => (e.currentTarget.style.color = 'var(--gym-lime)')}
                    onMouseOut={e => (e.currentTarget.style.color = 'var(--gym-smoke)')}
                  >{s}</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>© 2024 IRONFORGE. All rights reserved.</p>
            <Link href="/" style={{ color: 'var(--gym-lime)', fontSize: '12px', letterSpacing: '1px', textDecoration: 'none', opacity: 0.6, transition: 'opacity 0.3s' }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.6')}
            >
              Designed by Fox & Frame Studios ↗
            </Link>
          </div>
        </footer>

      </div>
    </>
  );
}
