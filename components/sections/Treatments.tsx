import Image from 'next/image';
import { TREATMENTS } from '@/data/treatments';

export default function Treatments() {
  return (
    <section id="treatments" className="section-spacing treatments-section">
      <div className="container">
        {/* Header */}
        <div className="section-header treatments-header">
          <span className="section-eyebrow">Signature Curations</span>
          <h2 className="section-title">The Healing Rituals</h2>
          <p className="section-desc">
            Explore our thoughtfully structured treatments, designed to encourage physiological release and complete cognitive stillness.
          </p>
        </div>

        {/* Staggered Asymmetrical Layout */}
        <div className="treatments-staggered">
          {TREATMENTS.map((treatment, idx) => (
            <div 
              key={treatment.id} 
              className={`treatment-card ${idx % 2 === 1 ? 'card-offset' : ''}`}
            >
              <div className="treatment-img-container">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="treatment-img"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="treatment-meta">
                <div className="treatment-meta-top">
                  <span className="treatment-duration">{treatment.duration}</span>
                  <span className="treatment-price">From {treatment.price}</span>
                </div>
                <h3 className="treatment-card-title">{treatment.title}</h3>
                <p className="treatment-card-desc">{treatment.desc}</p>
                <a href="#booking" className="treatment-link">
                  Reserve Ritual
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="treatment-arrow">
                    <path d="M13 1L17 5L13 9" stroke="#C6B8A7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 5H17" stroke="#C6B8A7" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
