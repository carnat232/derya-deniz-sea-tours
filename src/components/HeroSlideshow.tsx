import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import boatAtSea from '@/assets/boat-at-sea.jpg';
import boatHarbour from '@/assets/boat-harbour.jpg';
import boatDeckSun from '@/assets/boat-deck-sun.jpg';
import boatHarbourMountains from '@/assets/boat-harbour-mountains.jpg';
import boatDeck from '@/assets/boat-deck.jpg';
import logo from '@/assets/logo.png';

const slides = [
  { image: boatAtSea, title: 'Discover Cyprus from the Sea' },
  { image: boatHarbour, title: 'Kyrenia Harbour Adventures' },
  { image: boatDeckSun, title: 'Sunset Cruises Await' },
  { image: boatHarbourMountains, title: 'Mountain & Sea Views' },
  { image: boatDeck, title: 'Luxury Boat Experience' },
];

export const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="mb-8 animate-fade-in">
          <img 
            src={logo} 
            alt="Derya Deniz 1" 
            className="h-40 md:h-56 lg:h-72 w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-scale-in brightness-110 contrast-125"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
          {slides[currentSlide].title}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl animate-fade-in drop-shadow-md">
          Experience unforgettable daily and private boat trips along the beautiful Cypriot coast
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://wa.me/905338408119" target="_blank" rel="noopener noreferrer">
              📞 Book Your Trip Today
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="accent"
            className="text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
            asChild
          >
            <a href="#services">
              ⛵ View Our Services
            </a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Button
        variant="hero"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-75 hover:opacity-100"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="hero"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-75 hover:opacity-100"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
};
