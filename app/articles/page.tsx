import type { Metadata } from 'next';
import Link from 'next/link';
import seoPlan from '@/seo-plan-1783719292080.json';

const plan = seoPlan as any;
const contentPieces = plan.plan.content_pieces;

export const metadata: Metadata = {
  title: 'Wellness Insights & Guides | Luxury Spa Delhi',
  description: 'Explore our comprehensive library of wellness articles, pricing guides, treatment comparisons, and advice on choosing the best spa in Delhi NCR.',
};

export default function ArticlesPage() {
  return (
    <section className="section-spacing articles-hub-section">
      <div className="container">
        <header className="hub-header text-center">
          <span className="hub-tagline">Wellness Library</span>
          <h1 className="hub-title">Restorative Insights & Guides</h1>
          <p className="hub-subtitle">
            Deepen your understanding of traditional therapies, luxury spa standards, and transparent pricing in Delhi NCR.
          </p>
        </header>

        <div className="articles-grid">
          {contentPieces.map((piece: any, idx: number) => (
            <article key={idx} className="article-card-glass">
              <div className="card-intent-badge">{piece.intent}</div>
              <h2 className="card-article-title">
                <Link href={`/articles/${piece.slug}`}>{piece.title}</Link>
              </h2>
              <p className="card-article-desc">{piece.meta_description}</p>
              <div className="card-article-meta">
                <div className="target-kw">
                  <span>Target:</span>
                  <code>{piece.target_keyword}</code>
                </div>
                <Link href={`/articles/${piece.slug}`} className="read-more-link">
                  Read Guide <span className="arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
