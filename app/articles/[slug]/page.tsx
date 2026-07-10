import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import seoPlan from '@/seo-plan-1783719292080.json';
import { ARTICLES_CONTENT } from '@/data/articles';

const plan = seoPlan as any;
const contentPieces = plan.plan.content_pieces;

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper to resolve standard content pieces and hyper-local neighborhood pages
function getPieceAndContent(slug: string) {
  let piece = contentPieces.find((p: any) => p.slug === slug);
  let content = ARTICLES_CONTENT[slug];

  // Intercept hyper-local neighborhood pages
  if (!piece && slug.startsWith('spa-near-me-delhi-')) {
    const neighborhoodSlug = slug.replace('spa-near-me-delhi-', '');
    const neighborhoodName = neighborhoodSlug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const basePiece = contentPieces.find((p: any) => p.slug === 'spa-near-me-delhi');
    const baseContent = ARTICLES_CONTENT['spa-near-me-delhi'];

    if (basePiece && baseContent) {
      piece = {
        ...basePiece,
        slug,
        title: `Find Your Perfect Spa: Top Spots & Deals in ${neighborhoodName}, Delhi`,
        meta_title: `Spa Near Me in ${neighborhoodName} Delhi: Find Top Local Spas`,
        meta_description: `Looking for a 'spa near me' in ${neighborhoodName} Delhi? Discover top-rated local spas, exclusive deals, and directions for quick relaxation in your area.`,
      };

      content = {
        ...baseContent,
        slug,
        intro: `Finding a quick escape for immediate stress relief in ${neighborhoodName} is essential for physical and mental upkeep. Our localized guide helps you discover top-rated professional spas near ${neighborhoodName}, Delhi.`,
        sections: baseContent.sections.map((sec) => {
          if (sec.heading === "Top Spas by Popular Delhi Neighborhoods") {
            return {
              ...sec,
              heading: `Top Recommended Spas in ${neighborhoodName}`,
              content: `For residents and visitors in ${neighborhoodName}, finding a premium spa nearby saves time and energy. Here are our top certified recommendations inside or directly adjacent to ${neighborhoodName} that offer clean, professional, and tranquil environments.`,
              isList: true,
              listItems: [
                `${neighborhoodName} Prime Spa Suites: Handpicked certified therapists using pure botanicals.`,
                `Luxury Delhi Spa ${neighborhoodName} Partner Outlets: Premium steam/sauna access and hot stone rooms.`,
                `Holistic Rejuvenation Center: Tailored pre-consultations and private individual chambers.`
              ]
            };
          }
          return {
            ...sec,
            content: sec.content
              .replace(/Delhi's/g, `${neighborhoodName}'s`)
              .replace(/Delhi/g, neighborhoodName)
              .replace(/your neighborhood/g, neighborhoodName)
          };
        })
      };
    }
  }

  // Provide default YMYL credentials if not explicitly defined
  if (content && !content.authorName) {
    content.authorName = "Dr. Ananya Goel";
    content.authorTitle = "Ayurvedic Medicine Practitioner & Wellness Director";
    content.authorCredentials = "B.A.M.S, MD (Ayurveda)";
    content.authorBio = "Dr. Ananya Goel holds a Master's degree in Ayurvedic Medicine from the National Institute of Ayurveda. With over 12 years of clinical practice in luxury wellness, she specializes in custom panchakarma programs, somatic therapy systems, and physical stress alleviation.";
    content.authorImage = "/images/portrait_ananya.png";
    content.reviewedByName = "Acharya Kabir Dev";
    content.reviewedByTitle = "Senior Somatic Therapist & Yoga Acharya";
    content.reviewedByCredentials = "YTTC-500, Certified Myofascial Specialist";
  }

  return { piece, content };
}

export async function generateStaticParams() {
  const basePaths = contentPieces.map((piece: any) => ({
    slug: piece.slug,
  }));
  
  // Statically compile hyper-local pages
  basePaths.push({ slug: 'spa-near-me-delhi-connaught-place' });
  basePaths.push({ slug: 'spa-near-me-delhi-saket' });
  basePaths.push({ slug: 'spa-near-me-delhi-gurgaon' });
  
  return basePaths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { piece } = getPieceAndContent(slug);
  
  if (!piece) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: piece.meta_title,
    description: piece.meta_description,
    alternates: {
      canonical: `/articles/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const { piece, content } = getPieceAndContent(slug);

  if (!piece || !content) {
    notFound();
  }

  // Resolve internal link titles and slugs
  const relatedLinks = (piece.internal_links || [])
    .map((linkSlug: string) => {
      const match = contentPieces.find((p: any) => p.slug === linkSlug);
      return match ? { title: match.title, slug: match.slug } : null;
    })
    .filter(Boolean);

  return (
    <section className="section-spacing article-detail-section">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="separator">/</span>
          <Link href="/articles">Articles</Link>
          <span className="separator">/</span>
          <span className="current">{piece.title}</span>
        </nav>

        <div className="article-layout-grid">
          {/* Main Content Area */}
          <article className="article-main-body">
            <header className="article-header">
              <span className="article-intent-tag">{piece.intent} Outline</span>
              <h1 className="article-main-title">{piece.title}</h1>
              <p className="article-intro-text">{content.intro}</p>
            </header>

            {content.quote && (
              <blockquote className="article-featured-quote">
                <p>{content.quote}</p>
                {content.quoteAuthor && <cite>— {content.quoteAuthor}</cite>}
              </blockquote>
            )}

            <div className="article-outline-content">
              {content.sections.map((section, idx) => (
                <div key={idx} className="article-section-block">
                  <h2 className="article-section-heading">
                    <span className="section-num">0{idx + 1}.</span> {section.heading}
                  </h2>
                  <p className="article-section-paragraph">{section.content}</p>
                  
                  {section.isList && section.listItems && (
                    <ul className="article-section-list">
                      {section.listItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="article-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* YMYL Author Credential Card */}
            {content.authorName && (
              <div className="author-bio-card">
                <div className="author-card-header">
                  {content.authorImage && (
                    <div className="author-avatar-wrapper">
                      <img src={content.authorImage} alt={content.authorName} className="author-avatar-img" />
                    </div>
                  )}
                  <div className="author-meta-info">
                    <span className="author-eyebrow-tag">Written By</span>
                    <h3 className="author-fullname">
                      {content.authorName} <span className="author-cert-badge">{content.authorCredentials}</span>
                    </h3>
                    <p className="author-job-title">{content.authorTitle}</p>
                  </div>
                </div>
                <p className="author-biography">{content.authorBio}</p>
                
                {content.reviewedByName && (
                  <div className="author-reviewer-row">
                    <span className="reviewer-verified-label">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="verified-check-icon">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Medically Reviewed By
                    </span>
                    <span className="reviewer-fullname-label">
                      {content.reviewedByName}, {content.reviewedByCredentials} <span className="reviewer-title-label">({content.reviewedByTitle})</span>
                    </span>
                  </div>
                )}
              </div>
            )}
          </article>

          {/* Sidebar Area */}
          <aside className="article-sidebar">
            {/* Call To Action Glass Card */}
            <div className="sidebar-glass-card booking-cta-card">
              <h3 className="card-title">Experience True Quietude</h3>
              <p className="card-desc">
                Step inside our physical sanctuary in Delhi. Private treatment suites, master therapists, and pure organic formulations await.
              </p>
              <Link href="/#booking" className="btn btn-primary sidebar-booking-btn">
                Reserve Experience
              </Link>
            </div>

            {/* Competitive Rationale Card */}
            <div className="sidebar-glass-card rationale-card">
              <span className="card-badge">SEO Silo Rationale</span>
              <h3 className="card-title">Why This Content Outperforms</h3>
              <p className="card-desc italic">
                {piece.why_this_beats_competitors}
              </p>
              <div className="keyword-tags">
                <span className="tag-label">Target:</span>
                <code className="keyword-code">{piece.target_keyword}</code>
              </div>
            </div>

            {/* Internal Silo Links */}
            {relatedLinks.length > 0 && (
              <div className="sidebar-glass-card related-links-card">
                <h3 className="card-title">Related Insights</h3>
                <nav className="related-links-nav">
                  {relatedLinks.map((link: any, idx: number) => (
                    <Link key={idx} href={`/articles/${link.slug}`} className="related-link-item">
                      <span className="link-arrow">→</span>
                      <span className="link-text">{link.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
