import { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello! I'm ${name}%0A%0AEmail: ${email}%0A%0AMessage: ${message}`;
    window.open(`https://wa.me/905338408119?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to WhatsApp to send your message!",
    });
    
    setName('');
    setEmail('');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <Button
          size="icon"
          className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-primary to-accent hover:scale-110 transition-transform animate-pulse"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>

      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6" />
              <div>
                <h3 className="font-bold text-lg">Chat with Us</h3>
                <p className="text-sm text-white/90">We're here to help!</p>
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-6 bg-background">
            <div className="mb-4 space-y-3">
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">👋 Hi! How can we help you today?</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">Fill out the form below and we'll get back to you via WhatsApp!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="border-border min-h-[100px]"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Send via WhatsApp
              </Button>
            </form>

            <div className="mt-6 pt-4 border-t border-border space-y-2">
              <a
                href="tel:+905338408119"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">+90 533 840 81 19</span>
              </a>
              <a
                href="mailto:Mustykoc1986@gmail.com"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">Mustykoc1986@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
