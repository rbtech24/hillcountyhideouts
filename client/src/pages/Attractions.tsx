import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { attractions, moreAttractions } from "@/lib/constants";

const Attractions = () => {
  return (
    <>
      <Helmet>
        <title>Hill Country Attractions - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Discover the best attractions in the Texas Hill Country, from award-winning wineries to natural swimming holes and scenic hiking trails."
        />
        <meta name="keywords" content="hill country attractions, texas hill country activities, wineries, hiking, swimming holes" />
        <meta property="og:title" content="Hill Country Attractions - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Discover the best attractions in the Texas Hill Country, from award-winning wineries to natural swimming holes and scenic hiking trails."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/attractions" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">Hill Country Attractions</h1>
            <p className="text-xl text-darkText max-w-3xl mx-auto">
              Discover the incredible experiences waiting for you in the Texas Hill Country
            </p>
          </div>
        </div>
        
        {/* Main attractions */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                  <h2 className="text-xl font-bold text-primary mb-2 font-heading">{attraction.title}</h2>
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
          
          {/* More attractions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">More Hill Country Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moreAttractions.map((item) => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3 font-heading">{item.title}</h3>
                    <p className="text-darkText mb-4">{item.description}</p>
                    {item.highlights && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.highlights.map((highlight, index) => (
                          <span key={index} className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Austin Attractions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Austin Attractions</h2>
            <p className="text-lg text-darkText mb-6 text-center max-w-4xl mx-auto">
              Just a short drive from the Hill Country, Austin offers world-class entertainment, dining, and cultural experiences. Here are some must-visit attractions in the "Live Music Capital of the World."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="South Congress Avenue" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">South Congress (SoCo)</h3>
                  <p className="text-darkText mb-4">Explore this iconic avenue lined with eclectic shops, restaurants, and food trucks. Don't miss the famous "I Love You So Much" mural and the stunning Capitol view.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Shopping</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Dining</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Photo Ops</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Barton Springs Pool" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Barton Springs Pool</h3>
                  <p className="text-darkText mb-4">This natural spring-fed pool maintains a refreshing 68-70 degrees year-round. Located in Zilker Park, it's perfect for swimming and sunbathing in Austin's warm climate.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Swimming</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Outdoor Recreation</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Family-Friendly</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1545147986-0a2187e7486d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Sixth Street" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Live Music on Sixth Street</h3>
                  <p className="text-darkText mb-4">Experience Austin's legendary music scene on historic Sixth Street. With dozens of venues featuring every genre imaginable, you'll find live music every night of the week.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Live Music</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Nightlife</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Entertainment</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">More Austin Highlights</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Texas State Capitol - Impressive architecture and free guided tours</li>
                  <li>Lady Bird Lake - Hiking and biking trails, kayaking, and famous bat colony</li>
                  <li>Blanton Museum of Art - One of the largest university art museums in the country</li>
                  <li>Mount Bonnell - Panoramic views of Lake Austin and the Hill Country</li>
                  <li>The Domain - Upscale shopping, dining, and entertainment district</li>
                  <li>East Austin - Trendy neighborhood with craft breweries and art galleries</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Austin Events Worth Planning Around</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>South by Southwest (SXSW) - March</li>
                  <li>Austin City Limits Music Festival - October</li>
                  <li>Formula 1 United States Grand Prix - October</li>
                  <li>Austin Food & Wine Festival - April</li>
                  <li>Blues on the Green - Summer concert series</li>
                  <li>Bat Season at Congress Avenue Bridge - March to November</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* San Antonio Attractions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">San Antonio Attractions</h2>
            <p className="text-lg text-darkText mb-6 text-center max-w-4xl mx-auto">
              Rich in history and culture, San Antonio offers visitors a blend of Texan and Mexican heritage. Just a short drive from the Hill Country, it makes for a perfect day trip or extended stay.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1558174685-430919a96c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="The Alamo" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">The Alamo</h3>
                  <p className="text-darkText mb-4">Visit this iconic symbol of Texas independence and learn about the 1836 battle that shaped Texas history. The historic mission is located in the heart of downtown San Antonio.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Historic</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Educational</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Must-Visit</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1569230516306-5a8cb5586399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="River Walk" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">San Antonio River Walk</h3>
                  <p className="text-darkText mb-4">Stroll along this scenic urban waterway lined with restaurants, shops, and hotels. Take a river cruise, dine riverside, or simply enjoy the beautiful landscaping and architecture.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Dining</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Shopping</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Boat Tours</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1568736333610-eae6e0ab9206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Pearl District" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">The Pearl District</h3>
                  <p className="text-darkText mb-4">This revitalized historic brewery complex now houses upscale restaurants, boutiques, and a weekend farmers market. Don't miss the Culinary Institute of America's campus and cooking classes.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Culinary</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Shopping</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Farmers Market</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">More San Antonio Highlights</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>San Antonio Missions National Historical Park - UNESCO World Heritage Site</li>
                  <li>Market Square (El Mercado) - Largest Mexican market in the U.S.</li>
                  <li>Tower of the Americas - 750-foot observation tower with restaurant</li>
                  <li>San Antonio Botanical Garden - 38 acres of beautiful gardens</li>
                  <li>La Villita Historic Arts Village - Artisan shops and galleries</li>
                  <li>Japanese Tea Garden - Free admission to this tranquil garden</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Family-Friendly Attractions</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Six Flags Fiesta Texas - Theme park with thrilling roller coasters</li>
                  <li>SeaWorld San Antonio - Marine theme park with shows and rides</li>
                  <li>San Antonio Zoo - Home to over 3,500 animals from 750 species</li>
                  <li>The DoSeum - Interactive children's museum</li>
                  <li>Natural Bridge Caverns - Underground cave system with tours</li>
                  <li>Yanaguana Garden at Hemisfair - Interactive playscape</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* New Braunfels Attractions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">New Braunfels Attractions</h2>
            <p className="text-lg text-darkText mb-6 text-center max-w-4xl mx-auto">
              Located between Austin and San Antonio, New Braunfels combines German heritage with Texas charm. Famous for its rivers and water activities, it's a perfect summer destination.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1619036135505-f3592f409680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Guadalupe River Tubing" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">River Tubing</h3>
                  <p className="text-darkText mb-4">Float down the Guadalupe or Comal River in an inner tube - a beloved Texas summer tradition. Multiple outfitters offer tube rentals and shuttle services for a carefree day on the water.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Water Activities</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Summer Fun</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Family-Friendly</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1594131431617-8e94985fbb88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Schlitterbahn Waterpark" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Schlitterbahn Waterpark</h3>
                  <p className="text-darkText mb-4">One of America's top waterparks features water slides, lazy rivers, and wave pools. The original section uses natural spring water from the Comal River for a refreshing experience.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Water Park</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Family Attraction</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Summer Fun</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1515508707452-64931b9ddecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Gruene Historic District" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Gruene Historic District</h3>
                  <p className="text-darkText mb-4">Visit this well-preserved 1800s German settlement, home to Texas' oldest dance hall, Gruene Hall. Shop in historic buildings, dine at the Gristmill Restaurant, and enjoy live Texas music.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Historic</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Live Music</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Shopping</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">More New Braunfels Attractions</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Landa Park - 51-acre park with a spring-fed pool, miniature train, and paddleboats</li>
                  <li>McKenna Children's Museum - Interactive exhibits for young children</li>
                  <li>Animal World & Snake Farm Zoo - Family-friendly zoo with exotic animals</li>
                  <li>New Braunfels Farmers Market - Local produce and artisan goods</li>
                  <li>Texas Ski Ranch - Cable wakeboarding, skateboarding, and more</li>
                  <li>Conservation Plaza - Historic buildings and German heritage</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Annual Events in New Braunfels</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Wurstfest - 10-day German festival in November</li>
                  <li>Gruene Music & Wine Festival - October</li>
                  <li>Comal County Fair & Rodeo - September</li>
                  <li>Wassailfest - Holiday celebration in December</li>
                  <li>Folkfest - Celebrating German heritage in April</li>
                  <li>Wein & Saengerfest - Wine, music, and heritage festival in May</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="bg-neutral p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Planning Your Hill Country Adventure</h2>
            <p className="text-lg text-darkText mb-4">
              The Texas Hill Country offers an incredible variety of activities and attractions for visitors of all ages and interests. From the stunning natural beauty of its landscapes to the rich cultural heritage of its towns, there's something for everyone to enjoy.
            </p>
            <p className="text-lg text-darkText mb-4">
              When planning your Hill Country getaway, consider the season of your visit. Spring brings wildflower blooms and pleasant temperatures, summer offers swimming and water activities, fall showcases harvest festivals and wine events, and winter provides a quieter experience with holiday lights and festivities.
            </p>
            <p className="text-lg text-darkText">
              Our cabins serve as the perfect home base for exploring all that the Hill Country has to offer. With their central location, you can easily venture out to multiple attractions and return to comfort and relaxation each evening.
            </p>
          </div>
          
          {/* Seasonal events section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Seasonal Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Spring</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Bluebonnet and wildflower viewing (March-April)</li>
                  <li>Wimberley Market Days (First Saturday, March-December)</li>
                  <li>Fredericksburg Easter Festival</li>
                  <li>Hill Country Wine & Music Festival</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Summer</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Fredericksburg Peach Festival (June)</li>
                  <li>Blanco Lavender Festival (June)</li>
                  <li>Dripping Springs Songwriters Festival</li>
                  <li>Summer concert series in Luckenbach</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Fall</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Fredericksburg Oktoberfest</li>
                  <li>Gruene Music & Wine Festival</li>
                  <li>Texas Wine Month (October)</li>
                  <li>Wimberley Autumn Art Festival</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Winter</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Johnson City Lights Spectacular</li>
                  <li>Fredericksburg Christmas Nights</li>
                  <li>Wimberley Trail of Lights</li>
                  <li>New Year's celebrations in Hill Country towns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attractions;
