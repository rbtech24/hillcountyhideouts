import { Helmet } from "react-helmet";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Events = () => {
  const events = [
    // Ongoing Events
    { date: "Ongoing", title: "Live Music at Gruene Hall", location: "Gruene/New Braunfels, TX", description: "Texas's oldest dance hall hosts live music almost nightly. Check their schedule for specific artists.", category: "Music & Arts" },
    { date: "Ongoing", title: "Live Music at Luckenbach Dance Hall", location: "Luckenbach, TX", description: "Iconic Texas dance hall with regular schedule of country and Americana artists.", category: "Music & Arts" },
    { date: "Monthly", title: "First Friday Art Walk", location: "Fredericksburg, TX", description: "Galleries and shops extend hours and host special showings on the first Friday of each month.", category: "Arts & Crafts" },
    { date: "Monthly", title: "First Saturday Living History at Pioneer Museum", location: "Fredericksburg, TX", description: "Demonstrations and reenactments showcasing pioneer life on the first Saturday of each month.", category: "Educational" },
    { date: "Monthly", title: "Gruene Market Days", location: "Gruene, TX", description: "Third full weekend featuring nearly 100 artisans, live entertainment, and food.", category: "Shopping" },

    // June 2025
    { date: "May 22 - June 8", title: "53rd Annual Kerrville Folk Festival", location: "Kerrville, TX", description: "Long-standing folk music festival with multiple stages, camping, workshops.", category: "Music & Arts" },
    { date: "May 29 - June 1", title: "ATX Television Festival", location: "Austin, TX", description: "Showcasing the past, present, and future of TV with panels, screenings, and Q&As.", category: "Entertainment" },
    { date: "June 1", title: "H-E-B Free First Sunday: Juneteenth", location: "Austin, TX", description: "Special Juneteenth programming at the Bullock Texas State History Museum.", category: "Cultural" },
    { date: "June 6-8", title: "Blanco Lavender Festival", location: "Blanco, TX", description: "Celebrates the lavender harvest with vendors, food, music, and lavender farm tours.", category: "Festival" },
    { date: "June 7", title: "Whiskey, Cigar and Steak Bash", location: "Bankersmith, TX", description: "Themed culinary event for whiskey, cigar, and steak enthusiasts.", category: "Food & Drink" },
    { date: "June 7", title: "Celebrate Comfort 5K Fun Run/Walk", location: "Comfort, TX", description: "Community race and water celebration event.", category: "Sports & Recreation" },
    { date: "June 8-21", title: "Fredericksburg Music Festival and School", location: "Fredericksburg, TX", description: "Classical music performances and educational programs.", category: "Music & Arts" },
    { date: "June 14-15", title: "Driftwood Chiggerfest", location: "Driftwood, TX", description: "Local festival with music and community focus.", category: "Festival" },
    { date: "June 19", title: "Central Texas Juneteenth 2K, Parade & Celebration", location: "Austin, TX", description: "Annual parade and celebration in East Austin.", category: "Cultural" },
    { date: "June 19-21", title: "Stonewall Peach JAMboree & Rodeo", location: "Stonewall, TX", description: "Celebrates the peach harvest with rodeo, music, and peach dishes.", category: "Festival" },
    { date: "June 20", title: "Cello Recital 'Hinges' at Becker Vineyards", location: "Fredericksburg, TX", description: "Classical music performance at a popular winery.", category: "Music & Arts" },
    { date: "June 20", title: "Fredericksburg Cow Cuddling", location: "Fredericksburg, TX", description: "Unique farm experience with therapeutic cow interactions.", category: "Family" },
    { date: "June 20-22", title: "Fredericksburg Trade Days", location: "Fredericksburg, TX", description: "Large outdoor market with antiques, crafts, and more.", category: "Shopping" },
    { date: "June 21", title: "Fredericksburg Lobster Bash", location: "Bankersmith, TX", description: "Seafood culinary event featuring fresh lobster.", category: "Food & Drink" },
    { date: "June 25-29", title: "Austin Asian American Film Festival", location: "Austin, TX", description: "Showcases Asian American filmmakers and perspectives.", category: "Cultural" },
    { date: "June 26-29", title: "Watermelon Thump", location: "Luling, TX", description: "Iconic festival celebrating watermelons with contests, music, and food.", category: "Festival" },
    { date: "June 27", title: "Austin Road Show – Texas Hill Country Wineries", location: "Austin, TX", description: "Wineries come to Austin for a special tasting event.", category: "Wine & Food" },
    { date: "June 28", title: "Texas Testicle Bash", location: "Bankersmith, TX", description: "Unique culinary event featuring local specialties.", category: "Food & Drink" },
    { date: "June 28", title: "Ferrel Ranch Vertical Tasting", location: "Bending Branch Winery", description: "Specific wine tasting event featuring Ursa Cabernet Sauvignon and Tannat.", category: "Wine & Food" },
    { date: "June 29", title: "Austin African American Book Festival", location: "Austin, TX", description: "Free literary event with authors and speakers.", category: "Educational" },

    // July 2025
    { date: "July 3", title: "Hill Country Fun Fest", location: "Kerrville, TX", description: "Community festival with activities and entertainment.", category: "Festival" },
    { date: "July 4", title: "Hill Country Galleria Independence Day Celebration", location: "Bee Cave, TX", description: "Fireworks, music, family activities at the shopping center.", category: "Holiday" },
    { date: "July 4", title: "Kerrville's 4th on the River Festival", location: "Kerrville, TX", description: "Free concert and fireworks celebration.", category: "Holiday" },
    { date: "July 4", title: "Austin Symphony H-E-B July 4th Concert & Fireworks", location: "Austin, TX", description: "Patriotic concert and large fireworks display over Lady Bird Lake.", category: "Holiday" },
    { date: "July 4", title: "La Vernia 4th of July Festival", location: "La Vernia, TX", description: "Community celebration with local activities.", category: "Holiday" },
    { date: "July 11-13", title: "Galleywinter River Jam", location: "New Braunfels, TX", description: "Music festival along the river.", category: "Music & Arts" },
    { date: "July 11 - Aug 16", title: "Zilker Summer Musical", location: "Austin, TX", description: "Free, outdoor musical performances, Thursday-Sunday evenings.", category: "Music & Arts" },
    { date: "July 12", title: "Fredericksburg Crab Bash", location: "Bankersmith, TX", description: "Culinary event featuring fresh crab dishes.", category: "Food & Drink" },
    { date: "July 18", title: "Balcones Heights Jazz Festival", location: "San Antonio, TX", description: "Free outdoor jazz concerts near the Hill Country.", category: "Music & Arts" },
    { date: "July 23", title: "MLS All Star Game", location: "Austin, TX", description: "Major League Soccer event at Q2 Stadium.", category: "Sports" },
    { date: "July 25-27", title: "Classic Game Fest", location: "Austin, TX", description: "Largest retro video game convention in Texas.", category: "Entertainment" },

    // August 2025
    { date: "August 8-9", title: "Beer by the Bay Music Festival", location: "Horseshoe Bay, TX", description: "Music festival with craft beer and lake views.", category: "Music & Arts" },
    { date: "August 12-16", title: "SPAH Harmonica Convention", location: "San Antonio, TX", description: "Annual gathering of harmonica enthusiasts.", category: "Music & Arts" },
    { date: "Mid-August", title: "Gillespie County Fair & Race Meet", location: "Fredericksburg, TX", description: "Horse racing, rodeo, live music, carnival.", category: "Festival" },
    { date: "August 28-31", title: "Central Texas State Fair", location: "Belton, TX", description: "Traditional county fair with rodeo, carnival, and exhibits.", category: "Festival" },
    { date: "August (Various)", title: "Peach Festival & Orchard Events", location: "Fredericksburg/Stonewall", description: "Local orchards hold peach-themed events and picking opportunities.", category: "Family" },

    // September 2025
    { date: "September (Various)", title: "University of Texas Football Season", location: "Austin, TX", description: "Experience the Longhorns in the SEC at DKR Memorial Stadium.", category: "Sports" },
    { date: "September 13", title: "Big Ta' Do Chili Cook-Off Car/Bike Show", location: "Kerrville, TX", description: "Annual chili cook-off and vehicle show.", category: "Food & Auto" },
    { date: "September 19", title: "Cold Waves Austin", location: "Austin, TX", description: "Industrial and electronic music festival.", category: "Music & Arts" },
    { date: "Late Sept - Oct", title: "Dripping Springs Pumpkin Festival", location: "Dripping Springs, TX", description: "Family-friendly fall festival with themed weekends.", category: "Family" },
    { date: "Late Sept", title: "Foxtberfest at 12 Fox Beer Co.", location: "Dripping Springs, TX", description: "Oktoberfest-inspired celebration with beer and games.", category: "Festival" },
    { date: "Late Sept", title: "Uhland Fall Fest", location: "Uhland, TX", description: "Community fall festival with local activities.", category: "Festival" },
    { date: "Mid-Sept - Mid-Nov", title: "Pumpkin Patch at Marble Falls", location: "Marble Falls, TX", description: "Farm activities, mazes, pony rides, and pumpkin patch.", category: "Family" },

    // October 2025
    { date: "October 3-5 & 10-12", title: "Austin City Limits Music Festival", location: "Austin, TX", description: "One of the nation's premier music festivals at Zilker Park.", category: "Music & Arts" },
    { date: "October (First Weekend)", title: "Fredericksburg Oktoberfest", location: "Fredericksburg, TX", description: "Celebrates German heritage with polka, food, beer, and crafts.", category: "Festival" },
    { date: "October (Weekends)", title: "Boo at the Zoo", location: "Austin, TX", description: "Family-friendly Halloween event at Austin Zoo.", category: "Family" },
    { date: "October 17-19", title: "Formula 1 United States Grand Prix", location: "Austin, TX", description: "High-speed racing and major concerts at Circuit of The Americas.", category: "Sports" },
    { date: "October 17-19", title: "Austin String Band Festival", location: "Driftwood, TX", description: "Festival celebrating traditional string band music.", category: "Music & Arts" },
    { date: "October 18", title: "Night Market", location: "Austin, TX", description: "Asian-themed market with food, music, and vendors.", category: "Cultural" },
    { date: "October 23-25", title: "Salmon Lake Bluegrass", location: "Grapeland, TX", description: "Bluegrass music festival near the Hill Country.", category: "Music & Arts" },
    { date: "October 25", title: "Austoberfest", location: "Austin, TX", description: "German heritage celebration at Scholz Garten.", category: "Festival" },
    { date: "Late Oct", title: "Austin Symphony Orchestra Halloween Children's Concert", location: "Austin, TX", description: "Fun, costumed concert for kids.", category: "Family" },
    { date: "Late Oct - Early Nov", title: "Wurstfest", location: "New Braunfels, TX", description: "'A Ten Day Salute To Sausage' - massive German festival.", category: "Festival" },
    { date: "Late Oct - Early Nov", title: "Texas State Arts & Crafts Fair", location: "Ingram, TX", description: "Juried art and craft fair showcasing Texas artists.", category: "Arts & Crafts" },
    { date: "Late Oct - Early Nov", title: "Viva la Vida Fest", location: "Austin, TX", description: "Austin's largest Day of the Dead festival.", category: "Cultural" },

    // November 2025
    { date: "November 1", title: "There's only one 'S' in New Braunfels Festival", location: "Gruene, TX", description: "Local festival with unique name and community spirit.", category: "Festival" },
    { date: "November 1-2", title: "Texas Monthly BBQ Fest", location: "Lockhart, TX", description: "Celebrates the state's best BBQ with live music and demos.", category: "Food" },
    { date: "November 7-16", title: "Wurstfest (Continued)", location: "New Braunfels, TX", description: "Ten-day German festival continues with food, beer, and entertainment.", category: "Festival" },
    { date: "November 14", title: "Downtown Christmas Tree Lighting", location: "Marble Falls, TX", description: "Kicks off the holiday season.", category: "Holiday" },
    { date: "November 14-16", title: "Seismic Dance Event", location: "Austin, TX", description: "Electronic music festival.", category: "Music & Arts" },
    { date: "November 21", title: "Light Up Christmas Parade", location: "Marble Falls, TX", description: "Holiday parade celebration.", category: "Holiday" },
    { date: "November 21-23", title: "Fredericksburg Trade Days", location: "Fredericksburg, TX", description: "Last major market before Christmas.", category: "Shopping" },
    { date: "November 29", title: "Wild Game Dinner", location: "Junction, TX", description: "Unique dinner featuring local wild game.", category: "Food & Drink" },
    { date: "November 29", title: "Mingle & Jingle", location: "Kilgore, TX", description: "Holiday community event.", category: "Holiday" },
    { date: "Mid-Nov - Dec", title: "Lights Spectacular", location: "Johnson City, TX", description: "'Twinkle Town' transforms into a dazzling light display.", category: "Holiday" },
    { date: "Mid-Nov - Jan", title: "Walkway of Lights", location: "Marble Falls, TX", description: "Thousands of lights decorating the lakeside park.", category: "Holiday" },
    { date: "Late Nov - Dec", title: "Christmas Wine Affair Passport", location: "Hill Country Wineries", description: "Special passport for holiday tastings at wineries.", category: "Wine & Food" },
    { date: "Late Nov - Jan", title: "Fredericksburg's Christmas Nights of Lights", location: "Fredericksburg, TX", description: "German-Texas holiday celebrations with light show.", category: "Holiday" },
    { date: "Throughout Nov & Dec", title: "Holidays in Gruene", location: "New Braunfels, TX", description: "Special events, carols, Cowboy Kringle, Jingle Bell Run.", category: "Holiday" },
    { date: "Throughout Nov & Dec", title: "Wimberley Trail of Lights", location: "Wimberley, TX", description: "Extensive light display with walking trails.", category: "Holiday" },
    { date: "Throughout Nov & Dec", title: "Cowboy Capital Christmas", location: "Bandera, TX", description: "Holiday events, parade, and shopping.", category: "Holiday" },

    // December 2025
    { date: "December 4", title: "Christmas Stroll Kick-off Parade", location: "Salado, TX", description: "Kicks off the annual Christmas Stroll.", category: "Holiday" },
    { date: "December 5-7", title: "Festival of Texas Fiddling", location: "Blanco, TX", description: "Celebrates Texas fiddling tradition at Twin Sisters Dance Hall.", category: "Music & Arts" },
    { date: "December 6", title: "Hill Country Chorale Christmas Concert", location: "Kerrville, TX", description: "Local chorale performance with holiday music.", category: "Music & Arts" },
    { date: "December 6", title: "Breakfast with Santa", location: "Marble Falls, TX", description: "Kid-friendly holiday event.", category: "Family" },
    { date: "December 7", title: "Christmas Bazaar", location: "Luckenbach, TX", description: "Holiday shopping, Santa photos, and music.", category: "Holiday" },
    { date: "December 7", title: "Christmas on Mercer Street", location: "Dripping Springs, TX", description: "Holiday market, activities, and tree lighting.", category: "Holiday" },
    { date: "December 31", title: "Austin's New Year", location: "Austin, TX", description: "Free, family-friendly celebration downtown with music and fireworks.", category: "Holiday" },
    { date: "December (Various)", title: "The Winter Wonderettes", location: "Marble Falls, TX", description: "Holiday musical production at Hill Country Community Theatre.", category: "Music & Arts" },
    { date: "Throughout December", title: "Christmas in Comfort - Crumbling Castle", location: "Comfort, TX", description: "Holiday light park with thousands of wrapped trees.", category: "Holiday" },
    { date: "Throughout December", title: "Eisbahn Outdoor Ice Skating", location: "Fredericksburg, TX", description: "Outdoor ice skating rink in Marktplatz.", category: "Holiday" },
    { date: "Throughout December", title: "Sights & Sounds of Christmas", location: "San Marcos, TX", description: "Winter wonderland with ice skating and holiday entertainment.", category: "Holiday" },
    { date: "Late Nov - Dec", title: "Light Park at Circuit of the Americas", location: "Austin, TX", description: "Large drive-through holiday light experience.", category: "Holiday" }
  ];

  const categories = ["All", "Music & Arts", "Festival", "Holiday", "Food", "Wine & Food", "Food & Drink", "Family", "Sports", "Shopping", "Arts & Crafts", "Cultural", "Educational", "Entertainment", "Sports & Recreation", "Food & Auto"];

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