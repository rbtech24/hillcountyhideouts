import { Helmet } from "react-helmet";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Events = () => {
  const events = [
    // June 2025
    { date: "May 22 - June 8", title: "53rd Annual Kerrville Folk Festival", location: "Kerrville, TX", description: "An iconic 18-day festival celebrating music, community, and arts. Features folk, Americana, and singer-songwriter talent, workshops, camping, and family-friendly activities.", category: "Music & Arts" },
    { date: "June 6-8", title: "Blanco Lavender Festival", location: "Blanco, TX", description: "Celebrates Blanco as the 'Lavender Capital of Texas.' Enjoy live music, specialty foods, regional wines, local beer, and artisan vendors. Free admission.", category: "Festival" },
    { date: "June 19-21", title: "64th Annual Stonewall Peach JAMboree & Rodeo", location: "Stonewall, TX", description: "A beloved Hill Country tradition celebrating the peach harvest with rodeo events and entertainment.", category: "Festival" },
    { date: "June 20-22", title: "Fredericksburg Trade Days June", location: "Fredericksburg, TX", description: "A large market with vendors selling antiques, crafts, clothing, and more.", category: "Shopping" },
    
    // July 2025
    { date: "July 3", title: "Hill Country Fun Fest 2025", location: "Kerrville, TX", description: "A community festival at Jumbo Evans Sports Park.", category: "Festival" },
    { date: "July 4", title: "Kerrville's 4th on the River Festival", location: "Kerrville, TX", description: "A highly attended free concert celebrating American Independence.", category: "Holiday" },
    { date: "July 4", title: "Hill Country Galleria Independence Day Celebration", location: "Bee Cave, TX", description: "Shopping, music, barbecue, fireworks, and family fun, including dog-friendly activities.", category: "Holiday" },
    { date: "July 11 - Aug 16", title: "Zilker Summer Musical", location: "Austin, TX", description: "Free, annual outdoor musical performances, Thursday through Sunday evenings.", category: "Music & Arts" },
    
    // August 2025
    { date: "August (TBD)", title: "Gillespie County Fair", location: "Fredericksburg, TX", description: "Features livestock shows, carnival rides, live music, and rodeo events.", category: "Festival" },
    { date: "August (Various)", title: "Grape Stomps at Local Wineries", location: "Hill Country Region", description: "Many Hill Country wineries offer grape stomping events during harvest season.", category: "Wine & Food" },
    
    // September 2025
    { date: "September 13", title: "Big Ta' Do Chili Cook-Off Car/Bike Show", location: "Kerrville, TX", description: "A chili cook-off combined with a car and bike show at Hill Country Youth Event Center.", category: "Food & Auto" },
    { date: "Mid-Sept - Mid-Nov", title: "Pumpkin Patch at Marble Falls", location: "Marble Falls, TX", description: "Family-friendly farm with hayrides, candy corn maze, barnyard maze, pony rides, and goat feeding.", category: "Family" },
    { date: "Sept 23 - Oct 29", title: "Dripping Springs Pumpkin Festival", location: "Dripping Springs, TX", description: "Six uniquely-themed weekends with fall-inspired games, activities, and attractions.", category: "Family" },
    
    // October 2025
    { date: "October 3-5 & 10-12", title: "Austin City Limits Music Festival", location: "Austin, TX", description: "One of the country's largest music festivals, featuring over 140 musical acts on eight stages over two weekends.", category: "Music & Arts" },
    { date: "October 17-19", title: "Formula 1 United States Grand Prix", location: "Austin, TX", description: "World-class racing with major championship implications and post-race performances from superstar headliners.", category: "Sports" },
    { date: "October 31 - Nov 2", title: "Texas State Arts & Crafts Fair", location: "Ingram, TX", description: "An annual art and craft fair showcasing Texas artists near Kerrville.", category: "Arts & Crafts" },
    
    // November 2025
    { date: "November 1-2", title: "Texas Monthly BBQ Fest", location: "Lockhart, TX", description: "Features live music, an artisan market, live cooking demos, and some of the best BBQ in the state.", category: "Food" },
    { date: "November 7-16", title: "Wurstfest", location: "New Braunfels, TX", description: "The 'Old World' celebration with German food, music, dancing, carnival rides, German beer, and Alpine entertainment.", category: "Festival" },
    { date: "Nov 21 - Jan 3", title: "Walkway of Lights", location: "Marble Falls, TX", description: "A dazzling display of holiday lights at Lakeside Park & Beach.", category: "Holiday" },
    { date: "Nov 24 - Dec 19", title: "Christmas Wine Affair Passport", location: "Hill Country Wineries", description: "Savor Texas wines throughout the holiday season with a self-guided tour of participating wineries.", category: "Wine & Food" },
    { date: "Nov 26 - Jan 6", title: "Fredericksburg's Christmas Nights of Lights", location: "Fredericksburg, TX", description: "German Christmas traditions with Texas hospitality, featuring an audio program and community Christmas tree lighting.", category: "Holiday" },
    
    // December 2025
    { date: "December 6", title: "Hill Country Chorale Christmas Concert", location: "Kerrville, TX", description: "Holiday concert featuring classical, popular, sacred, and secular selections.", category: "Music & Arts" },
    { date: "December 7", title: "Christmas Bazaar", location: "Luckenbach, TX", description: "Family photos with Santa, Christmas tree lighting, shopping, arts & crafts, and all-day Christmas music.", category: "Holiday" },
    { date: "December 7", title: "Christmas on Mercer Street", location: "Dripping Springs, TX", description: "Holiday shopping, live music, children's activities, and a tree lighting at dusk.", category: "Holiday" },
    { date: "Throughout December", title: "Christmas in Comfort - Crumbling Castle", location: "Comfort, TX", description: "A dazzling holiday light park with thousands of wrapped trees and lights.", category: "Holiday" },
    { date: "Throughout December", title: "Eisbahn Outdoor Ice Skating", location: "Fredericksburg, TX", description: "Outdoor ice skating in the decorated Marktplatz.", category: "Holiday" }
  ];

  const categories = ["All", "Music & Arts", "Festival", "Holiday", "Food", "Wine & Food", "Family", "Sports", "Shopping", "Arts & Crafts"];

  return (
    <>
      <Helmet>
        <title>Hill Country Events 2025 - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Discover exciting events happening throughout the Texas Hill Country from June to December 2025. From music festivals to holiday celebrations, plan your perfect getaway."
        />
        <meta name="keywords" content="texas hill country events 2025, hill country festivals, austin city limits, wurstfest, kerrville folk festival, fredericksburg events" />
        <meta property="og:title" content="Hill Country Events 2025 - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Discover exciting events happening throughout the Texas Hill Country from June to December 2025."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/events" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">Hill Country Events 2025</h1>
            <p className="text-xl text-darkText max-w-3xl mx-auto">
              From world-class music festivals to charming local celebrations, discover the incredible events that make the Texas Hill Country special
            </p>
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-[1.02] duration-300"
              >
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-accent mr-2" />
                  <span className="text-sm font-medium text-gray-600">{event.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2 font-heading">{event.title}</h3>
                
                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{event.location}</span>
                </div>
                
                <p className="text-darkText mb-4 text-sm leading-relaxed">{event.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="bg-white p-8 rounded-lg shadow-md mt-16">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Plan Your Hill Country Event Experience</h2>
            <p className="text-lg text-darkText mb-4">
              The Texas Hill Country hosts some of the most exciting events in the state throughout the year. From intimate local festivals to world-renowned celebrations, there's always something happening in this vibrant region.
            </p>
            <p className="text-lg text-darkText mb-6">
              Many events require advance planning, especially popular festivals like Austin City Limits, Wurstfest, and the Kerrville Folk Festival. We recommend booking your cabin accommodations early to ensure you have the perfect home base for your event adventures.
            </p>
            <div className="bg-neutral p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4 font-heading">Ready to Experience Hill Country Events?</h3>
              <p className="text-darkText mb-4">
                Book your cabin getaway and make the most of these incredible Hill Country experiences.
              </p>
              <a href="https://wimberleycabins.com/" target="_blank" rel="noopener noreferrer">
                <button className="bg-accent hover:bg-primary text-white font-accent font-semibold py-3 px-6 rounded-lg transition-colors">
                  Book Your Stay
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;