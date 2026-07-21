'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '../../components/ui/AppImage';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: 'web' | 'mobile';
  tech: string[];
  description: string;
  highlights: string[];
  color: string;
  accentColor: string;
  imageUrl: string;
  imageAlt: string;
  label: string;
}

const projects: Project[] = [
{
  id: 'bizvility',
  title: 'Bizvility',
  subtitle: 'Online Business Growth Platform',
  type: 'web',
  tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
  description:
  'A full-stack online business growth platform built with MERN stack to help businesses manage leads, advertisements, and customer engagement.',
  highlights: [
  'Complete UI/UX implementation with React.js',
  'Integrated REST APIs for real-time data handling',
  'Business listings & advertisement management',
  'Lead generation dashboards',
  'Optimized frontend performance & state management'],

  color: 'var(--neon-cyan)',
  accentColor: 'rgba(0,245,255,0.1)',
  imageUrl: "/images/bizvility-ss.png",
  imageAlt: 'Dark monitor displaying business analytics dashboard with glowing data charts in a dim office environment',
  label: 'MERN STACK'
},
{
  id: 'ryngales',
  title: 'Ryngales',
  subtitle: 'Real-Time Chat Application',
  type: 'mobile',
  tech: ['React Native', 'Node.js', 'MongoDB', 'WebSockets', 'REST APIs'],
  description:
  'A cross-platform real-time chat application enabling seamless one-to-one communication with WebSocket-powered instant messaging.',
  highlights: [
  'Real-time messaging via WebSockets (low latency)',
  'Secure authentication & session management',
  'Multi-account switching feature',
  'Push notifications for real-time alerts',
  'Responsive mobile UI across devices'],

  color: 'var(--neon-purple)',
  accentColor: 'rgba(191,0,255,0.1)',
  imageUrl: "/images/ryngales-ss.jpg",
  imageAlt: 'Dark smartphone screen showing chat interface with glowing message bubbles in a dimly lit environment with deep shadows',
  label: 'REACT NATIVE'
},
{
  id: 'prepayard',
  title: 'Prepayard',
  subtitle: 'PrePayard — Finance Made Simple',
  type: 'mobile',
  tech: ['React Native', 'Node.js', 'MongoDB', 'WebSockets', 'REST APIs'],
  description:
  'PrePayard is a smart, secure, and user-friendly ledger (Khata) management app designed specifically for shopkeepers, retailers, wholesalers, and small business owners. It digitizes your traditional register and helps you track your business finances on the go.',
  highlights: [
  'Live Dashboard: Track your Today Collection and Total Pending dues at a single glance.',
  'Customer Credit (Udhaar) Tracker: Easily monitor who owes you money, the exact amount, and the pending duration.',
  'Multi-Shop Management: Run a retail shop, wholesale business, or street vending? Add and manage multiple shops under a single account.',
  'Secure & Easy Access: Quick and secure OTP-based login to keep your financial data protected.',
  'Smart Business Tools: Built-in reports, transaction history, Dark Mode, and language preferences tailored for your convenience.'],

  color: 'var(--neon-blue)',
  accentColor: 'rgba(191,0,255,0.1)',
  imageUrl: "/images/prepayard-ss.jpg",
  imageAlt: 'Dark smartphone screen showing chat interface with glowing message bubbles in a dimly lit environment with deep shadows',
  label: 'REACT NATIVE'
}];


