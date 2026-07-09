interface ValueItem {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const items: ValueItem[] = [
    {
      id: 1,
      title: 'Private Suites',
      desc: 'Each suite is a self-contained space featuring its own steam room, rainfall shower, and change area for complete visual and auditory isolation.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="24" height="20" rx="2" />
          <line x1="12" y1="6" x2="12" y2="26" />
          <line x1="20" y1="6" x2="20" y2="26" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Organic Products',
      desc: 'Formulated with raw, therapeutic-grade oils and fresh herbs, free from synthetic parabens, artificial perfumes, and sulfates.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4c-5.5 0-10 4.5-10 10v10c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V14c0-5.5-4.5-10-10-10z" />
          <path d="M16 10c1.5 1.5 2 3.5 1 5s-3 1.5-3.5 3.5" />
          <circle cx="16" cy="4" r="1.5" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Certified Experts',
      desc: 'Our therapists hold master certifications in traditional therapies and spend 200+ hours annually in training to deepen their anatomical practice.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 2L6 6v7c0 6 10 13 16 15 6-2 16-9 16-15V6L16 2z" strokeWidth="1.2" />
          <path d="M11 14l3.5 3.5L21 10" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Holistic Healing',
      desc: 'We address the interconnected pathways of nervous system exhaustion, combining touch, breath regulation, and sensory detox.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="12" />
          <path d="M8 16c4.5-3.5 11.5-3.5 16 0" />
          <path d="M8 20c4.5-3.5 11.5-3.5 16 0" strokeDasharray="2,2" />
          <path d="M16 4v24" strokeWidth="0.8" strokeDasharray="3,3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-spacing values-section">
      <div className="container">
        <div className="values-grid">
          {items.map((item) => (
            <div key={item.id} className="value-card">
              <div className="value-icon">
                {item.icon}
              </div>
              <h3 className="value-title">{item.title}</h3>
              <p className="value-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
