import type { Metadata } from 'next';
import Gallery from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: 'Photo Gallery | Luxury Delhi Spa',
  description:
    'Step inside our premium wellness enclaves. View photos of our private treatment suites, massage therapy settings, and Ayurvedic resources in Delhi NCR.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Gallery Hero Header */}
      <section className="section-spacing gallery-hero-header">
        <div className="container text-center">
          <span className="section-eyebrow">Visuals</span>
          <h1 className="hero-heading-subpage">A Glimpse Into Silence</h1>
          <p className="subpage-lead-text">
            Explore the textures, warm indirect lighting, and private suites designed specifically to soothe the nervous system.
          </p>
        </div>
      </section>

      {/* Core Gallery Component */}
      <Gallery />

      {/* Architectural Philosophy Section */}
      <section className="section-spacing gallery-philosophy-section">
        <div className="container">
          <div className="philosophy-layout-grid">
            <div className="philosophy-text-col">
              <span className="section-eyebrow">Materiality</span>
              <h2 className="section-title">Designed for Sensory Relief</h2>
              <p className="philosophy-body-text">
                Every corner of our space uses natural materials that encourage tactile grounding. We sourced raw travertine stone from regional quarries, maintaining its porous texture to diffuse sound waves and eliminate echoing corridors.
              </p>
              <p className="philosophy-body-text">
                The massage tables are constructed from reclaimed teak wood, oiled with natural beeswax, and wrapped in unbleached organic cotton sheets that rest gently on the skin. Lighting is strictly indirect, shifting colors dynamically with the natural daily progression of daylight.
              </p>
            </div>

            <div className="philosophy-features-col">
              <div className="material-spec-card">
                <h3 className="spec-heading">Raw Travertine</h3>
                <p className="spec-desc">Acoustic dampening walls that absorb harsh mid-frequency sound waves.</p>
              </div>
              <div className="material-spec-card">
                <h3 className="spec-heading">Reclaimed Teak</h3>
                <p className="spec-desc">Sturdy, grounding table constructions that do not creak or sway.</p>
              </div>
              <div className="material-spec-card">
                <h3 className="spec-heading">Organic Cotton</h3>
                <p className="spec-desc">High-thread-count unbleached sheets that are hypoallergenic and soft.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
