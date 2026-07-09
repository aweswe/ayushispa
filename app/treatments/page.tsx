import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Treatments from '@/components/Treatments';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Spa Treatments',
  description:
    'Explore our luxury spa treatments — Swedish Massage, Deep Tissue, Hot Stone Therapy, Aromatherapy, Facials, Body Scrubs, and Couple\'s Packages at Luxury Delhi Spa.',
  alternates: {
    canonical: '/treatments',
  },
};

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        <Treatments />
      </main>
      <Footer />
    </>
  );
}
