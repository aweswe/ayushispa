import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import BookingCTA from '@/components/BookingCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description:
    'Book your luxury spa appointment at Luxury Delhi Spa. Contact us via WhatsApp or call directly. Locations in Aerocity, Lajpat Nagar, and Karol Bagh.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
