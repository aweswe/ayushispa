'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Wellness', href: '#wellness' },
    { name: 'Membership', href: '#membership' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#booking' },
  ];

  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Logo & Brand Column */}
          <div className="footer-col brand-col">
            <a href="#home" className="logo footer-logo">
              <img src="/logo.png" alt="Luxury Delhi Spa" className="footer-logo-img" />
            </a>
            <p className="footer-brand-desc">
              A dedicated space for silence, space, and sensory restoration.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link-item">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Coordinates</h4>
            <div className="footer-info-block">
              <span className="info-label">Address</span>
              <p className="info-text">
                Central Market, Lajpat Nagar II<br />
                Aerocity & Karol Bagh, Delhi
              </p>
            </div>
            <div className="footer-info-block">
              <span className="info-label">Hours of Silence</span>
              <p className="info-text">
                Daily: 9:00 AM — 9:00 PM
              </p>
            </div>
            <div className="footer-info-block">
              <span className="info-label">Contact</span>
              <p className="info-text">
                <a href="mailto:info@luxurydelhispa.in" className="email-link">info@luxurydelhispa.in</a><br />
                +91 9286719152
              </p>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-col-title">The Journal</h4>
            <p className="newsletter-desc">
              Subscribe to receive curated writings on mindfulness, early seasonal bookings, and studio announcements.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                required
                aria-label="Email for Newsletter"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit" aria-label="Subscribe">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 1L19 6L14 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 6H19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Luxury Delhi Spa. All rights reserved.
          </p>
          <div className="footer-meta-links">
            <a href="#booking">Privacy Policy</a>
            <a href="#booking">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
