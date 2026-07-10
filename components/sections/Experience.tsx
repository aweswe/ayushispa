import Image from 'next/image';

import { EXPERIENCE_BLOCKS } from '@/data/experience';

function getIcon(iconName: string) {
  switch (iconName) {
    case 'care':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
          <line x1="12" y1="18" x2="12" y2="22" />
        </svg>
      );
    case 'products':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22C2 12.06 10.06 4 20 4v6c-4.97 0-9 4.03-9 9" />
          <path d="M11 19c0-3.87 3.13-7 7-7v3c-2.21 0-4 1.79-4 4" />
          <circle cx="20" cy="4" r="1" fill="currentColor" />
        </svg>
      );
    case 'atmosphere':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      );
    case 'therapists':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Experience() {
  return (
    <section id="wellness" className="section-spacing experience-section">
      <div className="container">
        <div className="section-header centered-header">
          <span className="section-eyebrow">The Spa Philosophy</span>
          <h2 className="section-title">The Four Pillars</h2>
          <p className="section-desc">
            We hold ourselves to a standard of uncompromising refinement, prioritizing pure raw materials and deliberate care.
          </p>
        </div>

        <div className="experience-blocks">
          {EXPERIENCE_BLOCKS.map((block, idx) => (
            <div key={block.id} className={`experience-row ${idx % 2 === 1 ? 'row-reverse' : ''}`}>
              {/* Image Column */}
              <div className="experience-visual">
                <div className="experience-image-wrapper">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="experience-image"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="experience-info">
                <div className="experience-icon-wrapper">
                  {getIcon(block.iconName)}
                </div>
                <span className="experience-subtitle">{block.subtitle}</span>
                <h3 className="experience-row-title">{block.title}</h3>
                <p className="experience-row-desc">{block.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
