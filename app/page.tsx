import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
