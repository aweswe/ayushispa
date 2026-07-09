import Image from 'next/image';

interface ExperienceBlock {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
}

export default function Experience() {
  const blocks: ExperienceBlock[] = [
    {
      id: 1,
      title: 'Personalized Care',
      subtitle: 'Tailored to your body\'s unique rhythm.',
      desc: 'We do not believe in uniform experiences. Every treatment begins with a private consultation with your therapist to understand your physical state, emotional energy, and personal goals, creating a highly customized path to rejuvenation.',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
          <line x1="12" y1="18" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Natural Products',
      subtitle: 'Pure botanicals, zero synthetic compromises.',
      desc: 'Our oils, scrubs, and facials are hand-formulated using 100% organic, wild-harvested botanicals and cold-pressed seed oils. We select ingredients like frankincense, blue chamomiles, and rosehip for their nutrient density and clean therapeutic profile.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22C2 12.06 10.06 4 20 4v6c-4.97 0-9 4.03-9 9" />
          <path d="M11 19c0-3.87 3.13-7 7-7v3c-2.21 0-4 1.79-4 4" />
          <circle cx="20" cy="4" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Relaxing Atmosphere',
      subtitle: 'A sensory detox designed for slow living.',
      desc: 'Our environment is curated to lower heart rates. Soundscapes are natural, textiles are unbleached organic linen, and lighting replicates the soft, indirect glow of golden hour. Silence is encouraged throughout our hallways to create a shared sense of peace.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Expert Therapists',
      subtitle: 'Master practitioners of holistic healing.',
      desc: 'Our certified therapists undergo extensive training in anatomical alignment, meridian therapy, and somatic release techniques. They approach treatment not as a routine, but as a deliberate dialogue between touch, tension, and breathing.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l2 2 4-4" />
        </svg>
      ),
    },
  ];

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
          {blocks.map((block, idx) => (
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
                  {block.icon}
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
