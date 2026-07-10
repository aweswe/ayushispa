import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Cinematic Background Image */}
      <div className="hero-image-wrapper">
        <Image
          src="/images/hero_main.png"
          alt="Luxury Delhi Spa room bathed in warm golden sunlight"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hero-bg-image"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tagline animate-fade-in-up-1">The Sanctuary</span>
          <h1 className="hero-heading animate-fade-in-up-2">
            The Art of<br />
            <em>Restorative</em> Wellness
          </h1>
          <div className="hero-divider-line animate-fade-in-up-3" />
          <p className="hero-subheading animate-fade-in-up-3">
            Premium spa treatments crafted for body, mind & soul — right in the heart of Delhi.
          </p>
          <div className="hero-buttons animate-fade-in-up-4">
            <a href="#booking" className="btn btn-primary">
              Book Appointment
            </a>
            <a href="#treatments" className="btn btn-secondary hero-btn-secondary">
              Explore Treatments
            </a>
          </div>
        </div>
      </div>

      {/* Curved Divider to Next Section */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,0 C320,60 720,120 1440,60 L1440,120 L0,120 Z"
            fill="#FAF7F2"
          />
        </svg>
      </div>
    </section>
  );
}
