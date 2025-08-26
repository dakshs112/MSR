import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: 'floating' | 'inline';
  className?: string;
  label?: string; // added to fix the TS error
}

const WhatsAppButton = ({ 
  phoneNumber = '7896175272', 
  message = 'Hello MSR, I\'d like a quote for your cleaning services.',
  variant = 'inline',
  className = '',
  label,
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    let digits = String(phoneNumber).replace(/\D/g, '');
    if (digits.length === 10) digits = '91' + digits;
    const encodedMessage = encodeURIComponent(message || '');
    const whatsappUrl = `https://wa.me/${digits}?text=${encodedMessage}`;

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
      {label ?? 'Get Free Quote'}
    </Button>
  );
};

export default WhatsAppButton;