'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';


const TYPING_STRINGS = [
  'Full-Stack Developer',
  'Mobile App Developer',
  'MERN Stack Engineer',
  'React Native Expert',
];

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  delay: `${(i * 0.7) % 8}s`,
  duration: `${8 + (i % 6)}s`,
  size: `${2 + (i % 3)}px`,
  color: i % 3 === 0 ? 'var(--neon-cyan)' : i % 3 === 1 ? 'var(--neon-purple)' : 'var(--neon-blue)',
}));

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStringIndex((s) => (s + 1) % TYPING_STRINGS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  // Mouse parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (e.clientX / innerWidth - 0.5) * 2,
      y: (e.clientY / innerHeight - 0.5) * 2,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated neon grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Horizontal neon lines */}
        {[25, 50, 75].map((pct, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px"
            style={{
              top: `${pct}%`,
              left: 0,
              right: 0,
              background: `linear-gradient(to right, transparent, ${i % 2 === 0 ? 'rgba(0,245,255,0.4)' : 'rgba(191,0,255,0.4)'}, transparent)`,
              animation: `neon-line-h ${10 + i * 3}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
        {/* Vertical neon lines */}
        {[25, 50, 75].map((pct, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px"
            style={{
              left: `${pct}%`,
              top: 0,
              bottom: 0,
              background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? 'rgba(0,245,255,0.3)' : 'rgba(191,0,255,0.3)'}, transparent)`,
              animation: `neon-line-v ${12 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: '-10px',
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 6px ${p.color}`,
              animation: `particle-float ${p.duration} linear infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Background blobs */}
      <div
        className="blob-cyan absolute w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          top: '10%',
          left: '5%',
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
          transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      />
      <div
        className="blob-purple absolute w-[500px] h-[500px] pointer-events-none z-0"
        style={{
          bottom: '10%',
          right: '5%',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-neon-pulse" />
              <span className="font-display text-xs tracking-widest text-primary">
                AVAILABLE FOR HIRE
              </span>
            </div>

            {/* Name with glitch */}
            <div className="relative mb-4">
              <h1
                className="font-display text-hero-xl font-black text-foreground leading-none tracking-tight"
                style={{ animationDelay: '0.2s' }}
              >
                PARUL
                <br />
                <span className="gradient-text-cyber">SHARMA</span>
              </h1>
              {/* Glitch layers */}
              <div
                className="absolute inset-0 font-display text-hero-xl font-black leading-none tracking-tight pointer-events-none"
                style={{
                  color: 'var(--neon-cyan)',
                  animation: 'glitch 4s infinite',
                  animationDelay: '2s',
                  opacity: 0.4,
                }}
                aria-hidden="true"
              >
                PARUL
                <br />
                SHARMA
              </div>
              <div
                className="absolute inset-0 font-display text-hero-xl font-black leading-none tracking-tight pointer-events-none"
                style={{
                  color: 'var(--neon-purple)',
                  animation: 'glitch-2 4s infinite',
                  animationDelay: '2.1s',
                  opacity: 0.3,
                }}
                aria-hidden="true"
              >
                PARUL
                <br />
                SHARMA
              </div>
            </div>

            {/* Typing effect */}
            <div className="flex items-center gap-2 mb-6 h-8">
              <span className="text-lg sm:text-xl font-medium text-primary">
                {displayText}
              </span>
              <span className="w-0.5 h-6 bg-primary animate-cursor-blink" />
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8 text-base sm:text-lg">
              Building innovative full-stack solutions and cross-platform mobile apps.
              Based in Bharatpur, Rajasthan — currently at{' '}
              <span className="text-primary font-semibold">Acculizein Tech</span>,
              Agra.
            </p>

            {/* Location badge */}
            <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Bharatpur, Rajasthan / Agra, India
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cyber-btn-solid px-7 py-3 text-sm font-display tracking-widest rounded"
              >
                VIEW PROJECTS
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cyber-btn px-7 py-3 text-sm font-display tracking-widest rounded"
              >
                <span>CONTACT ME</span>
              </button>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-xs text-muted-foreground font-display tracking-widest">CONNECT</span>
              <div className="flex-1 h-px bg-border" />
              <a
                href="https://github.com/parul9299"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/parul-sharma9299"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:sharma1234parul@gmail.com"
                className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                aria-label="Email"
              >
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: 3D Abstract Visual */}
          <div
            className="relative flex items-center justify-center h-[400px] sm:h-[500px]"
            style={{
              transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
              transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            {/* Central glow orb */}
            <div className="relative">
              {/* Orbit rings */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: 'spin-slow 20s linear infinite' }}
              >
                <div
                  className="w-64 h-64 rounded-full border"
                  style={{ borderColor: 'rgba(0,245,255,0.15)' }}
                />
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: 'spin-slow 30s linear infinite reverse' }}
              >
                <div
                  className="w-80 h-80 rounded-full border"
                  style={{ borderColor: 'rgba(191,0,255,0.12)', borderStyle: 'dashed' }}
                />
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ animation: 'spin-slow 15s linear infinite' }}
              >
                <div
                  className="w-96 h-96 rounded-full border"
                  style={{ borderColor: 'rgba(0,102,255,0.1)' }}
                />
              </div>

              {/* Orbiting dots */}
              {['React', 'Node', 'MongoDB', 'Native'].map((label, i) => (
                <div
                  key={label}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    animation: `spin-slow ${12 + i * 4}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      transform: `translateX(${[120, -120, 0, 0][i]}px) translateY(${[0, 0, 120, -120][i]}px)`,
                    }}
                  >
                    <div
                      className="px-2 py-1 rounded text-xs font-display font-bold"
                      style={{
                        background: i % 2 === 0 ? 'rgba(0,245,255,0.1)' : 'rgba(191,0,255,0.1)',
                        border: `1px solid ${i % 2 === 0 ? 'rgba(0,245,255,0.4)' : 'rgba(191,0,255,0.4)'}`,
                        color: i % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-purple)',
                        boxShadow: i % 2 === 0 ? '0 0 10px rgba(0,245,255,0.3)' : '0 0 10px rgba(191,0,255,0.3)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              ))}

              {/* Central avatar / code visual */}
              <div
                className="relative w-40 h-40 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, rgba(0,245,255,0.08) 0%, rgba(0,0,0,0) 70%)',
                  border: '2px solid rgba(0,245,255,0.3)',
                  boxShadow: 'var(--glow-cyan), inset 0 0 40px rgba(0,245,255,0.05)',
                  animation: 'float-up-down 4s ease-in-out infinite',
                }}
              >
                <div className="text-center">
                  <div className="font-display text-3xl font-black gradient-text-cyber">PS</div>
                  <div className="font-display text-xs text-primary/60 tracking-widest mt-1">&lt;/DEV&gt;</div>
                </div>
              </div>

              {/* Floating tech tags */}
              {[
                { label: 'MERN', x: -160, y: -60, delay: '0s' },
                { label: 'React Native', x: 140, y: 70, delay: '1s' },
                { label: 'Full-Stack', x: -100, y: 140, delay: '2s' },
                { label: 'MongoDB', x: 120, y: -100, delay: '0.5s' },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className="absolute glass-card px-3 py-1.5 rounded text-xs font-display font-semibold text-primary tracking-wider"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${tag.x}px), calc(-50% + ${tag.y}px))`,
                    animation: `float-slow 6s ease-in-out infinite`,
                    animationDelay: tag.delay,
                    boxShadow: '0 0 12px rgba(0,245,255,0.2)',
                  }}
                >
                  {tag.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-display text-xs tracking-widest text-muted-foreground">SCROLL</span>
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}