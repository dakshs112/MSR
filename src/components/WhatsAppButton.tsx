import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: 'floating' | 'inline';
  className?: string;
  label?: string;
}

const WhatsAppButton = ({ 
  phoneNumber = '7896175272', 
  message = 'Hello MSR, I\'d like a quote for your cleaning services.',
  variant = 'inline',
  className = '',
  label,
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    // Normalize phone number to digits only
    let digits = String(phoneNumber).replace(/\D/g, '');

    // If user provided a 10-digit local number, assume country code 91 (India).
    if (digits.length === 10) {
      digits = '91' + digits;
    }

    const encodedMessage = encodeURIComponent(message || '');
    const whatsappUrl = `https://wa.me/${digits}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  // New floating variant uses the external image as the logo
  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <Button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl p-1"
          size="icon"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWpgLHLNRRNPwvs6m_nO-O--M6P6MImvCyg&s"
            alt="WhatsApp"
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
            decoding="async"
          />
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
