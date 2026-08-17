'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

/* ───────────────────────────── ESSENCE RESTAURANT ─────────────────────────
   Theme: Warm Luxury · Editorial · Organic Elegance
   Palette: Burgundy #3D0C11 · Gold #C9A96E · Cream #FFF8F0 · Dark #1A0A0D
   Fonts: Playfair Display (display) + Cormorant Garamond (body)
   ──────────────────────────────────────────────────────────────────────── */

export default function RestaurantPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Starters');

  const navLinks = ['Story', 'Menu', 'Chef', 'Gallery', 'Reserve'];

  const menuCategories = ['Starters', 'Mains', 'Desserts', 'Drinks'];
  const menuItems: Record<string, Array<{ name: string; desc: string; price: string; tag?: string }>> = {
    'Starters': [
      { name: 'Truffle Burrata', desc: 'Creamy burrata, black truffle shavings, aged balsamic, micro basil', price: '₹1,200', tag: 'Chef\'s Pick' },
      { name: 'Seared Scallops', desc: 'Pan-seared Hokkaido scallops, cauliflower purée, hazelnut crumble', price: '₹1,800' },
      { name: 'Wild Mushroom Soup', desc: 'Forest mushroom velouté, truffle oil, sourdough croutons', price: '₹750' },
      { name: 'Tuna Tartare', desc: 'Yellowfin tuna, avocado, yuzu dressing, wonton crisps', price: '₹1,500' },
    ],
    'Mains': [
      { name: 'Wagyu Striploin', desc: 'A5 wagyu, roasted bone marrow jus, charred broccolini, pomme purée', price: '₹6,500', tag: 'Signature' },
      { name: 'Chilean Sea Bass', desc: 'Miso-glazed, edamame purée, pickled ginger, dashi broth', price: '₹3,800' },
      { name: 'Lamb Rack', desc: 'Herb-crusted New Zealand lamb, ratatouille, rosemary jus', price: '₹3,200' },
      { name: 'Risotto Nero', desc: 'Squid ink risotto, grilled calamari, lemon confit, parmesan crisp', price: '₹2,200' },
    ],
    'Desserts': [
      { name: 'Dark Chocolate Fondant', desc: '72% Valrhona chocolate, vanilla bean ice cream, gold leaf', price: '₹950', tag: 'Must Try' },
      { name: 'Crème Brûlée', desc: 'Classic Tahitian vanilla, torched caramel, shortbread', price: '₹750' },
      { name: 'Tiramisu Deconstructed', desc: 'Mascarpone mousse, espresso gel, cocoa soil, amaretti', price: '₹850' },
    ],
    'Drinks': [
      { name: 'Essence Old Fashioned', desc: 'Japanese whisky, demerara, aromatic bitters, smoked cherry', price: '₹1,100' },
      { name: 'Garden of Eden', desc: 'Gin, elderflower, cucumber, basil, prosecco top', price: '₹950' },
      { name: 'Sommelier\'s Selection', desc: 'Ask your server for tonight\'s curated wine pairing', price: '₹2,500' },
    ],
  };

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', span: 'tall' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', span: 'normal' },
    { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', span: 'normal' },
    { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80', span: 'wide' },
    { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80', span: 'normal' },
    { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80', span: 'tall' },
  ];

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

      <style jsx global>{`
        .resto-page {
          --resto-burgundy: #3D0C11;
          --resto-gold: #C9A96E;
          --resto-cream: #FFF8F0;
          --resto-dark: #1A0A0D;
          --resto-muted: #8B7355;
          --resto-rose: #F5E6D8;
          --font-playfair: 'Playfair Display', serif;
          --font-cormorant: 'Cormorant Garamond', serif;
          background: var(--resto-cream);
          color: var(--resto-dark);
          font-family: var(--font-cormorant);
          overflow-x: hidden;
          font-size: 18px;
        }
        .resto-page * { box-sizing: border-box; margin: 0; padding: 0; }
        .playfair { font-family: var(--font-playfair); }
        .cormorant { font-family: var(--font-cormorant); }
        .gold-ornament {
          display: flex; align-items: center; gap: 16px;
          justify-content: center; margin: 24px 0;
        }
        .gold-ornament::before, .gold-ornament::after {
          content: ''; height: 1px; width: 60px;
          background: linear-gradient(90deg, transparent, var(--resto-gold), transparent);
        }
        .gold-ornament span { color: var(--resto-gold); font-size: 20px; }
        .menu-card {
          position: relative; padding: 28px 0;
          border-bottom: 1px solid rgba(201,169,110,0.2);
          transition: all 0.4s ease;
        }
        .menu-card:hover { padding-left: 16px; }
        .menu-card:hover::before {
          content: ''; position: absolute; left: 0; top: 50%;
          transform: translateY(-50%); width: 3px; height: 60%;
          background: var(--resto-gold); border-radius: 2px;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .gallery-grid .tall { grid-row: span 2; }
        .gallery-grid .wide { grid-column: span 2; }
        .gallery-item {
          overflow: hidden; position: relative;
          border-radius: 4px;
        }
        .gallery-item img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease, filter 0.8s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.08); filter: brightness(1.1);
        }
        .gallery-item::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(61,12,17,0.3) 100%);
          opacity: 0; transition: opacity 0.4s;
        }
        .gallery-item:hover::after { opacity: 1; }
        .resto-input {
          width: 100%; padding: 14px 0; background: transparent;
          border: none; border-bottom: 1px solid rgba(201,169,110,0.3);
          color: var(--resto-cream); font-family: var(--font-cormorant);
          font-size: 17px; outline: none; transition: border-color 0.3s;
        }
        .resto-input:focus { border-bottom-color: var(--resto-gold); }
        .resto-input::placeholder { color: rgba(255,248,240,0.3); }
        @media (max-width: 768px) {
          .resto-desktop-nav { display: none !important; }
          .resto-hamburger { display: flex !important; }
          .hero-split { flex-direction: column !important; }
          .hero-text { padding: 120px 24px 40px !important; text-align: center !important; }
          .hero-image-wrap { height: 50vh !important; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-grid .wide { grid-column: span 1; }
          .gallery-grid .tall { grid-row: span 1; }
          .chef-split { flex-direction: column !important; }
          .reserve-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .resto-hamburger { display: none !important; }
        }
      `}</style>

      <div className="resto-page">

        {/* ═══════════════ NAVBAR ═══════════════ */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,248,240,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(201,169,110,0.15)' }}
        >
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="resto-desktop-nav">
            {navLinks.slice(0, 2).map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="cormorant" style={{ color: 'var(--resto-burgundy)', fontSize: '15px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, transition: 'color 0.3s' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--resto-gold)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--resto-burgundy)')}
              >{l}</a>
            ))}
          </div>

          {/* Center Logo */}
          <div style={{ textAlign: 'center' }}>
            <div className="playfair" style={{ fontSize: '24px', fontWeight: 600, color: 'var(--resto-burgundy)', letterSpacing: '4px' }}>ESSENCE</div>
            <div className="cormorant" style={{ fontSize: '10px', letterSpacing: '5px', color: 'var(--resto-gold)', textTransform: 'uppercase', marginTop: '2px' }}>Fine Dining</div>
          </div>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="resto-desktop-nav">
            {navLinks.slice(2).map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="cormorant" style={{ color: 'var(--resto-burgundy)', fontSize: '15px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, transition: 'color 0.3s' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--resto-gold)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--resto-burgundy)')}
              >{l}</a>
            ))}
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="resto-hamburger"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '8px' }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '24px', height: '1.5px', background: 'var(--resto-burgundy)', transition: 'all 0.3s',
                transform: menuOpen ? (i === 0 ? 'rotate(45deg) translateY(6.5px)' : i === 2 ? 'rotate(-45deg) translateY(-6.5px)' : 'scaleX(0)') : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1
              }} />
            ))}
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'rgba(255,248,240,0.97)', backdropFilter: 'blur(30px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '32px' }}
            >
              {navLinks.map((link, i) => (
                <motion.a key={link} href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="playfair"
                  style={{ fontSize: '36px', color: 'var(--resto-burgundy)', textDecoration: 'none', letterSpacing: '4px' }}
                >{link}</motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════ HERO ═══════════════ */}
        <section style={{ minHeight: '100vh', display: 'flex' }} className="hero-split">
          {/* Left - Text */}
          <div className="hero-text" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 80px', background: 'var(--resto-cream)' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}>
              <div className="gold-ornament"><span>✦</span></div>
              <p className="cormorant" style={{ color: 'var(--resto-gold)', fontSize: '14px', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 500 }}>
                A Culinary Experience
              </p>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="playfair" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.1, color: 'var(--resto-burgundy)', fontWeight: 400, marginBottom: '28px' }}>
              Where Every<br />
              Dish Tells a<br />
              <em style={{ fontStyle: 'italic', color: 'var(--resto-gold)' }}>Story</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
              className="cormorant" style={{ fontSize: '20px', lineHeight: 1.8, color: 'var(--resto-muted)', maxWidth: '400px' }}>
              Experience the art of fine dining, where seasonal ingredients meet timeless culinary traditions in an atmosphere of understated elegance.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}
              style={{ marginTop: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#reserve" style={{ padding: '16px 40px', background: 'var(--resto-burgundy)', color: 'var(--resto-cream)', fontFamily: 'var(--font-cormorant)', fontSize: '15px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.4s' }}
                onMouseOver={e => (e.currentTarget.style.background = 'var(--resto-gold)')}
                onMouseOut={e => (e.currentTarget.style.background = 'var(--resto-burgundy)')}
              >Reserve a Table</a>
              <a href="#menu" style={{ padding: '16px 40px', background: 'transparent', color: 'var(--resto-burgundy)', fontFamily: 'var(--font-cormorant)', fontSize: '15px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid var(--resto-gold)', transition: 'all 0.4s' }}
                onMouseOver={e => { e.currentTarget.style.background = 'var(--resto-gold)'; e.currentTarget.style.color = 'var(--resto-cream)'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--resto-burgundy)'; }}
              >View Menu</a>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: 1, position: 'relative', overflow: 'hidden' }}
          >
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80" alt="Fine dining interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '100vh' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(61,12,17,0.1) 0%, rgba(61,12,17,0.3) 100%)' }} />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              style={{ position: 'absolute', bottom: '40px', left: '40px', background: 'rgba(255,248,240,0.15)', backdropFilter: 'blur(20px)', padding: '20px 28px', borderRadius: '4px', border: '1px solid rgba(201,169,110,0.3)' }}
            >
              <div className="playfair" style={{ color: 'var(--resto-cream)', fontSize: '14px', letterSpacing: '2px' }}>★★★★★</div>
              <div className="cormorant" style={{ color: 'rgba(255,248,240,0.7)', fontSize: '13px', marginTop: '4px', letterSpacing: '1px' }}>Michelin Recommended · 2024</div>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════════ STORY / PHILOSOPHY ═══════════════ */}
        <section id="story" style={{ padding: '120px 24px', background: 'var(--resto-cream)', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="gold-ornament"><span>✦</span></div>
              <p className="cormorant" style={{ color: 'var(--resto-gold)', fontSize: '13px', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '20px' }}>Our Philosophy</p>
              <h2 className="playfair" style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--resto-burgundy)', fontWeight: 400, lineHeight: 1.2, marginBottom: '32px' }}>
                Crafted with <em style={{ fontStyle: 'italic', color: 'var(--resto-gold)' }}>Passion</em>,<br />Served with Grace
              </h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="cormorant" style={{ fontSize: '20px', lineHeight: 2, color: 'var(--resto-muted)' }}>
              At Essence, we believe dining is an art form. Every plate is composed with the precision of a symphony — each ingredient playing its part in a harmonious celebration of flavour, texture, and presentation. Our kitchen sources the finest seasonal produce from trusted local farms, transforming humble ingredients into extraordinary experiences.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="gold-ornament" style={{ marginTop: '40px' }}><span>✦</span></div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ MENU ═══════════════ */}
        <section id="menu" style={{ padding: '120px 24px', background: 'var(--resto-burgundy)', color: 'var(--resto-cream)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <p className="cormorant" style={{ color: 'var(--resto-gold)', fontSize: '13px', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '20px' }}>Curated Selection</p>
              <h2 className="playfair" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.2 }}>
                Our <em style={{ fontStyle: 'italic', color: 'var(--resto-gold)' }}>Menu</em>
              </h2>
            </motion.div>

            {/* Category Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '48px', flexWrap: 'wrap' }}>
              {menuCategories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="cormorant"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '16px', letterSpacing: '3px', textTransform: 'uppercase',
                    color: activeCategory === cat ? 'var(--resto-gold)' : 'rgba(255,248,240,0.4)',
                    borderBottom: activeCategory === cat ? '1px solid var(--resto-gold)' : '1px solid transparent',
                    paddingBottom: '8px', transition: 'all 0.3s', fontFamily: 'var(--font-cormorant)',
                  }}
                >{cat}</button>
              ))}
            </div>

            {/* Menu Items */}
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                {menuItems[activeCategory].map((item, i) => (
                  <motion.div key={item.name} className="menu-card"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                          <h3 className="playfair" style={{ fontSize: '22px', fontWeight: 500, color: 'var(--resto-cream)' }}>{item.name}</h3>
                          {item.tag && (
                            <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--resto-gold)', border: '1px solid var(--resto-gold)', padding: '3px 10px' }}>{item.tag}</span>
                          )}
                        </div>
                        <p className="cormorant" style={{ fontSize: '16px', color: 'rgba(255,248,240,0.5)', lineHeight: 1.6, fontStyle: 'italic' }}>{item.desc}</p>
                      </div>
                      <span className="playfair" style={{ fontSize: '20px', color: 'var(--resto-gold)', fontWeight: 500, whiteSpace: 'nowrap' }}>{item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ═══════════════ CHEF ═══════════════ */}
        <section id="chef" style={{ padding: '0', background: 'var(--resto-cream)' }}>
          <div style={{ display: 'flex', minHeight: '80vh' }} className="chef-split">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              style={{ flex: 1, position: 'relative', overflow: 'hidden' }}
            >
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" alt="Chef at work"
                style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '500px' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 70%, var(--resto-cream) 100%)' }} />
            </motion.div>

            {/* Text */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 60px' }}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="gold-ornament" style={{ justifyContent: 'flex-start' }}><span>✦</span></div>
                <p className="cormorant" style={{ color: 'var(--resto-gold)', fontSize: '13px', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '16px' }}>The Maestro</p>
                <h2 className="playfair" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--resto-burgundy)', fontWeight: 400, lineHeight: 1.2, marginBottom: '28px' }}>
                  Chef Ananya<br /><em style={{ fontStyle: 'italic', color: 'var(--resto-gold)' }}>Krishnamurthy</em>
                </h2>
                <p className="cormorant" style={{ fontSize: '19px', lineHeight: 1.9, color: 'var(--resto-muted)', marginBottom: '24px' }}>
                  Trained at Le Cordon Bleu Paris and seasoned through kitchens in Tokyo, Barcelona, and Copenhagen, Chef Ananya brings a global perspective rooted in Indian soul. Her philosophy is simple: &ldquo;Let the ingredient speak. Our job is to listen.&rdquo;
                </p>
                <p className="cormorant" style={{ fontSize: '19px', lineHeight: 1.9, color: 'var(--resto-muted)' }}>
                  With 18 years of culinary mastery, she has earned recognition from Condé Nast Traveller and was named among Asia&apos;s Top 50 Rising Chefs in 2023.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════ GALLERY ═══════════════ */}
        <section id="gallery" style={{ padding: '120px 24px', background: 'var(--resto-rose)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="gold-ornament"><span>✦</span></div>
              <h2 className="playfair" style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--resto-burgundy)', fontWeight: 400 }}>
                A Visual <em style={{ fontStyle: 'italic', color: 'var(--resto-gold)' }}>Feast</em>
              </h2>
            </motion.div>

            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`gallery-item ${img.span}`}
                  style={{ minHeight: img.span === 'tall' ? '400px' : '200px' }}
                >
                  <img src={img.src} alt="Restaurant gallery" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ RESERVATION ═══════════════ */}
        <section id="reserve" style={{ padding: '120px 24px', background: 'var(--resto-dark)', color: 'var(--resto-cream)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="gold-ornament"><span>✦</span></div>
              <h2 className="playfair" style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 400, lineHeight: 1.2 }}>
                Reserve Your <em style={{ fontStyle: 'italic', color: 'var(--resto-gold)' }}>Table</em>
              </h2>
              <p className="cormorant" style={{ fontSize: '18px', color: 'rgba(255,248,240,0.5)', marginTop: '16px' }}>We look forward to hosting you for an unforgettable evening</p>
            </motion.div>

            <div className="reserve-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
              {/* Form */}
              <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: 'column', gap: '28px' }} onSubmit={e => e.preventDefault()}>
                <input className="resto-input" placeholder="Full Name" />
                <input className="resto-input" placeholder="Email Address" />
                <input className="resto-input" placeholder="Phone Number" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input className="resto-input" placeholder="Date" type="date" style={{ colorScheme: 'dark' }} />
                  <input className="resto-input" placeholder="Guests" type="number" min="1" max="20" />
                </div>
                <textarea className="resto-input" placeholder="Special Requests" rows={3} style={{ resize: 'none', borderBottom: '1px solid rgba(201,169,110,0.3)' }} />
                <button type="submit" style={{ marginTop: '12px', padding: '18px 48px', background: 'var(--resto-gold)', color: 'var(--resto-dark)', fontFamily: 'var(--font-cormorant)', fontSize: '15px', letterSpacing: '4px', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'all 0.4s', fontWeight: 600 }}
                  onMouseOver={e => { e.currentTarget.style.background = 'var(--resto-cream)'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'var(--resto-gold)'; }}
                >Confirm Reservation</button>
              </motion.form>

              {/* Info */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                <div>
                  <h4 className="cormorant" style={{ color: 'var(--resto-gold)', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Location</h4>
                  <p className="cormorant" style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,248,240,0.6)' }}>42, MG Road, Indiranagar<br />Bangalore, 560038</p>
                </div>
                <div>
                  <h4 className="cormorant" style={{ color: 'var(--resto-gold)', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Hours</h4>
                  <p className="cormorant" style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,248,240,0.6)' }}>Lunch: 12:00 PM – 3:00 PM<br />Dinner: 7:00 PM – 11:30 PM<br />Closed on Mondays</p>
                </div>
                <div>
                  <h4 className="cormorant" style={{ color: 'var(--resto-gold)', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Contact</h4>
                  <p className="cormorant" style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,248,240,0.6)' }}>+91 80 4567 8901<br />reservations@essence.in</p>
                </div>
                <div style={{ padding: '24px', border: '1px solid rgba(201,169,110,0.2)', background: 'rgba(201,169,110,0.05)' }}>
                  <p className="cormorant" style={{ fontSize: '15px', color: 'rgba(255,248,240,0.5)', fontStyle: 'italic', lineHeight: 1.6 }}>
                    &ldquo;For parties of 8 or more, please contact us directly for a customised dining experience.&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer style={{ background: 'var(--resto-burgundy)', padding: '60px 24px 30px', textAlign: 'center' }}>
          <div className="playfair" style={{ fontSize: '28px', color: 'var(--resto-cream)', letterSpacing: '6px', marginBottom: '16px' }}>ESSENCE</div>
          <div className="gold-ornament"><span>✦</span></div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {['Instagram', 'Facebook', 'TripAdvisor'].map(s => (
              <a key={s} href="#" className="cormorant" style={{ color: 'rgba(255,248,240,0.4)', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--resto-gold)')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,248,240,0.4)')}
              >{s}</a>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', margin: '0 auto', flexWrap: 'wrap', gap: '12px' }}>
            <p className="cormorant" style={{ color: 'rgba(255,248,240,0.2)', fontSize: '13px' }}>© 2024 Essence. All rights reserved.</p>
            <Link href="/" className="cormorant" style={{ color: 'var(--resto-gold)', fontSize: '12px', letterSpacing: '1px', textDecoration: 'none', opacity: 0.5, transition: 'opacity 0.3s' }}
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
