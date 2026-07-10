import type { Metadata } from 'next';
import Experience from '@/components/sections/Experience';

export const metadata: Metadata = {
  title: 'Rejuvenation Spa Delhi | Holistic Wellness Experience | Luxury Delhi Spa',
  description:
    'Immerse yourself in a holistic wellness experience at Luxury Delhi Spa. Discover the best rejuvenation spa programs, digital detox retreats, and somatic therapies in Delhi.',
  alternates: {
    canonical: '/wellness',
  },
};

export default function WellnessPage() {
  return (
    <>
      {/* Wellness Hero Header */}
      <section className="section-spacing wellness-hero-header">
        <div className="container text-center">
          <span className="section-eyebrow">The Experience</span>
          <h1 className="hero-heading-subpage">Rejuvenation & Somatic Balance</h1>
          <p className="subpage-lead-text">
            Our wellness programs target the nervous system, helping you transition from chronic city stress into natural physical repair.
          </p>
        </div>
      </section>

      {/* Core Experience Pillars */}
      <Experience />

      {/* Digital Detox and Sensory Rest Protocol */}
      <section className="section-spacing digital-detox-section">
        <div className="container">
          <div className="detox-layout-grid">
            <div className="detox-header-col">
              <span className="section-eyebrow">Sensory Rest</span>
              <h2 className="section-title">The Digital Detox Protocol</h2>
              <p className="detox-body-text">
                True rejuvenation cannot occur when the mind is constantly stimulated by notifications. At Luxury Delhi Spa, we observe a strict digital detox policy. Upon entering our enclaves, we encourage guests to place their mobile devices inside private, secure lockers in their suites.
              </p>
              <p className="detox-body-text">
                By eliminating screens, you allow your brain to settle, aligning your nervous system with the rhythmic breathing and sensory silence of your therapy.
              </p>
            </div>

            <div className="detox-pillars-col">
              <div className="detox-pillar-card">
                <span className="pillar-index">I</span>
                <h3 className="pillar-heading">Acoustic Isolation</h3>
                <p className="pillar-desc">
                  Our private chambers utilize multi-layer wall insulation to drop sound levels below 30 decibels, isolating you from traffic and external voices.
                </p>
              </div>
              <div className="detox-pillar-card">
                <span className="pillar-index">II</span>
                <h3 className="pillar-heading">Visual Recovery</h3>
                <p className="pillar-desc">
                  We use warm, low-intensity indirect lighting and neutral natural finishes to rest the eyes from screen fatigue.
                </p>
              </div>
              <div className="detox-pillar-card">
                <span className="pillar-index">III</span>
                <h3 className="pillar-heading">Sensory Grounding</h3>
                <p className="pillar-desc">
                  From cold-pressed oils on the skin to hot stone applications, our treatments focus on raw, natural touch to bring your mind back to the present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
