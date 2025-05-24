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
