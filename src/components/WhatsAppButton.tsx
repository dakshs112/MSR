import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: 'floating' | 'inline';
  className?: string;
  label?: string;
<<<<<<< HEAD
  showCall?: boolean;
=======
>>>>>>> 9ccc053a45bbf67ba2e213e824f9075c8baec7a6
}

const WhatsAppButton = ({ 
  phoneNumber = '7896175272', 
  message = 'Hello MSR, I\'d like a quote for your cleaning services.',
  variant = 'inline',
  className = '',
  label,
  showCall = false,
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

<<<<<<< HEAD
  const handleCallClick = () => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  // Floating variant: WhatsApp button at bottom right, Call button above it
=======
  // New floating variant uses the external image as the logo
>>>>>>> 9ccc053a45bbf67ba2e213e824f9075c8baec7a6
  if (variant === 'floating') {
    return (
      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4">
        {showCall && (
          <Button
            onClick={handleCallClick}
            className="h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            size="icon"
            aria-label="Call us"
            style={{ marginBottom: '30px' }} // 56px above WhatsApp button
          >
            <Phone className="h-6 w-6 text-white" />
          </Button>
        )}
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
