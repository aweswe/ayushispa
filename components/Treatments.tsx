import Image from 'next/image';

interface Treatment {
  id: number;
  title: string;
  desc: string;
  duration: string;
  price: string;
  image: string;
}

export default function Treatments() {
  const list: Treatment[] = [
    {
      id: 1,
      title: 'The Somatic Body Ritual',
      desc: 'A deeply restorative full-body therapy focusing on meridian pathway release and physical alignment using warm, house-blended cedarwood oil.',
      duration: '90 Minutes',
      price: '₹6,500',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'The Floral Aromatherapy',
      desc: 'A slow, sensory massage employing rare, cold-pressed absolute essences of jasmine, lavender, and vetiver to calm the nervous system and clear mental fatigue.',
      duration: '75 Minutes',
      price: '₹5,500',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'The Botanical Clay Face Therapy',
      desc: 'An advanced hydration facial using wild-harvested rose hydrosols, active mineral clays, and skin massage to reveal a healthy, natural glow.',
      duration: '60 Minutes',
      price: '₹4,800',
      image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'The Volcanic Stone & Thermal Suite',
      desc: 'Dry cedarwood sauna heat followed by smooth, heated volcanic basalt stones strategically placed to radiate deep warmth and unlock tense energetic pathways.',
      duration: '90 Minutes',
      price: '₹7,000',
      image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800&auto=format&fit=crop',
    },
  ];

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
          {list.map((treatment, idx) => (
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
