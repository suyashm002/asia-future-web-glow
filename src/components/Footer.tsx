
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Trinity Consulting</h3>
            <p className="text-background/80 leading-relaxed">
              Transforming businesses through strategic consulting and innovative solutions. Your success is our mission.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Strategic Planning</li>
              <li>Organizational Development</li>
              <li>Innovation Consulting</li>
              <li>Process Optimization</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-background/80">
              <p>contact@trinityconsulting.com</p>
              <p>+65 8165 6378</p>
              <p>Shenton Way, #07-03, Shenton House, Singapore - 068805</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 Trinity Consulting. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-background/10 hover:bg-background/20 rounded-full transition-colors duration-300 group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
