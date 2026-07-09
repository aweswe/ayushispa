import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse our gallery of luxury spa interiors, treatment rooms, and wellness experiences at Luxury Delhi Spa locations in Delhi.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
