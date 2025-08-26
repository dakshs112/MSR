import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using placeholder images for now - these will be replaced with your actual images
  const galleryImages = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Lc4xyi9-7PkZprySRy3mfiURioj1sHnhSQ&s',
      alt: 'Clean sectional sofa in modern living room',
      title: 'Living Room Transformation'
    },
    {
      src: 'https://hometriangle.com/imagecache/media/192238/image.webp',
      alt: 'Professional sofa cleaning process',
      title: 'Professional Deep Cleaning'
    },
    {
      src: 'https://images.jdmagicbox.com/v2/comp/bangalore/b3/080pxx80.xx80.240329200220.d9b3/catalogue/msr-sofa-and-carpet-cleaning-service-k-channasandra-bangalore-carpet-cleaning-services-gksy73m6if-250.jpg',
      alt: 'Carpet cleaning in office space',
      title: 'Commercial Carpet Service'
    },
    {
      src: 'https://content3.jdmagicbox.com/v2/comp/bangalore/b3/080pxx80.xx80.240329200220.d9b3/catalogue/msr-sofa-and-carpet-cleaning-service-k-channasandra-bangalore-carpet-cleaning-services-k7x8pfukgf.jpg',
      alt: 'Blue sofa cleaning service',
      title: 'Fabric Restoration'
    },
    {
      src: 'https://5.imimg.com/data5/SELLER/Default/2024/10/459472969/ED/LR/JF/72666944/carpet-cleaning-service-250x250.jpg',
      alt: 'Office carpet cleaning with equipment',
      title: 'Office Deep Clean'
    },
    {
      src: 'https://content.jdmagicbox.com/v2/comp/bangalore/z5/080pxx80.xx80.161026135925.p5z5/catalogue/zero-degree-facility-solutions-horamavu-bangalore-housekeeping-services-for-residential-g6ma4c8117.jpg',
      alt: 'Team cleaning gray sectional sofa',
      title: 'Team Professional Service'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2xaebiDrnEkJmvfHeAuYv_2cSOBUd_2ccw&s',
      alt: 'Luxury leather chair cleaning',
      title: 'Premium Leather Care'
    },
    {
      src: 'https://hygienedunia.com/wp-content/uploads/2020/09/Office-Deep-Cleaning-upto-2000-Sq.Ft_.-with-Carpet.jpg',
      alt: 'Before and after leather sofa cleaning',
      title: 'Leather Sofa Revival'
    }
  ];

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
            Explore Our Exquisite Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the exceptional results of our professional cleaning services through our gallery of completed projects
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl bg-card cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300 rounded-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-background/80 hover:bg-background transition-colors rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;