import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

const EventsSection = () => {
  const featuredEvents = [
    {
      date: "June 6-8",
      title: "Blanco Lavender Festival",
      location: "Blanco, TX",
      description: "Celebrates Blanco as the 'Lavender Capital of Texas.' Enjoy live music, specialty foods, regional wines, local beer, and artisan vendors. Free admission.",
      category: "Festival"
    },
    {
      date: "July 4",
      title: "Kerrville's 4th on the River Festival",
      location: "Kerrville, TX",
      description: "A highly attended free concert celebrating American Independence.",
      category: "Holiday"
    },
    {
      date: "October 3-5 & 10-12",
      title: "Austin City Limits Music Festival",
      location: "Austin, TX",
      description: "One of the country's largest music festivals, featuring over 140 musical acts on eight stages over two weekends.",
      category: "Music & Arts"
    },
    {
      date: "November 7-16",
      title: "Wurstfest",
      location: "New Braunfels, TX",
      description: "The 'Old World' celebration with German food, music, dancing, carnival rides, German beer, and Alpine entertainment.",
      category: "Festival"
    },
    {
      date: "Nov 26 - Jan 6",
      title: "Fredericksburg's Christmas Nights of Lights",
      location: "Fredericksburg, TX",
      description: "German Christmas traditions with Texas hospitality, featuring an audio program and community Christmas tree lighting.",
      category: "Holiday"
    },
    {
      date: "December 7",
      title: "Christmas Bazaar",
      location: "Luckenbach, TX",
      description: "Family photos with Santa, Christmas tree lighting, shopping, arts & crafts, and all-day Christmas music.",
      category: "Holiday"
    }
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            Upcoming Hill Country Events
          </h2>
          <p className="text-xl text-darkText max-w-3xl mx-auto">
            From world-class music festivals to charming local celebrations, discover the incredible events that make the Texas Hill Country special
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredEvents.map((event, index) => (
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
              
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                {event.category}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/events" onClick={scrollToTop}>
            <button className="bg-accent hover:bg-primary text-white font-accent font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center">
              View All Events <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;