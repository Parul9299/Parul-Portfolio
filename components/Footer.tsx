import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <AppLogo size={28} />
            <span className="font-display text-sm font-medium text-muted-foreground hidden sm:block">
              Kabir Khan
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#work" className="hover:text-foreground transition-colors">Work</Link>
            <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Kabir Khan · <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}