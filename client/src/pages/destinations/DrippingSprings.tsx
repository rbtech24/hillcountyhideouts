import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const DrippingSprings = () => {
  return (
    <>
      <Helmet>
        <title>Dripping Springs, Texas - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Discover Dripping Springs, the Gateway to Hill Country - home to stunning natural wonders, craft distilleries, breweries, and outdoor adventures just minutes from Austin."
        />
        <meta name="keywords" content="Dripping Springs Texas, Hamilton Pool, distilleries, Gateway to Hill Country, wedding capital, Texas Hill Country" />
        <meta property="og:title" content="Dripping Springs, Texas - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Discover Dripping Springs, the Gateway to Hill Country - home to stunning natural wonders, craft distilleries, breweries, and outdoor adventures just minutes from Austin."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/destinations/drippingsprings" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543651425-3280dea21d67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading max-w-4xl">
                Dripping Springs, Texas
              </h1>
              <p className="text-xl text-white max-w-2xl">
                The Gateway to Hill Country - where natural wonders meet craft spirits and small-town charm
              </p>
            </div>
          </div>
        </div>
        
        {/* Introduction */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading text-center">Welcome to Dripping Springs</h2>
            <p className="text-lg text-darkText mb-6">
              Located just 25 miles west of Austin, Dripping Springs serves as the eastern gateway to the Texas Hill Country. This rapidly growing community has transformed from a quiet crossroads to a thriving small town while maintaining its rural charm and natural beauty. Named for the original dripping springs that provided water to early settlers, this picturesque area combines small-town hospitality with convenient access to modern amenities.
            </p>
            <p className="text-lg text-darkText mb-6">
              In recent years, Dripping Springs has gained recognition for several distinctive characteristics: its collection of award-winning distilleries and breweries, stunning natural attractions including Hamilton Pool Preserve, and its status as the "Wedding Capital of Texas" thanks to numerous scenic venues scattered throughout the surrounding countryside.
            </p>
            <p className="text-lg text-darkText">
              Whether you're seeking outdoor adventures, craft beverage experiences, wedding venues, or simply a relaxing Hill Country getaway within easy reach of Austin, Dripping Springs offers the perfect blend of natural beauty, local culture, and modern conveniences.
            </p>
          </div>
        </div>
        
        {/* Natural Attractions */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Natural Wonders</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Hamilton Pool */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1542326891-50b14204e1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Hamilton Pool Preserve" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Hamilton Pool Preserve</h3>
                <p className="text-darkText mb-4">
                  Perhaps the area's most iconic natural landmark, Hamilton Pool Preserve features a stunning natural pool created thousands of years ago when the dome of an underground river collapsed. The result is a magical grotto with a 50-foot waterfall that cascades over limestone outcroppings into a jade green pool surrounded by steep canyon walls.
                </p>
                <p className="text-darkText mb-4">
                  Beyond its breathtaking beauty, the preserve is an important habitat for several species of birds and native plants. A quarter-mile trail leads from the parking area down to the pool, offering spectacular views along the way. The preserve also features additional hiking trails that allow visitors to explore the canyon and creek.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">Visitor Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Advance reservations are required year-round and often book out months ahead</li>
                    <li>Swimming is permitted when water quality conditions allow (typically summer months)</li>
                    <li>The trail to the pool is steep and rocky in places</li>
                    <li>No pets are allowed in the preserve</li>
                    <li>Morning reservations are recommended for photography and avoiding crowds</li>
                  </ul>
                </div>
              </div>
              
              {/* Pedernales Falls */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1543651425-3280dea21d67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Pedernales Falls State Park" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Pedernales Falls State Park</h3>
                <p className="text-darkText mb-4">
                  Just a short drive from Dripping Springs, Pedernales Falls State Park showcases the raw beauty of the Texas Hill Country. The park's centerpiece is a series of dramatic limestone "steps" where the Pedernales River cascades over tilted layers of limestone, creating a spectacular landscape of falls, pools, and rapids stretching for nearly half a mile.
                </p>
                <p className="text-darkText mb-4">
                  Beyond the falls themselves, the 5,212-acre park offers over 20 miles of hiking trails through diverse terrain, from riverside paths to hilltop vistas. Wildlife viewing opportunities abound, with white-tailed deer, armadillos, and numerous bird species frequently spotted. The park also offers camping, mountain biking, horseback riding, and fishing opportunities.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">Visitor Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Day passes can be reserved in advance, which is recommended for summer weekends</li>
                    <li>Swimming is allowed in designated areas (not at the falls themselves)</li>
                    <li>The park features both primitive and developed campsites</li>
                    <li>Flash flooding can occur with little warning - always check weather forecasts</li>
                    <li>The falls viewing area is accessible via a moderate 0.5-mile trail</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">More Natural Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Westcave Outdoor Discovery Center</h4>
                  <p className="text-darkText mb-3">
                    Located near Hamilton Pool, this 76-acre preserve features another stunning grotto and waterfall, accessible only through guided tours. The preserve offers an excellent educational experience, with knowledgeable guides explaining the geology, history, and ecology of the area.
                  </p>
                  <p className="text-darkText">
                    In addition to the grotto tours, the center features an educational facility with interactive exhibits and several self-guided nature trails through different Hill Country habitats. The preserve is an important conservation area and bird sanctuary, with over 140 species recorded.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Milton Reimers Ranch Park</h4>
                  <p className="text-darkText mb-3">
                    This 2,427-acre park along the Pedernales River offers a different experience than its nearby neighbors. Known for its world-class rock climbing opportunities on limestone bluffs, Reimers Ranch also features excellent swimming areas, mountain biking trails, and some of the best fishing spots in Central Texas.
                  </p>
                  <p className="text-darkText">
                    The park's diverse landscape includes riverside beaches, woodland areas, and open meadows that burst with wildflowers in spring. Stargazing opportunities are excellent due to minimal light pollution, and the park occasionally hosts night sky viewing events.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Charro Ranch Park</h4>
                  <p className="text-darkText">
                    This 64-acre natural area within Dripping Springs city limits offers easy access to nature with nearly 2 miles of walking trails. The park preserves native Hill Country habitat and features interpretive signage about local flora and fauna. With its convenient location and gentle terrain, Charro Ranch Park is perfect for a quick nature break or family outing.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Founders Memorial Park</h4>
                  <p className="text-darkText">
                    Located in the heart of Dripping Springs, this community park features the town's namesake springs, which still drip today. The park offers walking paths, sports facilities, and a swimming pool, making it a popular gathering place for locals. Historical markers throughout the park tell the story of the town's founding and development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Craft Beverage Scene */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Craft Beverage Trail</h2>
          
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">The Spirit of Dripping Springs</h3>
              <p className="text-lg text-darkText mb-4">
                Dripping Springs has emerged as one of Texas' premier craft beverage destinations, with an impressive collection of distilleries, breweries, and wineries scattered throughout the area. The region's pure limestone-filtered water, which once attracted early settlers, now serves as the foundation for award-winning spirits and brews.
              </p>
              <p className="text-lg text-darkText mb-6">
                Many of these establishments are set on picturesque properties with stunning Hill Country views, creating experiences that go beyond tasting to include tours, live music, food offerings, and special events. The craft beverage scene has become a cornerstone of Dripping Springs' identity and a major draw for visitors from Austin and beyond.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1514218953589-2d7d87350f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Dripping Springs Distillery" 
                  className="w-full h-60 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Craft Beer" 
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1514218953589-2d7d87350f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Distilleries" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Distilleries</h3>
                <p className="text-darkText mb-4">
                  Dripping Springs has earned a reputation as a hub for craft spirits, with several award-winning distilleries calling the area home. These range from large operations with national distribution to small-batch artisanal producers focused on unique flavors and local ingredients.
                </p>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li><span className="font-bold">Treaty Oak Distilling</span> - Expansive 28-acre ranch featuring whiskey and gin production, restaurant, and events. Their flagship Ghost Hill Bourbon is made with Texas-grown grain and aged in the Hill Country climate, giving it a distinctive character. The property includes Alice's Restaurant serving elevated barbecue, multiple tasting areas, a cocktail laboratory, and regular live music on their sprawling grounds. Tours take you through their grain-to-glass process and finish with guided tastings of their award-winning spirits.</li>
                  <li><span className="font-bold">Deep Eddy Vodka</span> - Known for natural fruit-infused vodkas with a modern tasting room and tour facility. Founded in 2010 and named after the historic Deep Eddy swimming hole in Austin, this distillery has grown into one of the largest craft vodka producers in the country. Their distillery offers educational tours showcasing their 10-times distillation process and natural flavor infusion techniques. The stylish tasting room serves creative cocktails featuring their Ruby Red Grapefruit, Sweet Tea, and Lemon vodka varieties.</li>
                  <li><span className="font-bold">Dripping Springs Distilling</span> - Family-owned distillery producing artisanal vodka and gin using traditional copper pot stills and water from the local limestone aquifer. Their handcrafted approach includes using non-GMO grain and a proprietary filtration process involving Swedish activated carbon. The intimate tasting room offers flights of their spirits and craft cocktails in a relaxed setting. Don't miss their Orange Peel vodka and their artisanal gin featuring a unique blend of botanicals including lavender and cardamom.</li>
                  <li><span className="font-bold">Desert Door Distillery</span> - Texas' first sotol distillery, featuring a stylish tasting room with Southwestern design elements. Sotol, a cousin to tequila and mezcal, is distilled from the Desert Spoon plant native to West Texas. The founders revived this historic Texas spirit, creating both a traditional sotol and aged varieties. Their striking blue bottles have become iconic, and their tasting room offers a sophisticated experience with cocktails that showcase this unique spirit. The outdoor patio area features native landscaping and regular events.</li>
                  <li><span className="font-bold">Frog Pond Distillery</span> - Small-batch operation with innovative spirits including their signature Toad vodka and rum varieties. This newer addition to the Dripping Springs distillery scene embraces experimentation alongside traditional methods. Their charming tasting room has a playful aesthetic that matches their name, and visitors can enjoy intimate tastings where they often meet the distillers themselves. Seasonal fruit-infused spirits using local ingredients make this a unique stop on the distillery trail.</li>
                  <li><span className="font-bold">Kooper Family Whiskey</span> - Specializing in rye whiskey created using traditional methods and a passion for craftsmanship. Though they don't offer regular public tours, their whiskeys are featured at many local establishments, and they participate in regional tasting events. Their 100% rye whiskey has won multiple awards for its exceptional quality and distinctive flavor profile that reflects Texas terroir.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Breweries" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Breweries</h3>
                <p className="text-darkText mb-4">
                  The craft beer scene in Dripping Springs offers creative brews in settings that range from intimate taprooms to sprawling beer gardens with Hill Country views. Many breweries emphasize local ingredients and sustainable practices while creating distinctive flavors that capture the spirit of the region.
                </p>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li><span className="font-bold">Jester King Brewery</span> - Farmhouse brewery specializing in wild ales on a 165-acre ranch. This world-renowned brewery focuses on spontaneous fermentation and barrel aging, creating complex, terroir-driven beers that reflect the Hill Country environment. The sprawling property includes hiking trails, a working farm with goats and other animals, and a rustic tasting room in a converted barn. Their wood-fired pizza restaurant uses ingredients grown on-site, and weekend visitors can enjoy tours of the brewing facility and farmland. Special bottle releases draw beer enthusiasts from across the country.</li>
                  <li><span className="font-bold">Vista Brewing</span> - Farm-brewery with beautiful grounds, restaurant, and live music on a 21-acre property in the Dripping Springs countryside. Their brewing philosophy centers on balance and drinkability, with a core lineup that includes European-inspired lagers and ales alongside limited barrel-aged offerings. The on-site restaurant, Vista Brew & Food, features farm-to-table cuisine using ingredients from their own gardens and local producers. Their spacious outdoor area includes native landscaping, a stage for live music performances, and family-friendly spaces. Their honey blonde ale uses honey from beehives maintained on the property.</li>
                  <li><span className="font-bold">Ghost Note Brewing</span> - Small craft brewery with rotating taps and food trucks in a casual, intimate setting. This newer addition to the area's brewing scene has quickly built a reputation for experimental IPAs and creative small-batch offerings that regularly rotate. The taproom's industrial-chic design creates a cozy atmosphere for sampling their ever-changing lineup. Weekend visitors can enjoy live music on the covered patio while sampling freshly brewed beers that often push the boundaries of traditional styles. Different food trucks visit regularly, providing diverse dining options.</li>
                  <li><span className="font-bold">Family Business Beer Co.</span> - Family-friendly brewery with spacious grounds and playground founded by actor Jensen Ackles and family. Set on a beautiful property with heritage oak trees, this brewery combines serious craft beer with a relaxed, welcoming atmosphere perfect for families. Their diverse beer lineup ranges from accessible blondes and lagers to complex stouts and IPAs. The large outdoor area includes a playground, games, and plenty of space for children to run while adults enjoy craft beverages. The on-site Jep's Southern Roots food truck serves Cajun-inspired comfort food that pairs perfectly with their beers.</li>
                  <li><span className="font-bold">12 Fox Beer Co.</span> - Veteran-owned brewery with an emphasis on German styles set on a picturesque property with Hill Country views. Founded by two Army veterans, this brewery focuses on traditional German brewing techniques while incorporating Texas influences. Their biergarten-style outdoor space features communal tables, string lights, and a relaxed atmosphere that encourages conversation. Regular events include trivia nights, live music, and special military appreciation gatherings. Their authentic Hefeweizen and Altbier have won awards for their faithful interpretation of classic German styles.</li>
                  <li><span className="font-bold">Fitzhugh Brewing</span> - Brewery and beer garden located in the heart of Dripping Springs' brewery district on Fitzhugh Road. Their spacious indoor/outdoor facility features a modern taproom with views into the brewing area and an expansive beer garden with ample seating. Their brewing program balances approachable core beers with creative seasonal offerings, often incorporating local ingredients like Hill Country honey and peaches. The on-site Challenger food truck serves elevated comfort food designed to complement their beer selection. Fire pits and covered areas make this a year-round destination regardless of weather.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Wineries" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Wineries</h3>
                <p className="text-darkText mb-4">
                  While not as numerous as the breweries and distilleries, Dripping Springs wineries offer excellent tastings in scenic settings. Many focus on varieties that thrive in the Texas climate, creating distinctive wines that reflect the unique terroir of the Hill Country.
                </p>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li><span className="font-bold">Solaro Estate Winery</span> - Award-winning winery with tasting room and vineyard views</li>
                  <li><span className="font-bold">Sidecar Tasting Room</span> - Urban tasting room featuring wines from Bell Springs Winery</li>
                  <li><span className="font-bold">Westcave Cellars</span> - Small production winery with picturesque setting</li>
                  <li><span className="font-bold">Hawks Shadow Winery</span> - Boutique winery with stunning views and Old World style wines</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Planning Your Craft Beverage Tour</h3>
              <p className="text-darkText mb-4">
                With so many outstanding options, planning a craft beverage tour can be overwhelming. Here are some tips to make the most of your experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-darkText">
                <li>Limit yourself to 3-4 establishments per day to fully appreciate each one</li>
                <li>Designate a driver or book a tour service - several companies offer guided tours of the area's distilleries and breweries</li>
                <li>Check websites before visiting, as many venues have limited hours or require reservations for tours</li>
                <li>Many establishments host food trucks or have on-site restaurants, making meal planning easier</li>
                <li>Look for special events like live music, release parties, or pairing dinners</li>
                <li>Consider staying in Dripping Springs to fully enjoy the experience without worrying about driving back to Austin</li>
                <li>Sunday-Thursday visits generally offer a more relaxed experience with more personal attention</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Wedding Capital */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Wedding Capital of Texas</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200" 
                      alt="Wedding Venue" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-primary mb-3 font-heading">A Destination for Celebrations</h3>
                    <p className="text-darkText mb-4">
                      Dripping Springs has earned the title "Wedding Capital of Texas" thanks to its concentration of stunning venues set against the backdrop of the Hill Country's natural beauty. From rustic barns and elegant estates to vineyard settings and reimagined ranches, the area offers more than 35 wedding venues within a 15-mile radius.
                    </p>
                    <p className="text-darkText mb-4">
                      What makes Dripping Springs particularly appealing for weddings is the combination of scenic beauty, proximity to Austin, and the range of styles and price points available. Couples can choose from intimate settings for small gatherings to grand spaces capable of hosting hundreds of guests.
                    </p>
                    <p className="text-darkText">
                      Beyond the venues themselves, Dripping Springs has developed a robust wedding industry ecosystem, with local vendors specializing in catering, floral design, photography, accommodations, and transportation. This concentration of wedding professionals ensures couples can create their dream celebration with the support of experienced local experts.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Venue Styles</h3>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li><span className="font-bold">Rustic Elegance</span> - Renovated barns and farmhouses blending country charm with upscale amenities</li>
                    <li><span className="font-bold">Hill Country Modern</span> - Contemporary venues with clean lines and large windows showcasing natural views</li>
                    <li><span className="font-bold">Vineyard Settings</span> - Wineries offering ceremony and reception spaces among the vines</li>
                    <li><span className="font-bold">Ranch Properties</span> - Working ranches and equestrian facilities converted for events</li>
                    <li><span className="font-bold">Garden Venues</span> - Properties featuring manicured grounds, wildflower meadows, and outdoor ceremony spaces</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Popular Venues</h3>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li><span className="font-bold">Camp Lucy</span> - Luxury resort with multiple venue options and on-site accommodations</li>
                    <li><span className="font-bold">Vista West Ranch</span> - Rustic-elegant venue with Hill Country views</li>
                    <li><span className="font-bold">Ma Maison</span> - French-inspired estate with multiple ceremony locations</li>
                    <li><span className="font-bold">The Wildflower Barn</span> - Charming, budget-friendly venue surrounded by nature</li>
                    <li><span className="font-bold">The Terrace Club</span> - Modern venue with panoramic views</li>
                    <li><span className="font-bold">Prospect House</span> - Architecturally stunning contemporary venue</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Beyond Weddings</h3>
                <p className="text-darkText mb-4">
                  While weddings are the primary focus, Dripping Springs venues also host a variety of other events throughout the year:
                </p>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Corporate retreats and team-building events</li>
                  <li>Family reunions and milestone celebrations</li>
                  <li>Charity galas and fundraisers</li>
                  <li>Photography workshops and styled shoots</li>
                  <li>Wellness retreats and yoga gatherings</li>
                  <li>Music events and small festivals</li>
                </ul>
                <p className="text-darkText mt-4">
                  Even if you're not planning a wedding, many venues offer tours or host public events that allow visitors to experience these beautiful properties. Some venues have also expanded to offer vacation rentals, allowing guests to stay on-site and fully immerse themselves in the Hill Country experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dining and Shopping */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Dining and Shopping</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Dining */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Dining in Dripping Springs" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Local Flavors</h3>
              <p className="text-lg text-darkText mb-4">
                Dripping Springs' dining scene has evolved alongside its growth, offering everything from Texas barbecue and comfort food to innovative farm-to-table cuisine. Many establishments emphasize locally sourced ingredients and Hill Country flavors, creating distinctive dining experiences that reflect the area's culinary heritage.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Restaurant Highlights</h4>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Tillie's</span> - Sophisticated global cuisine in a transported Vietnamese town hall building at Camp Lucy</li>
                  <li><span className="font-bold">The Creek Road Café</span> - Local favorite serving upscale comfort food in a cozy setting</li>
                  <li><span className="font-bold">Rolling in Thyme & Dough</span> - Artisan bakery and café known for breakfast and lunch</li>
                  <li><span className="font-bold">Pieous</span> - Acclaimed for sourdough pizzas, pastrami, and house-made desserts</li>
                  <li><span className="font-bold">Proof & Cooper</span> - Elevated bar food with craft cocktails and outdoor seating</li>
                  <li><span className="font-bold">Homespun Kitchen & Bar</span> - Farm-to-table cuisine with emphasis on local ingredients</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Nearby Dining Destinations</h4>
                <p className="text-darkText mb-3">
                  Just outside Dripping Springs, several iconic Hill Country restaurants draw visitors from throughout Central Texas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Salt Lick BBQ</span> - Legendary Texas barbecue in a historic setting with picturesque grounds</li>
                  <li><span className="font-bold">Ghost Hill Restaurant</span> - at Vista Brewing, featuring seasonal ingredients grown on-site</li>
                  <li><span className="font-bold">Alice's Restaurant</span> - at Treaty Oak Distilling, offering barbecue and distillery-inspired cuisine</li>
                  <li><span className="font-bold">Jester King Kitchen</span> - Farm-brewery restaurant with wood-fired pizzas and locally sourced ingredients</li>
                </ul>
              </div>
            </div>
            
            {/* Shopping */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Shopping in Dripping Springs" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Shopping Experiences</h3>
              <p className="text-lg text-darkText mb-4">
                Shopping in Dripping Springs offers a refreshing alternative to chain stores and malls. The town's retail landscape focuses on locally owned businesses, artisan products, and unique finds that reflect the character of the Hill Country.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Mercer Street</h4>
                <p className="text-darkText mb-3">
                  Historic Mercer Street serves as Dripping Springs' main shopping district, with a growing collection of boutiques, specialty shops, and galleries housed in renovated buildings. The walkable street creates a pleasant shopping experience with plenty of character:
                </p>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Vintage Soul</span> - Eclectic home décor, gifts, and women's clothing</li>
                  <li><span className="font-bold">The Mercantile</span> - Curated collection of Texas-made products and gifts</li>
                  <li><span className="font-bold">Urban Ranch</span> - Western-inspired clothing and home accessories</li>
                  <li><span className="font-bold">Hill Country Bride</span> - Bridal boutique reflecting the area's wedding industry</li>
                  <li><span className="font-bold">Breed & Co.</span> - Hardware store with extensive gift and homeware sections</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Specialty Food and Drink</h4>
                <p className="text-darkText mb-3">
                  Dripping Springs is home to several specialty food producers and retailers that showcase the flavors of the Hill Country:
                </p>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Texas Hill Country Olive Company</span> - Olive oil producer with tasting room and gift shop</li>
                  <li><span className="font-bold">Dripping Springs Farmers Market</span> - Weekly market featuring local produce and artisanal products</li>
                  <li><span className="font-bold">Creekhaven Honey Apiary</span> - Local honey producer with observation hive and tastings</li>
                  <li><span className="font-bold">The Barber Shop</span> - Historic barbershop transformed into a craft beer bar with local brews</li>
                  <li><span className="font-bold">Farmhouse Delivery</span> - Local service delivering farm-fresh products from Hill Country producers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Accommodation */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Where to Stay</h2>
            <p className="text-lg text-darkText max-w-4xl mx-auto text-center mb-10">
              Accommodations in Dripping Springs emphasize unique experiences that connect visitors with the beauty and character of the Hill Country. From luxury resorts to quaint cabins, the options reflect the area's distinctive blend of rustic charm and modern amenities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Luxury Resorts" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Luxury Resorts</h3>
                  <p className="text-darkText mb-4">
                    Several wedding venues and properties in the area have developed luxury accommodations that offer upscale amenities while maintaining a connection to the natural surroundings. These resorts often feature swimming pools, on-site dining, and concierge services.
                  </p>
                  <p className="text-darkText mb-4">
                    Camp Lucy is the area's premier luxury resort, with elegant lodge rooms and standalone cottages set on a beautiful property. The resort features an on-site restaurant, swimming pool, and various activities. Other upscale options include Lucky Arrow Retreat with its modern "yurts" and cabins.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Upscale</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Full Service</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Wedding Friendly</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Cabins and Cottages" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Cabins and Cottages</h3>
                  <p className="text-darkText mb-4">
                    For a more intimate connection with the Hill Country landscape, numerous cabins and cottages are scattered throughout the Dripping Springs area. These range from rustic retreats to sophisticated small homes with luxury amenities like hot tubs, fire pits, and outdoor kitchens.
                  </p>
                  <p className="text-darkText mb-4">
                    Many properties feature spectacular views, creekside locations, or wooded settings that provide privacy and tranquility. These accommodations are particularly popular with couples seeking romantic getaways or small families wanting space to spread out.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Private</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Romantic</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Nature Setting</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/src/assets/hillcountry cabins.jpg" 
                  alt="Hill Country Bridge and Waterway" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Vacation Rentals</h3>
                  <p className="text-darkText mb-4">
                    For families or groups, larger vacation homes provide space and amenities for extended stays. Many offer multiple bedrooms, full kitchens, and outdoor entertainment areas. These properties range from renovated farmhouses to modern Hill Country designs.
                  </p>
                  <p className="text-darkText mb-4">
                    Several ranches in the area offer guest houses or converted barns that provide an authentic Texas experience. Some properties even include experiences like horseback riding, farm animal interactions, or guided nature walks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Family-Friendly</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Spacious</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Extended Stays</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Booking Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText mb-6">
                  <li>Weekends often book months in advance, especially during spring and fall</li>
                  <li>Many properties have minimum stay requirements (typically 2 nights on weekends)</li>
                  <li>For the best rates and availability, consider mid-week stays</li>
                  <li>Wedding weekends in the area can affect availability and rates</li>
                  <li>Properties with water features (creeks, pools, hot tubs) tend to book first</li>
                  <li>If visiting during summer, prioritize accommodations with good air conditioning</li>
                  <li>Many properties are pet-friendly, but always confirm policies before booking</li>
                </ul>
                <div className="text-center">
                  <Link href="/vacationrentals" className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors">
                    Browse our Dripping Springs cabin rentals <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Events and Festivals */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Events and Festivals</h2>
          <p className="text-lg text-darkText max-w-4xl mx-auto text-center mb-10">
            Throughout the year, Dripping Springs hosts events and festivals that celebrate the community's heritage, natural beauty, and local products. These gatherings provide visitors with opportunities to experience the town's unique character and connect with local culture.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Annual Events</h3>
              <ul className="list-disc list-inside space-y-2 text-darkText">
                <li><span className="font-bold">Dripping Springs Founders Day Festival (April)</span> - A three-day celebration of the town's heritage featuring a parade, live music, food vendors, arts and crafts, and a carnival. The festival has been a tradition since 1987.</li>
                <li><span className="font-bold">Dripping with Taste Wine, Food & Arts Festival (September)</span> - Showcasing the area's wineries, distilleries, breweries, and restaurants alongside local artists. The event features tastings, culinary demonstrations, and live entertainment.</li>
                <li><span className="font-bold">Songwriters Festival (October)</span> - A weekend celebrating the art of songwriting with performances by established and emerging artists across multiple venues in town.</li>
                <li><span className="font-bold">Christmas on Mercer Street (December)</span> - A holiday celebration featuring a lighted parade, visits with Santa, food vendors, and activities for all ages.</li>
                <li><span className="font-bold">Dripping Springs Farmers Market</span> - Held every Wednesday year-round, featuring local produce, artisanal foods, and handcrafted items.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Seasonal Activities</h3>
              <div className="space-y-4 text-darkText">
                <div>
                  <h4 className="font-bold text-primary mb-1">Spring (March-May)</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Wildflower viewing along scenic drives</li>
                    <li>Founders Day Festival</li>
                    <li>Spring concert series at various venues</li>
                    <li>Outdoor markets and pop-up events</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Summer (June-August)</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Swimming at Hamilton Pool (reservation required)</li>
                    <li>Outdoor concerts at breweries and distilleries</li>
                    <li>Pedernales Falls State Park activities</li>
                    <li>Fourth of July celebrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Fall (September-November)</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Dripping with Taste Festival</li>
                    <li>Songwriters Festival</li>
                    <li>Harvest festivals at local farms</li>
                    <li>Pumpkin patches and fall activities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Winter (December-February)</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Christmas on Mercer Street</li>
                    <li>Holiday light displays</li>
                    <li>New Year's Eve events at local venues</li>
                    <li>Winter hiking with fewer crowds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Venue Events</h3>
              <p className="text-darkText mb-4">
                Beyond town-wide festivals, many local businesses and venues host regular events that visitors can enjoy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-darkText">
                <li><span className="font-bold">Live Music</span> - Breweries, distilleries, and restaurants frequently host live music, particularly on weekends. Treaty Oak Distilling, Vista Brewing, and Jester King Brewery all have regular music schedules.</li>
                <li><span className="font-bold">Maker Workshops</span> - Various venues offer workshops in crafts like candle making, leatherworking, and floral design. Check with the Visitors Bureau for current offerings.</li>
                <li><span className="font-bold">Culinary Events</span> - From farm-to-table dinners to cooking classes, food-focused events happen regularly at venues throughout the area.</li>
                <li><span className="font-bold">Fitness Activities</span> - Yoga in the vineyards, group hikes, and other wellness events are increasingly popular at local properties.</li>
                <li><span className="font-bold">Art Shows and Markets</span> - Pop-up markets and art shows occur regularly, especially during spring and fall.</li>
              </ul>
              <p className="text-darkText mt-4 italic text-center">
                "Check the Dripping Springs Visitors Bureau website or social media for up-to-date event listings during your visit."
              </p>
            </div>
          </div>
        </div>
        
        {/* Getting There and Around */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Getting There and Around</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Location and Access</h3>
                <p className="text-darkText mb-4">
                  Dripping Springs' location just west of Austin makes it one of the most accessible Hill Country destinations. The town sits at the crossroads of several scenic routes that connect Austin to the heart of the Hill Country.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">By Car:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                      <li><span className="font-bold">From Austin:</span> 25 miles west (approximately 30-40 minutes) via US-290 W</li>
                      <li><span className="font-bold">From San Antonio:</span> 70 miles northeast (approximately 1.25 hours) via I-35 N and US-281 N</li>
                      <li><span className="font-bold">From Houston:</span> 175 miles west (approximately 3 hours) via US-290 W</li>
                      <li><span className="font-bold">From Dallas/Fort Worth:</span> 225 miles south (approximately 3.5 hours) via I-35 S</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Nearest Airports:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                      <li>Austin-Bergstrom International Airport (AUS) - 35 miles (approximately 45 minutes)</li>
                      <li>San Antonio International Airport (SAT) - 70 miles (approximately 1.25 hours)</li>
                      <li>Car rental is highly recommended for visiting Dripping Springs</li>
                      <li>Limited shuttle services are available from Austin with advance reservation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Getting Around Dripping Springs</h3>
                <p className="text-darkText mb-4">
                  Dripping Springs and its surrounding attractions are spread out, making a car essential for most visitors. The town itself has a small, walkable historic district along Mercer Street, but most natural attractions, distilleries, and wedding venues require driving.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Transportation Options:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText">
                      <li>Personal vehicle (recommended)</li>
                      <li>Tour services for distillery/brewery visits</li>
                      <li>Limited rideshare availability (may require wait times)</li>
                      <li>Bicycle rentals for local exploration (limited options)</li>
                      <li>Some accommodations offer shuttle services to specific attractions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Distances from Town Center:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText">
                      <li>Hamilton Pool Preserve - 12 miles</li>
                      <li>Pedernales Falls State Park - 20 miles</li>
                      <li>Treaty Oak Distilling - 5 miles</li>
                      <li>Jester King Brewery - 8 miles</li>
                      <li>Salt Lick BBQ - 13 miles</li>
                      <li>Austin city limits - 20 miles</li>
                    </ul>
                  </div>
                </div>
                <p className="text-darkText italic text-center">
                  "The drive between attractions is part of the Dripping Springs experience—winding roads through rolling hills showcase the beauty of the Hill Country landscape."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nearby Destinations */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Day Trips from Dripping Springs</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-darkText mb-8 text-center">
              Dripping Springs' position as the "Gateway to Hill Country" makes it an ideal base for exploring the region. These nearby destinations offer perfect day-trip opportunities, allowing you to return to your Dripping Springs accommodation each evening.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Austin (25 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>State Capitol tours</li>
                  <li>Barton Springs Pool</li>
                  <li>South Congress shopping and dining</li>
                  <li>Live music venues</li>
                  <li>Lady Bird Lake activities</li>
                  <li>Museum and gallery visits</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Fredericksburg (50 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Historic Main Street shopping</li>
                  <li>National Museum of the Pacific War</li>
                  <li>Enchanted Rock State Natural Area</li>
                  <li>Wine Road 290 wineries</li>
                  <li>German heritage and cuisine</li>
                  <li>Wildseed Farms</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Wimberley (20 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Blue Hole Regional Park</li>
                  <li>Jacob's Well Natural Area</li>
                  <li>Wimberley Square shopping</li>
                  <li>Market Days (first Saturday, March-December)</li>
                  <li>EmilyAnn Theatre & Gardens</li>
                  <li>Cypress Creek Nature Preserve</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Johnson City (25 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>LBJ Ranch and National Historical Park</li>
                  <li>Pedernales Falls State Park</li>
                  <li>Science Mill interactive museum</li>
                  <li>Taste wine along 290 Wine Road</li>
                  <li>Exotic resorts and animal encounters</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Driftwood (10 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Salt Lick BBQ</li>
                  <li>Driftwood Estate Winery</li>
                  <li>Duchman Family Winery</li>
                  <li>Vista Brewing</li>
                  <li>Solaro Estate Winery</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Blanco (30 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Blanco State Park</li>
                  <li>Real Ale Brewing Company</li>
                  <li>Historic Blanco County Courthouse</li>
                  <li>Blanco Lavender Festival (June)</li>
                  <li>Blanco River activities</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/destinations" className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors">
              Explore more Hill Country destinations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrippingSprings;