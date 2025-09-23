import { motion } from 'framer-motion';
import sofaCleaning from '@/assets/sofa-cleaning.jpg';
import carpetCleaning from '@/assets/carpet-cleaning.jpg';
import mattressCleaning from '@/assets/mattress-cleaning.jpg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WhatsAppButton from './WhatsAppButton';

const services = [
  {
    title: 'Leather Sofa Cleaning & Polish',
    description: 'Professional deep cleaning for all types of sofas and upholstery with Polishing service too.',
    image: sofaCleaning,
  },
  {
    title: 'Carpet Cleaning',
    description: 'Restore your carpets to their original beauty with our deep cleaning service.',
    image: carpetCleaning,
  },
  {
    title: 'Mattress Cleaning',
    description: 'Sanitize and refresh your mattress for better sleep and hygiene.',
    image: mattressCleaning,
  },
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
              className="bg-gradient-card rounded-2xl p-6 shadow-card border border-border/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6 h-48 overflow-hidden rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;