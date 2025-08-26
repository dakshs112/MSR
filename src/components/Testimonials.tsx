import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Lisa Johnson",
    rating: 5,
    text: "MSR transformed my old sofa! It looks brand new and smells so fresh. The team was professional and punctual. Highly recommended!",
    location: "Yehalanka"
  },
  {
    name: "Rahul Kumar",
    rating: 5,
    text: "Incredible carpet cleaning service. They removed stains I thought were permanent. The results exceeded my expectations completely.",
    location: "Banaswadi"
  },
  {
    name: "Sridhar Iyer",
    rating: 5,
    text: "Professional mattress cleaning that made such a difference. My allergies improved immediately. Great value for money!",
    location: "WhiteField"
  },
  {
    name: "Tulsiram",
    rating: 5,
    text: "Fast, efficient, and amazing results. My dining chairs look like I just bought them. Will definitely use MSR again!",
    location: "Hosakote"
  },
  {
    name: "Venkat Reddy",
    rating: 5,
    text: "The before and after difference was shocking! MSR's team is skilled, friendly, and their eco-friendly approach is a plus.",
    location: "Shivajinagar"
  }
];

const Testimonials = () => {
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300 relative overflow-hidden">
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                <CardContent className="p-6 relative">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                      <span className="font-bold text-accent-foreground text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "1000+", label: "Furniture Cleaned" },
            { number: "99%", label: "Satisfaction Rate" },
            { number: "24h", label: "Average Response" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;