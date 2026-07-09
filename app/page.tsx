import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Treatments from '@/components/Treatments';
import Experience from '@/components/Experience';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
// import Membership from '@/components/Membership';
import Testimonials from '@/components/Testimonials';
import Philosophy from '@/components/Philosophy';
import BookingCTA from '@/components/BookingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        <Hero />
        <About />
        <Treatments />
        <Experience />
        <Gallery />
        <WhyChooseUs />
        {/* <Membership /> */}
        <Testimonials />
        <Philosophy />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
