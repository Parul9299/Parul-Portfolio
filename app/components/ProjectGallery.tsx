import React from 'react';
import AppImage from '../../components/ui/AppImage';

// BENTO GRID AUDIT
// Array has 6 cards: BrandIdentity, SocialMedia, PackagingDesign, DigitalMarketing, LogoDesign, PrintDesign
// Row 1: [col-1: BrandIdentity cs-2 rs-2] [col-3: SocialMedia cs-1 rs-1]
// Row 2: [col-1: FILLED BrandIdentity] [col-2: FILLED BrandIdentity] [col-3: PackagingDesign cs-1 rs-1]
// Row 3: [col-1: DigitalMarketing cs-1] [col-2: LogoDesign cs-1] [col-3: PrintDesign cs-1]
// Placed 6/6 cards ✓

const projects = [
{
  id: 'brand-identity',
  title: 'Brand Identity System',
  category: 'Branding & Identity',
  description: 'Complete visual identity for a tech startup — logo, color palette, typography system, and brand guidelines.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15bf9d64c-1778493634773.png",
  alt: 'Dark studio desk with branding mockup materials — deep shadows, dim atmospheric lighting, dark steel surfaces',
  tags: ['Branding', 'Logo', 'Guidelines'],
  colSpan: 'md:col-span-2',
  rowSpan: 'md:row-span-2',
  tall: true
},
{
  id: 'social-media',
  title: 'Social Media Campaign',
  category: 'Digital Design',
  description: 'Visual campaign assets for Instagram and LinkedIn — consistent, bold, on-brand.',
  image: "https://images.unsplash.com/photo-1722538831488-373a4481e586",
  alt: 'Dark workspace with phone showing vibrant social media graphics on dim screen, moody atmosphere',
  tags: ['Social Media', 'Digital'],
  colSpan: 'md:col-span-1',
  rowSpan: 'md:row-span-1',
  tall: false
},
{
  id: 'packaging',
  title: 'Packaging Design',
  category: 'Print & Packaging',
  description: 'Premium packaging design for a cosmetics brand — luxury feel, sustainable materials.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10caf41a2-1779453372357.png",
  alt: 'Elegant product packaging boxes in dark shadows, low-key studio lighting, deep black background',
  tags: ['Packaging', 'Print'],
  colSpan: 'md:col-span-1',
  rowSpan: 'md:row-span-1',
  tall: false
},
{
  id: 'digital-marketing',
  title: 'Digital Marketing Suite',
  category: 'Digital Media',
  description: 'Ad creatives, email headers, and banner designs for a performance marketing campaign.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ce860d5b-1777561119397.png",
  alt: 'Dark laptop screen showing digital marketing dashboard with teal accent colors, dim office setting',
  tags: ['Marketing', 'Digital', 'Ads'],
  colSpan: 'md:col-span-1',
  rowSpan: 'md:row-span-1',
  tall: false
},
{
  id: 'logo-design',
  title: 'Logo Design Collection',
  category: 'Logo & Identity',
  description: 'A curated set of logo marks created for clients across e-commerce, hospitality, and education sectors.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15156773b-1783709293282.png",
  alt: 'Minimalist logo sketches pinned on dark mood board, dramatic side lighting, deep shadows',
  tags: ['Logo', 'Identity'],
  colSpan: 'md:col-span-1',
  rowSpan: 'md:row-span-1',
  tall: false
},
{
  id: 'print-design',
  title: 'Print Design Portfolio',
  category: 'Print Media',
  description: 'Brochures, flyers, and editorial layouts designed for print with precision typesetting.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15bf9d64c-1778493634773.png",
  alt: 'Print design materials spread on dark desk, moody atmospheric lighting, deep shadows in background',
  tags: ['Print', 'Editorial'],
  colSpan: 'md:col-span-1',
  rowSpan: 'md:row-span-1',
  tall: false
}];


export default function ProjectGallery() {
  return (
    <section id="work" className="py-24 relative z-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="animate-on-scroll animate-in">
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-3 block">
              Selected Work
            </span>
            <h2 className="font-display text-section-lg font-bold text-foreground leading-tight">
              Projects &<br />
              <span className="italic text-teal-gradient">Case Studies</span>
            </h2>
          </div>
          <p
            className="animate-on-scroll animate-in max-w-sm text-sm text-muted-foreground leading-relaxed"
            style={{ animationDelay: '0.15s' }}>
            
            A selection of design work spanning branding, digital media, packaging,
            and print — each project built with intention.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {projects?.map((project, index) => (
          /* BENTO CELL: col-span and row-span per audit above */
          <div
            key={project?.id}
            className={`${project?.colSpan} ${project?.rowSpan} animate-on-scroll animate-in group relative rounded-lg overflow-hidden bg-card border border-border card-hover cursor-pointer`}
            style={{ animationDelay: `${index * 0.1}s` }}>
            
              {/* Image */}
              <div className={`image-zoom relative w-full ${project?.tall ? 'h-64 md:h-full min-h-[500px]' : 'h-48 md:h-52'}`}>
                <AppImage
                src={project?.image}
                alt={project?.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project?.tags?.map((tag) =>
                  <span
                    key={tag}
                    className="text-[9px] uppercase tracking-widest px-2 py-1 bg-primary/70 text-primary-foreground rounded-sm">
                    
                        {tag}
                      </span>
                  )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white leading-tight mb-1">
                    {project?.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-accent mb-2">
                    {project?.category}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                    {project?.description}
                  </p>
                </div>
              </div>
            </div>)
          )}
        </div>
      </div>
    </section>);

}