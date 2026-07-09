import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Gallery() {
  const images: GalleryItem[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=600&h=800&fit=crop',
      alt: 'Luxury wood panelled spa massage suite with candles',
      width: 600,
      height: 800,
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&h=500&fit=crop',
      alt: 'Polished volcanic massage stones on clean linen',
      width: 600,
      height: 500,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&h=900&fit=crop',
      alt: 'Botanical essential oils dropper close up',
      width: 600,
      height: 900,
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&h=700&fit=crop',
      alt: 'Pouring hot organic wellness herbal tea',
      width: 600,
      height: 700,
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&h=600&fit=crop',
      alt: 'Tranquil private bath with floating petals',
      width: 600,
      height: 600,
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&h=750&fit=crop',
      alt: 'Calming spa room interior with warm golden sunlight',
      width: 600,
      height: 750,
    },
  ];

  return (
    <section id="gallery" className="section-spacing gallery-section">
      <div className="container">
        <div className="section-header centered-header">
          <span className="section-eyebrow">Visual Silence</span>
          <h2 className="section-title">The Environment</h2>
          <p className="section-desc">
            A window into the moments of absolute stillness awaiting you. Warm natural light, raw textures, and mindful details.
          </p>
        </div>

        {/* Pinterest-style Masonry */}
        <div className="gallery-masonry">
          {images.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-img-wrapper" style={{ paddingBottom: `${(item.height / item.width) * 100}%` }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-img"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
