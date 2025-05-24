import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Bed, Wine, Footprints, Utensils } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Learn about Hill Country Hideouts, your premier source for luxury cabin rentals in the Texas Hill Country."
        />
        <meta property="og:title" content="About Us - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Learn about Hill Country Hideouts, your premier source for luxury cabin rentals in the Texas Hill Country."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/about" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">About Hill Country Hideouts</h1>
            <p className="text-xl text-darkText max-w-3xl mx-auto">
              Your gateway to experiencing the breathtaking beauty and charm of the Texas Hill Country
            </p>
          </div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Luxury cabin interior in Texas Hill Country" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Our Story</h2>
              <p className="text-lg text-darkText mb-4">
                Hill Country Hideouts began with a simple passion: sharing the magic of the Texas Hill Country with travelers seeking authentic experiences in one of Texas' most beautiful regions.
              </p>
              <p className="text-lg text-darkText mb-4">
                Founded by a family with deep roots in the Hill Country, we understand what makes this region special—from the rolling limestone hills and crystal-clear springs to the German heritage towns and award-winning wineries.
              </p>
              <p className="text-lg text-darkText">
                Our mission is to connect visitors with the perfect accommodations while helping them discover the hidden gems that make the Hill Country a destination like no other.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Curated Selection</h3>
                <p className="text-darkText">
                  We personally evaluate each cabin in our collection to ensure it meets our standards for comfort, cleanliness, and charm. Our properties range from cozy one-bedroom cabins perfect for romantic getaways to larger accommodations for family gatherings.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Local Expertise</h3>
                <p className="text-darkText">
                  As Hill Country locals, we offer insider knowledge about the region's best attractions, dining options, and hidden spots. Our guides and recommendations help you experience the area like a local, not just a tourist.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Personalized Service</h3>
                <p className="text-darkText">
                  We believe in creating personalized experiences for our guests. Whether you're celebrating a special occasion or seeking specific amenities, we work to match you with the perfect property and provide attentive service throughout your stay.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Commitment to Quality</h3>
                <p className="text-darkText">
                  Each of our cabins features quality furnishings, well-equipped kitchens, comfortable beds with premium linens, and thoughtful touches that elevate your stay. We regularly inspect our properties to ensure they maintain our high standards.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">The Hill Country Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-neutral p-6 rounded-lg text-center">
                <Bed className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2 font-heading">Luxury Accommodations</h3>
                <p className="text-darkText">
                  Comfortable, well-appointed cabins with all the amenities needed for a relaxing stay.
                </p>
              </div>
              <div className="bg-neutral p-6 rounded-lg text-center">
                <Wine className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2 font-heading">Wine Country</h3>
                <p className="text-darkText">
                  Explore dozens of award-winning wineries along the famous Texas Wine Trail.
                </p>
              </div>
              <div className="bg-neutral p-6 rounded-lg text-center">
                <Footprints className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2 font-heading">Outdoor Adventures</h3>
                <p className="text-darkText">
                  Hiking, swimming, tubing, and exploring natural wonders throughout the region.
                </p>
              </div>
              <div className="bg-neutral p-6 rounded-lg text-center">
                <Utensils className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2 font-heading">Culinary Delights</h3>
                <p className="text-darkText">
                  From German heritage restaurants to farm-to-table dining and Texas BBQ.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Ready to Experience the Hill Country?</h2>
            <p className="text-lg text-darkText mb-8 max-w-3xl mx-auto">
              Discover why the Texas Hill Country is one of the most beloved destinations in Texas. 
              Browse our collection of cabins and start planning your perfect getaway today.
            </p>
            <a href="https://www.hillcountrypremier.com/cabins-at-flite-acres/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-primary text-white font-accent font-semibold py-3 px-8 rounded-lg transition-colors">
                View Our Cabins
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
