
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Globe, value: "25+", label: "Countries" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About Trinity Consulting
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience, Trinity Consulting has been at the forefront of business transformation, helping organizations across industries achieve their strategic objectives and sustainable growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of seasoned consultants brings deep industry expertise and innovative thinking to every engagement, ensuring our clients stay competitive in an ever-evolving business landscape.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Our Approach</h3>
              <ul className="space-y-3">
                {[
                  "Data-driven insights and evidence-based recommendations",
                  "Collaborative partnership throughout the engagement",
                  "Customized solutions tailored to your unique challenges",
                  "Sustainable implementation with long-term impact"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with strategic insights and innovative solutions that drive sustainable growth, operational excellence, and lasting competitive advantage in the global marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
