import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-24 right-6 z-40 transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
    >
      <Button
        size="icon"
        variant="secondary"
        className="h-12 w-12 rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};
