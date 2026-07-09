'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Left Side: Logo */}
        <Link href="/" className="logo" aria-label="Luxury Delhi Spa Home">
          <img src="/logo.png" alt="Luxury Delhi Spa" className="logo-img" />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="nav-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Appointment CTA & Mobile Toggle */}
        <div className="nav-actions">
          <Link href="/contact" className="btn btn-primary nav-btn">
            Book Appointment
          </Link>
          
          <button 
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={menuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mobile-nav-action-li">
              <Link 
                href="/contact" 
                className="btn btn-primary mobile-nav-btn"
                onClick={() => setMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
