import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cabins } from "@/lib/constants";

const VacationRentals = () => {
  return (
    <>
      <Helmet>
        <title>Vacation Rentals - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Browse our selection of luxury cabins and vacation rentals in the Texas Hill Country, perfect for romantic getaways, family vacations, and group retreats."
        />
        <meta name="keywords" content="hill country rentals, texas hill country cabins, vacation rentals wimberley, luxury cabins" />
        <meta property="og:title" content="Vacation Rentals - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Browse our selection of luxury cabins and vacation rentals in the Texas Hill Country, perfect for romantic getaways, family vacations, and group retreats."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/vacation-rentals" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Hill Country Hideouts",
              "description": "Luxury cabin rentals in the Texas Hill Country",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Wimberley",
                "addressRegion": "TX",
                "postalCode": "78676",
                "addressCountry": "US"
              },
              "telephone": "(555) 123-4567",
              "priceRange": "$$$"
            }
          `}
        </script>
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">Vacation Rentals</h1>
            <p className="text-xl text-darkText max-w-3xl mx-auto">
              Discover our collection of luxury cabins nestled in the heart of the Texas Hill Country
            </p>
          </div>
        </div>
        
        {/* Search form */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 font-heading text-center">Find Your Perfect Cabin</h2>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label htmlFor="arrival" className="block text-sm font-medium text-darkText font-accent">Arrival Date</label>
                <input 
                  type="date" 
                  id="arrival" 
                  name="arrival" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="departure" className="block text-sm font-medium text-darkText font-accent">Departure Date</label>
                <input 
                  type="date" 
                  id="departure" 
                  name="departure" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="guests" className="block text-sm font-medium text-darkText font-accent">Guests</label>
                <select 
                  id="guests" 
                  name="guests" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="1">1 Guest</option>
                  <option value="2" selected>2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-secondary text-white font-accent font-semibold p-3 rounded-lg transition-colors"
                >
                  Check Availability
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Cabins list */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading">Our Cabins</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-primary">${cabin.pricePerNight}</span>
                    <span className="text-gray-500">per night</span>
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
          
          {/* Cabin features */}
          <div className="bg-neutral p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6 font-heading text-center">Cabin Features & Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Indoor Amenities</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Fully equipped kitchen with modern appliances</li>
                  <li>Premium linens and comfortable bedding</li>
                  <li>Smart TVs with streaming services</li>
                  <li>High-speed wireless internet</li>
                  <li>Climate control (heating and air conditioning)</li>
                  <li>Washer and dryer</li>
                  <li>Tasteful, country-chic décor</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Outdoor Spaces</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Private decks or patios</li>
                  <li>Outdoor seating areas</li>
                  <li>Charcoal BBQ grills</li>
                  <li>Fire pits (select cabins)</li>
                  <li>Scenic views</li>
                  <li>Wooded surroundings</li>
                  <li>Peaceful, natural setting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Property Highlights</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Minutes from downtown Wimberley</li>
                  <li>Close to shopping and dining</li>
                  <li>Near popular swimming holes</li>
                  <li>Convenient to hiking trails</li>
                  <li>Easy access to wineries</li>
                  <li>Self check-in process</li>
                  <li>Ample parking</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Booking information */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6 font-heading">Booking Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Reservation Policies</h3>
                <ul className="list-disc list-inside space-y-3 text-darkText">
                  <li><strong>Minimum Stay:</strong> 2-night minimum (3 nights for holidays and special events)</li>
                  <li><strong>Check-in:</strong> 4:00 PM</li>
                  <li><strong>Check-out:</strong> 11:00 AM</li>
                  <li><strong>Deposit:</strong> 50% of total stay required at booking</li>
                  <li><strong>Cancellation:</strong> Full refund if canceled 30+ days before arrival</li>
                  <li><strong>Pets:</strong> Select cabins are pet-friendly (additional fee applies)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">What to Know Before You Go</h3>
                <ul className="list-disc list-inside space-y-3 text-darkText">
                  <li>Our cabins are located in a peaceful, natural setting.</li>
                  <li>Cell service may be limited in some areas.</li>
                  <li>Grocery stores and conveniences are a short drive away.</li>
                  <li>Each cabin has its own unique layout and design.</li>
                  <li>Special requests (celebrations, etc.) can be accommodated with advance notice.</li>
                  <li>Local activities and attractions are seasonal - check availability before your visit.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Ready to Book Your Hill Country Getaway?</h2>
            <p className="text-lg text-darkText mb-8 max-w-3xl mx-auto">
              Our partner Hill Country Premier Lodging handles all bookings and reservations for our cabins, ensuring a smooth and secure booking process.
            </p>
            <a href="https://www.hillcountrypremier.com/cabins-at-flite-acres/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-primary text-white font-accent font-semibold py-3 px-8 rounded-lg transition-colors text-lg">
                Book Your Stay Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VacationRentals;
