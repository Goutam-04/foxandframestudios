'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

/* ───────────────────────────── ARJUN MEHTA PORTFOLIO ─────────────────────
   Theme: Dark Editorial · Creative · Asymmetric · Experimental
   Palette: Almost Black #0D0D0D · Ivory #F5F0EB · Coral #FF6B4A · Smoke #666
   Fonts: Syne (display) + Outfit (body)
   ──────────────────────────────────────────────────────────────────────── */

function LetterReveal({ text, delay = 0, className = '', style = {} }: { text: string; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={className} style={{ display: 'inline-block', ...style }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 80, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: delay + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-block', transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

function MarqueeStrip() {
  const items = ['BRANDING', '✦', 'WEB DESIGN', '✦', 'UI/UX', '✦', 'CREATIVE DIRECTION', '✦', 'MOTION DESIGN', '✦', 'STRATEGY', '✦'];
  return (
    <div style={{ overflow: 'hidden', padding: '24px 0', borderTop: '1px solid rgba(245,240,235,0.08)', borderBottom: '1px solid rgba(245,240,235,0.08)' }}>
      <motion.div
        animate={{ x: [0, -1800] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '48px', whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="syne" style={{ fontSize: '18px', fontWeight: item === '✦' ? 400 : 700, color: item === '✦' ? 'var(--port-coral)' : 'rgba(245,240,235,0.25)', letterSpacing: '4px' }}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function PortfolioPage() {
  const [currentTime, setCurrentTime] = useState('');
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }));
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  const projects = [
    {
      num: '01', title: 'Nebula Finance', category: 'Brand Identity · Web Design',
      desc: 'A complete visual overhaul for a fintech startup challenging the banking status quo. Dark, premium, data-driven.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', year: '2024',
    },
    {
      num: '02', title: 'Aura Wellness', category: 'Web Design · E-commerce',
      desc: 'Organic luxury wellness brand. Earthy tones, flowing typography, and an immersive shopping experience.',
      image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=1200&q=80', year: '2024',
    },
    {
      num: '03', title: 'Pulse Records', category: 'Creative Direction · Branding',
      desc: 'Identity system for an independent music label. Bold, chaotic, unapologetically expressive.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80', year: '2023',
    },
    {
      num: '04', title: 'Verde Architecture', category: 'Web Design · Motion',
      desc: 'Portfolio site for a sustainable architecture firm. Minimalist grids, large imagery, seamless scroll transitions.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80', year: '2023',
    },
  ];

  const servicesList = [
    { num: '01', name: 'Brand Strategy & Identity', desc: 'Logos, visual systems, brand guidelines, tone of voice' },
    { num: '02', name: 'Web Design & Development', desc: 'Custom websites, landing pages, e-commerce, CMS integration' },
    { num: '03', name: 'UI/UX Design', desc: 'Product interfaces, design systems, user research, prototyping' },
    { num: '04', name: 'Creative Direction', desc: 'Campaign concepts, art direction, content strategy, visual storytelling' },
    { num: '05', name: 'Motion & Interaction', desc: 'Micro-interactions, animated interfaces, video content, 3D graphics' },
  ];

  const skills = ['Figma', 'React', 'Next.js', 'Framer', 'After Effects', 'Blender', 'TypeScript', 'Webflow', 'GSAP', 'Photoshop', 'Illustrator', 'Spline'];

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />

      <style jsx global>{`
        .port-page {
          --port-black: #0D0D0D;
          --port-dark: #141414;
          --port-ivory: #F5F0EB;
          --port-coral: #FF6B4A;
          --port-smoke: #666666;
          --port-muted: #999999;
          --font-syne: 'Syne', sans-serif;
          --font-outfit: 'Outfit', sans-serif;
          background: var(--port-black);
          color: var(--port-ivory);
          font-family: var(--font-outfit);
          overflow-x: hidden;
        }
        .port-page * { box-sizing: border-box; margin: 0; padding: 0; }
        .syne { font-family: var(--font-syne); }
        .outfit { font-family: var(--font-outfit); }
        .project-showcase {
          position: relative; overflow: hidden;
          cursor: pointer;
        }
        .project-showcase img {
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s;
        }
        .project-showcase:hover img {
          transform: scale(1.04);
          filter: brightness(0.7);
        }
        .project-showcase .project-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.5s;
        }
        .project-showcase:hover .project-overlay { opacity: 1; }
        .service-row {
          display: flex; align-items: center; padding: 32px 0;
          border-bottom: 1px solid rgba(245,240,235,0.06);
          transition: all 0.4s; cursor: pointer; gap: 24px;
        }
        .service-row:hover {
          padding-left: 20px;
          border-bottom-color: rgba(255,107,74,0.3);
        }
        .service-row:hover .service-name { color: var(--port-coral); }
        .service-row .service-name { transition: color 0.3s; }
        .skill-tag {
          display: inline-block; padding: 10px 24px;
          border: 1px solid rgba(245,240,235,0.1);
          border-radius: 50px; font-size: 14px;
          color: var(--port-muted); transition: all 0.3s;
          font-family: var(--font-outfit); font-weight: 400;
        }
        .skill-tag:hover {
          border-color: var(--port-coral);
          color: var(--port-coral);
          background: rgba(255,107,74,0.05);
        }
        .contact-input {
          width: 100%; padding: 20px 0; background: transparent;
          border: none; border-bottom: 1px solid rgba(245,240,235,0.1);
          color: var(--port-ivory); font-family: var(--font-outfit);
          font-size: 18px; font-weight: 300; outline: none;
          transition: border-color 0.3s;
        }
        .contact-input:focus { border-bottom-color: var(--port-coral); }
        .contact-input::placeholder { color: rgba(245,240,235,0.15); }
        .dot-nav {
          position: fixed; right: 32px; top: 50%; transform: translateY(-50%);
          z-index: 90; display: flex; flex-direction: column; gap: 16px;
        }
        .dot-nav a {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(245,240,235,0.2); display: block;
          transition: all 0.3s;
        }
        .dot-nav a:hover { background: var(--port-coral); transform: scale(1.5); }
        @media (max-width: 768px) {
          .dot-nav { display: none; }
          .project-layout { flex-direction: column !important; }
          .project-layout.reverse { flex-direction: column !important; }
          .about-split { flex-direction: column !important; gap: 40px !important; }
          .contact-split { flex-direction: column !important; }
          .hero-title { font-size: clamp(48px, 14vw, 120px) !important; }
        }
      `}</style>

      <div className="port-page">
        {/* ═══════════════ DOT NAV ═══════════════ */}
        <nav className="dot-nav">
          {['hero', 'work', 'about', 'services', 'contact'].map(s => (
            <a key={s} href={`#${s}`} title={s} />
          ))}
        </nav>

        {/* ═══════════════ MINIMAL HEADER ═══════════════ */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mixBlendMode: 'difference' }}
        >
          <div className="syne" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '2px', color: 'var(--port-ivory)' }}>
            AM<span style={{ color: 'var(--port-coral)' }}>.</span>
          </div>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <span className="outfit" style={{ fontSize: '12px', color: 'var(--port-muted)', letterSpacing: '2px' }}>
              {currentTime} IST
            </span>
            <a href="#contact" className="outfit" style={{ fontSize: '13px', color: 'var(--port-ivory)', letterSpacing: '2px', textDecoration: 'none', textTransform: 'uppercase', padding: '10px 24px', border: '1px solid rgba(245,240,235,0.2)', borderRadius: '50px', transition: 'all 0.3s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--port-coral)'; e.currentTarget.style.color = 'var(--port-coral)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(245,240,235,0.2)'; e.currentTarget.style.color = 'var(--port-ivory)'; }}
            >Let&apos;s Talk</a>
          </div>
        </motion.header>

        {/* ═══════════════ HERO ═══════════════ */}
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px', position: 'relative' }}>
          {/* Subtle gradient bg */}
          <motion.div style={{ y: bgY, position: 'absolute', top: '-20%', right: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,74,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="outfit"
              style={{ fontSize: '14px', color: 'var(--port-smoke)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '32px' }}
            >
              Creative Designer & Developer — Based in Bangalore
            </motion.p>

            <h1 className="syne hero-title" style={{ fontSize: 'clamp(60px, 10vw, 140px)', fontWeight: 800, lineHeight: 0.9, marginBottom: '40px' }}>
              <LetterReveal text="ARJUN" delay={0.4} />
              <br />
              <span style={{ display: 'inline-block' }}>
                <LetterReveal text="MEHTA" delay={0.7} style={{ color: 'var(--port-coral)' }} />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}
            >
              <p className="outfit" style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--port-smoke)', maxWidth: '480px', fontWeight: 300 }}>
                I design digital experiences that feel alive — where strategy meets artistry, and every pixel has purpose.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                {[
                  { num: '50+', label: 'Projects' },
                  { num: '4+', label: 'Years' },
                  { num: '30+', label: 'Clients' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div className="syne" style={{ fontSize: '28px', fontWeight: 800, color: 'var(--port-ivory)' }}>{s.num}</div>
                    <div className="outfit" style={{ fontSize: '12px', color: 'var(--port-smoke)', letterSpacing: '2px', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll line */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
          >
            <span className="outfit" style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--port-smoke)', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--port-coral), transparent)' }} />
          </motion.div>
        </section>

        {/* ═══════════════ MARQUEE ═══════════════ */}
        <MarqueeStrip />

        {/* ═══════════════ SELECTED WORK ═══════════════ */}
        <section id="work" style={{ padding: '120px 40px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ marginBottom: '80px' }}>
              <p className="outfit" style={{ fontSize: '13px', color: 'var(--port-coral)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>Selected Work</p>
              <h2 className="syne" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, lineHeight: 1 }}>
                Projects that<br /><span style={{ color: 'var(--port-coral)' }}>speak volumes</span>
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
              {projects.map((proj, i) => (
                <motion.div key={proj.num} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}
                  className={`project-layout ${i % 2 !== 0 ? 'reverse' : ''}`}
                  style={{ display: 'flex', gap: '60px', alignItems: 'center', flexDirection: i % 2 !== 0 ? 'row-reverse' : 'row' }}>
                  {/* Image */}
                  <div className="project-showcase" style={{ flex: 1.4, aspectRatio: '16/10', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                    <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="project-overlay">
                      <span className="syne" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--port-ivory)', letterSpacing: '4px', padding: '14px 32px', border: '2px solid var(--port-ivory)', borderRadius: '50px' }}>VIEW PROJECT</span>
                    </div>
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <span className="outfit" style={{ fontSize: '64px', fontWeight: 200, color: 'rgba(245,240,235,0.06)', display: 'block', lineHeight: 1 }}>{proj.num}</span>
                    <span className="outfit" style={{ fontSize: '12px', color: 'var(--port-coral)', letterSpacing: '3px', textTransform: 'uppercase' }}>{proj.category}</span>
                    <h3 className="syne" style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, marginTop: '8px', marginBottom: '16px', lineHeight: 1.1 }}>{proj.title}</h3>
                    <p className="outfit" style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--port-smoke)', fontWeight: 300, marginBottom: '20px' }}>{proj.desc}</p>
                    <span className="outfit" style={{ fontSize: '13px', color: 'var(--port-muted)' }}>{proj.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <MarqueeStrip />

        {/* ═══════════════ ABOUT ═══════════════ */}
        <section id="about" style={{ padding: '120px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="about-split" style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
              {/* Portrait */}
              <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                style={{ flex: 0.8, position: 'relative' }}>
                <div style={{ aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Arjun Mehta portrait"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
                </div>
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                  style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--port-coral)', padding: '20px 28px', borderRadius: '8px' }}>
                  <div className="syne" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--port-black)' }}>AVAILABLE FOR</div>
                  <div className="outfit" style={{ fontSize: '13px', color: 'rgba(13,13,13,0.7)', marginTop: '4px' }}>Freelance & Collab</div>
                </motion.div>
              </motion.div>

              {/* Bio */}
              <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                style={{ flex: 1.2 }}>
                <p className="outfit" style={{ fontSize: '13px', color: 'var(--port-coral)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>About</p>
                <h2 className="syne" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '32px' }}>
                  Designing for impact,<br />not just <span style={{ color: 'var(--port-coral)' }}>aesthetics</span>
                </h2>
                <p className="outfit" style={{ fontSize: '17px', lineHeight: 2, color: 'var(--port-smoke)', fontWeight: 300, marginBottom: '24px' }}>
                  I&apos;m a multidisciplinary designer and developer based in Bangalore, India. With over 4 years of experience crafting digital products, I specialize in creating brands and websites that don&apos;t just look good — they convert, engage, and leave a lasting impression.
                </p>
                <p className="outfit" style={{ fontSize: '17px', lineHeight: 2, color: 'var(--port-smoke)', fontWeight: 300, marginBottom: '40px' }}>
                  My approach is strategy-first: understanding the business, the audience, and the competitive landscape before touching a single pixel. Every project is an opportunity to create something extraordinary.
                </p>

                {/* Skills cloud */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {skills.map((skill, i) => (
                    <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                      className="skill-tag">{skill}</motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════ SERVICES ═══════════════ */}
        <section id="services" style={{ padding: '120px 40px', background: 'var(--port-dark)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
              <p className="outfit" style={{ fontSize: '13px', color: 'var(--port-coral)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>What I Do</p>
              <h2 className="syne" style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1 }}>
                Services
              </h2>
            </motion.div>

            <div>
              {servicesList.map((svc, i) => (
                <motion.div key={svc.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="service-row">
                  <span className="outfit" style={{ fontSize: '14px', color: 'var(--port-coral)', fontWeight: 500, minWidth: '40px' }}>{svc.num}</span>
                  <div style={{ flex: 1 }}>
                    <h3 className="syne service-name" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--port-ivory)', marginBottom: '4px' }}>{svc.name}</h3>
                    <p className="outfit" style={{ fontSize: '15px', color: 'var(--port-smoke)', fontWeight: 300 }}>{svc.desc}</p>
                  </div>
                  <span className="outfit" style={{ fontSize: '24px', color: 'rgba(245,240,235,0.1)', transition: 'color 0.3s' }}>→</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CONTACT ═══════════════ */}
        <section id="contact" style={{ padding: '120px 40px', position: 'relative' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', bottom: '-30%', left: '20%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,74,0.03) 0%, transparent 60%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
              <p className="outfit" style={{ fontSize: '13px', color: 'var(--port-coral)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>Get in Touch</p>
              <h2 className="syne" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, lineHeight: 1 }}>
                Let&apos;s create<br />something <span style={{ color: 'var(--port-coral)' }}>extraordinary</span>
              </h2>
            </motion.div>

            <div className="contact-split" style={{ display: 'flex', gap: '80px' }}>
              {/* Form */}
              <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '8px' }} onSubmit={e => e.preventDefault()}>
                <input className="contact-input" placeholder="Your Name" />
                <input className="contact-input" placeholder="Email" />
                <input className="contact-input" placeholder="Project Budget (optional)" />
                <textarea className="contact-input" placeholder="Tell me about your project..." rows={4} style={{ resize: 'none' }} />
                <button type="submit" className="syne" style={{ marginTop: '24px', padding: '18px 48px', background: 'var(--port-coral)', color: 'var(--port-black)', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'all 0.3s', alignSelf: 'flex-start', borderRadius: '4px' }}
                  onMouseOver={e => { e.currentTarget.style.background = 'var(--port-ivory)'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'var(--port-coral)'; }}
                >Send Message</button>
              </motion.form>

              {/* Info */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '40px', paddingTop: '20px' }}>
                <div>
                  <p className="outfit" style={{ fontSize: '12px', color: 'var(--port-smoke)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Email</p>
                  <a href="mailto:hello@arjunmehta.design" className="syne" style={{ fontSize: '18px', color: 'var(--port-ivory)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.3s' }}
                    onMouseOver={e => (e.currentTarget.style.color = 'var(--port-coral)')}
                    onMouseOut={e => (e.currentTarget.style.color = 'var(--port-ivory)')}
                  >hello@arjunmehta.design</a>
                </div>
                <div>
                  <p className="outfit" style={{ fontSize: '12px', color: 'var(--port-smoke)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Phone</p>
                  <span className="syne" style={{ fontSize: '18px', color: 'var(--port-ivory)', fontWeight: 600 }}>+91 98765 43210</span>
                </div>
                <div>
                  <p className="outfit" style={{ fontSize: '12px', color: 'var(--port-smoke)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Socials</p>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    {['Dribbble', 'Behance', 'LinkedIn', 'Twitter'].map(s => (
                      <a key={s} href="#" className="outfit" style={{ fontSize: '14px', color: 'var(--port-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseOver={e => (e.currentTarget.style.color = 'var(--port-coral)')}
                        onMouseOut={e => (e.currentTarget.style.color = 'var(--port-muted)')}
                      >{s}</a>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '24px', border: '1px solid rgba(245,240,235,0.06)', borderRadius: '8px', background: 'rgba(255,107,74,0.03)' }}>
                  <p className="outfit" style={{ fontSize: '14px', color: 'var(--port-smoke)', lineHeight: 1.7 }}>
                    Currently accepting projects for <span style={{ color: 'var(--port-coral)' }}>Q3 2024</span>. Typical project timeline is 4–8 weeks.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer style={{ borderTop: '1px solid rgba(245,240,235,0.06)', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="syne" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--port-ivory)' }}>AM<span style={{ color: 'var(--port-coral)' }}>.</span></span>
            <span className="outfit" style={{ fontSize: '12px', color: 'var(--port-smoke)', marginLeft: '20px' }}>© 2024 Arjun Mehta. All rights reserved.</span>
          </div>
          <Link href="/" className="outfit" style={{ color: 'var(--port-coral)', fontSize: '12px', letterSpacing: '1px', textDecoration: 'none', opacity: 0.6, transition: 'opacity 0.3s' }}
            onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
            onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.6')}
          >
            Designed by Fox & Frame Studios ↗
          </Link>
        </footer>
      </div>
    </>
  );
}
