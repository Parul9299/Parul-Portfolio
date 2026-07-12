'use client';
import { useEffect, useState, useRef } from 'react';
import { useInView } from "framer-motion";
import AppImage from '@/components/ui/AppImage';

const experiences = [
    {
        period: 'Oct 2023 — Current',
        role: 'Senior Graphic Designer',
        company: 'Acculizein Tech Pvt. Ltd.',
        location: 'Agra, India',
        type: 'Full-time',
        points: [
            'Developed layouts, logos, branding materials, and illustrations to meet client requirements.',
            'Designed engaging graphics for digital and print media projects.',
            'Created mockups and prototypes for client presentations and feedback.',
            'Managed multiple design projects while meeting tight deadlines.',
            'Mentored junior designers on best practices and design tools.'],

        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1654720b5-1778919017103.png",
        imageAlt: 'Modern creative agency office with dark walls, dim atmospheric lighting, deep shadows on studio equipment'
    },
    {
        period: 'Nov 2022 — Oct 2023',
        role: 'Graphic Designer',
        company: 'Mudgal Consultancy Services',
        location: 'Agra, India',
        type: 'Full-time',
        points: [
            'Created digital assets for social media campaigns and online platforms.',
            'Designed visual concepts for marketing materials and client presentations.',
            'Utilized Adobe Creative Suite for graphic design and image editing tasks.',
            'Edited photographs for use in digital media platforms including web banners and social media posts.',
            'Conducted research on design trends to enhance creative output and relevance.'],

        image: "https://img.rocket.new/generatedImages/rocket_gen_img_15bf9d64c-1778493634773.png",
        imageAlt: 'Graphic design studio with dark desk, moody low-key lighting, shadows on design materials and laptop screen'
    }];


const education = [
    {
        year: 'Oct 2022',
        degree: 'Diploma in Graphics',
        field: 'Graphic Design',
        institution: 'Jagannath University, Delhi'
    },
    {
        year: 'Mar 2016',
        degree: 'CCOAI Course',
        field: 'Information Technology',
        institution: 'Rajiv Gandhi Computer Saksharta Mission, Mathura'
    },
    {
        year: 'Dec 2015',
        degree: 'DTP Course',
        field: 'Information Technology',
        institution: 'Rajiv Gandhi Computer Saksharta Mission, Mathura'
    }];


export default function ExperienceSection() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [animateBars, setAnimateBars] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateBars(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="experience" className="py-24 relative z-10 border-t border-border">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section header */}
                <div className="animate-on-scroll animate-in mb-16">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-3 block">
                        Background
                    </span>
                    <h2 className="font-display text-section-lg font-bold text-foreground leading-tight">
                        Experience &<br />
                        <span className="italic text-teal-gradient">Education</span>
                    </h2>
                </div>

                {/* Experience entries — alternating layout */}
                <div className="space-y-20 mb-24">
                    {experiences?.map((exp, index) =>
                        <div
                            key={exp?.company}
                            className={`animate-on-scroll animate-in grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
                            }
                            style={{ animationDelay: `${index * 0.15}s` }}>

                            {/* Image side */}
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="relative rounded-lg overflow-hidden image-zoom aspect-[4/3]">
                                    <AppImage
                                        src={exp?.image}
                                        alt={exp?.imageAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="text-[9px] uppercase tracking-widest px-2.5 py-1.5 bg-primary/80 text-primary-foreground rounded-sm">
                                            {exp?.type}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content side */}
                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex flex-col justify-between h-full`}>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-accent mb-2 font-medium">
                                        {exp?.period}
                                    </p>
                                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1 leading-tight">
                                        {exp?.role}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        {exp?.company} · {exp?.location}
                                    </p>

                                    <ul className="space-y-3">
                                        {exp?.points?.map((point, pi) =>
                                            <li key={pi} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                {point}
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                {/* Award badge (only for first entry) */}
                                {index === 0 &&
                                    <div className="mt-6 inline-flex items-center gap-3 px-4 py-3 border border-accent/30 rounded-lg bg-teal-subtle">
                                        <span className="text-accent text-lg">★</span>
                                        <div>
                                            <p className="text-xs font-semibold text-foreground">Employee of the Year</p>
                                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">2024 · Acculizein Tech</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    )}
                </div>

                {/* Education */}
                <div className="animate-on-scroll animate-in">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-10">
                        Education & Training
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {education?.map((edu, index) =>
                            <div
                                key={edu?.degree}
                                className="p-6 rounded-lg border border-border bg-card card-hover"
                                style={{ animationDelay: `${index * 0.1}s` }}>

                                <p className="text-[10px] uppercase tracking-widest text-accent mb-3">{edu?.year}</p>
                                <h4 className="font-display text-lg font-semibold text-foreground mb-1">{edu?.degree}</h4>
                                <p className="text-xs text-accent/80 mb-2">{edu?.field}</p>
                                <p className="text-xs text-muted-foreground leading-relaxed">{edu?.institution}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Languages */}
                <div ref={ref} className="animate-on-scroll animate-in mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { lang: 'English', level: 'B1', label: 'Intermediate (B1)', pct: 55 },
                        { lang: 'Hindi', level: 'C2', label: 'Proficient (C2)', pct: 92 }]?.
                        map((l) =>
                            <div key={l?.lang} className="p-6 rounded-lg border border-border bg-card">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-medium text-foreground text-sm">{l?.lang}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-accent">{l?.level}</span>
                                </div>
                                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 transition-all duration-1000 ease-out"
                                        style={{
                                            width: isInView ? `${l.pct}%` : "0%",
                                            transitionDelay: `${l.pct * 8}ms`,
                                        }}
                                    />
                                </div>
                                <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest">{l?.label}</p>
                            </div>
                        )}
                </div>
            </div>
        </section>);

}