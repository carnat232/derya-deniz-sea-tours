import { useState } from "react";
import { X } from "lucide-react";
import boatAtSea from "@/assets/boat-at-sea.jpg";
import boatHarbour from "@/assets/boat-harbour.jpg";
import boatHarbourMountains from "@/assets/boat-harbour-mountains.jpg";
import boatHarbourSide from "@/assets/boat-harbour-side.jpg";
import boatDeck from "@/assets/boat-deck.jpg";
import boatDeckSun from "@/assets/boat-deck-sun.jpg";
import boatDeckInterior from "@/assets/boat-deck-interior.jpg";
import boatInterior from "@/assets/boat-interior.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: boatAtSea, alt: "Derya Deniz 1 sailing on the Mediterranean Sea" },
    { src: boatHarbourMountains, alt: "Boat at Kyrenia Harbour with mountain backdrop" },
    { src: boatHarbour, alt: "Derya Deniz 1 docked at the harbour" },
    { src: boatHarbourSide, alt: "Side view of the boat at harbour" },
    { src: boatDeck, alt: "Comfortable seating on deck" },
    { src: boatDeckSun, alt: "Sun deck with lounging areas" },
    { src: boatDeckInterior, alt: "Interior deck seating area" },
    { src: boatInterior, alt: "Cozy boat interior" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Moments from the Sea
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            A glimpse of the unforgettable moments our guests experience aboard DERYA DENIZ 1
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 px-4 py-2 rounded-full text-primary font-semibold text-sm">
                    View Full Size
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors p-2"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Create Your Own Memories
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable boat tour experience along the stunning Northern Cyprus coast
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
