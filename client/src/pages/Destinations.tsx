import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/lib/constants";
import { Link } from "wouter";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

const Destinations = () => {
  return (
    <>
      <Helmet>
        <title>Hill Country Destinations - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Explore the charming towns and destinations in the Texas Hill Country, each with its own unique character and attractions."
        />
        <meta name="keywords" content="texas hill country towns, wimberley, fredericksburg, dripping springs, hill country destinations" />
        <meta property="og:title" content="Hill Country Destinations - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Explore the charming towns and destinations in the Texas Hill Country, each with its own unique character and attractions."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/destinations" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">Hill Country Destinations</h1>
            <p className="text-xl text-darkText max-w-3xl mx-auto">
              Discover the charm and beauty of these Hill Country towns, each offering unique experiences and attractions
            </p>
          </div>
        </div>
        
        {/* Destinations */}
        <div className="container mx-auto px-4 py-12">
          {destinations.map((destination, index) => (
            <div key={destination.id} className={`mb-16 ${index % 2 === 0 ? '' : 'bg-neutral py-12 -mx-4 px-4'}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                  <h2 className="text-3xl font-bold text-primary mb-6 font-heading">{destination.name}</h2>
                  <p className="text-lg text-darkText mb-4">{destination.description}</p>
                  <p className="text-lg text-darkText mb-6">{destination.extendedDescription}</p>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 font-heading">Must-See Attractions</h3>
                  <ul className="list-disc list-inside space-y-2 text-darkText mb-6">
                    {destination.attractions?.map((attraction, i) => (
                      <li key={i}>{attraction}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {destination.highlights.map((highlight, i) => (
                      <span key={i} className="bg-neutral px-3 py-1 rounded-full text-sm font-medium text-darkText">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                    <Link 
                      href={`/destinations/${destination.name.toLowerCase().replace(' ', '')}`}
                      onClick={scrollToTop}
                      className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >
                      Explore {destination.name} <ArrowRight className="inline ml-1 h-4 w-4" />
                    </Link>
                    
                    {destination.websiteUrl && (
                      <a 
                        href={destination.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-accent hover:text-primary font-accent font-medium transition-colors"
                      >
                        Visit Official Website <ArrowRight className="inline ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Additional content */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Planning Your Hill Country Tour</h2>
            <p className="text-lg text-darkText mb-4">
              The Texas Hill Country is a region filled with charming towns, each with its own distinct character and attractions. Whether you're interested in wine tasting, outdoor adventures, shopping, or simply soaking in the local culture, you'll find plenty to love in these Hill Country destinations.
            </p>
            <p className="text-lg text-darkText mb-4">
              Many visitors choose to explore multiple towns during their stay, as they're all within a reasonable driving distance of each other. Our cabins in Wimberley serve as an ideal central location from which to venture out on day trips throughout the region.
            </p>
            <p className="text-lg text-darkText">
              No matter which Hill Country towns you choose to visit, you'll be greeted with warm Texas hospitality, stunning natural beauty, and a pace of life that invites you to slow down and savor every moment.
            </p>
          </div>
          
          {/* Map section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Hill Country Map</h2>
            <p className="text-lg text-darkText mb-8 max-w-3xl mx-auto">
              The Texas Hill Country region spans approximately 25 counties in Central Texas, covering an area of over 14,000 square miles.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880078.7919086967!2d-99.54553037343749!3d30.234613000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b3d90f6ff0417%3A0xe968747a5781961!2sWimberley%2C%20TX!5e0!3m2!1sen!2sus!4v1651245301999!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Texas Hill Country Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