function DeviceFrame({ type, imageUrl, imageAlt, color }: {type: 'web' | 'mobile';imageUrl: string;imageAlt: string;color: string;}) {
  if (type === 'web') {
    return (
      <div className="relative w-full max-w-sm mx-auto">
        {/* Laptop frame */}
        <div
          className="relative rounded-t-lg overflow-hidden"
          style={{
            border: `2px solid ${color}40`,
            boxShadow: `0 0 30px ${color}20`,
            background: 'rgba(10,10,20,0.9)'
          }}>
          
          {/* Browser chrome */}
          <div
            className="flex items-center gap-2 px-3 py-2"
            style={{ background: 'rgba(0,0,0,0.5)', borderBottom: `1px solid ${color}20` }}>
            
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div
              className="flex-1 h-4 rounded-sm text-xs font-mono flex items-center px-2"
              style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', fontSize: '9px' }}>
              
              bizvility.app
            </div>
          </div>
          <div className="aspect-video overflow-hidden">
            <AppImage
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={340}
              className="w-full h-full object-cover" />
            
          </div>
        </div>
        {/* Laptop base */}
        <div
          className="h-3 rounded-b-lg mx-2"
          style={{ background: `rgba(255,255,255,0.05)`, border: `1px solid ${color}20` }} />
        
        <div
          className="h-1.5 rounded-b-xl mx-0"
          style={{ background: `rgba(255,255,255,0.03)`, border: `1px solid ${color}15` }} />
        
      </div>);

  }

  return (
    <div className="relative w-40 mx-auto">
      {/* Phone frame */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          border: `3px solid ${color}50`,
          boxShadow: `0 0 30px ${color}30`,
          background: 'rgba(10,10,20,0.9)',
          padding: '8px'
        }}>
        
        {/* Notch */}
        <div
          className="w-16 h-4 rounded-b-xl mx-auto mb-2"
          style={{ background: 'rgba(0,0,0,0.8)', border: `1px solid ${color}20` }} />
        
        <div className="rounded-2xl overflow-hidden aspect-[9/16]">
          <AppImage
            src={imageUrl}
            alt={imageAlt}
            width={200}
            height={355}
            className="w-full h-full object-cover" />
          
        </div>
        {/* Home indicator */}
        <div
          className="w-12 h-1 rounded-full mx-auto mt-2"
          style={{ background: `${color}60` }} />
        
      </div>
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ boxShadow: `0 0 40px ${color}20` }} />
      
    </div>);

}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.section-reveal, .section-reveal-left, .section-reveal-right');
            elements.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="blob-cyan absolute w-[400px] h-[400px] right-0 bottom-0 pointer-events-none opacity-30" />
      <div className="blob-purple absolute w-[300px] h-[300px] left-0 top-0 pointer-events-none opacity-30" />

      <div className="max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 section-reveal">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-display text-xs tracking-[0.3em] text-primary">04 //</span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="font-display text-section-title font-black text-foreground">
            FEATURED <span className="gradient-text-cyber">PROJECTS</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Real-world applications built with modern technologies. Click to explore details.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, i) =>
          <div
            key={project.id}
            className={`section-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            i % 2 === 1 ? 'lg:direction-rtl' : ''}`
            }
            style={{ transitionDelay: `${i * 200}ms` }}>
            
              {/* Device mockup */}
              <div
              className={`flex items-center justify-center py-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              style={{
                transform: activeProject === project.id ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
              }}>
              
                <div
                className="relative cursor-pointer"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}>
                
                  {/* Glow effect behind device */}
                  <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}20 0%, transparent 70%)`,
                    transform: 'scale(1.3)',
                    filter: 'blur(30px)'
                  }} />
                
                  <DeviceFrame
                  type={project.type}
                  imageUrl={project.imageUrl}
                  imageAlt={project.imageAlt}
                  color={project.color} />
                
                  {/* Floating badge */}
                  <div
                  className="absolute -top-4 -right-4 font-display text-xs tracking-widest px-3 py-1.5 rounded-full"
                  style={{
                    background: project.accentColor,
                    border: `1px solid ${project.color}50`,
                    color: project.color,
                    boxShadow: `0 0 12px ${project.color}30`
                  }}>
                  
                    {project.label}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                style={{
                  background: project.accentColor,
                  border: `1px solid ${project.color}30`
                }}>
                
                  <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: project.color }} />
                
                  <span
                  className="font-display text-xs tracking-widest"
                  style={{ color: project.color }}>
                  
                    {project.type === 'web' ? 'WEB APP' : 'MOBILE APP'}
                  </span>
                </div>

                <h3
                className="font-display text-3xl sm:text-4xl font-black mb-2 tracking-tight"
                style={{ color: project.color, textShadow: `0 0 20px ${project.color}40` }}>
                
                  {project.title}
                </h3>
                <p className="text-foreground font-semibold text-lg mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6">
                  {project.highlights.map((point, j) =>
                <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: project.color, boxShadow: `0 0 6px ${project.color}` }} />
                  
                      {point}
                    </li>
                )}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) =>
                <span
                  key={tech}
                  className="font-display text-xs tracking-wider px-3 py-1.5 rounded"
                  style={{
                    background: project.accentColor,
                    border: `1px solid ${project.color}30`,
                    color: project.color
                  }}>
                  
                      {tech}
                    </span>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}