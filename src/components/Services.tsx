
import { BarChart3, Users, Lightbulb, Cog, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Strategic Planning",
      description: "Comprehensive strategic planning to align your business objectives with market opportunities and drive sustainable growth.",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Strategy", "KPI Development"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Transform your organization's culture, structure, and capabilities to enhance performance and employee engagement.",
      features: ["Change Management", "Team Building", "Leadership Development", "Culture Transformation"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Foster innovation culture and implement cutting-edge solutions to stay ahead in today's competitive landscape.",
      features: ["Innovation Strategy", "Process Innovation", "Digital Transformation", "Technology Integration"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Cog,
      title: "Process Optimization",
      description: "Streamline operations, reduce costs, and improve efficiency through systematic process analysis and optimization.",
      features: ["Process Mapping", "Workflow Optimization", "Automation", "Quality Improvement"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive consulting services designed to address your unique business challenges and unlock new opportunities for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
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
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
