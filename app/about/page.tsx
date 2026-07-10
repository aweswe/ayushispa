import type { Metadata } from 'next';
import About from '@/components/sections/About';

export const metadata: Metadata = {
  title: 'About Our Luxury Spa in Delhi | Luxury Delhi Spa',
  description:
    'Discover Luxury Delhi Spa, the best luxury spa in Delhi NCR. Learn about our wellness philosophy, certified therapist training, and our heritage of Ayurvedic treatments in Aerocity, Lajpat Nagar, and Karol Bagh.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Editorial Page Header */}
      <section className="section-spacing about-hero-header">
        <div className="container text-center">
          <span className="section-eyebrow">The Heritage</span>
          <h1 className="hero-heading-subpage">A Sanctuary of Silence</h1>
          <p className="subpage-lead-text">
            For over a decade, we have been crafting bespoke physical treatments that isolate the senses and restore the body in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Core About Component */}
      <About />

      {/* The Lineage of Ayurvedic Care Section */}
      <section className="section-spacing ayurvedic-lineage-section">
        <div className="container">
          <div className="lineage-layout-grid">
            <div className="lineage-header-col">
              <span className="section-eyebrow">Therapeutic Lineage</span>
              <h2 className="section-title">The Purity of Ayurvedic Care</h2>
              <p className="lineage-body-text">
                At Luxury Delhi Spa, Ayurveda is not merely a service category; it is a dedicated discipline. Our formulations are mixed fresh daily in copper vessels using roots, flowers, and cold-pressed sesame oil sourced directly from sustainable farms in Kerala. 
              </p>
              <p className="lineage-body-text">
                Every therapist in our Delhi suites has completed rigorous training under master practitioners, ensuring that the ancient rhythms of Abhyanga and Shirodhara are preserved and performed with clinical precision.
              </p>
            </div>

            <div className="lineage-details-col">
              <div className="details-glass-card">
                <h3 className="detail-card-heading">Fresh Herbal Infusions</h3>
                <p className="detail-card-desc">
                  We use wild-harvested Himalayan frankincense, Kashmiri saffron, and organic sesame base oil to match your specific energetic constitution (dosha).
                </p>
              </div>
              <div className="details-glass-card">
                <h3 className="detail-card-heading">Therapist Credentialing</h3>
                <p className="detail-card-desc">
                  Our team members undergo continuous physical training and anatomical studies, maintaining the highest levels of safety and care in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinate Enclaves Section */}
      <section className="section-spacing enclaves-section">
        <div className="container">
          <div className="text-center section-header-compact">
            <span className="section-eyebrow font-sans">Our Enclaves</span>
            <h2 className="section-title font-serif">Delhi NCR Locations</h2>
            <p className="section-subtitle-text max-width-600">
              Each of our spaces is architecturally crafted to suit its neighborhood context, providing consistent quietude.
            </p>
          </div>

          <div className="enclaves-grid">
            <div className="enclave-card-glass">
              <h3 className="enclave-name">Aerocity</h3>
              <p className="enclave-meta">Modern Luxury Hub</p>
              <p className="enclave-desc">
                Designed for corporate travelers and international guests. Features private wet suites, marble steam showers, and sound-insulated treatment suites.
              </p>
            </div>
            <div className="enclave-card-glass">
              <h3 className="enclave-name">Lajpat Nagar</h3>
              <p className="enclave-meta">Traditional Wellness Hub</p>
              <p className="enclave-desc">
                Our flagship heritage suites, focusing heavily on classical Ayurvedic Panchakarma, custom bronze oil vessels, and deep therapeutic consultations.
              </p>
            </div>
            <div className="enclave-card-glass">
              <h3 className="enclave-name">Karol Bagh</h3>
              <p className="enclave-meta">Sensory Escape Hub</p>
              <p className="enclave-desc">
                A quiet oasis amidst a bustling shopping district. Designed for deep relaxation, aromatherapy rituals, and post-shopping massage sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
