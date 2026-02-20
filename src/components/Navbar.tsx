'use client';

import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-surface-light/30'
          : 'border-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <Logo />
          <span className="font-mono text-sm text-gray-400 hidden sm:block group-hover:text-primary transition-colors">
            tushar.dev
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-surface-light/50 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://huggingface.co/Tushar365"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-sm font-medium text-white bg-linear-to-r from-primary to-accent rounded-lg hover:opacity-90 transition-opacity"
          >
            HuggingFace
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-surface-light/50 bg-dark/95 backdrop-blur-md">
          <div className="section-container py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-surface-light/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
