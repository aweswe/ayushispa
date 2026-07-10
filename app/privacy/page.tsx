import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Luxury Delhi Spa',
  description: 'Learn about our data collection and protection policy. Your privacy is paramount at our luxury spa enclaves in New Delhi.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <section className="section-spacing legal-page-section">
      <div className="container container-skinny">
        <span className="section-eyebrow text-center">Legal</span>
        <h1 className="hero-heading-subpage text-center">Privacy Policy</h1>
        <p className="subpage-lead-text text-center" style={{ marginBottom: '4rem' }}>
          Last updated: July 11, 2026
        </p>

        <div className="legal-content-card">
          <p className="legal-intro">
            At <strong>Luxury Delhi Spa</strong>, accessible from <code>https://luxurydelhispa.in</code>, the privacy of our visitors is one of our main priorities. This Privacy Policy document outlines the types of information we collect and how we utilize it across our enclaves in Aerocity, Lajpat Nagar, and Karol Bagh.
          </p>

          <h2 className="legal-heading">1. Information We Collect</h2>
          <p>
            When you interact with our online reservation assistant or submit a booking request, we collect specific personal details to coordinate your wellness experience:
          </p>
          <ul>
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Preferred Treatment, Date, and Time</li>
            <li>Special Suite Requests or Health Concerns (optional)</li>
          </ul>

          <h2 className="legal-heading">2. How We Use Your Information</h2>
          <p>
            We use the information we collect solely to facilitate your reservation:
          </p>
          <ul>
            <li>To dispatch your booking details directly to our central concierge desk via WhatsApp.</li>
            <li>To confirm your appointment slots, suites, and customized massage oils.</li>
            <li>To compile anonymous site performance metrics to improve page load times.</li>
          </ul>

          <h2 className="legal-heading">3. Data Security & Third-Party Sharing</h2>
          <p>
            Your information is never stored in public databases or shared with external advertising networks. Because our checkout process routes directly through the secure WhatsApp API, your message exchange is encrypted and handled directly by our concierge team. We do not sell, rent, or lease your details to third parties.
          </p>

          <h2 className="legal-heading">4. Cookies and Web Analytics</h2>
          <p>
            We use minimal cookies and tracking technologies to improve page load performance and check which therapy categories are most popular. You can choose to disable cookies through your individual browser settings without affecting your ability to browse our menus.
          </p>

          <h2 className="legal-heading">5. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you have questions or require further details about our privacy practices, please contact our central concierge desk at <strong>+91 92867 19152</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
