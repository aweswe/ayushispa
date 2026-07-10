import type { Metadata } from 'next';
import Testimonials from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Guest Reviews & Testimonials | Luxury Delhi Spa | The Sanctuary',
  description:
    'Read real reviews from our guests in Delhi NCR. Discover stories of deep relaxation, couples massage retreats, and Ayurvedic recovery at The Sanctuary.',
  alternates: {
    canonical: '/testimonials',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Testimonials Hero Header */}
      <section className="section-spacing testimonials-hero-header">
        <div className="container text-center">
          <span className="section-eyebrow">Guestbook</span>
          <h1 className="hero-heading-subpage">Voices of the Restored</h1>
          <p className="subpage-lead-text">
            Read stories of physical recovery, deep relaxation, and mental calibration shared by our guests in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Core Testimonials Slider/List */}
      <Testimonials />

      {/* Guestbook Statement */}
      <section className="section-spacing guestbook-statement-section">
        <div className="container text-center">
          <div className="statement-box-glass">
            <span className="ornament">✦</span>
            <h2 className="statement-heading">Our Commitment to Silence</h2>
            <p className="statement-text">
              We protect the privacy of all our guests. While we are grateful for public feedback, we do not require, incentivize, or ask for reviews during your checkout. Your time with us is entirely your own, and the quietude you experience is yours to keep.
            </p>
            <p className="statement-signature">The Concierge Team, The Sanctuary</p>
          </div>
        </div>
      </section>
    </>
  );
}
