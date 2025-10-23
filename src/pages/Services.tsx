import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Waves, PartyPopper, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import boatAtSea from "@/assets/boat-at-sea.jpg";
import boatDeckSun from "@/assets/boat-deck-sun.jpg";
import boatDeckInterior from "@/assets/boat-deck-interior.jpg";

const Services = () => {
  const services = [
    {
      title: "Daily Boat Trip",
      image: boatAtSea,
      duration: "4-6 hours",
      icon: Waves,
      features: [
        "Full-day or half-day trips",
        "Swimming stops along the coast",
        "Sunbathing on deck",
        "Breathtaking coastal views",
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
        "Ideal for couples",
        "Amazing photography opportunities",
        "Complimentary refreshments"
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
        "Family gatherings",
        "Customize your route",
        "Personalized experience"
      ],
      description: "Charter Derya Deniz 1 for birthdays, parties, or family gatherings. Customize your route and enjoy exclusivity."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Boat Trips & Experiences
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Choose the perfect adventure for your day at sea
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-2xl group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <service.icon className="h-10 w-10 text-white mb-2" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
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
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Utensils className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">What's Included</h3>
                    <p className="text-muted-foreground mb-4">
                      All our trips include complimentary refreshments and light snacks. Our experienced crew will ensure your safety and comfort throughout the journey. Life jackets and safety equipment are provided on board.
                    </p>
                    <p className="text-muted-foreground">
                      For private charters, we can arrange special catering options upon request. Contact us to discuss your specific needs and preferences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Set Sail?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Book your adventure today and create unforgettable memories on the Mediterranean Sea
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="text-lg">
              Book Your Trip Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
