import { motion } from 'framer-motion';
import { Sofa, Armchair, Bed, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WhatsAppButton from './WhatsAppButton';

const services = [
  {
    icon: Sofa,
    title: "Sofa Cleaning",
    description: "Deep steam cleaning for all types of sofas, couches, and upholstered furniture. Remove stains, odors, and allergens.",
    features: ["Steam cleaning", "Stain removal", "Fabric protection", "Same day service"]
  },
  {
    icon: Armchair,
    title: "Carpet Cleaning",
    description: "Professional carpet cleaning using advanced equipment. Restore your carpets to their original beauty and freshness.",
    features: ["Deep extraction", "Pet odor removal", "Scotchgard protection", "Fast drying"]
  },
  {
    icon: Bed,
    title: "Mattress Cleaning",
    description: "Thorough mattress sanitization and deep cleaning. Remove dust mites, bacteria, and allergens for healthier sleep.",
    features: ["Dust mite removal", "Anti-bacterial treatment", "Stain elimination", "Odor neutralization"]
  },
  {
    icon: ChefHat,
    title: "Chair Cleaning",
    description: "Specialized cleaning for dining chairs, office chairs, and other furniture. Professional care for all materials.",
    features: ["All materials", "Leather treatment", "Fabric care", "Quick turnaround"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning services that restore and protect your valuable furniture investment
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton 
                    message={`Hello MSR! I'm interested in your ${service.title.toLowerCase()} service. Could you please provide me with more details and a quote?`}
                    className="w-full bg-gradient-secondary hover:shadow-glow"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;