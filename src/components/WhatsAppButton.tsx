import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: 'floating' | 'inline';
  className?: string;
}

const WhatsAppButton = ({ 
  phoneNumber = '7896175272', 
  message = 'Hello MSR, I\'d like a quote for your cleaning services.',
  variant = 'inline',
  className = ''
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20your%20service`;

    window.open(whatsappUrl, '_blank');
  };

  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <Button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-gradient-accent hover:shadow-glow transition-all duration-300 hover:scale-105 ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Get Free Quote
    </Button>
  );
};

export default WhatsAppButton;