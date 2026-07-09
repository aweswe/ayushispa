import Image from 'next/image';

export default function Philosophy() {
  return (
    <section className="philosophy-section">
      {/* Background Image */}
      <div className="philosophy-image-wrapper">
        <Image
          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2000&auto=format&fit=crop"
          alt="Tranquil forest canopy in soft mist representing silence"
          fill
          sizes="100vw"
          className="philosophy-bg-image"
          style={{ objectFit: 'cover' }}
        />
        <div className="philosophy-overlay" />
      </div>

      <div className="container philosophy-container">
        <div className="philosophy-content">
          <span className="philosophy-eyebrow">The Core Belief</span>
          <h2 className="philosophy-quote">
            “True wellness begins where the mind becomes quiet.”
          </h2>
          <div className="philosophy-action">
            <a href="#booking" className="btn btn-secondary philosophy-btn">
              Begin Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
