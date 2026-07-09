import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what our guests say about their luxury spa experience at Luxury Delhi Spa. Verified reviews from hundreds of satisfied clients.',
  alternates: {
    canonical: '/testimonials',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
