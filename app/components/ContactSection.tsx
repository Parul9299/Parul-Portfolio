'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const contactInfo = [
    {
        icon: 'MapPinIcon',
        label: 'Location',
        value: 'Mathura, India 281006',
    },
    {
        icon: 'PhoneIcon',
        label: 'Phone',
        value: '+91 8865857725',
    },
    {
        icon: 'EnvelopeIcon',
        label: 'Email',
        value: 'kabirkhanat6@gmail.com',
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        projectType: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const form = new FormData();

            form.append(
                "access_key",
                process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!
            );

            form.append("name", formData.name);
            form.append("email", formData.email);
            form.append("projectType", formData.projectType);
            form.append("budget", formData.budget);
            form.append("message", formData.message);

            form.append("from_name", "Kabir Khan Portfolio");
            form.append("replyto", formData.email);

            // Optional Subject
            form.append(
                "subject",
                `New Portfolio Inquiry - ${formData.name}`
            );

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: form,
                }
            );

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);

                setFormData({
                    name: "",
                    email: "",
                    budget: "",
                    projectType: "",
                    message: "",
                });
            } else {
                alert("Failed to send message.");
                console.log(data);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative z-10 border-t border-border">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="animate-on-scroll animate-in mb-16">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-3 block">
                        Get In Touch
                    </span>
                    <h2 className="font-display text-section-lg font-bold text-foreground leading-tight">
                        Hire Me or<br />
                        <span className="italic text-teal-gradient">Start a Project</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: contact info + availability */}
                    <div className="animate-on-scroll animate-in flex flex-col justify-between gap-10">
                        <div>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm">
                                Available for freelance projects, full-time roles, and long-term design partnerships.
                                Let&rsquo;s create something remarkable together.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-md bg-teal-subtle border border-teal-subtle flex items-center justify-center flex-shrink-0">
                                            <Icon name={info.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{info.label}</p>
                                            <p className="text-sm text-foreground font-medium">{info.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Availability badge */}
                        <div className="p-6 rounded-lg border border-accent/30 bg-teal-subtle">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                                    Available for Work
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Currently accepting freelance projects and open to full-time opportunities.
                                Response time within 24 hours.
                            </p>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div className="animate-on-scroll animate-in" style={{ animationDelay: '0.15s' }}>
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-16">
                                <div className="w-16 h-16 rounded-full bg-teal-subtle border border-accent/30 flex items-center justify-center mb-6">
                                    <Icon name="CheckIcon" size={28} className="text-accent" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                                    Message Sent!
                                </h3>
                                <p className="text-sm text-muted-foreground max-w-xs">
                                    Thanks for reaching out. I&rsquo;ll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input
                                    type="checkbox"
                                    name="botcheck"
                                    className="hidden"
                                    style={{ display: "none" }}
                                />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="projectType" className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                            Project Type
                                        </label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                                        >
                                            <option value="">Select type</option>
                                            <option value="Branding Identity">Brand Identity</option>
                                            <option value="Packaging Design">Packaging Design</option>
                                            <option value="Social Media Design">Social Media Design</option>
                                            <option value="Print Design">Print Design</option>
                                            <option value="Video Editing">Video Editing</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="budget" className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                            Budget Range
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                                        >
                                            <option value="">Select budget</option>
                                            <option value="under5k">Under ₹5,000</option>
                                            <option value="5k-15k">₹5,000 – ₹15,000</option>
                                            <option value="15k-50k">₹15,000 – ₹50,000</option>
                                            <option value="50k+">₹50,000+</option>
                                            <option value="fulltime">Full-time Role</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or opportunity..."
                                        className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                    {!loading && (
                                        <Icon
                                            name="PaperAirplaneIcon"
                                            size={16}
                                            className="text-primary-foreground"
                                        />
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}