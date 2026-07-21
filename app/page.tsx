import React from 'react';
import Header from '../components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden dot-grid">
      {/* Scanline overlay */}
      <div className="fixed inset-0 scanline pointer-events-none z-[1]" />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}