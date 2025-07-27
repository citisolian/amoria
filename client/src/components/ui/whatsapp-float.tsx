import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppFloat() {
  const whatsappNumber = "+447123456789"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in your event services. Could you please provide more information?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 h-14 w-14"
      size="sm"
    >
      <MessageCircle size={24} />
    </Button>
  );
}
