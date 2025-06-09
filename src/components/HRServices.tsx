
import { Users, Search, Briefcase, HandHeart, Building, FileText, Calculator, UserCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HRServices = () => {
  const services = [
    {
      icon: Users,
      title: "Recruitment Services",
      description: "Comprehensive talent acquisition solutions to find the perfect candidates for your organization.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Search,
      title: "Executive Recruitment",
      description: "Specialized executive search services for C-level and senior management positions.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: UserCheck,
      title: "Retained Search",
      description: "Dedicated retained search services for critical and hard-to-fill positions.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Briefcase,
      title: "Staffing Services",
      description: "Flexible staffing solutions including temporary, contract, and permanent placements.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Building,
      title: "RPO Services",
      description: "Recruitment Process Outsourcing to streamline your entire hiring process.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: HandHeart,
      title: "Managed Staffing Services",
      description: "End-to-end managed staffing solutions with dedicated account management.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: FileText,
      title: "HR Consultancy",
      description: "Strategic HR consulting to optimize your human resources processes and policies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Calculator,
      title: "Payroll Outsourcing",
      description: "Comprehensive payroll management and processing services for accurate and timely payments.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section id="hr-services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            HR Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategic human resources solutions to attract, develop, and retain top talent for your organization.
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

export default HRServices;
