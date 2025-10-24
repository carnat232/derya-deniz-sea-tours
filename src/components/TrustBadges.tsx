import { Shield, Users, Star, Languages } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "Safe & Licensed Operator"
    },
    {
      icon: Users,
      text: "Friendly Crew"
    },
    {
      icon: Star,
      text: "100% Positive Reviews"
    },
    {
      icon: Languages,
      text: "English & Turkish Speaking"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="bg-secondary/10 p-4 rounded-full">
                <badge.icon className="h-8 w-8 text-secondary" />
              </div>
              <p className="text-sm font-medium text-foreground">{badge.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
