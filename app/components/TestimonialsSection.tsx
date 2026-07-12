'use client';

import React, { useState, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
{
  id: 1,
  name: 'Rajesh Sharma',
  role: 'Marketing Manager',
  company: 'Acculizein Tech Pvt. Ltd.',
  quote:
  'Kabir consistently delivered exceptional branding work that exceeded our expectations. His attention to detail and ability to meet tight deadlines made him an invaluable part of our team. Awarded Employee of the Year for a reason.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_120a0ecd1-1769252811968.png",
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_120a0ecd1-1769252811968.png"
},
{
  id: 2,
  name: 'Priya Mehta',
  role: 'Creative Director',
  company: 'Mudgal Consultancy Services',
  quote:
  'Working with Kabir was a pleasure. He brought fresh ideas to every project and his social media design work significantly boosted our clients\' engagement. A true professional with a sharp design eye.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee08d7d3-1765020657589.png",
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee08d7d3-1765020657589.png"
},
{
  id: 3,
  name: 'Vikram Agarwal', role: 'Founder', company: 'Agra E-Commerce Ventures', quote: 'Kabir designed our complete brand identity from scratch. The logo, packaging, and brand guidelines he created are exactly what we needed to launch confidently. Highly professional and thorough.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1ad9feb-1770651007033.png", thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1ad9feb-1770651007033.png"
},
{
  id: 4,
  name: 'Sneha Gupta', role: 'Brand Manager', company: 'Delhi FMCG Co.', quote: 'The packaging design Kabir delivered was stunning. He understood our brand values immediately and translated them into print-perfect artwork. Our sales team noticed the difference on shelves within weeks.', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400', thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=120'
}];


export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const navigate = useCallback(
    (dir: 'left' | 'right', targetIndex?: number) => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        if (targetIndex !== undefined) {
          setCurrent(targetIndex);
        } else if (dir === 'right') {
          setCurrent((c) => (c + 1) % testimonials.length);
        } else {
          setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
        }
        setAnimating(false);
      }, 350);
    },
    [animating]
  );

  const review = testimonials[current];

  return (
    <section className="py-24 relative z-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="animate-on-scroll animate-in mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-3 block">
            What Clients Say
          </span>
          <h2 className="font-display text-section-lg font-bold text-foreground leading-tight">
            Testimonials &<br />
            <span className="italic text-teal-gradient">Reviews</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: pagination + thumbnails */}
          <div className="md:col-span-3 flex flex-row md:flex-col justify-between items-start gap-4">
            <span className="font-display text-sm text-muted-foreground">
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>

            {/* Thumbnail nav */}
            <div className="flex gap-2 flex-wrap">
              {testimonials.
              filter((_, i) => i !== current).
              slice(0, 3).
              map((t) => {
                const idx = testimonials.findIndex((x) => x.id === t.id);
                return (
                  <button
                    key={t.id}
                    onClick={() => navigate(idx > current ? 'right' : 'left', idx)}
                    className="w-12 h-14 md:w-16 md:h-20 overflow-hidden rounded opacity-50 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                    aria-label={`View testimonial by ${t.name}`}>
                    
                      <AppImage
                      src={t.thumbnail}
                      alt={t.name}
                      width={64}
                      height={80}
                      className="w-full h-full object-cover" />
                    
                    </button>);

              })}
            </div>
          </div>

          {/* Center: main portrait */}
          <div className="md:col-span-4 relative h-72 md:h-96 rounded-lg overflow-hidden">
            <AppImage
              src={review.image}
              alt={`Portrait of ${review.name}, ${review.role} at ${review.company}`}
              fill
              className={`object-cover transition-opacity duration-350 ${animating ? 'opacity-0' : 'opacity-100'}`}
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* Right: quote + nav */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8 md:pl-4">
            <div
              className={`transition-all duration-350 ${
              animating ?
              direction === 'right' ? '-translate-x-8 opacity-0' : 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}`
              }>
              
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                {review.company}
              </p>
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                {review.name} · {review.role}
              </h3>
              <blockquote className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('left')}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors duration-300">
                
                <Icon name="ArrowLeftIcon" size={18} className="text-foreground" />
              </button>
              <button
                onClick={() => navigate('right')}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors duration-300">
                
                <Icon name="ArrowRightIcon" size={18} className="text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}