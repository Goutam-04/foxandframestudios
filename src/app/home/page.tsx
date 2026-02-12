'use client';

import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import StatsMarquee from '@/components/home/StatsMarquee';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ToolsSection from '@/components/home/ToolsSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactCTA from '@/components/home/ContactCTA';
import Footer from '@/components/home/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <StatsMarquee />
            <FeaturedProjects />
            <ToolsSection />
            <ProcessSection />
            <TestimonialsSection />
            <ContactCTA />
            <Footer />
        </main>
    );
}