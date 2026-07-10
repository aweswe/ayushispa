import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Treatments from '@/components/sections/Treatments';
import Experience from '@/components/sections/Experience';
import Gallery from '@/components/sections/Gallery';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Membership from '@/components/sections/Membership';
import Testimonials from '@/components/sections/Testimonials';
import Philosophy from '@/components/sections/Philosophy';
import BookingCTA from '@/components/sections/BookingCTA';

export const metadata: Metadata = {
  title: 'Best Spa in Delhi | Luxury Spa Delhi NCR | The Sanctuary',
  description: 'Experience the best spa in Delhi. The Sanctuary offers luxury wellness experiences, Ayurvedic Abhyanga massage, couples massage packages, and private suites in Aerocity, Lajpat Nagar, and Karol Bagh.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Treatments />
      <Experience />
      <Gallery />
      <WhyChooseUs />
      <Membership />
      <Testimonials />
      <Philosophy />
      <BookingCTA />
    </>
  );
}
