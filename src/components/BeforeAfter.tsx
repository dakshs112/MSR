import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import sofaBeforeImage from '@/assets/sofa-before.jpg';
import sofaAfterImage from '@/assets/sofa-after.jpg';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            See the Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drag the slider to see the incredible difference our professional cleaning makes
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div 
            className="relative w-full h-[400px] md:h-[500px] bg-card rounded-2xl overflow-hidden shadow-premium cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Before Image */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`,
                backgroundImage: `url(${sofaBeforeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">BEFORE</h3>
                  <p className="text-white/90">Stained & Worn</p>
                </div>
              </div>
            </div>

            {/* After Image */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
                backgroundImage: `url(${sofaAfterImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/20 flex items-end justify-end p-6">
                <div className="text-right">
                  <h3 className="text-2xl font-bold text-white mb-2">AFTER</h3>
                  <p className="text-white/90">Fresh & Clean</p>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-primary shadow-glow"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-glow flex items-center justify-center cursor-col-resize">
                <ArrowLeft className="w-4 h-4 text-primary-foreground absolute -translate-x-2" />
                <ArrowRight className="w-4 h-4 text-primary-foreground absolute translate-x-2" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-foreground">BEFORE</span>
            </div>
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-foreground">AFTER</span>
            </div>
          </div>
          
          <motion.p 
            className="text-center mt-6 text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            *Drag the slider above to see the transformation
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;