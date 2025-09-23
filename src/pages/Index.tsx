import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import BeforeAfter from '@/components/BeforeAfter';
import Gallery from '@/components/Gallery';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating WhatsApp + Call Button */}
      <WhatsAppButton variant="floating" showCall phoneNumber="7896175272" />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* About Us Section */}
      <About />
      
      {/* Before & After Gallery */}
      <BeforeAfter />

      {/* Exquisite Gallery */}
      <Gallery />

      {/* How It Works Process */}
      <HowItWorks />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Footer */}
      <motion.footer 
        className="bg-gradient-hero py-12 border-t border-border/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              MSR Sofa and Carpet Cleaning Service
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Professional furniture cleaning that brings new life to your home. 
              Trusted by hundreds of satisfied customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <WhatsAppButton 
                message="Hello MSR! I found your website and I'm interested in your cleaning services. Could you please provide me with more information?"
                className="bg-gradient-secondary hover:shadow-glow"
              />
              <div className="text-sm text-muted-foreground">
                Available 7 days a week • Free estimates
              </div>
            </div>
            
            <div className="border-t border-border/20 pt-6">
              <p className="text-sm text-muted-foreground">
                © 2024 MSR Sofa and Carpet Cleaning Service. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;