'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.section-reveal, .section-reveal-left, .section-reveal-right');
            elements.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({
      type: "loading",
      message: "",
    });

    try {
      const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,

          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,

          from_name: formData.name,

          // Email kis address par receive hogi
          // Ye Web3Forms dashboard me configured email par hi aayegi.

          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      label: 'EMAIL',
      value: 'sharma1234parul@gmail.com',
      href: 'mailto:sharma1234parul@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'var(--neon-cyan)',
    },
    {
      label: 'PHONE',
      value: '+91 9027489456',
      href: 'tel:+919027489456',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'var(--neon-purple)',
    },
    {
      label: 'LOCATION',
      value: 'Bharatpur, Rajasthan / Agra, India',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'var(--neon-blue)',
    },
  ];

  const socialLinks = [
    {
      label: 'GITHUB',
      href: 'https://github.com/parul9299',
      color: 'var(--neon-cyan)',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/parul-sharma9299',
      color: 'var(--neon-purple)',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="blob-purple absolute w-[500px] h-[500px] left-1/2 -translate-x-1/2 top-0 pointer-events-none opacity-30" />

      <div className=" max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 section-reveal text-center">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-display text-xs tracking-[0.3em] text-primary">05 //</span>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-display text-section-title font-black text-foreground">
            GET IN <span className="gradient-text-cyber">TOUCH</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Open to new opportunities and collaborations. Let&apos;s build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {contactInfo.map((info, i) => (
              <a
                key={info.label}
                href={info.href}
                className="section-reveal-left glass-card glass-card-hover flex items-center gap-4 p-5 rounded-xl group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: `${info.color}10`,
                    border: `1px solid ${info.color}30`,
                    color: info.color,
                  }}
                >
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-display text-xs tracking-widest text-muted-foreground mb-1">
                    {info.label}
                  </p>
                  <p className="text-foreground text-sm font-medium truncate">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="section-reveal-left" style={{ transitionDelay: '300ms' }}>
              <p className="font-display text-xs tracking-widest text-muted-foreground mb-4">
                SOCIAL PROFILES
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 glass-card glass-card-hover p-4 rounded-xl"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                    <span className="font-display text-xs tracking-wider">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="section-reveal-left p-4 rounded-xl flex items-center gap-3"
              style={{
                background: 'rgba(0,245,255,0.04)',
                border: '1px solid rgba(0,245,255,0.2)',
                transitionDelay: '400ms',
              }}
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-neon-pulse flex-shrink-0" />
              <div>
                <p className="font-display text-xs tracking-widest text-primary">AVAILABLE FOR HIRE</p>
                <p className="text-muted-foreground text-xs mt-0.5">Open to full-time & freelance</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 section-reveal-right">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="font-display text-lg font-bold tracking-wider text-foreground mb-6">
                SEND A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground block mb-2">
                      NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground block mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest text-muted-foreground block mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry / Job opportunity"
                    className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest text-muted-foreground block mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="neon-input w-full px-4 py-3 rounded-lg text-sm resize-none"
                  />
                </div>

                {/* Status message */}
                {status.type !== 'idle' && status.message && (
                  <div
                    className="p-3 rounded-lg text-sm font-medium"
                    style={{
                      background: status.type === 'success' ? 'rgba(0,245,255,0.08)'
                        : status.type === 'error' ? 'rgba(255,50,50,0.08)' : 'rgba(0,245,255,0.04)',
                      border: `1px solid ${status.type === 'success' ? 'rgba(0,245,255,0.3)'
                        : status.type === 'error' ? 'rgba(255,50,50,0.3)' : 'rgba(0,245,255,0.15)'
                        }`,
                      color: status.type === 'success' ? 'var(--neon-cyan)'
                        : status.type === 'error' ? '#ff5555' : 'var(--muted-foreground)',
                    }}
                  >
                    {status.type === 'loading' ? 'Sending message...' : status.message}
                  </div>
                )}

                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_WEB3FORMS_ACCESS_KEY"
                />

                <input
                  type="hidden"
                  name="subject"
                  value="New Portfolio Contact Form Submission"
                />

                <input
                  type="hidden"
                  name="from_name"
                  value="Parul Sharma Portfolio"
                />

                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full py-4 font-display text-sm tracking-widest rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: status.type === 'loading' ? 'rgba(0,245,255,0.1)' : 'var(--neon-cyan)',
                    color: status.type === 'loading' ? 'var(--neon-cyan)' : 'var(--primary-foreground)',
                    border: '1px solid var(--neon-cyan)',
                    boxShadow: status.type !== 'loading' ? 'var(--glow-cyan)' : 'none',
                  }}
                >
                  {status.type === 'loading' ? 'SENDING...' : 'SEND MESSAGE →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}