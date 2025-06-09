
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TechServices from '@/components/TechServices';
import HRServices from '@/components/HRServices';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <TechServices />
      <HRServices />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
