import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Anchor } from "lucide-react";
import boatHarbourMountains from "@/assets/boat-harbour-mountains.jpg";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Safe & Comfortable Vessel",
      description: "Our boat is well-maintained and equipped with all safety features for your peace of mind."
    },
    {
      icon: Users,
      title: "Experienced & Friendly Captain",
      description: "Our professional crew ensures you have a memorable and enjoyable experience at sea."
    },
    {
      icon: Clock,
      title: "Flexible Schedules",
      description: "We offer various departure times to accommodate your plans and preferences."
    },
    {
      icon: Anchor,
      title: "Custom Private Tours Available",
      description: "Personalize your journey with customized routes and exclusive experiences."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${boatHarbourMountains})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-secondary/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About DERYA DENIZ 1
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Your Sea Adventure Awaits
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Derya Deniz 1 offers memorable boat tours and private trips across the stunning Northern Cyprus coast. Our mission is to give every guest a relaxing, fun, and scenic experience at sea.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Whether you're looking for a romantic sunset cruise, a family trip, or a private charter with friends, our professional crew ensures you enjoy every moment.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                With years of experience navigating the beautiful waters of Cyprus, we take pride in sharing the breathtaking coastal views, crystal-clear waters, and unforgettable moments with our guests.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <highlight.icon className="h-14 w-14 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-6xl font-bold text-secondary">10+</div>
                <div className="text-lg text-muted-foreground">Years of Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-bold text-secondary">1000+</div>
                <div className="text-lg text-muted-foreground">Happy Guests</div>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-bold text-secondary">100%</div>
                <div className="text-lg text-muted-foreground">Safety Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
