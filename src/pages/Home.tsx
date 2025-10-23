import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Users, Camera, MessageCircle, Shield, Anchor, Waves, PartyPopper, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import boatAtSea from "@/assets/boat-at-sea.jpg";
import boatHarbour from "@/assets/boat-harbour.jpg";
import boatDeck from "@/assets/boat-deck.jpg";
import boatInterior from "@/assets/boat-interior.jpg";
import boatDeckSun from "@/assets/boat-deck-sun.jpg";
import boatDeckInterior from "@/assets/boat-deck-interior.jpg";
import logo from "@/assets/logo.png";

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

  const aboutHighlights = [
    {
      icon: Shield,
      title: "Safe & Comfortable Vessel",
      description: "Well-maintained and equipped with all safety features"
    },
    {
      icon: Users,
      title: "Experienced & Friendly Captain",
      description: "Professional crew for a memorable experience"
    },
    {
      icon: Clock,
      title: "Flexible Schedules",
      description: "Various departure times to suit your plans"
    },
    {
      icon: Anchor,
      title: "Custom Private Tours",
      description: "Personalized routes and exclusive experiences"
    }
  ];

  const services = [
    {
      title: "Daily Boat Trip",
      image: boatAtSea,
      duration: "4-6 hours",
      icon: Waves,
      features: [
        "Full-day or half-day trips",
        "Swimming stops along the coast",
        "Includes drinks & light snacks"
      ],
      description: "Enjoy a relaxing day on the water with swimming stops, sunbathing, and breathtaking coastal views."
    },
    {
      title: "Sunset Cruise",
      image: boatDeckSun,
      duration: "Evening departures",
      icon: Clock,
      features: [
        "Perfect timing for golden hour",
        "Romantic atmosphere",
        "Ideal for couples"
      ],
      description: "Sail into the golden hour and watch the sun dip into the sea – a perfect moment for couples or photography lovers."
    },
    {
      title: "Private Boat Trip",
      image: boatDeckInterior,
      duration: "Customizable",
      icon: PartyPopper,
      features: [
        "Charter the entire boat",
        "Perfect for birthdays & parties",
        "Customize your route"
      ],
      description: "Charter Derya Deniz 1 for birthdays, parties, or family gatherings. Customize your route and enjoy exclusivity."
    }
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
          <img 
            src={logo} 
            alt="Derya Deniz 1 Boat Tours Logo" 
            className="h-32 md:h-40 w-auto mx-auto mb-8 animate-fade-in drop-shadow-2xl"
          />
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

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About DERYA DENIZ 1
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Derya Deniz 1 offers memorable boat tours and private trips across the stunning Northern Cyprus coast. Our mission is to give every guest a relaxing, fun, and scenic experience at sea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {aboutHighlights.map((highlight, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="font-semibold mb-2 text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button variant="default" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Boat Trips & Experiences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect adventure for your day at sea
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-2xl group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <service.icon className="h-10 w-10 mb-2" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="secondary" size="lg">
                View All Services
              </Button>
            </Link>
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
              <Button variant="default" size="lg">
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
