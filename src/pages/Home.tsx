import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Users, Camera, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import boatAtSea from "@/assets/boat-at-sea.jpg";
import boatHarbour from "@/assets/boat-harbour.jpg";
import boatDeck from "@/assets/boat-deck.jpg";
import boatInterior from "@/assets/boat-interior.jpg";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "Daily Boat Trips & Sunset Cruises",
      description: "Flexible schedules to suit your plans"
    },
    {
      icon: MapPin,
      title: "Departing from Kyrenia Harbour",
      description: "Convenient and scenic location"
    },
    {
      icon: Camera,
      title: "Perfect for Families, Couples & Groups",
      description: "Create lasting memories together"
    },
    {
      icon: Users,
      title: "Friendly Crew • Refreshments on Board",
      description: "Professional service with a smile"
    }
  ];

  const galleryPreview = [
    { src: boatAtSea, alt: "Boat sailing at sea" },
    { src: boatHarbour, alt: "Boat at Kyrenia Harbour" },
    { src: boatDeck, alt: "Comfortable boat deck" },
    { src: boatInterior, alt: "Boat interior seating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${boatAtSea})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-secondary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Cyprus from the Sea
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-95">
            Experience unforgettable daily and private boat trips along the beautiful Cypriot coast.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            ⛵ Sunset Cruises • Private Charters • Full-Day Adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="text-lg shadow-2xl">
                Book Your Trip Today
              </Button>
            </Link>
            <a href="https://wa.me/905338408119" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Moments from the Sea
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse of the unforgettable experiences aboard DERYA DENIZ 1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {galleryPreview.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button variant="secondary" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Set Sail Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Contact us to reserve your spot and experience the beauty of Cyprus from the sea!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="text-lg">
                Get in Touch
              </Button>
            </Link>
            <a href="tel:+905338408119">
              <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                Call +90 533 840 81 19
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
