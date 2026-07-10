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
      src: '/images/hero_main.png',
      alt: 'Luxury wood panelled spa massage suite with candles',
      width: 600,
      height: 800,
    },
    {
      id: 2,
      src: '/images/about_spa.png',
      alt: 'Premium massage treatment suite with therapist',
      width: 600,
      height: 500,
    },
    {
      id: 3,
      src: '/images/about_detail.png',
      alt: 'Traditional Ayurvedic brass bowls and aromatic oils',
      width: 600,
      height: 900,
    },
    {
      id: 4,
      src: '/images/treatment_somatic.png',
      alt: 'Therapist performing somatic back massage',
      width: 600,
      height: 700,
    },
    {
      id: 5,
      src: '/images/treatment_aroma.png',
      alt: 'Pouring natural massage oils with jasmine flowers',
      width: 600,
      height: 600,
    },
    {
      id: 6,
      src: '/images/treatment_stones.png',
      alt: 'Polished basalt volcanic hot stones',
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
