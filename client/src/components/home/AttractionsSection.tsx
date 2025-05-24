import { ArrowRight } from "lucide-react";
import { attractions } from "@/lib/constants";

const AttractionsSection = () => {
  return (
    <section id="attractions" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">Hill Country Attractions</h2>
          <p className="text-lg text-darkText max-w-2xl mx-auto">
            Discover the incredible experiences waiting for you in the Texas Hill Country
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attractions.map((attraction) => (
            <div 
              key={attraction.id}
              className="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-lg shadow-md"
            >
              <img 
                src={attraction.imageUrl} 
                alt={attraction.title} 
                className="w-full md:w-48 h-auto md:h-48 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-primary mb-2 font-heading">{attraction.title}</h3>
                <p className="text-darkText mb-3">{attraction.description}</p>
                <a 
                  href={attraction.link}
                  className="text-accent hover:text-primary font-accent font-medium transition-colors"
                >
                  {attraction.linkText} <ArrowRight className="inline ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
