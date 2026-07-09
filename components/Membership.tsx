interface MembershipTier {
  id: number;
  name: string;
  price: string;
  term: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export default function Membership() {
  const tiers: MembershipTier[] = [
    {
      id: 1,
      name: 'Essential',
      price: '₹5,500',
      term: 'monthly',
      description: 'Designed for standard, mindful upkeep of your personal well-being.',
      features: [
        'One 75-minute curated ritual per month',
        'Daily access to the quiet bathhouse & steam rooms',
        'Complimentary house-formulated herbal infusions',
        '10% savings on additional treatments and products',
      ],
      cta: 'Apply for Membership',
      featured: false,
    },
    {
      id: 2,
      name: 'Signature',
      price: '₹10,000',
      term: 'monthly',
      description: 'Our recommended tier for comprehensive, regular therapeutic care.',
      features: [
        'Two 75-minute curated rituals per month',
        'Unlimited access to the thermal & botanical suites',
        'Priority booking and advanced reservation window',
        'One complimentary guest invitation card quarterly',
        '15% savings on all retail apothecary and products',
      ],
      cta: 'Apply for Membership',
      featured: true,
    },
    {
      id: 3,
      name: 'Elite',
      price: '₹18,000',
      term: 'monthly',
      description: 'An all-inclusive premium access pass for uncompromised luxury.',
      features: [
        'Four 90-minute bespoke rituals per month',
        'Private treatment suite access (subject to booking)',
        'Personalized bi-monthly somatic wellness plan',
        'Unlimited bathhouse access with up to two guests',
        'Dedicated member concierge line and valet service',
      ],
      cta: 'Inquire for Invitation',
      featured: false,
    },
  ];

  return (
    <section id="membership" className="section-spacing membership-section">
      <div className="container">
        {/* Header */}
        <div className="section-header centered-header">
          <span className="section-eyebrow">Membership Access</span>
          <h2 className="section-title">The Memberships</h2>
          <p className="section-desc">
            Become a part of the Luxury Delhi Spa circle to integrate quiet space and restorative rituals into your lifestyle.
          </p>
        </div>

        {/* Tiers Container */}
        <div className="membership-tiers">
          {tiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`membership-card ${tier.featured ? 'card-featured' : ''}`}
            >
              {tier.featured && <div className="featured-tag">Signature Choice</div>}
              
              <div className="membership-card-header">
                <h3 className="membership-name">{tier.name}</h3>
                <div className="membership-price-block">
                  <span className="membership-currency"></span>
                  <span className="membership-price">{tier.price}</span>
                  <span className="membership-term">/ {tier.term}</span>
                </div>
                <p className="membership-desc">{tier.description}</p>
              </div>

              <ul className="membership-features">
                {tier.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-check">
                      <path d="M1 5L5 9L13 1" stroke="#C6B8A7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="membership-action">
                <a 
                  href="#booking" 
                  className={`btn ${tier.featured ? 'btn-primary' : 'btn-secondary'} membership-btn`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
