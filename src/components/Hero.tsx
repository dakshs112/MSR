import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Deep Clean, Fresh Feel
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-foreground/90 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Your Furniture's Best Friend
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Professional sofa, carpet, and mattress cleaning service that brings new life to your home furniture with eco-friendly solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <WhatsAppButton 
              className="text-lg px-8 py-4 animate-glow-pulse"
              message="Hello MSR! I saw your website and would like to get a quote for your cleaning services. Could you please help me?"
            />
            
            <motion.div 
              className="text-sm text-muted-foreground flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              Free estimates • Same day service available
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        animate={{ 
          y: [-20, 20, -20],
          x: [-10, 10, -10] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        animate={{ 
          y: [20, -20, 20],
          x: [10, -10, 10] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
    </section>
  );
};

export default Hero;