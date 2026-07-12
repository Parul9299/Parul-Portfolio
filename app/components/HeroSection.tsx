import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,168,168,0.08) 0%, transparent 70%)' }}
        aria-hidden="true" />
      
      {/* Left decorative image */}
      <div
        className="absolute left-8 xl:left-16 top-1/2 -translate-y-1/2 w-36 h-52 hidden xl:block animate-on-scroll animate-in"
        style={{ animationDelay: '0.4s' }}>
        
        <div className="w-full h-full overflow-hidden border border-border p-1.5 bg-muted">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1495b73ec-1772142063542.png"
            alt="Branding design work — teal packaging with geometric pattern on dark background"
            className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700"
            width={144}
            height={208} />
          
        </div>
        <span className="absolute -bottom-7 left-0 text-[8px] uppercase tracking-widest text-muted-foreground">
          Branding / 2024
        </span>
      </div>
      {/* Right decorative image */}
      <div
        className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 w-36 h-52 hidden xl:block animate-on-scroll animate-in"
        style={{ animationDelay: '0.6s' }}>
        
        <div className="w-full h-full overflow-hidden border border-border p-1.5 bg-muted">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1b604d784-1783709290819.png"
            alt="Logo design concept — minimalist marks on dark studio desk, moody low-key lighting"
            className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700"
            width={144}
            height={208} />
          
        </div>
        <span className="absolute -bottom-7 right-0 text-[8px] uppercase tracking-widest text-muted-foreground text-right">
          Agra, India
        </span>
      </div>
      {/* Main hero content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className="animate-on-scroll animate-in mb-8 flex items-center justify-center gap-3"
          style={{ animationDelay: '0.1s' }}>
          
          <span className="w-8 h-px bg-accent" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-medium">
            Senior Graphic Designer
          </span>
          <span className="w-8 h-px bg-accent" />
        </div>

        {/* Name */}
        <div
          className="animate-on-scroll animate-in"
          style={{ animationDelay: '0.25s' }}>
          
          <h1 className="font-display font-black leading-none tracking-tight text-foreground text-hero-xl">
            Kabir
          </h1>
          <span className="font-display italic leading-none block text-teal-gradient text-hero-md" style={{ marginTop: '-0.1em' }}>
            Khan
          </span>
        </div>

        {/* Summary */}
        <p
          className="animate-on-scroll animate-in mt-8 max-w-xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide"
          style={{ animationDelay: '0.45s' }}>
          
          Dynamic graphic design professional with extensive experience in branding
          development and digital media. Excels in managing multiple projects while
          mentoring junior designers.
        </p>

        {/* CTAs */}
        <div
          className="animate-on-scroll animate-in mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.6s' }}>
          
          <a
            href="#work"
            className="px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded hover:bg-accent transition-colors duration-300">
            
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-border text-foreground text-sm font-medium tracking-wide rounded hover:border-accent hover:text-accent transition-colors duration-300">
            
            Hire Me
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-on-scroll animate-in mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          style={{ animationDelay: '0.75s' }}>
          
          {[
          { value: '3+', label: 'Years Experience' },
          { value: '50+', label: 'Projects Delivered' },
          { value: '2', label: 'Top Agencies' },
          { value: '2024', label: 'Employee of the Year' }]?.
          map((stat) =>
          <div key={stat?.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-accent">{stat?.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{stat?.label}</p>
            </div>
          )}
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-on-scroll animate-fade"
        style={{ animationDelay: '1.2s' }}
        aria-hidden="true">
        
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent mx-auto" />
      </div>
    </section>);

}