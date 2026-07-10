import type { Metadata } from 'next';
import Treatments from '@/components/sections/Treatments';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spa Treatments Menu Delhi | Massages & Facials | Luxury Delhi Spa',
  description:
    'Explore our comprehensive luxury spa treatments menu in Delhi. We offer traditional Swedish, deep tissue, custom aromatherapy, and botanical facial therapies at transparent prices.',
  alternates: {
    canonical: '/treatments',
  },
};

import { JsonLd } from '@/components/ui/JsonLd';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between Somatic and Swedish massage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Swedish massage utilizes light-to-medium pressure and long, flowing strokes to improve general blood circulation and promote relaxation. Somatic bodywork uses slower, concentrated pressure to target the deeper layers of muscle tissue and release chronic alignment issues."
      }
    },
    {
      "@type": "Question",
      "name": "Which Ayurvedic treatment should I choose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For overall detox and physical balance, our traditional full-body Abhyanga massage is recommended. If you suffer from insomnia, chronic stress, or mental fatigue, Shirodhara (where warm herbal oils are poured on the forehead) is highly effective."
      }
    },
    {
      "@type": "Question",
      "name": "Are the private steam rooms private?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, each of our treatment suites is entirely private and sound-insulated. It features its own individual steam room, rain shower, and dressing area, ensuring your experience is completely uninterrupted."
      }
    }
  ]
};

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      {/* Treatments Hero Header */}
      <section className="section-spacing treatments-hero-header">
        <div className="container text-center">
          <span className="section-eyebrow">Our Menu</span>
          <h1 className="hero-heading-subpage">Healing Rituals & Therapies</h1>
          <p className="subpage-lead-text">
            Every session begins with a personal botanical consultation to calibrate pressure, essential oil blends, and temperature.
          </p>
        </div>
      </section>

      {/* Core Treatments Component */}
      <Treatments />

      {/* Transparent Pricing Table */}
      <section className="section-spacing treatments-pricing-section">
        <div className="container">
          <div className="text-center section-header-compact">
            <span className="section-eyebrow">Transparent Value</span>
            <h2 className="section-title">Body Massage Price Guide</h2>
            <p className="section-subtitle-text max-width-600">
              We believe in complete transparency. Our rates include private steam suite access, organic botanical oils, and post-session herbal infusions.
            </p>
          </div>

          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Wellness Treatment</th>
                  <th>Primary Focus</th>
                  <th>Duration</th>
                  <th>Price (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Somatic Body Massage</strong></td>
                  <td>Myofascial release & physical alignment</td>
                  <td>75 mins / 90 mins</td>
                  <td>₹4,500 / ₹5,500</td>
                </tr>
                <tr>
                  <td><strong>Botanical Aromatherapy</strong></td>
                  <td>Nervous system calming & stress reduction</td>
                  <td>60 mins / 90 mins</td>
                  <td>₹4,000 / ₹5,200</td>
                </tr>
                <tr>
                  <td><strong>Volcanic Stone Ritual</strong></td>
                  <td>Deep muscle relaxation & heat therapy</td>
                  <td>90 mins</td>
                  <td>₹6,000</td>
                </tr>
                <tr>
                  <td><strong>Ayurvedic Abhyanga</strong></td>
                  <td>Lymphatic detox using warm dosha oils</td>
                  <td>75 mins</td>
                  <td>₹4,800</td>
                </tr>
                <tr>
                  <td><strong>Traditional Nuad Thai</strong></td>
                  <td>Passive yogic stretching & energy flow</td>
                  <td>75 mins / 90 mins</td>
                  <td>₹4,200 / ₹5,200</td>
                </tr>
                <tr>
                  <td><strong>Clarifying Botanical Facial</strong></td>
                  <td>Exfoliation, pore clearance & hydration</td>
                  <td>60 mins</td>
                  <td>₹3,800</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center pricing-note">
            <p>* All prices are inclusive of taxes and suite amenities. No hidden service charges. Check out our <Link href="/articles/body-massage-delhi-price" className="accent-link">detailed Delhi price guide</Link> for additional insights.</p>
          </div>
        </div>
      </section>

      {/* Treatments FAQ Section */}
      <section className="section-spacing treatments-faq-section">
        <div className="container">
          <div className="faq-layout-grid">
            <div className="faq-header-col">
              <span className="section-eyebrow">Your Questions</span>
              <h2 className="section-title">Ritual Guidance & FAQs</h2>
              <p className="faq-intro-desc">
                If you are unsure about which therapy matches your current state, review our common guidance answers or call our concierge desk.
              </p>
            </div>

            <div className="faq-list-col">
              <div className="faq-item">
                <h3 className="faq-question">What is the difference between Somatic and Swedish massage?</h3>
                <p className="faq-answer">
                  Swedish massage utilizes light-to-medium pressure and long, flowing strokes to improve general blood circulation and promote relaxation. Somatic bodywork uses slower, concentrated pressure to target the deeper layers of muscle tissue and release chronic alignment issues.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Which Ayurvedic treatment should I choose?</h3>
                <p className="faq-answer">
                  For overall detox and physical balance, our traditional full-body Abhyanga massage is recommended. If you suffer from insomnia, chronic stress, or mental fatigue, Shirodhara (where warm herbal oils are poured on the forehead) is highly effective.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Are the private steam rooms private?</h3>
                <p className="faq-answer">
                  Yes, each of our treatment suites is entirely private and sound-insulated. It features its own individual steam room, rain shower, and dressing area, ensuring your experience is completely uninterrupted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
