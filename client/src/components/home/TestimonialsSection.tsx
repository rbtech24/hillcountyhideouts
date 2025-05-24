import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">What Our Guests Say</h2>
          <p className="text-lg text-darkText max-w-2xl mx-auto">
            Hear from travelers who have experienced the magic of our Hill Country hideaways
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-neutral p-6 rounded-lg shadow-md">
              <div className="flex items-center text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-darkText mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div 
                  className={`bg-${testimonial.avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-accent font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
