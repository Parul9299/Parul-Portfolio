'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  category: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'React.js', category: 'Frontend', level: 90, color: 'var(--neon-cyan)' },
  { name: 'JavaScript', category: 'Language', level: 88, color: 'var(--neon-cyan)' },
  { name: 'HTML & CSS', category: 'Frontend', level: 95, color: 'var(--neon-cyan)' },
  { name: 'Bootstrap', category: 'Frontend', level: 85, color: 'var(--neon-cyan)' },
  { name: 'jQuery', category: 'Frontend', level: 80, color: 'var(--neon-cyan)' },
  { name: 'Node.js', category: 'Backend', level: 82, color: 'var(--neon-purple)' },
  { name: 'Express.js', category: 'Backend', level: 80, color: 'var(--neon-purple)' },
  { name: 'MongoDB', category: 'Database', level: 78, color: 'var(--neon-purple)' },
  { name: 'React Native', category: 'Mobile', level: 75, color: 'var(--neon-blue)' },
  { name: 'Git & GitHub', category: 'Tools', level: 85, color: 'var(--neon-blue)' },
  { name: 'VS Code', category: 'Tools', level: 95, color: 'var(--neon-blue)' },
  { name: 'EmailJS', category: 'Tools', level: 80, color: 'var(--neon-blue)' },
];

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Tools', 'Language'];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            const elements = entry.target.querySelectorAll('.section-reveal, .section-reveal-left');
            elements.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="blob-cyan absolute w-[500px] h-[500px] left-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />

      <div className="max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 section-reveal">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-display text-xs tracking-[0.3em] text-primary">03 //</span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="font-display text-section-title font-black text-foreground">
            TECH <span className="gradient-text-cyber">ARSENAL</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Technologies I use to craft digital experiences — hover to see proficiency levels.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10 section-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full font-display text-xs tracking-widest transition-all duration-300"
              style={{
                border: `1px solid ${activeCategory === cat ? 'var(--neon-cyan)' : 'rgba(0,245,255,0.2)'}`,
                background: activeCategory === cat ? 'rgba(0,245,255,0.1)' : 'transparent',
                color: activeCategory === cat ? 'var(--neon-cyan)' : 'var(--muted-foreground)',
                boxShadow: activeCategory === cat ? 'var(--glow-cyan)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="section-reveal glass-card rounded-xl p-5 cursor-default transition-all duration-400 group"
              style={{
                transitionDelay: `${i * 60}ms`,
                borderColor: hoveredSkill === skill.name ? skill.color : undefined,
                boxShadow: hoveredSkill === skill.name
                  ? `0 0 20px ${skill.color}40, 0 0 40px ${skill.color}20`
                  : undefined,
                transform: hoveredSkill === skill.name ? 'translateY(-4px) scale(1.02)' : undefined,
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3
                    className="font-display text-sm font-bold tracking-wide transition-colors duration-300"
                    style={{
                      color: hoveredSkill === skill.name ? skill.color : 'var(--foreground)',
                      textShadow: hoveredSkill === skill.name ? `0 0 8px ${skill.color}` : 'none',
                    }}
                  >
                    {skill.name}
                  </h3>
                  <span
                    className="font-display text-xs tracking-widest"
                    style={{ color: skill.color, opacity: 0.7 }}
                  >
                    {skill.category}
                  </span>
                </div>
                <span
                  className="font-display text-lg font-black"
                  style={{ color: skill.color }}
                >
                  {visible ? skill.level : 0}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: visible ? `${skill.level}%` : '0%',
                    background: `linear-gradient(to right, ${skill.color}, ${skill.color}80)`,
                    boxShadow: `0 0 8px ${skill.color}60`,
                    transitionDelay: `${i * 80 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Floating tag cloud */}
        <div className="section-reveal">
          <h3 className="font-display text-sm tracking-widest text-primary mb-6 text-center">
            FULL STACK
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <div
                key={`tag-${skill.name}`}
                className="skill-tag px-4 py-2 rounded-full font-display text-xs tracking-wider text-foreground"
                style={{
                  // animationDelay: `${i * 0.3}s`,
                  animation: `float-slow ${5 + (i % 4)}s ease-in-out infinite`,
                  animationDelay: `${(i * 0.4) % 3}s`,
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}