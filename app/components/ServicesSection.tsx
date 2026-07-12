import React from 'react';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    icon: 'SwatchIcon',
    title: 'Brand Identity',
    description:
      'Complete visual identity systems — logo design, color palettes, typography, and brand guidelines that make businesses instantly recognizable.',
    skills: ['Logo Design', 'Color Systems', 'Brand Guidelines'],
  },
  {
    icon: 'CubeIcon',
    title: 'Packaging Design',
    description:
      'Premium packaging that sells on shelves. Structural design, label artwork, and production-ready files for print.',
    skills: ['Label Design', 'Structural Layout', 'Print-Ready Files'],
  },
  {
    icon: 'DevicePhoneMobileIcon',
    title: 'Social Media Design',
    description:
      'On-brand social media graphics, campaign assets, and content templates for Instagram, LinkedIn, and Facebook.',
    skills: ['Instagram Assets', 'Campaign Creatives', 'Templates'],
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Print Design',
    description:
      'Brochures, flyers, posters, and editorial layouts with precise typesetting and CMYK production workflows.',
    skills: ['Brochures', 'Posters', 'Editorial Layout'],
  },
  {
    icon: 'FilmIcon',
    title: 'Motion & Video Editing',
    description:
      'Animated social content, short-form video editing, and motion graphics for digital marketing campaigns.',
    skills: ['Video Editing', 'Motion Graphics', 'Reels'],
  },
  {
    icon: 'MagnifyingGlassIcon',
    title: 'Trend Research & Strategy',
    description:
      'Design trend analysis and strategic creative direction to keep brands relevant, fresh, and ahead of the competition.',
    skills: ['Trend Analysis', 'Creative Strategy', 'Competitor Audit'],
  },
];

const skillsList = [
  'Graphic Design',
  'Adobe Creative Suite',
  'Photoshop',
  'Illustrator',
  'InDesign',
  'Branding Development',
  'Branding & Identity',
  'Logo Creation',
  'Mockup Creation',
  'Print Design',
  'Packaging Design',
  'Video Editing',
  'Social Media Graphics',
  'Trend Analysis',
  'Project Management',
  'Time Management',
  'Team Mentorship',
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll animate-in">
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-3 block">
              What I Do
            </span>
            <h2 className="font-display text-section-lg font-bold text-foreground leading-tight">
              Services &<br />
              <span className="italic text-teal-gradient">Capabilities</span>
            </h2>
          </div>
          <div
            className="animate-on-scroll animate-in flex flex-col justify-end"
            style={{ animationDelay: '0.15s' }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              From concept to final deliverable — I handle the full design process.
              Over 3 years crafting visual systems for agencies and direct clients across India.
            </p>
          </div>
        </div>

        {/* Services asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-on-scroll animate-in p-6 rounded-lg border border-border bg-card card-hover group"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-10 h-10 rounded-md bg-teal-subtle border border-teal-subtle flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] uppercase tracking-widest px-2 py-1 border border-border text-muted-foreground rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills cloud */}
        <div className="animate-on-scroll animate-in border border-border rounded-lg p-8 bg-card">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Full Skills Toolkit
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {skillsList.map((skill, index) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-medium border border-border rounded-full text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}