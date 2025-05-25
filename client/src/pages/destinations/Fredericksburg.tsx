import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const Fredericksburg = () => {
  return (
    <>
      <Helmet>
        <title>Fredericksburg, Texas - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Discover Fredericksburg, Texas - where German heritage meets Texas hospitality. Explore historic buildings, award-winning wineries, and unique shopping in the heart of Hill Country."
        />
        <meta name="keywords" content="Fredericksburg Texas, German heritage, Hill Country wineries, Enchanted Rock, Main Street shopping, Texas Hill Country" />
        <meta property="og:title" content="Fredericksburg, Texas - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Discover Fredericksburg, Texas - where German heritage meets Texas hospitality. Explore historic buildings, award-winning wineries, and unique shopping in the heart of Hill Country."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/destinations/fredericksburg" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574706436575-73410bb0a433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading max-w-4xl">
                Fredericksburg, Texas
              </h1>
              <p className="text-xl text-white max-w-2xl">
                Where German heritage meets Texas hospitality in the heart of wine country
              </p>
            </div>
          </div>
        </div>
        
        {/* Introduction */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading text-center">Welcome to Fredericksburg</h2>
            <p className="text-lg text-darkText mb-6">
              Founded in 1846 by German immigrants, Fredericksburg has preserved its unique cultural heritage while evolving into one of Texas Hill Country's premier destinations. Named after Prince Frederick of Prussia, this charming town blends German traditions, Texas hospitality, and Hill Country beauty to create an unforgettable experience for visitors.
            </p>
            <p className="text-lg text-darkText mb-6">
              Located approximately 70 miles west of Austin and 65 miles northwest of San Antonio, Fredericksburg offers a perfect blend of historic architecture, world-class wineries, unique shopping, outdoor adventures, and cultural attractions. The town's population of around 11,000 welcomes thousands of visitors each week, who come to experience its distinctive blend of German and Texan cultures.
            </p>
            <p className="text-lg text-darkText">
              With over 1,000 historic buildings, more than 50 wineries in the surrounding countryside, numerous museums, and the natural wonder of Enchanted Rock nearby, Fredericksburg offers an abundance of experiences that keep visitors returning season after season.
            </p>
          </div>
        </div>
        
        {/* Historic Attractions */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Historic Fredericksburg</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Historic Main Street */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1574706436575-73410bb0a433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Historic Main Street" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Historic Main Street</h3>
                <p className="text-darkText mb-4">
                  The heart of Fredericksburg is its historic Main Street (Hauptstrasse), which stretches for several blocks and features beautifully preserved limestone buildings housing shops, restaurants, tasting rooms, and galleries. Many of these structures date back to the mid-19th century, showcasing the distinctive architecture brought by German settlers.
                </p>
                <p className="text-darkText mb-4">
                  Walking along Main Street feels like stepping back in time while enjoying modern amenities. Wide sidewalks, historic markers, and inviting storefronts make this one of the most pleasant downtown experiences in Texas. The street comes alive during seasonal events and weekends, when visitors from across the state and beyond come to experience Fredericksburg's charm.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">Don't Miss:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>The historic Nimitz Hotel building (now part of the Museum of the Pacific War)</li>
                    <li>The octagonal-shaped Vereins Kirche in the Marktplatz</li>
                    <li>The Admiral Nimitz Gallery with its stunning facade</li>
                    <li>Historic markers detailing the area's German settlement</li>
                    <li>Authentic German restaurants and biergartens</li>
                  </ul>
                </div>
              </div>
              
              {/* Sunday Houses */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Sunday Houses" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Sunday Houses and Historic Architecture</h3>
                <p className="text-darkText mb-4">
                  One of Fredericksburg's most distinctive architectural features is the "Sunday House." These small, simple dwellings were built by German farmers who lived on outlying properties but needed a place to stay when they came to town for weekend church services and market days. Typically featuring a loft sleeping area accessed by an exterior staircase, these charming structures are emblematic of Fredericksburg's unique heritage.
                </p>
                <p className="text-darkText mb-4">
                  Today, many Sunday Houses have been beautifully restored and serve as bed and breakfasts, giving visitors the opportunity to experience this distinctive accommodation style. Beyond Sunday Houses, Fredericksburg features a wealth of historic architectural styles, from Victorian mansions to traditional German fachwerk (half-timbered) buildings.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">Notable Historical Sites:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Pioneer Museum Complex - Preserving local German heritage</li>
                    <li>Sauer-Beckmann Living History Farm - 1915-era working farm</li>
                    <li>Fort Martin Scott - Historic 1848 military outpost</li>
                    <li>Fredericksburg Historic District - With over 700 historically significant buildings</li>
                    <li>St. Mary's Catholic Church - Beautiful historic sanctuary</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">National Museum of the Pacific War</h3>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1605728487659-9aedfd77c90d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                      alt="National Museum of the Pacific War" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-darkText mb-4">
                      One of Fredericksburg's most significant attractions is the National Museum of the Pacific War, a world-class institution dedicated to the Pacific Theater of World War II. The museum's presence in Fredericksburg honors Fleet Admiral Chester W. Nimitz, who was born in the town and commanded the Pacific Fleet during the war.
                    </p>
                    <p className="text-darkText mb-4">
                      Spanning six acres in the heart of town, this Smithsonian-affiliated museum complex includes the Admiral Nimitz Gallery, the George H.W. Bush Gallery, the Japanese Garden of Peace, the Memorial Courtyard, and the Pacific Combat Zone. With over 55,000 square feet of indoor exhibit space, the museum houses an extraordinary collection of artifacts, interactive exhibits, and multimedia presentations.
                    </p>
                    <p className="text-darkText">
                      The Pacific Combat Zone offers regular living history demonstrations that bring the Pacific War experience to life, while the Memorial Courtyard provides a space for reflection and remembrance. The museum's comprehensive approach and extraordinary detail make it a must-visit for history enthusiasts and anyone interested in understanding this critical period in world history.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-primary mb-2">Visitor Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Open daily from 9am to 5pm (closed Thanksgiving, Christmas Eve, and Christmas Day)</li>
                    <li>Admission tickets are good for 48 hours to allow thorough exploration</li>
                    <li>Plan at least 3-4 hours to experience the main exhibits</li>
                    <li>Living history demonstrations are scheduled on select weekends</li>
                    <li>Guided tours available with advance reservation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wine Country */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Wine Country</h2>
          
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Texas Wine Trail</h3>
              <p className="text-lg text-darkText mb-4">
                Fredericksburg stands at the heart of Texas Wine Country, with the surrounding Hill Country recognized as one of the fastest-growing wine regions in America. The combination of limestone-rich soil, elevation, and climate creates ideal conditions for growing Mediterranean, Spanish, and Italian grape varieties. What began as a niche industry has blossomed into a world-class wine destination that draws oenophiles from across the globe.
              </p>
              <p className="text-lg text-darkText mb-6">
                Wine Road 290, the main corridor connecting many of the area's wineries, runs east-west along US Highway 290 between Johnson City and Fredericksburg. This scenic route features over 50 wineries and tasting rooms, each offering unique experiences ranging from intimate tastings in historic structures to grand estates with panoramic Hill Country views.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1596133405426-664adb3d010f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Wine Road 290" 
                  className="w-full h-60 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Wine Tasting" 
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Notable Wineries" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Notable Wineries</h3>
                <p className="text-darkText mb-4">
                  The Fredericksburg area features wineries to suit every taste, from boutique family operations to larger estates. Many have earned international recognition for their quality wines, particularly those made from Tempranillo, Viognier, Mourvèdre, and other varietals well-suited to the Texas climate.
                </p>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li><span className="font-bold">Becker Vineyards</span> - One of the pioneers of Texas wine, established in 1992. Their sprawling 46-acre estate features lavender fields alongside vineyards, creating a distinctly Mediterranean atmosphere. The tasting room is housed in a reproduction 19th-century German stone barn, where visitors can sample their renowned Cabernet Sauvignon, Malbec, and Viognier. Their Reserve Cabernet has been served at White House dinners, cementing their reputation for excellence.</li>
                  <li><span className="font-bold">Grape Creek Vineyards</span> - Offers a "Tuscany in Texas" atmosphere with its Italian-inspired villa and tasting rooms. The estate features beautiful pergola-covered patios overlooking the vineyards. Their wine portfolio includes award-winning Bellissimo (Super Tuscan style blend), Mosaic (Bordeaux blend), and their signature Viognier. The vineyard offers both traditional tastings and premium tours that include barrel samples and food pairings.</li>
                  <li><span className="font-bold">Pedernales Cellars</span> - Specializing in Spanish and Rhône-style varieties, this family-owned winery has earned international recognition for their Tempranillo and Viognier. Their sustainable approach includes a unique underground cellar that maintains natural temperature control. The expansive deck offers one of the most spectacular views in the Hill Country, making it a perfect spot to enjoy their reserve tastings. Don't miss their limited production Valhalla, a Tempranillo-based blend.</li>
                  <li><span className="font-bold">William Chris Vineyards</span> - Founded on a "100% Texas-grown" philosophy, this winery focuses on expressing the unique terroir of Texas. Their historic 1905 farmhouse tasting room provides an intimate experience, while their newer tasting hall accommodates larger groups. Known for minimal intervention winemaking, their standout offerings include Mourvèdre, Mary Ruth (white blend), and Enchanté (Bordeaux-style blend). Reservations are essential, especially for their popular picnic experiences among the oak trees.</li>
                  <li><span className="font-bold">Signor Vineyards</span> - One of the newer estates featuring stunning architecture and meticulously landscaped grounds. The tasting experience here feels more like visiting a private estate than a commercial winery. Their portfolio focuses on small-production wines including Montepulciano, Sangiovese, and an excellent Pinot Grigio. The on-site Johanna Haus market offers gourmet foods and gifts perfect for creating your own picnic to enjoy on their grounds.</li>
                  <li><span className="font-bold">Kuhlman Cellars</span> - Known for their Rhône-style blends and exceptional food pairing experiences. Their signature "Vina Vita" tasting includes carefully selected bites created to complement each wine. The barrel room tour provides insight into their winemaking philosophy that combines Old World techniques with Texas terroir. Their Calcaria and Barranca blends consistently receive high ratings from wine critics.</li>
                  <li><span className="font-bold">Lost Draw Cellars</span> - Located in downtown Fredericksburg, this urban tasting room showcases wines made from some of the oldest and most respected vineyards in the Texas High Plains. Their focus on Spanish and Rhône varieties produces exceptional Sangiovese, Tempranillo, and Picpoul Blanc. The casual, friendly atmosphere makes this an accessible entry point for those new to Texas wines.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Wine Tours and Experiences" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Wine Tours and Experiences</h3>
                <p className="text-darkText mb-4">
                  To fully experience Fredericksburg's wine country without worrying about driving, consider booking a guided tour. Numerous companies offer services ranging from group tours in shuttle buses to private customized experiences in luxury vehicles. Many tours include behind-the-scenes access and educational components not available to regular visitors.
                </p>
                <p className="text-darkText mb-4">
                  Beyond standard tastings, many wineries offer enhanced experiences such as food pairings, vineyard tours, barrel room tastings, and blending seminars. Several properties host regular events like harvest festivals, release parties, and live music on weekends.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1515779122185-2d232d6c0c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Wine Tasting Tips" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Wine Tasting Tips</h3>
                <p className="text-darkText mb-4">
                  To make the most of your Fredericksburg wine experience, keep these insider tips in mind:
                </p>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li>Visit wineries on weekdays for a more personal experience</li>
                  <li>Many wineries now require reservations, especially on weekends</li>
                  <li>Limit yourself to 3-4 wineries per day to fully appreciate each</li>
                  <li>Designate a driver or book a tour service</li>
                  <li>Join wine clubs for complimentary tastings and member events</li>
                  <li>Check winery websites for special events and live music schedules</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Outdoor Adventures */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Outdoor Adventures</h2>
            
            <div className="max-w-4xl mx-auto mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Enchanted Rock State Natural Area</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1596397249129-c7a8f3dba469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200" 
                      alt="Enchanted Rock" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-darkText mb-4">
                      Just 17 miles north of Fredericksburg lies one of Texas' most iconic natural landmarks: Enchanted Rock. This massive pink granite dome rises 425 feet above the surrounding landscape and covers 640 acres, creating a dramatic backdrop visible for miles. Designated a National Natural Landmark, this ancient batholith has drawn visitors for thousands of years.
                    </p>
                    <p className="text-darkText mb-4">
                      Native Americans considered the rock sacred, attributing the creaking and groaning sounds it sometimes makes (due to temperature changes) to spiritual forces. Today, visitors come to hike the Summit Trail to the top of the dome, where panoramic views of the Hill Country unfold in every direction.
                    </p>
                    <p className="text-darkText">
                      Beyond the main dome, the park offers over 11 miles of hiking trails, rock climbing opportunities, primitive camping, and exceptional stargazing. As an International Dark Sky Park, Enchanted Rock provides some of the clearest night sky views in Texas, with the Milky Way clearly visible on moonless nights.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-primary mb-2">Visitor Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Advance day pass reservations are highly recommended, especially on weekends and holidays</li>
                    <li>The park frequently reaches capacity, resulting in entry closures</li>
                    <li>Best times to visit are weekday mornings or late afternoons</li>
                    <li>Summer temperatures on the exposed rock can be extreme</li>
                    <li>Pack plenty of water, sun protection, and proper hiking footwear</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Wildseed Farms</h3>
                <img 
                  src="https://images.unsplash.com/photo-1492722232097-853cc0f0889a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Wildseed Farms" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-darkText mb-4">
                  Located just a few miles east of Fredericksburg, Wildseed Farms is the largest working wildflower farm in the United States. The 200-acre property features vibrant fields of bluebonnets, poppies, sunflowers, and numerous other wildflower varieties that change with the seasons.
                </p>
                <p className="text-darkText">
                  Visitors can stroll along walking trails through the flower fields, shop for seeds and gardening supplies in the market center, enjoy refreshments at the Brewbonnet Biergarten, or sample wines at the on-site Wedding Oak Winery tasting room. Peak blooming seasons include spring (March-May) for bluebonnets and other spring wildflowers, and late summer (July-September) for sunflowers and fall blooms.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Hiking and Cycling</h3>
                <img 
                  src="https://images.unsplash.com/photo-1598523536367-f98998db17d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Hiking and Cycling" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-darkText mb-4">
                  The Fredericksburg area offers numerous opportunities for outdoor enthusiasts beyond Enchanted Rock. Cross Mountain Park, located within the city limits, provides a short but rewarding hike to a summit featuring a large cross and views of the town. Lady Bird Johnson Municipal Park offers walking trails, picnic areas, and recreational facilities.
                </p>
                <p className="text-darkText">
                  For cycling enthusiasts, the Hill Country surrounding Fredericksburg provides some of the most scenic routes in Texas. The challenging terrain of rolling hills offers routes for all skill levels. Several local outfitters rent bicycles and provide route maps, while guided cycling tours are available for those who prefer a structured experience. The annual LBJ 100 Bicycle Tour in March draws cyclists from across the state.
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">More Outdoor Attractions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Seasonal Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                      <li><span className="font-bold">Spring:</span> Bluebonnet and wildflower viewing along scenic drives</li>
                      <li><span className="font-bold">Summer:</span> Peach orchards with pick-your-own experiences</li>
                      <li><span className="font-bold">Fall:</span> Pumpkin patches and autumn harvests</li>
                      <li><span className="font-bold">Winter:</span> Holiday light displays and festive farms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Nearby State Parks:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                      <li><span className="font-bold">Lyndon B. Johnson State Park:</span> Historical site with living history farm</li>
                      <li><span className="font-bold">Pedernales Falls State Park:</span> Dramatic river landscapes and swimming</li>
                      <li><span className="font-bold">Lost Maples State Natural Area:</span> Spectacular fall foliage (1.5 hours away)</li>
                      <li><span className="font-bold">Guadalupe River State Park:</span> River activities and hiking trails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Shopping and Dining */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Shopping and Dining</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Shopping */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1565468579483-b172b1c3bfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Shopping in Fredericksburg" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Distinctive Shopping</h3>
              <p className="text-lg text-darkText mb-4">
                Fredericksburg has established itself as a premier shopping destination in Texas, with more than 150 shops, boutiques, and galleries lining Main Street and the surrounding areas. Unlike many tourist towns filled with souvenir shops, Fredericksburg offers a sophisticated mix of antiques, home decor, clothing boutiques, art galleries, specialty foods, and unique gift shops.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Shopping Highlights</h4>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Antiques:</span> Fredericksburg offers dozens of antique shops and malls, from high-end European imports to rustic Texas primitives</li>
                  <li><span className="font-bold">Art Galleries:</span> The town's vibrant arts scene supports numerous galleries featuring work from local and national artists</li>
                  <li><span className="font-bold">Home Decor:</span> Texas Hill Country style is showcased in numerous home furnishing and decor shops</li>
                  <li><span className="font-bold">Clothing and Jewelry:</span> Boutiques offering everything from western wear to contemporary fashion</li>
                  <li><span className="font-bold">German Imports:</span> Specialty shops selling authentic German products, from cuckoo clocks to Christmas ornaments</li>
                  <li><span className="font-bold">Specialty Foods:</span> Gourmet shops featuring local products like peach preserves, Hill Country olive oils, and Texas wines</li>
                </ul>
              </div>
              <p className="text-darkText">
                Most shops are open seven days a week, with longer hours on Fridays and Saturdays. Sunday mornings often see later opening times. The Trade Days at Sunday Farms, held the third weekend of most months, brings together hundreds of vendors selling antiques, crafts, and unique items in an outdoor market setting.
              </p>
            </div>
            
            {/* Dining */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1479585884759-71ac112ce30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Dining in Fredericksburg" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Culinary Delights</h3>
              <p className="text-lg text-darkText mb-4">
                Fredericksburg's dining scene reflects its unique cultural heritage, with authentic German restaurants operating alongside Texas barbecue joints, fine dining establishments, and farm-to-table cafes. The town's location in the heart of Hill Country provides access to fresh local produce, peaches, and other agricultural products that inspire creative menus.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Dining Experiences</h4>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">German Cuisine:</span> Traditional restaurants serving schnitzel, sausages, and German beer in historic buildings</li>
                  <li><span className="font-bold">Texas Barbecue:</span> Authentic smokehouses offering brisket, ribs, and all the fixings</li>
                  <li><span className="font-bold">Farm-to-Table:</span> Restaurants highlighting fresh local ingredients and Hill Country flavors</li>
                  <li><span className="font-bold">Fine Dining:</span> Sophisticated establishments offering wine country cuisine and special occasion experiences</li>
                  <li><span className="font-bold">Wine Bars:</span> Venues featuring extensive local wine lists paired with artisanal cheeses and small plates</li>
                  <li><span className="font-bold">Food Trucks:</span> A growing scene offering everything from gourmet tacos to artisanal ice cream</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-3 font-heading">Local Specialties</h4>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Fredericksburg Peaches:</span> Available fresh in summer and in preserves and products year-round</li>
                  <li><span className="font-bold">German Pastries:</span> Local bakeries offering traditional strudels, kuchen, and other German sweets</li>
                  <li><span className="font-bold">Hill Country Game:</span> Restaurants featuring venison, quail, and other local game</li>
                  <li><span className="font-bold">Texas Beer:</span> Craft breweries producing distinctive ales and lagers</li>
                  <li><span className="font-bold">Lavender Products:</span> Culinary lavender incorporated into chocolates, ice cream, and other treats</li>
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
              Fredericksburg offers one of the most diverse and unique accommodation scenes in Texas. From historic Sunday Houses to luxury vineyard accommodations, the options reflect the town's distinctive character and provide experiences far beyond typical hotel stays.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1520424676392-454428b8b306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Historic B&Bs" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Historic B&Bs and Guesthouses</h3>
                  <p className="text-darkText mb-4">
                    Fredericksburg is famous for its bed and breakfast accommodations, many housed in historic Sunday Houses and other preserved buildings. These intimate properties often feature period furnishings, German architectural details, and warm hospitality from knowledgeable owners.
                  </p>
                  <p className="text-darkText mb-4">
                    Many B&Bs are clustered within walking distance of Main Street, allowing guests to explore the downtown area without needing to drive. Breakfasts typically showcase local ingredients and German-inspired specialties, providing a delicious start to each day of exploration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Historic</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Downtown</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Breakfast Included</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1607623519464-62d8de242026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Vineyard Accommodations" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Vineyard Accommodations</h3>
                  <p className="text-darkText mb-4">
                    For the ultimate wine country experience, several wineries and vineyards offer on-site accommodations. These range from luxurious cottages overlooking vine-covered hills to renovated farmhouses situated among the vines. Staying at a vineyard property offers unparalleled access to wine experiences and often includes private tastings or tours.
                  </p>
                  <p className="text-darkText mb-4">
                    Many vineyard accommodations feature upscale amenities like soaking tubs, fireplaces, outdoor seating areas with vineyard views, and gourmet breakfast options. The serene countryside settings provide a peaceful retreat after days of exploration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Scenic</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Wine Experience</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Luxury</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1567636788276-40a47795ba4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Country Cabins" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Country Cabins and Cottages</h3>
                  <p className="text-darkText mb-4">
                    For those seeking privacy and a true Hill Country experience, numerous cabins and cottages dot the countryside surrounding Fredericksburg. These standalone accommodations range from rustic log cabins to sophisticated modern designs with high-end amenities.
                  </p>
                  <p className="text-darkText mb-4">
                    Many feature outdoor spaces like porches, fire pits, and hot tubs where guests can enjoy the famous Hill Country stargazing. Properties vary from intimate retreats perfect for couples to larger homes that can accommodate families or groups.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Private</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Countryside</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Outdoor Space</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Booking Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText mb-6">
                  <li>Fredericksburg accommodations often book months in advance for popular weekends and events</li>
                  <li>Many properties have two-night minimum stays on weekends</li>
                  <li>For best rates and availability, consider Sunday through Thursday stays</li>
                  <li>Oktoberfest, holiday weekends, and spring wildflower season see peak demand</li>
                  <li>Many historic properties have stairs and may not be suitable for those with mobility concerns</li>
                  <li>If walkability to Main Street is important, confirm the property's location before booking</li>
                </ul>
                <div className="text-center">
                  <Link href="/vacationrentals" className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors">
                    Browse our Fredericksburg cabin rentals <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Festivals and Events */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Festivals and Events</h2>
          <p className="text-lg text-darkText max-w-4xl mx-auto text-center mb-10">
            Fredericksburg's calendar is filled with festivals, events, and celebrations that showcase the town's German heritage, wine culture, and Texas traditions. Planning your visit around one of these events adds an extra dimension to your Fredericksburg experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Annual Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-darkText">
                <li><span className="font-bold">Oktoberfest (Early October):</span> A three-day celebration of German heritage with music, dancing, food, and, of course, beer. The festival features multiple stages with traditional German music, a children's area, arts and crafts, and authentic German cuisine.</li>
                <li><span className="font-bold">Christmas Nights of Lights (November-January):</span> The town transforms into a holiday wonderland with Marktplatz lighting, an ice skating rink, a Christmas pyramid, and festive decorations throughout downtown.</li>
                <li><span className="font-bold">Fredericksburg Food & Wine Fest (October):</span> Celebrating the culinary and wine traditions of the region with tastings, cooking demonstrations, and live entertainment.</li>
                <li><span className="font-bold">Gillespie County Fair (August):</span> Texas' oldest continuous county fair features agricultural exhibits, a parade, carnival, rodeo events, and horse racing.</li>
                <li><span className="font-bold">Peach JAMboree (June):</span> Celebrating the famous Fredericksburg peach harvest with a parade, peach contests, dances, and rodeo events.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Seasonal Events</h3>
              <div className="space-y-4 text-darkText">
                <div>
                  <h4 className="font-bold text-primary mb-1">Spring (March-May)</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Wildflower Celebration at Wildseed Farms</li>
                    <li>Easter Festival</li>
                    <li>Hill Country Film Festival</li>
                    <li>Texas Wine & Wildflower Trail</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Summer (June-August)</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Fredericksburg Summer Concert Series</li>
                    <li>Night In Old Fredericksburg</li>
                    <li>Peach Season Events</li>
                    <li>Gillespie County Fair</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Fall (September-November)</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Oktoberfest</li>
                    <li>Food & Wine Fest</li>
                    <li>Texas Mesquite Art Festival</li>
                    <li>Fredericksburg Trade Days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Winter (December-February)</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Christmas Nights of Lights</li>
                    <li>Light the Night Christmas Parade</li>
                    <li>First Friday Art Walk</li>
                    <li>Wine Lovers Celebration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Planning Around Events</h3>
              <p className="text-darkText mb-4">
                While events and festivals add excitement and unique experiences to your Fredericksburg visit, they also bring larger crowds and higher accommodation rates. If you're planning to attend a major festival like Oktoberfest or visit during peak seasons like wildflower time or holidays, here are some tips:
              </p>
              <ul className="list-disc list-inside space-y-2 text-darkText">
                <li>Book accommodations 6-12 months in advance for major events</li>
                <li>Make dinner reservations well ahead of your visit</li>
                <li>Consider staying slightly outside town for more availability</li>
                <li>Purchase event tickets early when available</li>
                <li>Plan extra time for activities due to increased crowds and traffic</li>
                <li>Check the official Fredericksburg Convention & Visitor Bureau website for updated event calendars</li>
              </ul>
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
                  Fredericksburg is centrally located in the Texas Hill Country, making it accessible from several major cities. The town's position at the crossroads of US Highway 290 and US Highway 87 provides convenient access from multiple directions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">By Car:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                      <li><span className="font-bold">From Austin:</span> 78 miles west (approximately 1.5 hours) via US-290 W</li>
                      <li><span className="font-bold">From San Antonio:</span> 70 miles north (approximately 1.25 hours) via I-10 W and US-87 N</li>
                      <li><span className="font-bold">From Houston:</span> 240 miles west (approximately 4 hours) via I-10 W and US-290 W</li>
                      <li><span className="font-bold">From Dallas/Fort Worth:</span> 250 miles southwest (approximately 4.5 hours) via I-35 S and US-290 W</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Nearest Airports:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                      <li>San Antonio International Airport (SAT) - 70 miles</li>
                      <li>Austin-Bergstrom International Airport (AUS) - 78 miles</li>
                      <li>Gillespie County Airport - small airport in Fredericksburg for private planes</li>
                      <li>Car rental is recommended for visiting Fredericksburg</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Getting Around Fredericksburg</h3>
                <p className="text-darkText mb-4">
                  Downtown Fredericksburg is highly walkable, with most shops, restaurants, and attractions concentrated along Main Street and adjacent blocks. However, to visit wineries, Enchanted Rock, and other outlying attractions, a vehicle is necessary.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Transportation Options:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText">
                      <li>Personal vehicle (recommended)</li>
                      <li>Wine tour shuttles and limousines</li>
                      <li>Limited taxi services</li>
                      <li>Bicycle rentals for local exploration</li>
                      <li>Walking in the downtown area</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Distances from Downtown:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText">
                      <li>Enchanted Rock State Natural Area - 17 miles</li>
                      <li>Wildseed Farms - 7 miles</li>
                      <li>Nearest wineries on Wine Road 290 - 4-15 miles</li>
                      <li>Luckenbach - 13 miles</li>
                      <li>LBJ Ranch - 15 miles</li>
                    </ul>
                  </div>
                </div>
                <p className="text-darkText italic text-center">
                  "The winding roads between wineries and attractions are part of the Fredericksburg experience—enjoy the scenic drives and allow plenty of time between destinations."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nearby Destinations */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Day Trips from Fredericksburg</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-darkText mb-8 text-center">
              Fredericksburg's central location in the Hill Country makes it an ideal base for exploring the region. These nearby destinations offer perfect day-trip opportunities, allowing you to return to your Fredericksburg accommodation each evening.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Luckenbach (13 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Legendary dance hall and music venue</li>
                  <li>Historic general store and bar</li>
                  <li>Live music daily</li>
                  <li>Authentic Texas atmosphere</li>
                  <li>"Everybody's Somebody in Luckenbach"</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Johnson City (24 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>LBJ Ranch and National Historical Park</li>
                  <li>Lyndon B. Johnson State Park & Historic Site</li>
                  <li>Science Mill interactive museum</li>
                  <li>Pedernales Falls State Park</li>
                  <li>Emerging wine and beer scene</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Comfort (25 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Well-preserved historic district</li>
                  <li>Antique shopping</li>
                  <li>Guadalupe River access</li>
                  <li>Boutique dining experiences</li>
                  <li>Historic Comfort Common</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Kerrville (24 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>The Museum of Western Art</li>
                  <li>Guadalupe River activities</li>
                  <li>Riverside parks and trails</li>
                  <li>Kerr Arts & Cultural Center</li>
                  <li>James Avery Jewelry headquarters</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Blanco (35 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Blanco State Park</li>
                  <li>Real Ale Brewing Company</li>
                  <li>Historic Blanco County Courthouse</li>
                  <li>Lavender farms (seasonal)</li>
                  <li>Blanco River activities</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Boerne (45 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Charming Main Street (Hauptstrasse)</li>
                  <li>Cibolo Nature Center</li>
                  <li>Cave Without a Name</li>
                  <li>Boerne Lake</li>
                  <li>Agricultural Heritage Museum</li>
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

export default Fredericksburg;