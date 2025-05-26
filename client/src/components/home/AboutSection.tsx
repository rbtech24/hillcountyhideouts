import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Bed, Wine, Footprints, Utensils } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Luxury cabin interior in Texas Hill Country" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading">About Hill Country Hideouts</h2>
            <p className="text-lg text-darkText mb-6">
              Welcome to Hill Country Hideouts, your gateway to experiencing the breathtaking beauty and charm of the Texas Hill Country. Our collection of handpicked luxury cabins offers the perfect blend of rustic charm and modern comfort.
            </p>
            <p className="text-lg text-darkText mb-6">
              Nestled among the trees, our cabins provide an escape from busy city life while being just minutes from the quaint downtown squares of Wimberley, Fredericksburg, and other charming Hill Country towns.
            </p>
            <p className="text-lg text-darkText mb-8">
              Each of our cabins has been expertly designed with exceptional attention to detail, from luxurious linens to beautifully curated country-chic décor, ensuring your stay is both comfortable and memorable.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-neutral p-4 rounded-lg text-center">
                <Bed className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="font-accent font-medium">Luxury Accommodations</p>
              </div>
              <div className="bg-neutral p-4 rounded-lg text-center">
                <Wine className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="font-accent font-medium">Near Wineries</p>
              </div>
              <div className="bg-neutral p-4 rounded-lg text-center">
                <Footprints className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="font-accent font-medium">Outdoor Activities</p>
              </div>
              <div className="bg-neutral p-4 rounded-lg text-center">
                <Utensils className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="font-accent font-medium">Local Cuisine</p>
              </div>
            </div>
            <Link href="/about">
              <Button className="bg-accent hover:bg-primary text-white font-accent font-semibold py-3 px-6 rounded-lg transition-colors">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
