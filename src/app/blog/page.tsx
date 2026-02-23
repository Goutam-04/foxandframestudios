'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';

type Post = {
    slug: string;
    tag: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    featured?: boolean;
};

const posts: Post[] = [
    {
        slug: 'why-brand-strategy-comes-before-design',
        tag: 'Brand Strategy',
        title: 'Why brand strategy has to come before design — every time',
        excerpt:
            "A logo before a positioning statement is furniture before architecture. We break down why strategy isn't a step you skip, and what it actually costs when you do.",
        author: 'Goutam Kumar Nayak',
        date: 'Feb 18, 2026',
        readTime: '6 min read',
        featured: true,
    },
    {
        slug: 'what-makes-a-good-website-brief',
        tag: 'Process',
        title: 'What makes a good website brief — and why most of them miss the point',
        excerpt:
            "The brief is where most projects go wrong before a single pixel is placed. Here's what we ask every client, and why.",
        author: 'Fox & Frame',
        date: 'Feb 10, 2026',
        readTime: '4 min read',
    },
    {
        slug: 'the-case-for-editorial-web-design',
        tag: 'Design',
        title: 'The case for editorial web design in a world of templates',
        excerpt:
            "Most websites look the same. Not because designers are lazy, but because the brief never asked for anything else. Here's how editorial thinking changes that.",
        author: 'Goutam Kumar Nayak',
        date: 'Jan 30, 2026',
        readTime: '5 min read',
    },
    {
        slug: 'building-trust-through-typography',
        tag: 'Design',
        title: 'Building trust through typography: the silent persuader',
        excerpt:
            'Font choices communicate before the reader processes a single word. We explore how type signals credibility — and how to get it right.',
        author: 'Fox & Frame',
        date: 'Jan 21, 2026',
        readTime: '5 min read',
    },
    {
        slug: 'why-we-dont-do-revisions-without-rationale',
        tag: 'Studio',
        title: "Why we don't do unlimited revisions",
        excerpt:
            "Unlimited revisions sound client-friendly. They're actually the enemy of good work. Here's the process we use instead.",
        author: 'Goutam Kumar Nayak',
        date: 'Jan 12, 2026',
        readTime: '4 min read',
    },
    {
        slug: 'nextjs-for-marketing-sites',
        tag: 'Engineering',
        title: 'Why we build every marketing site in Next.js',
        excerpt:
            'Performance, flexibility, and SEO without compromise. A practical breakdown of our engineering decisions for client websites.',
        author: 'Fox & Frame',
        date: 'Jan 5, 2026',
        readTime: '6 min read',
    },
];

const tags = ['All', 'Brand Strategy', 'Design', 'Process', 'Studio', 'Engineering'];

const tagColors: Record<string, string> = {
    'Brand Strategy': 'bg-[#2A2A2A] text-[#EEE9E3]',
    Design: 'bg-[#EEE9E3] text-[#2A2A2A] border border-[#2A2A2A]/20',
    Process: 'bg-[#EEE9E3] text-[#2A2A2A] border border-[#2A2A2A]/20',
    Studio: 'bg-[#EEE9E3] text-[#2A2A2A] border border-[#2A2A2A]/20',
    Engineering: 'bg-[#EEE9E3] text-[#2A2A2A] border border-[#2A2A2A]/20',
};

function PostCard({ post, index }: { post: Post; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group flex flex-col border border-[#2A2A2A]/10 rounded-2xl bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
            {/* Decorative top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#2A2A2A]/5 to-[#2A2A2A]/20 group-hover:from-[#2A2A2A]/20 group-hover:to-[#2A2A2A]/60 transition-all duration-500" />

            <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                    <span
                        className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full font-medium ${tagColors[post.tag] ?? 'bg-[#EEE9E3] text-[#2A2A2A]'}`}
                    >
                        {post.tag}
                    </span>
                    <span className="text-xs opacity-40">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-light leading-snug mb-4 group-hover:opacity-70 transition-opacity">
                    {post.title}
                </h3>
                <p className="text-sm opacity-60 leading-relaxed flex-1">{post.excerpt}</p>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#2A2A2A]/8">
                    <div>
                        <p className="text-xs font-medium">{post.author}</p>
                        <p className="text-xs opacity-40 mt-0.5">{post.date}</p>
                    </div>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1.5 text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity"
                    >
                        Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function BlogPage() {
    const [activeTag, setActiveTag] = useState('All');
    const featured = posts.find((p) => p.featured)!;
    const filtered =
        activeTag === 'All'
            ? posts.filter((p) => !p.featured)
            : posts.filter((p) => p.tag === activeTag && !p.featured);

    return (
        <main className="min-h-screen bg-[#EEE9E3] text-[#2A2A2A]">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm tracking-widest uppercase mb-8 opacity-60">Perspectives</p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-16">
                            What we think about{' '}
                            <span className="font-normal italic opacity-60">design, strategy, and the web.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 1 }}
                        className="flex justify-center"
                    >
                        <ArrowDown className="w-8 h-8 opacity-20 animate-bounce" />
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="pb-0 pt-0 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <p className="text-xs tracking-widest uppercase opacity-40">Featured</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href={`/blog/${featured.slug}`} className="group block">
                            <div className="bg-[#2A2A2A] text-[#EEE9E3] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start hover:bg-black transition-colors duration-300">
                                <div className="flex-1">
                                    <span className="text-xs tracking-widest uppercase opacity-40 mb-6 block">
                                        {featured.tag}
                                    </span>
                                    <h2 className="text-2xl md:text-4xl font-light leading-snug mb-6">
                                        {featured.title}
                                    </h2>
                                    <p className="opacity-50 leading-relaxed max-w-lg">{featured.excerpt}</p>
                                </div>
                                <div className="shrink-0 flex flex-col justify-between h-full self-stretch gap-8">
                                    <div className="text-right">
                                        <p className="text-sm opacity-40">{featured.readTime}</p>
                                        <p className="text-sm opacity-40 mt-1">{featured.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity mt-auto">
                                        <span className="text-sm font-medium">Read article</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Tag Filter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3 mb-12"
                    >
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${activeTag === tag
                                    ? 'bg-[#2A2A2A] text-[#EEE9E3] border-[#2A2A2A]'
                                    : 'bg-transparent text-[#2A2A2A] border-[#2A2A2A]/20 hover:border-[#2A2A2A]/60'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </motion.div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((post, i) => (
                            <PostCard key={post.slug} post={post} index={i} />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center opacity-40 py-16"
                        >
                            No posts in this category yet.
                        </motion.p>
                    )}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm tracking-widest uppercase opacity-50 mb-6">Stay in the loop</p>
                        <h2 className="text-3xl md:text-5xl font-light mb-6 leading-snug">
                            Thinking worth reading,{' '}
                            <span className="italic opacity-60">delivered occasionally.</span>
                        </h2>
                        <p className="opacity-60 mb-10 max-w-lg mx-auto leading-relaxed">
                            We write when we have something worth saying. No noise. Subscribe and we'll deliver new
                            essays straight to your inbox.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                        >
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-5 py-3 rounded-full border border-[#2A2A2A]/20 bg-[#EEE9E3] text-[#2A2A2A] placeholder:opacity-40 focus:outline-none focus:border-[#2A2A2A]/60 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-[#2A2A2A] text-[#EEE9E3] px-7 py-3 rounded-full font-medium hover:bg-black transition-all hover:scale-105 whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
