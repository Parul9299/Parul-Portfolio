import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ProjectGallery from '@/app/components/ProjectGallery';
import ServicesSection from '@/app/components/ServicesSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      {/* Decorative grid overlay */}
      <div className="grid-overlay-lines" aria-hidden="true">
        <div className="grid-inner-lines">
          <div className="grid-line-v" />
          <div className="grid-line-v" />
          <div className="grid-line-v" />
          <div className="grid-line-v" />
          <div className="grid-line-v" />
        </div>
      </div>

      <Header />
      <HeroSection />
      <ProjectGallery />
      <ServicesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollRevealInit />
    </main>
  );
}