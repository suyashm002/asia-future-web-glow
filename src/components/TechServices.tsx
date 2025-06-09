
import { Monitor, Cloud, Shield, Database, Cog, BarChart3, Laptop, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TechServices = () => {
  const services = [
    {
      icon: Monitor,
      title: "Digital Strategy & Transformation",
      description: "Transform your business with cutting-edge digital strategies and implementation roadmaps.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Laptop,
      title: "Managed Application",
      description: "Comprehensive application management and maintenance services for optimal performance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Cloud,
      title: "Cloud Services Solutions",
      description: "Seamless cloud migration, management, and optimization for scalable business growth.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Cog,
      title: "Enterprise Services",
      description: "End-to-end enterprise solutions tailored to your organizational needs.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Database,
      title: "SAP Services",
      description: "Expert SAP implementation, customization, and support services.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Server,
      title: "Infrastructure Services",
      description: "Robust IT infrastructure design, implementation, and management solutions.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Risk",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: BarChart3,
      title: "Big Data & Analytics",
      description: "Advanced analytics and data intelligence for informed decision-making.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section id="tech-services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tech Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions to drive digital transformation and accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 p-3 bg-primary/10 rounded-full backdrop-blur-sm group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechServices;
