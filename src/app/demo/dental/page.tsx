'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

/* ───────────────────────────── PEARLSMILE DENTAL ─────────────────────────
   Theme: Clean · Modern · Trust-Building Medical
   Palette: Ocean Blue #0066CC · Soft White #F8FBFF · Mint #E8F5F0 · Navy #0A1628
   Fonts: Plus Jakarta Sans (display) + DM Sans (body)
   ──────────────────────────────────────────────────────────────────────── */

export default function DentalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = ['Services', 'Why Us', 'Doctors', 'Reviews', 'Book'];

  const services = [
    { icon: '✨', name: 'Teeth Whitening', desc: 'Professional laser whitening for a brighter, more confident smile. Up to 8 shades whiter in one session.', color: '#E8F5F0' },
    { icon: '🦷', name: 'Dental Implants', desc: 'Permanent titanium implants that look and feel like natural teeth. Lifetime warranty included.', color: '#EEF2FF' },
    { icon: '😁', name: 'Orthodontics', desc: 'Invisible aligners and traditional braces for perfectly aligned teeth. Free 3D scan consultation.', color: '#FFF8E8' },
    { icon: '🛡️', name: 'Preventive Care', desc: 'Regular cleanings, screenings, and fluoride treatments to keep your smile healthy for life.', color: '#F0F8FF' },
    { icon: '💎', name: 'Cosmetic Veneers', desc: 'Custom porcelain veneers crafted for a flawless, natural-looking smile transformation.', color: '#F5F0FF' },
    { icon: '🏥', name: 'Root Canal', desc: 'Pain-free root canal therapy using advanced rotary technology. Same-day treatment available.', color: '#FFF0F0' },
  ];

  const whyUs = [
    { icon: '🏆', title: '15+ Years Experience', desc: 'Trusted by over 20,000 patients across Bangalore' },
    { icon: '🔬', title: 'Latest Technology', desc: 'Digital X-rays, 3D scanning, and laser treatments' },
    { icon: '💉', title: 'Pain-Free Promise', desc: 'Advanced anaesthesia and sedation options available' },
    { icon: '📋', title: 'Insurance Accepted', desc: 'We work with all major insurance providers' },
    { icon: '⏰', title: 'Same-Day Appointments', desc: 'Emergency dental care when you need it most' },
    { icon: '😊', title: 'Family Friendly', desc: 'Dedicated paediatric dentistry wing for kids' },
  ];

  const doctors = [
    { name: 'Dr. Kavitha Sharma', title: 'Chief Dental Surgeon', speciality: 'Implantology & Cosmetic Dentistry', credentials: 'BDS, MDS (AIIMS), Fellow ICOI', exp: '18 years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
    { name: 'Dr. Rajesh Menon', title: 'Orthodontist', speciality: 'Invisalign & Braces', credentials: 'BDS, MDS Orthodontics', exp: '12 years', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80' },
    { name: 'Dr. Priya Iyer', title: 'Paediatric Dentist', speciality: 'Children\'s Dentistry', credentials: 'BDS, MDS Paediatric', exp: '10 years', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=400&q=80' },
  ];

  const reviews = [
    { name: 'Sunita R.', rating: 5, text: 'Dr. Kavitha is simply the best! I was terrified of dentists but she made my implant procedure completely painless. Highly recommend!', date: '2 weeks ago' },
    { name: 'Vikrant M.', rating: 5, text: 'My entire family comes here. The kids love Dr. Priya — she makes dental visits fun! The clinic is spotless and the staff is wonderful.', date: '1 month ago' },
    { name: 'Deepa K.', rating: 5, text: 'Got my teeth whitened here and the results are amazing. 6 shades whiter! The process was quick and the team was very professional.', date: '3 weeks ago' },
    { name: 'Arjun S.', rating: 5, text: 'Emergency root canal on a Sunday — they opened just for me. That\'s dedication you don\'t find anywhere else. Forever grateful.', date: '2 months ago' },
  ];

  const faqs = [
    { q: 'Does teeth whitening damage enamel?', a: 'No. Our professional whitening uses ADA-approved products that are completely safe for your enamel. We also apply a protective fluoride treatment after every session.' },
    { q: 'How long do dental implants last?', a: 'With proper care, dental implants can last a lifetime. We use premium titanium implants from Nobel Biocare and offer a lifetime warranty on all our implant work.' },
    { q: 'Do you offer payment plans?', a: 'Yes! We offer 0% EMI options through major banks for treatments above ₹10,000. We also accept all major insurance providers and can help with claim processing.' },
    { q: 'Is Invisalign as effective as traditional braces?', a: 'For most cases, yes. Invisalign can treat the same conditions as traditional braces with the advantage of being nearly invisible. We offer a free 3D scan to determine the best option for you.' },
    { q: 'What age should my child first visit the dentist?', a: 'We recommend bringing your child in for their first visit by their first birthday or when their first tooth appears. Early visits help establish good habits and catch potential issues early.' },
  ];

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style jsx global>{`
        .dental-page {
          --dental-blue: #0066CC;
          --dental-light-blue: #4A9BF5;
          --dental-navy: #0A1628;
          --dental-white: #F8FBFF;
          --dental-mint: #E8F5F0;
          --dental-gray: #64748B;
          --dental-border: #E2E8F0;
          --font-jakarta: 'Plus Jakarta Sans', sans-serif;
          --font-dm: 'DM Sans', sans-serif;
          background: var(--dental-white);
          color: var(--dental-navy);
          font-family: var(--font-dm);
          overflow-x: hidden;
        }
        .dental-page * { box-sizing: border-box; margin: 0; padding: 0; }
        .jakarta { font-family: var(--font-jakarta); }
        .pill-btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 32px; border-radius: 50px; font-weight: 600;
          font-size: 14px; letter-spacing: 0.5px; text-decoration: none;
          transition: all 0.3s ease; cursor: pointer; border: none;
          font-family: var(--font-jakarta);
        }
        .pill-primary { background: var(--dental-blue); color: white; }
        .pill-primary:hover { background: #0052A3; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,102,204,0.3); }
        .pill-outline { background: transparent; color: var(--dental-blue); border: 2px solid var(--dental-blue); }
        .pill-outline:hover { background: var(--dental-blue); color: white; }
        .service-card {
          padding: 36px 28px; border-radius: 20px;
          border: 1px solid var(--dental-border);
          transition: all 0.4s ease; cursor: pointer;
          position: relative; overflow: hidden;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,102,204,0.1);
          border-color: var(--dental-blue);
        }
        .service-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: linear-gradient(90deg, var(--dental-blue), var(--dental-light-blue));
          transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
        }
        .service-card:hover::after { transform: scaleX(1); }
        .doctor-card {
          border-radius: 24px; overflow: hidden;
          border: 1px solid var(--dental-border);
          transition: all 0.4s ease; background: white;
        }
        .doctor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0,102,204,0.12);
        }
        .review-card {
          padding: 32px; border-radius: 20px; background: white;
          border: 1px solid var(--dental-border);
          transition: all 0.3s ease;
        }
        .review-card:hover { border-color: var(--dental-blue); box-shadow: 0 8px 24px rgba(0,102,204,0.08); }
        .faq-item {
          border: 1px solid var(--dental-border); border-radius: 16px;
          overflow: hidden; transition: all 0.3s ease; background: white;
        }
        .faq-item:hover { border-color: rgba(0,102,204,0.3); }
        .trust-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 50px;
          background: rgba(0,102,204,0.08); color: var(--dental-blue);
          font-size: 13px; font-weight: 600;
        }
        .float-badge {
          position: fixed; bottom: 24px; right: 24px; z-index: 90;
          padding: 16px 28px; border-radius: 50px;
          background: var(--dental-blue); color: white;
          font-family: var(--font-jakarta); font-weight: 700;
          font-size: 14px; text-decoration: none;
          box-shadow: 0 8px 30px rgba(0,102,204,0.4);
          transition: all 0.3s; display: flex; align-items: center; gap: 8px;
        }
        .float-badge:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,102,204,0.5); }
        .dental-input {
          width: 100%; padding: 16px 20px; border-radius: 12px;
          border: 1px solid var(--dental-border); background: var(--dental-white);
          font-family: var(--font-dm); font-size: 15px; color: var(--dental-navy);
          outline: none; transition: border-color 0.3s;
        }
        .dental-input:focus { border-color: var(--dental-blue); box-shadow: 0 0 0 3px rgba(0,102,204,0.1); }
        @media (max-width: 768px) {
          .dental-desktop-nav { display: none !important; }
          .dental-hamburger { display: flex !important; }
          .hero-content { flex-direction: column !important; text-align: center !important; }
          .hero-content > div:first-child { padding: 120px 24px 40px !important; }
          .hero-content > div:last-child { height: 50vh !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .doctors-grid { grid-template-columns: 1fr !important; }
          .book-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .dental-hamburger { display: none !important; }
        }
      `}</style>

      <div className="dental-page">

        {/* Floating Book Button */}
        <a href="#book" className="float-badge">📞 Book Appointment</a>

        {/* ═══════════════ NAVBAR ═══════════════ */}
        <motion.nav
          initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '16px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(248,251,255,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(226,232,240,0.6)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--dental-blue), var(--dental-light-blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🦷</div>
            <div>
              <div className="jakarta" style={{ fontSize: '18px', fontWeight: 800, color: 'var(--dental-navy)' }}>PearlSmile</div>
              <div style={{ fontSize: '10px', color: 'var(--dental-gray)', letterSpacing: '1px', marginTop: '-2px' }}>DENTAL CLINIC</div>
            </div>
          </div>

          <div className="dental-desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
                style={{ color: 'var(--dental-gray)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.3s', fontFamily: 'var(--font-jakarta)' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--dental-blue)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--dental-gray)')}
              >{l}</a>
            ))}
            <a href="#book" className="pill-btn pill-primary" style={{ padding: '10px 24px', fontSize: '13px' }}>Book Now</a>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="dental-hamburger"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '8px' }} aria-label="Menu">
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '22px', height: '2px', borderRadius: '2px', background: 'var(--dental-navy)', transition: 'all 0.3s',
                transform: mobileMenu ? (i === 0 ? 'rotate(45deg) translateY(7px)' : i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'scaleX(0)') : 'none' }} />
            ))}
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'rgba(248,251,255,0.97)', backdropFilter: 'blur(30px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '28px' }}>
              {navLinks.map((link, i) => (
                <motion.a key={link} href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileMenu(false)} className="jakarta"
                  style={{ fontSize: '28px', fontWeight: 700, color: 'var(--dental-navy)', textDecoration: 'none' }}>{link}</motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════ HERO ═══════════════ */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* Background gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--dental-white) 0%, #EEF4FF 50%, var(--dental-mint) 100%)' }} />
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-15%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,102,204,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="hero-content" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1300px', margin: '0 auto', gap: '40px' }}>
            {/* Text */}
            <div style={{ flex: 1, padding: '120px 24px 80px 60px' }}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="trust-badge" style={{ marginBottom: '24px' }}>
                  ⭐ Rated 4.9/5 by 2,000+ Patients
                </div>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}
                className="jakarta" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--dental-navy)', marginBottom: '24px' }}>
                Your Smile<br />Deserves the<br />
                <span style={{ background: 'linear-gradient(135deg, var(--dental-blue), var(--dental-light-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Best Care</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--dental-gray)', maxWidth: '460px', marginBottom: '36px' }}>
                Advanced dental care in a comfortable, family-friendly environment. From routine cleanings to complete smile makeovers — we&apos;ve got you covered.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#book" className="pill-btn pill-primary" style={{ padding: '16px 36px', fontSize: '15px' }}>Book Free Consultation</a>
                <a href="#services" className="pill-btn pill-outline" style={{ padding: '16px 36px', fontSize: '15px' }}>Our Services</a>
              </motion.div>
              {/* Trust indicators */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                style={{ display: 'flex', gap: '24px', marginTop: '48px', flexWrap: 'wrap' }}>
                {[
                  { icon: '🏅', text: 'ISO 9001 Certified' },
                  { icon: '👨‍⚕️', text: 'IDA Accredited' },
                  { icon: '🛡️', text: 'All Insurances Accepted' },
                ].map(t => (
                  <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--dental-gray)' }}>
                    <span style={{ fontSize: '16px' }}>{t.icon}</span> {t.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 1 }}
              style={{ flex: 1, position: 'relative', height: '85vh', borderRadius: '32px 0 0 32px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" alt="Modern dental clinic"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(10,22,40,0.15) 100%)' }} />
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
                style={{ position: 'absolute', bottom: '40px', left: '40px', background: 'white', padding: '20px 28px', borderRadius: '16px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--dental-blue), var(--dental-light-blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px' }}>😊</div>
                <div>
                  <div className="jakarta" style={{ fontSize: '22px', fontWeight: 800, color: 'var(--dental-navy)' }}>20,000+</div>
                  <div style={{ fontSize: '13px', color: 'var(--dental-gray)' }}>Happy Smiles & Counting</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ SERVICES ═══════════════ */}
        <section id="services" style={{ padding: '120px 24px', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="trust-badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>🦷 What We Offer</div>
              <h2 className="jakarta" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--dental-navy)', lineHeight: 1.2 }}>
                Comprehensive Dental<br />
                <span style={{ background: 'linear-gradient(135deg, var(--dental-blue), var(--dental-light-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span>
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {services.map((svc, i) => (
                <motion.div key={svc.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="service-card" style={{ background: svc.color }}>
                  <div style={{ fontSize: '36px', marginBottom: '20px' }}>{svc.icon}</div>
                  <h3 className="jakarta" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--dental-navy)', marginBottom: '10px' }}>{svc.name}</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--dental-gray)' }}>{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ WHY US ═══════════════ */}
        <section id="why-us" style={{ padding: '120px 24px', background: 'var(--dental-navy)', color: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 className="jakarta" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.2 }}>
                Why Families Choose<br />
                <span style={{ color: 'var(--dental-light-blue)' }}>PearlSmile</span>
              </h2>
            </motion.div>

            <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {whyUs.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s' }}
                  onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(74,155,245,0.3)'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 className="jakarta" style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ DOCTORS ═══════════════ */}
        <section id="doctors" style={{ padding: '120px 24px', background: 'var(--dental-white)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="trust-badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>👨‍⚕️ Expert Team</div>
              <h2 className="jakarta" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--dental-navy)', lineHeight: 1.2 }}>
                Meet Our <span style={{ background: 'linear-gradient(135deg, var(--dental-blue), var(--dental-light-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Specialists</span>
              </h2>
            </motion.div>

            <div className="doctors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {doctors.map((doc, i) => (
                <motion.div key={doc.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="doctor-card">
                  <div style={{ height: '300px', overflow: 'hidden' }}>
                    <img src={doc.image} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                      onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  </div>
                  <div style={{ padding: '28px' }}>
                    <h3 className="jakarta" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--dental-navy)', marginBottom: '4px' }}>{doc.name}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--dental-blue)', fontWeight: 600, marginBottom: '8px' }}>{doc.title}</p>
                    <p style={{ fontSize: '14px', color: 'var(--dental-gray)', marginBottom: '4px' }}>{doc.speciality}</p>
                    <p style={{ fontSize: '13px', color: 'var(--dental-gray)', opacity: 0.7 }}>{doc.credentials} · {doc.exp}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ REVIEWS ═══════════════ */}
        <section id="reviews" style={{ padding: '120px 24px', background: 'linear-gradient(180deg, #EEF4FF, var(--dental-white))' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 className="jakarta" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--dental-navy)', lineHeight: 1.2 }}>
                What Our Patients <span style={{ background: 'linear-gradient(135deg, var(--dental-blue), var(--dental-light-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Say</span>
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {reviews.map((rev, i) => (
                <motion.div key={rev.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="review-card">
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>{'★'.repeat(rev.rating)}</div>
                  <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--dental-gray)', marginBottom: '20px' }}>&ldquo;{rev.text}&rdquo;</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="jakarta" style={{ fontWeight: 700, fontSize: '15px', color: 'var(--dental-navy)' }}>{rev.name}</span>
                    <span style={{ fontSize: '12px', color: 'rgba(100,116,139,0.6)' }}>{rev.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section style={{ padding: '120px 24px', background: 'white' }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="jakarta" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--dental-navy)' }}>
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="faq-item">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-jakarta)', fontSize: '16px', fontWeight: 600, color: 'var(--dental-navy)', textAlign: 'left' }}>
                    {faq.q}
                    <span style={{ fontSize: '20px', color: 'var(--dental-blue)', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div style={{ padding: '0 24px 20px', fontSize: '15px', lineHeight: 1.8, color: 'var(--dental-gray)' }}>{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ BOOK APPOINTMENT ═══════════════ */}
        <section id="book" style={{ padding: '120px 24px', background: 'linear-gradient(135deg, #EEF4FF, var(--dental-mint))' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 className="jakarta" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--dental-navy)', lineHeight: 1.2 }}>
                Book Your <span style={{ background: 'linear-gradient(135deg, var(--dental-blue), var(--dental-light-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Appointment</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--dental-gray)', marginTop: '12px' }}>First consultation is always free. Walk-ins welcome!</p>
            </motion.div>

            <div className="book-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'start' }}>
              {/* Form */}
              <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '20px' }}
                onSubmit={e => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input className="dental-input" placeholder="Full Name" />
                  <input className="dental-input" placeholder="Phone Number" />
                </div>
                <input className="dental-input" placeholder="Email Address" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input className="dental-input" type="date" />
                  <select className="dental-input" style={{ color: 'var(--dental-gray)' }}>
                    <option>Select Service</option>
                    {services.map(s => <option key={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <textarea className="dental-input" placeholder="Any specific concerns?" rows={3} style={{ resize: 'none' }} />
                <button type="submit" className="pill-btn pill-primary" style={{ padding: '18px', width: '100%', fontSize: '16px' }}>
                  Book Appointment
                </button>
              </motion.form>

              {/* Info cards */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: '📍', title: 'Visit Us', info: '34, 5th Cross, Jayanagar\nBangalore 560041' },
                  { icon: '📞', title: 'Call Us', info: '+91 80 2634 5678\nEmergency: +91 98765 00000' },
                  { icon: '🕐', title: 'Working Hours', info: 'Mon-Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 2:00 PM' },
                  { icon: '📧', title: 'Email', info: 'care@pearlsmile.in\nappointments@pearlsmile.in' },
                ].map(card => (
                  <div key={card.title} style={{ background: 'white', padding: '24px', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'flex-start', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', border: '1px solid var(--dental-border)' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0,102,204,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{card.icon}</div>
                    <div>
                      <h4 className="jakarta" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dental-navy)', marginBottom: '4px' }}>{card.title}</h4>
                      <p style={{ fontSize: '14px', color: 'var(--dental-gray)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{card.info}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer style={{ background: 'var(--dental-navy)', padding: '60px 24px 30px', color: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--dental-blue), var(--dental-light-blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🦷</div>
                <span className="jakarta" style={{ fontSize: '18px', fontWeight: 800 }}>PearlSmile</span>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>Your trusted partner for complete dental health. Serving families since 2009.</p>
            </div>
            <div>
              <h4 className="jakarta" style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>Services</h4>
              {services.slice(0, 4).map(s => (
                <p key={s.name} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>{s.name}</p>
              ))}
            </div>
            <div>
              <h4 className="jakarta" style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>Quick Links</h4>
              {['About Us', 'Our Team', 'Patient Resources', 'Insurance', 'Blog'].map(l => (
                <p key={l} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>{l}</p>
              ))}
            </div>
            <div>
              <h4 className="jakarta" style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>Follow Us</h4>
              {['Instagram', 'Facebook', 'Google Reviews'].map(s => (
                <p key={s} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>{s}</p>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>© 2024 PearlSmile Dental Clinic. All rights reserved.</p>
            <Link href="/" style={{ color: 'var(--dental-light-blue)', fontSize: '12px', letterSpacing: '1px', textDecoration: 'none', opacity: 0.5, transition: 'opacity 0.3s' }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.5')}
            >
              Designed by Fox & Frame Studios ↗
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
