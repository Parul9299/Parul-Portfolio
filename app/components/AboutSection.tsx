'use client';

import React, { useEffect, useRef } from 'react';

const workExperience = [
  {
    company: 'Acculizein Tech Private Limited',
    role: 'Web Developer',
    period: 'Feb 2025 – Present',
    location: 'Agra, India',
    color: 'var(--neon-cyan)',
    current: true,
    points: [
      'Building responsive, innovative full-stack solutions using MERN stack',
      'Honed skills in front-end and back-end development',
      'Creating responsive and user-friendly web applications',
    ],
  },
  {
    company: 'Digital Technology Company & Institute',
    role: 'Fullstack Web Developer',
    period: 'Oct 2024 – Jan 2025',
    location: 'Agra, India',
    color: 'var(--neon-purple)',
    current: false,
    points: [
      'Developed full-stack web applications using HTML, CSS, Bootstrap, JavaScript',
      'Worked with React.js, jQuery, Node.js',
      'Collaborated with cross-functional teams to deliver high-quality solutions',
    ],
  },
];

const education = [
  {
    degree: 'PGDCA',
    institution: 'MJS Government PG College, Bharatpur',
    period: '2024 – 2025',
    color: 'var(--neon-cyan)',
  },
  {
    degree: 'Bachelor of Arts',
    institution: 'Shri Agarsen Girls College, Bharatpur',
    period: '2020 – 2023',
    color: 'var(--neon-purple)',
  },
  {
    degree: 'Senior Secondary (82.4%)',
    institution: 'Shrinath Sikshan Sansthan Sr. Sec. School',
    period: '2019 – 2020',
    color: 'var(--neon-blue)',
  },
  {
    degree: 'Secondary (78.67%)',
    institution: 'Shrinath Sikshan Sansthan Sr. Sec. School',
    period: '2017 – 2018',
    color: 'var(--neon-blue)',
  },
];

const softSkills = ['Problem Solving', 'Teamwork', 'Critical Thinking', 'Highly Motivated', 'Punctual'];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.section-reveal, .section-reveal-left, .section-reveal-right');
            elements.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="blob-purple absolute w-[400px] h-[400px] right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
      <div className="max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 section-reveal">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-display text-xs tracking-[0.3em] text-primary">02 //</span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="font-display text-section-title font-black text-foreground">
            ABOUT &amp; <span className="gradient-text-cyber">EXPERIENCE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Bio */}
          <div>
            <div className="section-reveal-left">
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
                I&apos;m <span className="text-primary font-semibold">Parul Sharma</span>, a passionate Full-Stack &amp; Mobile App Developer from Bharatpur, Rajasthan. I specialize in building modern, responsive web and mobile applications using the MERN stack and React Native.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Currently contributing to innovative projects at <span className="text-foreground font-medium">Acculizein Tech Private Limited</span> in Agra, where I build scalable full-stack solutions that make a real impact.
              </p>

              {/* Soft skills */}
              <div className="mb-8">
                <h3 className="font-display text-sm tracking-widest text-primary mb-4">SOFT SKILLS</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills?.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-3 py-1.5 rounded-full text-sm font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2', label: 'YEARS EXP' },
                  { value: '2', label: 'COMPANIES' },
                  { value: '2+', label: 'PROJECTS' },
                ]?.map((stat) => (
                  <div
                    key={stat?.label}
                    className="glass-card p-4 rounded-lg text-center"
                  >
                    <div className="font-display text-2xl font-black neon-text-cyan">{stat?.value}</div>
                    <div className="font-display text-xs tracking-widest text-muted-foreground mt-1">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Experience Timeline */}
          <div>
            <h3 className="font-display text-sm tracking-widest text-primary mb-8 section-reveal">
              WORK EXPERIENCE
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px timeline-line opacity-40" />

              <div className="space-y-8">
                {workExperience?.map((job, i) => (
                  <div
                    key={job?.company}
                    className="section-reveal relative pl-12"
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: `${job?.color}15`,
                        border: `2px solid ${job?.color}`,
                        boxShadow: `0 0 12px ${job?.color}40`,
                      }}
                    >
                      {job?.current && (
                        <div
                          className="w-2.5 h-2.5 rounded-full animate-neon-pulse"
                          style={{ background: job?.color }}
                        />
                      )}
                    </div>

                    <div className="glass-card glass-card-hover p-5 rounded-xl">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-display text-sm font-bold text-foreground tracking-wide">
                            {job?.role}
                          </h4>
                          <p className="text-primary text-sm font-medium mt-0.5">{job?.company}</p>
                        </div>
                        <div className="text-right">
                          <span
                            className="font-display text-xs tracking-wider px-2 py-1 rounded"
                            style={{
                              color: job?.color,
                              background: `${job?.color}15`,
                              border: `1px solid ${job?.color}30`,
                            }}
                          >
                            {job?.current ? 'CURRENT' : 'PAST'}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 font-display tracking-wider">
                        {job?.period} · {job?.location}
                      </p>
                      <ul className="space-y-1.5">
                        {job?.points?.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: job?.color }} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <h3 className="font-display text-sm tracking-widest text-primary mt-12 mb-6 section-reveal">
              EDUCATION
            </h3>
            <div className="space-y-3">
              {education?.map((edu, i) => (
                <div
                  key={edu?.degree}
                  className="section-reveal glass-card glass-card-hover p-4 rounded-lg flex items-center gap-4"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-2 h-10 rounded-full flex-shrink-0"
                    style={{ background: edu?.color, boxShadow: `0 0 8px ${edu?.color}60` }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-xs font-bold text-foreground tracking-wide truncate">
                      {edu?.degree}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{edu?.institution}</p>
                  </div>
                  <span className="font-display text-xs tracking-wider text-muted-foreground flex-shrink-0">
                    {edu?.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}