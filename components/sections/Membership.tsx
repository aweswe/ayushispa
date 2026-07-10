import { MEMBERSHIP_TIERS } from '@/data/memberships';

export default function Membership() {
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
          {MEMBERSHIP_TIERS.map((tier) => (
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
