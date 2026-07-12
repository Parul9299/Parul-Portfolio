'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    // Intersection Observer for animate-on-scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    document.querySelectorAll('.animate-on-scroll')?.forEach((el) => io?.observe(el));

    // Skill bar animations
    const skillIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            skillIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.skill-bar-fill')?.forEach((el) => skillIO?.observe(el));

    // Scroll word reveal
    const revealSection = document.getElementById('scroll-reveal-section');
    const words = document.querySelectorAll<HTMLElement>('.reveal-word');

    const handleScroll = () => {
      if (!revealSection || words?.length === 0) return;
      const rect = revealSection?.getBoundingClientRect();
      const winH = window.innerHeight;
      const startReveal = winH * 0.9;
      const endReveal = winH * 0.2;
      let progress = (startReveal - rect?.top) / (startReveal - endReveal);
      progress = Math.max(0, Math.min(1, progress));
      const activeCount = Math.floor(progress * words?.length);
      words?.forEach((w, i) => {
        if (i < activeCount) w?.classList?.add('active');
        else w?.classList?.remove('active');
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      io?.disconnect();
      skillIO?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}