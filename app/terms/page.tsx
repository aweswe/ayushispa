import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Luxury Delhi Spa',
  description: 'Read the terms of service and wellness guidelines for booking therapies at our enclaves in Delhi NCR.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <section className="section-spacing legal-page-section">
      <div className="container container-skinny">
        <span className="section-eyebrow text-center">Legal</span>
        <h1 className="hero-heading-subpage text-center">Terms & Conditions</h1>
        <p className="subpage-lead-text text-center" style={{ marginBottom: '4rem' }}>
          Last updated: July 11, 2026
        </p>

        <div className="legal-content-card">
          <p className="legal-intro">
            Welcome to <strong>Luxury Delhi Spa</strong>. These Terms & Conditions outline the rules and guidelines governing the reservation and utilization of our spa enclaves in Aerocity, Lajpat Nagar, and Karol Bagh.
          </p>

          <h2 className="legal-heading">1. Reservation & Confirmation Policy</h2>
          <p>
            When submitting an appointment request through our website, please note:
          </p>
          <ul>
            <li>Your request is dispatched directly to our concierge team on WhatsApp.</li>
            <li>A booking is only considered confirmed once our team verifies suite availability and sends you an official confirmation message.</li>
            <li>Pricing listed on the website is in Indian Rupees (INR) and is subject to standard government taxes.</li>
          </ul>

          <h2 className="legal-heading">2. Arrival & Spa Etiquette</h2>
          <p>
            To preserve the peaceful environment of our enclaves for all guests, we enforce strict guidelines:
          </p>
          <ul>
            <li><strong>Arrival Time:</strong> We request that you arrive at least 15 minutes before your scheduled therapy to allow time for your custom botanical consultation.</li>
            <li><strong>Digital Detox:</strong> Mobile devices must be switched off or put on silent mode and placed inside secure lockers in your private suite.</li>
            <li><strong>Silence:</strong> Guest corridors and suites are dedicated quiet areas to allow sensory rest.</li>
          </ul>

          <h2 className="legal-heading">3. Health and Medical Conditions</h2>
          <p>
            Please notify your therapist of any medical conditions, allergies, skin sensitivities, or physical injuries during your consultation. Our somatic, Swedish, and Ayurvedic therapies are performed by trained professionals, but they are not a substitute for professional medical treatment.
          </p>

          <h2 className="legal-heading">4. Cancellation & Rescheduling</h2>
          <p>
            Because we prepare private wet rooms and custom massage formulations in advance, we request a minimum of 4 hours' notice for cancellations or rescheduling. If you need to make changes, please contact the reservation desk directly on WhatsApp.
          </p>

          <h2 className="legal-heading">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to reservations or services shall be subject to the exclusive jurisdiction of the courts of New Delhi.
          </p>
        </div>
      </div>
    </section>
  );
}
