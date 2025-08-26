import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How long does the cleaning process take?",
    answer: "Most cleaning services take 1-3 hours depending on the size and condition of the furniture. We'll provide you with an estimated time when we schedule your appointment."
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer: "Absolutely! We use only eco-friendly, non-toxic cleaning solutions that are completely safe for your family and pets. All our products are certified and biodegradable."
  },
  {
    question: "Do I need to be present during the cleaning?",
    answer: "While it's not required, we recommend being present at the beginning to discuss any specific concerns and at the end to inspect our work. However, many customers leave us to work while they're away."
  },
  {
    question: "How often should I have my furniture professionally cleaned?",
    answer: "We recommend professional cleaning every 12-18 months for regular use furniture. High-traffic pieces or homes with pets/children may benefit from cleaning every 6-12 months."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards, debit cards, and digital payments. Payment is due upon completion of the service. We'll discuss payment options when you book your appointment."
  },
  {
    question: "Do you provide same-day service?",
    answer: "Yes! We offer same-day service for urgent cleaning needs, subject to availability. Contact us early in the day for the best chance of same-day scheduling."
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "Your satisfaction is our priority. If you're not completely happy with our service, we'll return to re-clean the area at no additional charge. We stand behind our work 100%."
  },
  {
    question: "Do you clean all types of fabric and materials?",
    answer: "We clean most fabric types including cotton, polyester, leather, microfiber, and more. We'll assess your furniture and recommend the best cleaning method for each piece during our consultation."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our cleaning services.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-gradient-card border border-border/50 rounded-lg px-6 hover:shadow-glow transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors duration-200 py-6">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-card rounded-2xl p-8 max-w-2xl mx-auto shadow-card border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Don't hesitate to reach out. Our friendly team is here to help you with any questions about our cleaning services.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-accent px-6 py-3 rounded-full shadow-glow hover:shadow-premium transition-all duration-300 cursor-pointer">
                <span className="font-semibold text-accent-foreground">Contact Us Now</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;