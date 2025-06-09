
import { BarChart3, Users, Lightbulb, Cog, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Strategic Planning",
      description: "Comprehensive strategic planning to align your business objectives with market opportunities and drive sustainable growth.",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Strategy", "KPI Development"]
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Transform your organization's culture, structure, and capabilities to enhance performance and employee engagement.",
      features: ["Change Management", "Team Building", "Leadership Development", "Culture Transformation"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Foster innovation culture and implement cutting-edge solutions to stay ahead in today's competitive landscape.",
      features: ["Innovation Strategy", "Process Innovation", "Digital Transformation", "Technology Integration"]
    },
    {
      icon: Cog,
      title: "Process Optimization",
      description: "Streamline operations, reduce costs, and improve efficiency through systematic process analysis and optimization.",
      features: ["Process Mapping", "Workflow Optimization", "Automation", "Quality Improvement"]
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
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
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
