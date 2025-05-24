import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cabins } from "@/lib/constants";

const FeaturedCabins = () => {
  return (
    <section id="cabins" className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">Our Featured Cabins</h2>
          <p className="text-lg text-darkText max-w-2xl mx-auto">
            Escape to tranquility in our beautifully appointed cabins, each offering a unique Hill Country experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabins.map((cabin) => (
            <div 
              key={cabin.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300"
            >
              <img 
                src={cabin.imageUrl} 
                alt={cabin.name} 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary font-heading">{cabin.name}</h3>
                  <div className="flex items-center">
                    <span className="text-accent">
                      <Star className="fill-current h-4 w-4" />
                    </span>
                    <span className="ml-1 font-medium">{cabin.rating}</span>
                    <span className="ml-1 text-gray-500 text-sm">({cabin.reviewCount} reviews)</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{cabin.details}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cabin.amenities.map((amenity, index) => (
                    <span key={index} className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">
                      {amenity}
                    </span>
                  ))}
                </div>
                <a href={cabin.url} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full bg-secondary hover:bg-primary text-white text-center py-2 rounded-lg font-accent font-medium transition-colors"
                  >
                    View Details
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://www.hillcountrypremier.com/cabins-at-flite-acres/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-secondary text-white font-accent font-semibold py-3 px-8 rounded-lg transition-colors">
              View All Cabins
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCabins;
