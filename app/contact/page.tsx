import type { Metadata } from 'next';
import BookingCTA from '@/components/sections/BookingCTA';

export const metadata: Metadata = {
  title: 'Book Spa Appointment Delhi | Contact Luxury Delhi Spa',
  description:
    'Reserve your private treatment suite at Luxury Delhi Spa. Contact us for couples massage deals, bridal packages, and custom wellness bookings in Delhi.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero Header */}
      <section className="section-spacing contact-hero-header">
        <div className="container text-center">
          <span className="section-eyebrow">Reservations</span>
          <h1 className="hero-heading-subpage">Begin Your Journey to Quiet</h1>
          <p className="subpage-lead-text">
            Submit your details below to request a session. Our concierge team will contact you shortly to confirm your booking and suite assignment.
          </p>
        </div>
      </section>

      {/* Core Booking Form Component */}
      <BookingCTA />

      {/* Contact Coordinates & Enclave Details */}
      <section className="section-spacing coordinates-section">
        <div className="container">
          <div className="text-center section-header-compact">
            <span className="section-eyebrow">Coordinates</span>
            <h2 className="section-title">Our Delhi Enclaves</h2>
            <p className="section-subtitle-text max-width-600">
              For direct assistance or to book a multi-day custom retreat package, feel free to call our central concierge line.
            </p>
          </div>

          <div className="coordinates-grid">
            <div className="coordinate-card-glass">
              <h3 className="location-name">Aerocity Suite</h3>
              <p className="location-info"><strong>Central Phone:</strong> +91 92867 19152</p>
              <p className="location-info"><strong>Address:</strong> Asset Area 4, Hospitality District, Aerocity, New Delhi, 110037</p>
              <p className="location-info"><strong>Best For:</strong> Private wet suites, cold hydrotherapy, and corporate travelers.</p>
            </div>
            <div className="coordinate-card-glass">
              <h3 className="location-name">Lajpat Nagar Flagship</h3>
              <p className="location-info"><strong>Central Phone:</strong> +91 92867 19152</p>
              <p className="location-info"><strong>Address:</strong> Central Market, Block K, Lajpat Nagar II, New Delhi, 110024</p>
              <p className="location-info"><strong>Best For:</strong> Traditional Ayurvedic Panchakarma, oil pouring, and holistic consultations.</p>
            </div>
            <div className="coordinate-card-glass">
              <h3 className="location-name">Karol Bagh Retreat</h3>
              <p className="location-info"><strong>Central Phone:</strong> +91 92867 19152</p>
              <p className="location-info"><strong>Address:</strong> Pusa Road, Block 11, Karol Bagh, New Delhi, 110005</p>
              <p className="location-info"><strong>Best For:</strong> Botanical facial skincare, Swedish relaxation, and pre-wedding packages.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
