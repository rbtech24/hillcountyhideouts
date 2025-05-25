import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const NewBraunfels = () => {
  return (
    <>
      <Helmet>
        <title>New Braunfels, Texas - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Discover New Braunfels - where German heritage meets Texas rivers. Explore Gruene Historic District, float the Guadalupe and Comal Rivers, and enjoy small-town charm with big adventure."
        />
        <meta name="keywords" content="New Braunfels Texas, Gruene Historic District, Guadalupe River, Comal River, Schlitterbahn, German heritage" />
        <meta property="og:title" content="New Braunfels, Texas - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Discover New Braunfels - where German heritage meets Texas rivers. Explore Gruene Historic District, float the Guadalupe and Comal Rivers, and enjoy small-town charm with big adventure."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/destinations/newbraunfels" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading max-w-4xl">
                New Braunfels, Texas
              </h1>
              <p className="text-xl text-white max-w-2xl">
                Where German heritage meets Texas rivers in the heart of Hill Country
              </p>
            </div>
          </div>
        </div>
        
        {/* Introduction */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading text-center">Welcome to New Braunfels</h2>
            <p className="text-lg text-darkText mb-6">
              Founded in 1845 by German immigrants led by Prince Carl of Solms-Braunfels, New Braunfels proudly celebrates its unique blend of German traditions and Texas culture. Located at the confluence of the Comal and Guadalupe Rivers, this vibrant city offers a perfect combination of small-town charm and exciting attractions that draw visitors throughout the year.
            </p>
            <p className="text-lg text-darkText mb-6">
              Just 30 miles northeast of San Antonio and 45 miles southwest of Austin, New Braunfels serves as an ideal gateway to the Hill Country while offering its own distinctive experiences. The city's population of around 90,000 swells during summer months as visitors flock to enjoy the rivers, historic districts, and family attractions.
            </p>
            <p className="text-lg text-darkText">
              Whether you're floating down the rivers, dancing at Texas' oldest dance hall, exploring historic districts, or enjoying thrilling water rides, New Braunfels offers memorable experiences for visitors of all ages and interests. The city's unique combination of German heritage, natural beauty, and Texan hospitality creates an atmosphere unlike any other in the Hill Country.
            </p>
          </div>
        </div>
        
        {/* River Recreation */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">River Adventures</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Guadalupe River */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Guadalupe River" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Guadalupe River</h3>
                <p className="text-darkText mb-4">
                  The Guadalupe River is synonymous with summer fun in Texas. This scenic waterway winds through the Hill Country, offering opportunities for tubing, kayaking, fishing, and swimming. The river's cypress-lined banks and limestone outcroppings create a picturesque setting for outdoor recreation.
                </p>
                <p className="text-darkText mb-4">
                  The river varies in character along its course, from calm, gentle stretches perfect for family floating to more exciting rapids that provide a bit more adventure. Multiple outfitters along the river offer tube, kayak, and canoe rentals, as well as shuttle services that allow visitors to enjoy a relaxing float without worrying about transportation logistics.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">Popular Activities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li><span className="font-bold">Tubing</span> - The quintessential Texas summer experience. Float trips range from 1-5 hours depending on your chosen route and river conditions. The Horseshoe Loop on the Guadalupe is particularly popular, offering a convenient put-in and take-out at the same location. Bring waterproof sunscreen, secure footwear, and a hat for sun protection. Most outfitters provide tube rentals with built-in cooler tubes to keep refreshments cold during your journey.</li>
                    <li><span className="font-bold">Kayaking</span> - For those who prefer a more active river experience. The Guadalupe offers beautiful scenery and occasional small rapids that make for an engaging paddle. Kayaks provide more control than tubes, allowing you to explore quiet coves and navigate the river at your own pace. Both sit-on-top and traditional kayaks are available from local outfitters, with guided tours available for beginners.</li>
                    <li><span className="font-bold">Fishing</span> - The river is known for excellent trout and bass fishing year-round. The tailwater section below Canyon Dam is one of the southernmost trout fisheries in the United States, with rainbow trout stocked regularly during winter months. Fly fishing is particularly popular in this stretch, while bass fishing is productive throughout the river system. Local guides can provide access to the best fishing spots and techniques.</li>
                    <li><span className="font-bold">Riverside camping</span> - Several campgrounds offer sites along the river, providing the unforgettable experience of falling asleep to the sound of flowing water. Options range from primitive sites to full-service RV parks with amenities. Many campgrounds offer direct river access, allowing you to fish, swim, or launch tubes right from your campsite. Reservations are essential during summer months.</li>
                    <li><span className="font-bold">Picnicking</span> - Numerous parks provide river access and picnic facilities, making for perfect day outings. Cypress Bend Park, Hinman Island, and Prince Solms Park all offer shaded picnic areas near the water. Pack a lunch and spend the day swimming and relaxing by the river. Many parks include playgrounds and open spaces for games, creating ideal family destinations.</li>
                  </ul>
                </div>
              </div>
              
              {/* Comal River */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1586531204948-43e5b4c0a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Comal River" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Comal River</h3>
                <p className="text-darkText mb-4">
                  The Comal River holds the distinction of being the shortest river in Texas, flowing entirely within the New Braunfels city limits. What it lacks in length, it makes up for in beauty and enjoyment. Fed by the Edwards Aquifer through Comal Springs, the river maintains a refreshing 70-72 degrees year-round, making it slightly warmer than the Guadalupe.
                </p>
                <p className="text-darkText mb-4">
                  The Comal is particularly popular with families and those seeking a more relaxed floating experience. Its gentle current, clear water, and convenient location make it an ideal choice for first-time tubers or those with young children. The river loop takes approximately 2-3 hours to float, depending on water conditions.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">River Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Tube chutes and small rapids add excitement to the gentle float</li>
                    <li>Multiple city parks provide river access and amenities</li>
                    <li>The river flows into the Guadalupe River at its terminus</li>
                    <li>Several outfitters offer tube rentals and shuttle services</li>
                    <li>Prince Solms Park offers a tube chute for a thrilling ride</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">River Tips and Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Planning Your River Day</h4>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li>Summer weekends are extremely busy - arrive early or consider weekday visits</li>
                    <li>Many outfitters offer online reservations to secure equipment in advance</li>
                    <li>Standard floats range from 2-6 hours depending on the route and river</li>
                    <li>Bring water-friendly shoes, sunscreen, and plenty of water</li>
                    <li>Consider renting waterproof bags or containers for valuables</li>
                    <li>Cooler tubes are available for bringing refreshments along</li>
                    <li>Check river conditions before planning your trip, especially after rainfall</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">River Regulations</h4>
                  <p className="text-darkText mb-3">
                    To preserve the rivers and ensure everyone's safety and enjoyment, several regulations are in place:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li>No disposable containers (including cans and bottles) on the Comal River within city limits</li>
                    <li>No styrofoam coolers on either river</li>
                    <li>Life vests required for children under 12 on the rivers</li>
                    <li>Alcohol consumption permitted but public intoxication laws enforced</li>
                    <li>No glass containers on either river</li>
                    <li>City parks charge entrance fees during peak season</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Best Times for River Activities</h4>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li><span className="font-bold">Peak Season (Memorial Day to Labor Day)</span>: Rivers are most popular and outfitters operate at full capacity</li>
                    <li><span className="font-bold">Shoulder Season (April-May and September-October)</span>: Fewer crowds and often pleasant weather</li>
                    <li><span className="font-bold">Off Season (November-March)</span>: Limited river recreation, though some locals enjoy the solitude</li>
                    <li><span className="font-bold">Weekdays</span>: Significantly less crowded than weekends throughout the year</li>
                    <li><span className="font-bold">Early Mornings</span>: The best time to avoid crowds and secure parking, even during peak season</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Popular River Outfitters</h4>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li><span className="font-bold">Rockin' R River Rides</span> - Offers rentals on both rivers with multiple locations</li>
                    <li><span className="font-bold">Texas Tubes</span> - Specializes in Comal River tubing with convenient access</li>
                    <li><span className="font-bold">Comal Tubes</span> - Located at the headwaters of the Comal River</li>
                    <li><span className="font-bold">Corner Tubes</span> - Offers both river experiences with shuttle service</li>
                    <li><span className="font-bold">Landa Falls</span> - Start at the source of the Comal with a longer float option</li>
                    <li><span className="font-bold">Whitewater Sports</span> - Specializes in Guadalupe River adventures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gruene Historic District */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Gruene Historic District</h2>
          
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="md:col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1626624331446-8aaef87f4b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200" 
                    alt="Gruene Hall" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Step Back in Time</h3>
                  <p className="text-darkText mb-4">
                    Nestled within New Braunfels, the historic district of Gruene (pronounced "Green") offers a charming glimpse into Texas' past. Once a thriving cotton-producing community founded by German farmers in the 1840s, Gruene nearly became a ghost town after the cotton gin burned down and the Great Depression hit. The district was rediscovered in the 1970s and carefully preserved, earning a place on the National Register of Historic Places.
                  </p>
                  <p className="text-darkText mb-4">
                    Today, Gruene's historic buildings house shops, restaurants, and attractions that draw visitors from across the country. The district's careful preservation maintains its authentic 19th-century atmosphere while offering modern amenities and experiences.
                  </p>
                  <p className="text-darkText">
                    Walking through Gruene feels like stepping into a different era, with rustic buildings, towering oak trees, and the gentle flow of the Guadalupe River creating a peaceful retreat from modern life. Yet the district buzzes with activity, from live music spilling out of Texas' oldest dance hall to shoppers browsing unique stores and diners enjoying meals in historic buildings.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1626624340850-cf7a8defa8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Gruene Hall" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Gruene Hall</h3>
                <p className="text-darkText mb-4">
                  The crown jewel of the district is Gruene Hall, Texas' oldest continually operating dance hall. Built in 1878, this iconic venue has hosted countless musicians, from legends like Willie Nelson, George Strait, and Lyle Lovett to up-and-coming Texas artists. The unassuming white building with its simple stage and wooden dance floor offers an authentic Texas music experience.
                </p>
                <p className="text-darkText mb-4">
                  The hall features live music almost every day, with free performances during afternoons and ticketed shows in the evenings. The no-frills atmosphere, with its worn wooden floor, long communal tables, and open-air windows (for natural cooling in the days before air conditioning), creates an intimate connection between performers and audience members.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Live Music</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Historic</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Dance Hall</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Dining in Gruene" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Historic Dining</h3>
                <p className="text-darkText mb-4">
                  Gruene's dining establishments offer both historic charm and delicious cuisine. The Gristmill River Restaurant & Bar, housed in the ruins of Gruene's cotton gin, stands as the district's culinary centerpiece. Multi-level decks overlook the Guadalupe River, while the interior showcases the original brick walls and industrial architecture.
                </p>
                <p className="text-darkText mb-4">
                  Other notable dining options include Mozie's Bar & Grill for casual fare, the Gruene River Grill for upscale dining, and the Gruene General Store's old-fashioned soda fountain for ice cream and nostalgic treats. During busy seasons, be prepared for waits at the more popular establishments, particularly The Gristmill.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Texas Cuisine</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">River Views</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Historic Buildings</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1561842925-4f9d88208ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Shopping in Gruene" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Shopping & Exploring</h3>
                <p className="text-darkText mb-4">
                  The historic buildings of Gruene now house a variety of specialty shops offering everything from Texas-themed souvenirs to upscale home décor and clothing. The Gruene General Store, operating since 1878, sells old-fashioned candies, unique gifts, and Texas wines. Nearby, shops like Gruene Antique Company and Buck Pottery showcase local artisans and antiques.
                </p>
                <p className="text-darkText mb-4">
                  Beyond shopping, visitors can explore H.D. Gruene's original 1872 Victorian home, which is now open for tours during certain hours. The Gruene Historic District offers a self-guided walking tour with historical markers explaining the significance of various buildings and sites throughout the area.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Boutiques</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Antiques</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Local Crafts</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Gruene Events</h3>
              <p className="text-darkText mb-4">
                Throughout the year, Gruene hosts special events that celebrate its heritage and draw visitors to experience the district's unique atmosphere:
              </p>
              <ul className="list-disc list-inside space-y-2 text-darkText">
                <li><span className="font-bold">Gruene Music & Wine Festival (October)</span> - A four-day celebration featuring Texas wines and musicians</li>
                <li><span className="font-bold">Gruene Market Days</span> - Held monthly from February to November, featuring over 100 artisans and craftspeople</li>
                <li><span className="font-bold">Old Gruene Christmas Market</span> - A holiday shopping event with unique gifts and festive atmosphere</li>
                <li><span className="font-bold">Gospel Brunch at Gruene Hall</span> - Held monthly, combining Southern gospel music with a Texas-style brunch</li>
                <li><span className="font-bold">Americana Music Jam</span> - An annual spring event benefiting local charities</li>
                <li><span className="font-bold">Day Before Thanksgiving Bash</span> - A beloved tradition at Gruene Hall</li>
              </ul>
              <p className="text-darkText mt-4 italic text-center">
                "No visit to New Braunfels is complete without spending at least an afternoon exploring the historic charm of Gruene."
              </p>
            </div>
          </div>
        </div>
        
        {/* Family Attractions */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Family Attractions</h2>
            
            <div className="max-w-4xl mx-auto mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Schlitterbahn Waterpark</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1582560486643-3b39efa4c8b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200" 
                      alt="Schlitterbahn Waterpark" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-darkText mb-4">
                      New Braunfels is home to the original Schlitterbahn Waterpark, consistently ranked among the world's best water parks. Founded in 1979 by the Henry family, Schlitterbahn (which means "slippery road" in German) has grown from four slides into a massive water adventure complex spanning over 70 acres.
                    </p>
                    <p className="text-darkText mb-4">
                      What makes Schlitterbahn unique is its blend of cutting-edge water attractions and natural elements. The park consists of two distinct sections: the original section uses spring-fed water from the Comal River and incorporates historic buildings and towering oak trees, while the newer section features more modern attractions and amenities.
                    </p>
                    <p className="text-darkText">
                      The park offers attractions for all ages and thrill levels, from relaxing river floats to heart-pounding water coasters and slides. Many of the park's innovations, like the world's first surfing machine and uphill water coaster, have revolutionized the water park industry worldwide.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-primary mb-2">Visitor Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Generally open from late April through September, with limited operations in shoulder seasons</li>
                    <li>Multi-day tickets and season passes available</li>
                    <li>Free parking and permission to bring coolers with food and drinks (no glass or alcohol)</li>
                    <li>Tube rentals included in admission price</li>
                    <li>Resort accommodations available on and near the property</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Natural Bridge Caverns</h3>
                <img 
                  src="https://images.unsplash.com/photo-1520711069755-9957be63f6bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Natural Bridge Caverns" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-darkText mb-4">
                  Just a short drive from New Braunfels, Natural Bridge Caverns is Texas' largest show cave system. Discovered in 1960 by college students, these spectacular living caverns feature massive formations that continue to grow and change. The caverns maintain a constant 70-degree temperature year-round, making them a perfect activity regardless of weather.
                </p>
                <p className="text-darkText mb-4">
                  Visitors can choose from several tour options, ranging from the classic Discovery Tour to more adventurous Hidden Passages and Wild Cave tours. Above ground, the complex offers additional attractions including a zipline, maze, gem and fossil mining, and a climbing feature called Twisted Trails.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Underground Adventure</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Educational</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Year-Round</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Animal World & Snake Farm Zoo</h3>
                <img 
                  src="https://images.unsplash.com/photo-1603026207108-c9f6e3e3d233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Animal World & Snake Farm Zoo" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-darkText mb-4">
                  Operating since 1967, the Animal World & Snake Farm Zoo has evolved from a roadside attraction into an accredited zoological park. The facility houses over 500 animals representing 100+ species, including exotic big cats, monkeys, lemurs, and one of the largest collections of venomous snakes in the world.
                </p>
                <p className="text-darkText mb-4">
                  The zoo offers interactive experiences including animal encounters, feedings, and educational shows. Their conservation focus includes breeding programs for endangered species and educational outreach to promote wildlife conservation. The facility combines nostalgia (it's been a Highway 35 landmark for generations) with modern zoological practices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Wildlife</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Interactive</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Family-Friendly</span>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">More Family Fun</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">McKenna Children's Museum</h4>
                  <p className="text-darkText mb-3">
                    This interactive museum provides hands-on learning experiences for children through exhibits focusing on science, technology, art, and culture. Kids can explore a mini town with a grocery store and veterinary clinic, create in the art studio, discover science principles through play, and learn about different careers through role-playing activities.
                  </p>
                  <p className="text-darkText">
                    The museum also features outdoor spaces including a water play area and climbing structures. Special events and educational programs are offered throughout the year, making this an excellent option for families, especially on rainy days or when seeking a break from the summer heat.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Landa Park</h4>
                  <p className="text-darkText mb-3">
                    This 51-acre park in the heart of New Braunfels offers a variety of recreational activities for all ages. The park features a spring-fed pool, miniature train ride, playgrounds, picnic areas, paddle boat rentals, and an 18-hole golf course. The spring-fed pool maintains a refreshing temperature and includes a zero-depth entry area for young children.
                  </p>
                  <p className="text-darkText">
                    Walking trails wind through the park, offering glimpses of local wildlife and native plants. The Panther Canyon Nature Trail connects to the park, providing a more rugged hiking experience through limestone formations and native vegetation. Landa Park's central location makes it a perfect spot for families to spend a relaxing day outdoors.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Texas Ski Ranch</h4>
                  <p className="text-darkText">
                    This unique facility offers cable wakeboarding, allowing riders to experience the thrill of wakeboarding without a boat. The overhead cable system pulls riders across a man-made lake while they perform tricks and jumps. The ranch also features a skate park, paintball courses, and a beach area for relaxing between activities. Lessons are available for beginners, making this an accessible activity for adventurous visitors of various skill levels.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Drive-In at Stars & Stripes</h4>
                  <p className="text-darkText">
                    Experience the nostalgia of a classic American drive-in theater with modern amenities. The Stars & Stripes shows first-run movies on multiple screens, allowing visitors to watch from their vehicles or bring chairs to sit outside. The venue includes a playground for children to enjoy before the movie begins and a concession stand offering traditional movie snacks alongside more substantial food options. This family-friendly attraction provides a unique entertainment experience that appeals to all generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* German Heritage */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">German Heritage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Festivals and Traditions */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605278815098-3a5423ae6098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Wurstfest" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Festivals and Traditions</h3>
              <p className="text-lg text-darkText mb-4">
                New Braunfels proudly celebrates its German heritage through annual festivals and ongoing traditions that connect current residents and visitors with the city's origins. These celebrations feature authentic German music, dance, food, and customs that have been preserved for generations.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Wurstfest</h4>
                <p className="text-darkText mb-3">
                  The crown jewel of New Braunfels' cultural celebrations is Wurstfest, a 10-day "Salute to Sausage" held annually in November. This beloved festival draws over 200,000 visitors who come to enjoy:
                </p>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Traditional German music and dance performances</li>
                  <li>Authentic German cuisine, including varieties of sausage, pretzels, and potato pancakes</li>
                  <li>A biergarten featuring German and Texas craft beers</li>
                  <li>Carnival rides and games</li>
                  <li>Arts and crafts vendors</li>
                  <li>Cultural exhibits showcasing German heritage</li>
                </ul>
                <p className="text-darkText mt-3">
                  The festival grounds at Landa Park transform into a German village, with multiple stages hosting continuous entertainment. Polka bands, yodelers, and folk dancers create a lively atmosphere while food and drink vendors serve up traditional flavors. The festive cry of "Prost!" (cheers) echoes throughout the grounds as visitors embrace the celebratory spirit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Year-Round German Culture</h4>
                <p className="text-darkText mb-3">
                  Beyond Wurstfest, New Braunfels maintains its German connections through various events and organizations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Folkfest</span> - A spring celebration of German folk traditions</li>
                  <li><span className="font-bold">Weihnachtsmarkt</span> - A traditional German Christmas market</li>
                  <li><span className="font-bold">Kindermasken Ball</span> - A children's costume parade and celebration</li>
                  <li><span className="font-bold">Maifest</span> - A traditional German spring festival</li>
                  <li><span className="font-bold">German-American Society</span> - Preserves cultural traditions through regular events</li>
                  <li><span className="font-bold">New Braunfels German Heritage Museum</span> - Showcases the city's German roots</li>
                </ul>
              </div>
            </div>
            
            {/* Historic Sites */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1621951753163-e553cc372141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Historic New Braunfels" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Historic Sites & Architecture</h3>
              <p className="text-lg text-darkText mb-4">
                The German influence on New Braunfels is most visible in its historic architecture and preserved sites that tell the story of the city's founding and development. A walking tour of downtown reveals buildings constructed by German settlers, featuring distinctive limestone construction, pitched roofs, and detailed craftsmanship.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Must-See Historic Sites</h4>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Sophienburg Museum & Archives</span> - Housed in a replica of the original fort built by the town's founders, this museum preserves the history of New Braunfels' German settlers through artifacts, photographs, and documents</li>
                  <li><span className="font-bold">Conservation Plaza</span> - An open-air museum featuring historic buildings moved from their original locations to create a preserved historic district</li>
                  <li><span className="font-bold">Ferdinand Lindheimer House</span> - Home of the "Father of Texas Botany" and first editor of the local German-language newspaper</li>
                  <li><span className="font-bold">New Braunfels Historic Downtown</span> - Features numerous buildings dating to the 19th century, including the 1870 Comal County Courthouse</li>
                  <li><span className="font-bold">The Original Schulze Store</span> - The oldest continuously running store in Texas (since 1857)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">German Dining</h4>
                <p className="text-darkText mb-3">
                  The German heritage of New Braunfels can be experienced through its traditional restaurants and bakeries:
                </p>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Naegelin's Bakery</span> - The oldest bakery in Texas, operating since 1868 and famous for its strudels and lebkuchen</li>
                  <li><span className="font-bold">Alpine Haus Restaurant</span> - Serving authentic German cuisine including schnitzel, sauerbraten, and spaetzle</li>
                  <li><span className="font-bold">Krause's Cafe & Biergarten</span> - A modern interpretation of a traditional German bierhalle with 80+ beers on tap</li>
                  <li><span className="font-bold">Friesenhaus Restaurant</span> - Traditional German fare in a cozy, authentic atmosphere</li>
                  <li><span className="font-bold">Oma's Haus Restaurant</span> - Home-style German cooking with recipes passed down through generations</li>
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
              New Braunfels offers a wide range of accommodations to suit every preference and budget. From historic inns to riverside resorts, visitors can find the perfect home base for their Hill Country adventures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Riverside Resorts" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Riverside Resorts</h3>
                  <p className="text-darkText mb-4">
                    Several resort properties along the Guadalupe and Comal Rivers offer direct water access and comprehensive amenities. These resorts typically feature swimming pools, restaurants, organized activities, and various accommodation options from hotel rooms to condos and cabins.
                  </p>
                  <p className="text-darkText mb-4">
                    Popular options include the Schlitterbahn Resort, which offers accommodations with water park access, and the Guadalupe River Resort with its riverside cabins and tubing facilities. These properties are especially popular during summer months when river activities are at their peak.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Water Access</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Family-Friendly</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Full Amenities</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Historic Inns" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Historic Inns and B&Bs</h3>
                  <p className="text-darkText mb-4">
                    For a more intimate experience that connects with the city's heritage, New Braunfels offers several historic inns and bed and breakfast establishments. These properties, often housed in restored Victorian or German-style buildings, provide charming accommodations with personalized service and homemade breakfasts.
                  </p>
                  <p className="text-darkText mb-4">
                    The Prince Solms Inn, operating since 1898, stands as a prime example with its antique furnishings and historic ambiance. Other options include the Gruene Mansion Inn, located in the historic district, and the Lamb's Rest Inn with its Guadalupe River views.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Historic</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Charming</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Breakfast Included</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Vacation Rentals" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Vacation Rentals and Cabins</h3>
                  <p className="text-darkText mb-4">
                    For families or groups seeking more space and privacy, New Braunfels offers numerous vacation rentals ranging from downtown condos to riverfront homes and secluded cabins. These properties provide full kitchens, multiple bedrooms, and often outdoor amenities like decks, grills, and private river access.
                  </p>
                  <p className="text-darkText mb-4">
                    Many rentals are concentrated along the rivers, in the Gruene Historic District, and in downtown New Braunfels, allowing visitors to choose a location that best suits their planned activities. Properties with river access command premium rates, especially during summer months.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Spacious</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Fully-Equipped</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Private</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Booking Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText mb-6">
                  <li>Summer weekends and holiday periods book months in advance, especially properties with river access</li>
                  <li>Consider visiting during shoulder seasons (spring and fall) for better rates and availability</li>
                  <li>Wurstfest (November) draws large crowds, so book accommodations early if planning to attend</li>
                  <li>Many properties require minimum stays during peak periods (typically 2-3 nights)</li>
                  <li>For river activities, prioritize accommodations within walking distance of river access points</li>
                  <li>Downtown and Gruene accommodations offer the best access to dining and entertainment</li>
                  <li>Many vacation rentals offer special mid-week rates during summer seasons</li>
                </ul>
                <div className="text-center">
                  <Link href="/vacationrentals" className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors">
                    Browse our New Braunfels cabin rentals <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Getting There and Around */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Getting There and Around</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Location and Access</h3>
              <p className="text-darkText mb-4">
                New Braunfels enjoys a strategic location along the I-35 corridor between San Antonio and Austin, making it easily accessible by car. The city sits at the eastern edge of the Hill Country, providing a convenient gateway to the region's attractions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">By Car:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li><span className="font-bold">From San Antonio:</span> 30 miles northeast (approximately 30 minutes) via I-35 N</li>
                    <li><span className="font-bold">From Austin:</span> 45 miles southwest (approximately 45 minutes) via I-35 S</li>
                    <li><span className="font-bold">From Houston:</span> 170 miles west (approximately 2.5 hours) via I-10 W and I-35 N</li>
                    <li><span className="font-bold">From Dallas/Fort Worth:</span> 230 miles south (approximately 3.5 hours) via I-35 S</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Nearest Airports:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>San Antonio International Airport (SAT) - 30 miles (approximately 30 minutes)</li>
                    <li>Austin-Bergstrom International Airport (AUS) - 50 miles (approximately 50 minutes)</li>
                    <li>No public transportation connects the airports to New Braunfels</li>
                    <li>Car rental or shuttle services are recommended</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Getting Around New Braunfels</h3>
              <p className="text-darkText mb-4">
                New Braunfels has several distinct areas of interest that are somewhat spread out, including downtown, Gruene Historic District, the rivers, and various attractions. While some areas like downtown and Gruene are walkable within themselves, a vehicle is recommended to travel between these areas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-primary mb-2">Transportation Options:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Personal vehicle (recommended)</li>
                    <li>Rideshare services (Uber, Lyft)</li>
                    <li>Taxi services</li>
                    <li>River shuttle services (during summer season)</li>
                    <li>Bicycle rentals (limited availability)</li>
                    <li>Walking (within specific districts)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Distances Between Attractions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Downtown to Gruene Historic District - 3.5 miles</li>
                    <li>Downtown to Schlitterbahn - 1 mile</li>
                    <li>Downtown to Landa Park - 1 mile</li>
                    <li>Downtown to Natural Bridge Caverns - 12 miles</li>
                    <li>Gruene to Guadalupe River State Park - 15 miles</li>
                  </ul>
                </div>
              </div>
              <p className="text-darkText italic text-center">
                "During summer months, parking near river access points can be challenging. Consider using shuttle services offered by tube rental companies to avoid parking hassles."
              </p>
            </div>
          </div>
        </div>
        
        {/* Nearby Destinations */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Day Trips from New Braunfels</h2>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-darkText mb-8 text-center">
                New Braunfels' central location makes it an ideal base for exploring the wider Hill Country region. These nearby destinations offer perfect day-trip opportunities, allowing you to return to your New Braunfels accommodation each evening.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">San Antonio (30 miles)</h3>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>The Alamo and other historic missions</li>
                    <li>River Walk dining and shopping</li>
                    <li>SeaWorld and Six Flags Fiesta Texas</li>
                    <li>San Antonio Zoo and Botanical Garden</li>
                    <li>The Pearl District</li>
                    <li>Market Square (El Mercado)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Austin (45 miles)</h3>
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
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Wimberley (25 miles)</h3>
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
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Fredericksburg (60 miles)</h3>
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
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Canyon Lake (15 miles)</h3>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Boating and water sports</li>
                    <li>Fishing for bass, catfish, and trout</li>
                    <li>Scenic hiking trails</li>
                    <li>Overlook Park with panoramic views</li>
                    <li>Heritage Museum of the Texas Hill Country</li>
                    <li>Horseback riding opportunities</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">San Marcos (18 miles)</h3>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Glass-bottom boat tours at Spring Lake</li>
                    <li>San Marcos River tubing and kayaking</li>
                    <li>Wonder World Cave and Adventure Park</li>
                    <li>Premium outlet shopping</li>
                    <li>Texas State University campus</li>
                    <li>Mermaid statues throughout downtown</li>
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
      </div>
    </>
  );
};

export default NewBraunfels;