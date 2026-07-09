import Image from 'next/image';
import StatsRow from './StatsRow';

export default function About() {
  return (
    <section id="about" className="section-spacing about-section">
      {/* Organic Decorative Floating SVG Lines */}
      <div className="organic-decoration about-deco-1">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,80 C80,20 120,180 230,120" stroke="#C6B8A7" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="230" cy="120" r="3" fill="#C6B8A7" />
        </svg>
      </div>

      <div className="container">
        <div className="about-grid">
          {/* Left Side: Images & Floating Layout */}
          <div className="about-visuals">
            <div className="main-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"
                alt="Spa therapist performing somatic body massage"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="about-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="secondary-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop"
                alt="Organic massage oils and stones"
                fill
                sizes="(max-width: 768px) 30vw, 20vw"
                className="about-image-small"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Side: Editorial Content */}
          <div className="about-content">
            <span className="section-eyebrow">Our Space</span>
            <h2 className="section-title">Where Time Slows Down</h2>
            <p className="about-text-lead">
              In a capital of relentless movement, Luxury Delhi Spa offers a portal to absolute quietude. Situated in the exclusive enclaves of Aerocity, Lajpat Nagar, and Karol Bagh, our spaces are architectural passages into silence, space, and tactile comfort.
            </p>
            <p className="about-text-body">
              Every element within our walls is curated to soothe. From the gentle glow of warm light reflecting off raw travertine stone, to the scent of custom-infused botanicals, our private suites offer complete refuge from the city’s demands, allowing a return to self.
            </p>

            <ul className="about-features">
              <li>
                <span className="bullet"></span>
                <div>
                  <strong>Private treatment suites:</strong> Individual spaces designed for complete silence and visual isolation.
                </div>
              </li>
              <li>
                <span className="bullet"></span>
                <div>
                  <strong>Certified therapists:</strong> Masters of ancient healing arts combined with modern clinical wellness.
                </div>
              </li>
              <li>
                <span className="bullet"></span>
                <div>
                  <strong>Pure natural ingredients:</strong> Organic, cold-pressed botanicals, and mineral clays selected for your skin.
                </div>
              </li>
            </ul>

            <StatsRow />
          </div>
        </div>
      </div>
    </section>
  );
}
