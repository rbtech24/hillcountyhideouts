import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/lib/constants";

const DestinationGuides = () => {
  return (
    <section id="destinations" className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">Explore Hill Country Destinations</h2>
          <p className="text-lg text-darkText max-w-2xl mx-auto">
            Discover the charm and beauty of these Hill Country towns, each offering unique experiences and attractions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-lg shadow-lg transition-transform hover:scale-[1.02] duration-300 p-6"
            >
              <h3 className="text-2xl font-bold text-primary mb-3 font-heading">{destination.name}</h3>
              <p className="text-darkText mb-4">{destination.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {destination.highlights.map((highlight, index) => (
                  <span key={index} className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">
                    {highlight}
                  </span>
                ))}
              </div>
              <Link href="/destinations" className="inline-block mt-2 text-primary hover:text-accent font-accent font-medium transition-colors">
                Explore {destination.name} <ArrowRight className="inline ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGuides;
