import React from 'react';
import AppLogo from './ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-[100%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <AppLogo size={24} />
          <span className="font-display text-xs tracking-widest text-muted-foreground">
            PARUL SHARMA
          </span>
        </div>
        <p className="font-display text-xs tracking-wider text-muted-foreground text-center">
          © 2026 Parul Sharma. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a
            href="https://github.com/parul9299"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/parul-sharma9299"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sharma1234parul@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}