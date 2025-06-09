
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-secondary/20 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="text-primary"> Business</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Strategic consulting solutions that drive growth, optimize operations, and unlock your organization's full potential.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-lg border-2 hover:bg-secondary/50 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: TrendingUp, label: "Growth", value: "250%" },
                { icon: Users, label: "Clients", value: "500+" },
                { icon: Target, label: "Success Rate", value: "98%" }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-2 group-hover:text-primary/80 transition-colors" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-6 animate-pulse"></div>
            <div className="relative bg-card p-8 rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="h-4 bg-primary/20 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-secondary/30 rounded w-full animate-pulse delay-100"></div>
                <div className="h-4 bg-primary/20 rounded w-2/3 animate-pulse delay-200"></div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg animate-pulse delay-300"></div>
                  <div className="h-20 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-lg animate-pulse delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
