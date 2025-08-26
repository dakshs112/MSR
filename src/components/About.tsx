import { motion } from 'framer-motion';
import WhatsAppButton from '@/components/WhatsAppButton';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Shining Title */}
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8 relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent relative">
              About MSR Service
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine"></div>
            </span>
          </motion.h2>

          {/* Shining Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 relative overflow-hidden">
              <span className="relative z-10">
                At MSR Sofa and Carpet Cleaning Service, we bring years of expertise and passion to every home we serve. 
                Our professional team uses eco-friendly cleaning solutions and advanced techniques to restore your furniture 
                to its original beauty. From deep-cleaning sofas and carpets to refreshing mattresses and chairs, we ensure 
                your living space feels fresh, clean, and healthy. With hundreds of satisfied customers across the region, 
                we're committed to delivering exceptional results that exceed your expectations every single time.
              </span>
              <img src ="https://harvinfurniture.com/wp-content/uploads/2024/04/img-3.png" alt="About MSR Service" className="mt-6 rounded-lg shadow-lg mx-auto" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 animate-shine-slow"></div>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <WhatsAppButton 
              message="Hello MSR! I found your website and would like to book your cleaning service. Could you please help me with the booking process?"
              className="bg-gradient-primary hover:shadow-glow px-8 py-4 text-lg font-semibold"
            />
            
            <WhatsAppButton 
              message="Hello MSR! I have some questions about your cleaning services. Could you please provide me with more information?"
              className="bg-gradient-secondary hover:shadow-accent px-8 py-4 text-lg font-semibold"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default About;