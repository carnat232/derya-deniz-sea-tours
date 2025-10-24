import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Lisa",
      location: "UK",
      text: "Amazing experience! Crew was super friendly.",
      rating: 5
    },
    {
      name: "John & Emily",
      location: "Germany",
      text: "Best boat trip we had in Cyprus!",
      rating: 5
    },
    {
      name: "Sarah",
      location: "Netherlands",
      text: "Unforgettable sunset cruise. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"{review.text}"</p>
                <p className="font-semibold text-foreground">
                  – {review.name}, <span className="text-muted-foreground font-normal">{review.location}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
