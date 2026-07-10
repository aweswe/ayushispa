import Image from 'next/image';

export default function Philosophy() {
  return (
    <section className="philosophy-section">
      {/* Background Image */}
      <div className="philosophy-image-wrapper">
        <Image
          src="/images/philosophy_bg.png"
          alt="Serene luxury spa bath corner with raw travertine stone wall, warm candles, and steam"
          fill
          sizes="100vw"
          className="philosophy-bg-image"
          style={{ objectFit: 'cover' }}
        />
        <div className="philosophy-overlay" />
      </div>

      <div className="container philosophy-container">
        <div className="philosophy-content">
          <span className="philosophy-eyebrow">The Sanctuary Creed</span>
          <h2 className="philosophy-quote">
            “Quiet the senses, and the body will remember how to heal.”
          </h2>
          <div className="philosophy-action">
            <a href="#booking" className="btn btn-secondary philosophy-btn">
              Begin the Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
