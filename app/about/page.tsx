import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover Luxury Delhi Spa — a premium wellness sanctuary in Aerocity, Lajpat Nagar, and Karol Bagh. Learn about our private treatment suites, certified therapists, and organic therapies.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        <About />
      </main>
      <Footer />
    </>
  );
}
