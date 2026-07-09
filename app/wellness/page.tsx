import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Wellness Experience',
  description:
    'Immerse yourself in a holistic wellness experience at Luxury Delhi Spa. Our curated therapies blend ancient healing traditions with modern clinical wellness.',
  alternates: {
    canonical: '/wellness',
  },
};

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        <Experience />
      </main>
      <Footer />
    </>
  );
}
