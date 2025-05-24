import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const CanyonLake = () => {
  return (
    <>
      <Helmet>
        <title>Canyon Lake, Texas - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Discover Canyon Lake, the 'Water Recreation Capital of Texas.' Explore this scenic reservoir with its pristine shores, water activities, and surrounding natural attractions in the heart of Hill Country."
        />
        <meta name="keywords" content="Canyon Lake Texas, Guadalupe River, water recreation, boating, fishing, lakefront cabins, Texas Hill Country" />
        <meta property="og:title" content="Canyon Lake, Texas - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Discover Canyon Lake, the 'Water Recreation Capital of Texas.' Explore this scenic reservoir with its pristine shores, water activities, and surrounding natural attractions in the heart of Hill Country."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/destinations/canyonlake" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading max-w-4xl">
                Canyon Lake, Texas
              </h1>
              <p className="text-xl text-white max-w-2xl">
                The Water Recreation Capital of Texas in the heart of Hill Country
              </p>
            </div>
          </div>
        </div>
        
        {/* Introduction */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading text-center">Welcome to Canyon Lake</h2>
            <p className="text-lg text-darkText mb-6">
              Nestled in the heart of Texas Hill Country, Canyon Lake has earned its reputation as the "Water Recreation Capital of Texas." Created in 1964 through the damming of the Guadalupe River, this pristine reservoir spans 8,230 acres with 80 miles of shoreline, offering a scenic playground for water enthusiasts and nature lovers alike.
            </p>
            <p className="text-lg text-darkText mb-6">
              Unlike more developed lakeside destinations, Canyon Lake maintains a more natural, peaceful atmosphere. The lake is surrounded by rolling hills covered in juniper and oak trees, with limestone cliffs and coves creating a dramatic landscape. The clear, cool waters range from shallow inlets perfect for swimming to depths of over 120 feet ideal for diving.
            </p>
            <p className="text-lg text-darkText">
              Beyond the lake itself, the area encompasses the scenic Guadalupe River below the dam, numerous parks and recreation areas, charming lakeside communities, and natural wonders like the Canyon Lake Gorge. Whether you're seeking active water sports, peaceful fishing, scenic hiking, or simply relaxing by the shore, Canyon Lake offers a quintessential Hill Country experience centered around its beautiful waters.
            </p>
          </div>
        </div>
        
        {/* Lake Recreation */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Lake Recreation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Boating */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1517509447729-0bc855742ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Boating on Canyon Lake" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Boating and Water Sports</h3>
                <p className="text-darkText mb-4">
                  Canyon Lake's expansive waters provide the perfect setting for a variety of boating activities. The lake accommodates everything from leisurely pontoon cruises to exhilarating speedboats, jet skis, and sailboats. Multiple public boat ramps around the lake offer convenient access, while several marinas provide rentals, supplies, and services for boaters.
                </p>
                <p className="text-darkText mb-4">
                  Water sports enthusiasts flock to Canyon Lake for waterskiing, wakeboarding, and tubing. The lake's size allows for both busy areas where water sports thrive and quieter coves where paddlers can enjoy kayaking and stand-up paddleboarding in more tranquil settings. For those without their own equipment, several outfitters offer rentals of various watercraft and gear.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">Lake Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>8,230 surface acres with 80 miles of shoreline</li>
                    <li>Maximum depth of 120+ feet</li>
                    <li>Multiple public boat ramps with parking</li>
                    <li>Several marinas offering rentals and services</li>
                    <li>No horsepower restrictions on the main lake</li>
                    <li>Some coves designated as no-wake zones</li>
                  </ul>
                </div>
              </div>
              
              {/* Fishing */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1542646187-2918a272b359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Fishing at Canyon Lake" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Fishing</h3>
                <p className="text-darkText mb-4">
                  Canyon Lake has earned a reputation as one of Texas' premier fishing destinations, particularly for its striped bass population. The lake also supports healthy populations of largemouth bass, smallmouth bass, white bass, catfish, and several species of sunfish. The varied underwater terrain, from shallow flats to deep channels, provides diverse habitats that support different species throughout the year.
                </p>
                <p className="text-darkText mb-4">
                  Anglers can fish from the shore, particularly in the public parks that offer access to the water's edge, or venture onto the lake in boats to reach prime fishing spots. Below the dam, the tailrace area offers excellent trout fishing, especially during winter months when the water is stocked with rainbow trout.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">Fishing Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Valid Texas fishing license required</li>
                    <li>Renowned for striped bass fishing year-round</li>
                    <li>Annual stocking of rainbow trout below the dam</li>
                    <li>Several fishing guides and charters available</li>
                    <li>Spring and fall typically offer the best fishing conditions</li>
                    <li>Multiple fishing tournaments throughout the year</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Parks and Swimming</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Canyon Park</h4>
                  <p className="text-darkText mb-3">
                    Operated by the U.S. Army Corps of Engineers, this expansive park offers perhaps the best swimming beaches on Canyon Lake. The park features multiple designated swimming areas with sandy beaches, picnic facilities with grills, boat ramps, and hiking trails. Camping is available with both RV sites with hookups and tent camping areas. The park's size allows visitors to find their own space even during busy summer weekends.
                  </p>
                  <p className="text-darkText">
                    Canyon Park is typically open from spring through fall, with peak usage during summer months. Day use fees apply, and camping reservations are recommended, especially for summer weekends and holidays when the park often reaches capacity.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Comal Park</h4>
                  <p className="text-darkText mb-3">
                    Located on the south shore of Canyon Lake, Comal Park offers well-maintained swimming areas with sandy beaches that are particularly popular with families. The park includes picnic areas, playgrounds, volleyball courts, and restroom facilities. A boat ramp provides access to the lake for watercraft.
                  </p>
                  <p className="text-darkText">
                    Like other Corps of Engineers parks, Comal Park operates seasonally and charges a day use fee. The park tends to fill quickly on summer weekends, so early arrival is recommended. Unlike Canyon Park, Comal Park does not offer overnight camping.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Overlook Park</h4>
                  <p className="text-darkText">
                    As its name suggests, this park offers spectacular panoramic views of Canyon Lake from its position atop the dam. While not a swimming destination, Overlook Park provides an excellent vantage point for photography and appreciating the lake's beauty. Picnic tables and restroom facilities are available, making it a perfect spot for a scenic lunch break. The park is free to visit and open year-round during daylight hours.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Guadalupe Park</h4>
                  <p className="text-darkText">
                    Situated below Canyon Dam, this park provides access to the Guadalupe River rather than the lake itself. The cool, clear river waters create excellent conditions for trout fishing, especially during stocking season. While swimming is possible, the park is more oriented toward fishing and picnicking. The park features picnic areas, restroom facilities, and parking. A day use fee applies during the operating season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Canyon Lake Gorge */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Canyon Lake Gorge</h2>
          
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="md:col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1583517315494-5a5f08ca3782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200" 
                    alt="Canyon Lake Gorge" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-primary mb-3 font-heading">A Natural Wonder Revealed</h3>
                  <p className="text-darkText mb-4">
                    One of Canyon Lake's most remarkable features is the Canyon Lake Gorge, a geological wonder that was dramatically revealed during a massive flood in 2002. When record rainfall caused water to flow over the spillway of Canyon Dam for the first time since its construction, the tremendous force of the water carved a mile-long gorge through the limestone landscape, exposing 110-million-year-old dinosaur tracks, prehistoric fossils, and geological features that had been hidden for eons.
                  </p>
                  <p className="text-darkText mb-4">
                    The flood event transformed the landscape in a matter of days, creating what would have naturally taken thousands of years to form. Today, the gorge serves as an outdoor classroom where visitors can witness exposed fault lines, limestone layers, fossils, and ecological succession in progress—a living laboratory showcasing the dynamic forces that shaped the Texas Hill Country.
                  </p>
                  <p className="text-darkText">
                    Access to the gorge is limited to guided tours led by trained docents from the Gorge Preservation Society. These tours offer an in-depth educational experience, explaining the geological and ecological significance of this relatively young natural feature. The three-hour tours involve moderate hiking over uneven terrain, offering close-up views of features like lagoon deposits, dinosaur tracks, and ancient marine fossils.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-primary mb-2">Tour Information:</h4>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Tours available several days per week (schedule varies seasonally)</li>
                  <li>Advance reservations required through the Gorge Preservation Society</li>
                  <li>Tours last approximately 3 hours and cover 1.5 miles</li>
                  <li>Moderate hiking required over uneven terrain</li>
                  <li>Not recommended for children under 7 or those with mobility issues</li>
                  <li>Closed-toe shoes, sun protection, and water are essential</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* River Recreation */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Guadalupe River</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200" 
                      alt="Guadalupe River" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Below the Dam</h3>
                    <p className="text-darkText mb-4">
                      While Canyon Lake itself offers numerous recreational opportunities, the Guadalupe River flowing below Canyon Dam provides an entirely different experience. The controlled release of water from the dam creates a consistently flowing river with cool, clear water ideal for a variety of activities throughout the year.
                    </p>
                    <p className="text-darkText mb-4">
                      The section of the Guadalupe below the dam is nationally recognized for its trout fishing. The cold water released from the depths of Canyon Lake creates an environment where rainbow trout can thrive, making this one of the southernmost trout fisheries in the United States. During winter months, regular stocking by Texas Parks and Wildlife enhances the fishing experience.
                    </p>
                    <p className="text-darkText">
                      Beyond fishing, this stretch of the Guadalupe is popular for tubing, kayaking, and canoeing. Numerous outfitters along River Road provide equipment rentals and shuttle services, allowing visitors to enjoy floating trips of various lengths. The riverside is dotted with vacation rentals, campgrounds, and day-use areas providing access to the water.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">River Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li><span className="font-bold">Trout Fishing</span> - The tailrace area below the dam is stocked with rainbow trout from December through February, creating a unique fishing opportunity in Central Texas</li>
                    <li><span className="font-bold">Tubing</span> - A classic Texas pastime, floating the river in inner tubes is particularly popular during summer months</li>
                    <li><span className="font-bold">Kayaking</span> - The steady flow makes for excellent kayaking for both beginners and experienced paddlers</li>
                    <li><span className="font-bold">Canoeing</span> - Several outfitters rent canoes for half-day or full-day river trips</li>
                    <li><span className="font-bold">Swimming</span> - Numerous access points allow for swimming in the clear, cool river water</li>
                    <li><span className="font-bold">Wildlife Viewing</span> - The riparian environment attracts diverse wildlife, making it excellent for bird watching and nature photography</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">River Road</h3>
                  <p className="text-darkText mb-4">
                    Winding alongside the Guadalupe River below Canyon Dam, River Road offers one of the most scenic drives in the Hill Country. This 20-mile stretch follows the river's course through cypress-lined banks and limestone cliffs, providing access to numerous river outfitters, campgrounds, vacation rentals, and public access points.
                  </p>
                  <p className="text-darkText">
                    Along River Road, you'll find a variety of businesses catering to river enthusiasts:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Outfitters offering tube, kayak, and canoe rentals</li>
                    <li>Shuttle services for river floats</li>
                    <li>Campgrounds ranging from rustic to resort-style</li>
                    <li>Riverside cabins and vacation rentals</li>
                    <li>Small restaurants and convenience stores</li>
                    <li>Fly fishing shops specializing in trout fishing gear</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">River Conditions and Safety</h3>
                <p className="text-darkText mb-4">
                  The flow rate of the Guadalupe River below Canyon Dam is controlled by the U.S. Army Corps of Engineers based on various factors including lake levels, downstream needs, and flood control requirements. This means river conditions can change, sometimes rapidly, affecting activities like tubing and fishing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Flow Rates and Activities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText">
                      <li><span className="font-bold">Below 100 CFS</span> - Better for fishing, may require walking tubes in shallow areas</li>
                      <li><span className="font-bold">100-300 CFS</span> - Ideal for leisurely tubing and family activities</li>
                      <li><span className="font-bold">300-500 CFS</span> - Good for tubing with faster currents</li>
                      <li><span className="font-bold">500-1000 CFS</span> - Better for experienced kayakers, tubing becomes more challenging</li>
                      <li><span className="font-bold">Above 1000 CFS</span> - Dangerous conditions for recreational use</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Safety Tips:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText">
                      <li>Check current flow rates before planning river activities</li>
                      <li>Wear life jackets, especially for children and non-swimmers</li>
                      <li>Be aware that the river water is cold year-round due to bottom releases from the dam</li>
                      <li>Avoid glass containers and excess alcohol consumption on the river</li>
                      <li>Secure valuables in waterproof containers</li>
                      <li>Apply sunscreen regularly, even on cloudy days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Area Attractions */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Area Attractions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1556375414-45e97d2c247b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Heritage Museum" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Heritage Museum of the Texas Hill Country</h3>
                <p className="text-darkText mb-4">
                  Located near Canyon Lake, this unique museum focuses on the natural history and cultural heritage of the Hill Country region. The museum's highlight is its collection of over 200 dinosaur tracks preserved in limestone, some dating back 110 million years. These tracks offer a fascinating glimpse into the prehistoric era when dinosaurs roamed what was then a coastal shoreline.
                </p>
                <p className="text-darkText mb-4">
                  Beyond the dinosaur tracks, the museum features exhibits on Native American artifacts, pioneer life, and local geology. The grounds include a native plant garden, picnic areas, and nature trails that showcase the area's flora and fauna. Educational programs and guided tours provide insights into the region's rich natural and cultural history.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Educational</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Family-Friendly</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Historical</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1563302111-eab4b145e6d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Hiking Trails" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Hiking and Nature Trails</h3>
                <p className="text-darkText mb-4">
                  The Canyon Lake area offers several scenic hiking trails that showcase the region's natural beauty. The Madrone Trail, accessible from Canyon Park, winds through juniper and oak woodlands with occasional lake views. This moderate 2.5-mile trail features diverse plant life and wildlife viewing opportunities.
                </p>
                <p className="text-darkText mb-4">
                  For a more challenging hike, the Guadalupe River State Park, located downstream from Canyon Lake, offers over 5 miles of trails ranging from easy riverside paths to more strenuous routes through the hills. These trails provide access to beautiful river views, limestone cliffs, and diverse Hill Country ecosystems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Outdoor</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Scenic</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Nature</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Scenic Drives" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Scenic Drives</h3>
                <p className="text-darkText mb-4">
                  The roads surrounding Canyon Lake offer some of the most picturesque driving routes in the Hill Country. The 30-mile loop around Canyon Lake provides constantly changing vistas of the lake, surrounding hills, and limestone cliffs. Multiple pullouts along the route allow for photo opportunities and lake viewing.
                </p>
                <p className="text-darkText mb-4">
                  Devil's Backbone, a limestone ridge running along FM 32 south of Canyon Lake, offers spectacular panoramic views of the Hill Country landscape. This winding road is particularly popular with motorcyclists and photographers, especially during spring wildflower season and fall when the foliage changes color.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Panoramic Views</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Photography</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Road Trip</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Nearby Communities</h3>
              <p className="text-darkText mb-4">
                While visiting Canyon Lake, consider exploring these nearby communities, each offering its own unique attractions and atmosphere:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">Wimberley (20 miles):</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Charming artistic community with unique shopping</li>
                    <li>Blue Hole Regional Park for swimming</li>
                    <li>Jacob's Well natural swimming hole</li>
                    <li>Wimberley Market Days (first Saturday, March-December)</li>
                    <li>EmilyAnn Theatre & Gardens</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">New Braunfels (15 miles):</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>German heritage and architecture</li>
                    <li>Gruene Historic District with Gruene Hall</li>
                    <li>Schlitterbahn Waterpark</li>
                    <li>Comal River tubing</li>
                    <li>Shopping and dining in downtown</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">San Marcos (25 miles):</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Glass-bottom boat tours at Spring Lake</li>
                    <li>Premium outlet shopping</li>
                    <li>Texas State University campus</li>
                    <li>San Marcos River activities</li>
                    <li>Wonder World Cave and Adventure Park</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Blanco (25 miles):</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Blanco State Park with river swimming</li>
                    <li>Real Ale Brewing Company</li>
                    <li>Lavender farms (seasonal)</li>
                    <li>Historic courthouse square</li>
                    <li>Blanco River activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Accommodation */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Where to Stay</h2>
            <p className="text-lg text-darkText max-w-4xl mx-auto text-center mb-10">
              Canyon Lake offers a variety of accommodation options that take advantage of the area's natural beauty and lake access. From lakefront cabins to riverside retreats, visitors can find the perfect base for their Hill Country water adventure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Lakeside Cabins" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Lakeside Cabins and Homes</h3>
                  <p className="text-darkText mb-4">
                    For the quintessential Canyon Lake experience, consider staying in one of the many cabins or vacation homes situated along the lake's 80 miles of shoreline. These properties range from cozy one-bedroom cabins to luxurious lakefront estates that can accommodate large groups or family reunions.
                  </p>
                  <p className="text-darkText mb-4">
                    Many lakeside properties feature private docks, boat slips, and direct water access, allowing guests to fully immerse themselves in lake activities. Decks and patios overlooking the water provide perfect settings for morning coffee or evening relaxation as the sun sets over the hills.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Lake Views</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Water Access</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Privacy</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Riverside Retreats" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Riverside Retreats</h3>
                  <p className="text-darkText mb-4">
                    Along the Guadalupe River below Canyon Dam, numerous vacation rentals offer a different water experience. These riverside properties provide convenient access to fishing, tubing, and kayaking directly from their yards. Many feature private river access, outdoor fire pits, and decks overlooking the flowing water.
                  </p>
                  <p className="text-darkText mb-4">
                    Accommodations along River Road range from rustic cabins to modern homes with upscale amenities. Many are situated among cypress trees along the riverbank, creating a peaceful setting where the sound of flowing water provides a constant natural soundtrack.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">River Access</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Natural Setting</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Fishing & Tubing</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Camping" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-heading">Camping and RV Parks</h3>
                  <p className="text-darkText mb-4">
                    For outdoor enthusiasts, Canyon Lake offers excellent camping options. The U.S. Army Corps of Engineers operates several campgrounds around the lake, including Canyon Park, Cranes Mill Park, and Potter's Creek Park. These facilities offer a mix of RV sites with hookups and tent camping areas, many with lake views or direct lake access.
                  </p>
                  <p className="text-darkText mb-4">
                    Private campgrounds and RV resorts in the area often provide additional amenities such as swimming pools, game rooms, organized activities, and convenience stores. Many riverside campgrounds along the Guadalupe River below the dam cater specifically to tubers and anglers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Outdoor</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Economical</span>
                    <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Nature Immersion</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Booking Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText mb-6">
                  <li>Lakefront and riverfront properties often book 6-12 months in advance for summer season</li>
                  <li>Properties with water access command premium rates, especially those with private docks</li>
                  <li>Many vacation rentals require minimum stays during peak periods (typically 2-3 nights)</li>
                  <li>Holiday weekends like Memorial Day, Fourth of July, and Labor Day book earliest</li>
                  <li>For camping, reservations for summer weekends should be made as soon as booking windows open</li>
                  <li>Consider visiting during shoulder seasons (spring and fall) for better rates and availability</li>
                  <li>When booking riverside properties, check whether they have direct river access or require a short walk</li>
                </ul>
                <div className="text-center">
                  <Link href="/vacationrentals" className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors">
                    Browse our Canyon Lake cabin rentals <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seasonal Information */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Seasonal Guide</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-darkText text-center mb-8">
              Canyon Lake offers unique experiences throughout the year. Each season brings different activities, weather conditions, and natural features to enjoy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Spring (March-May)</h3>
                <p className="text-darkText mb-4">
                  Spring brings mild temperatures and the famous Texas wildflower displays to the hills surrounding Canyon Lake. The landscape comes alive with bluebonnets, Indian paintbrush, and dozens of other native wildflowers, creating spectacular scenery for hiking, scenic drives, and photography.
                </p>
                <h4 className="font-bold text-primary mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li>Wildflower viewing along roads and trails</li>
                  <li>Comfortable temperatures for hiking and outdoor activities</li>
                  <li>Excellent fishing as species become more active</li>
                  <li>Less crowded than summer months</li>
                  <li>Increasing water temperatures for swimming</li>
                </ul>
                <p className="text-darkText italic">
                  "Spring offers the perfect balance of pleasant weather and natural beauty before the summer crowds arrive."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Summer (June-August)</h3>
                <p className="text-darkText mb-4">
                  Summer is peak season at Canyon Lake, when hot Texas temperatures make water activities particularly appealing. The lake buzzes with activity as boaters, swimmers, and water sports enthusiasts take full advantage of the cooling waters. Likewise, the Guadalupe River below the dam offers relief from the heat with its consistently cool flows.
                </p>
                <h4 className="font-bold text-primary mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li>Perfect conditions for swimming and water sports</li>
                  <li>Extended daylight hours for longer days on the water</li>
                  <li>Tubing season on the Guadalupe River</li>
                  <li>Camping under star-filled skies</li>
                  <li>Festive atmosphere with events and live music</li>
                </ul>
                <p className="text-darkText italic">
                  "Early mornings and evenings offer more comfortable temperatures and less crowded conditions during peak summer season."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Fall (September-November)</h3>
                <p className="text-darkText mb-4">
                  As temperatures moderate, fall brings a quieter, more relaxed atmosphere to Canyon Lake. The summer crowds thin out, but the weather remains pleasant enough for most water activities through September and often into October. Fall color, while not as dramatic as in northern states, adds visual interest to the surrounding hills.
                </p>
                <h4 className="font-bold text-primary mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li>More peaceful lake and river experiences</li>
                  <li>Excellent fishing conditions</li>
                  <li>Pleasant hiking weather</li>
                  <li>Better availability and rates for accommodations</li>
                  <li>Scenic drives with fall color (late October-November)</li>
                </ul>
                <p className="text-darkText italic">
                  "Fall offers many of the same activities as summer but with more space to yourself and more comfortable temperatures."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Winter (December-February)</h3>
                <p className="text-darkText mb-4">
                  Winter brings a different side of Canyon Lake, with quiet coves, peaceful shores, and dramatically fewer visitors. While swimming is primarily for the brave, winter offers unique opportunities for wildlife viewing, photography, and experiencing the lake's natural beauty in solitude. Below the dam, winter brings the renowned trout fishing season.
                </p>
                <h4 className="font-bold text-primary mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li>Rainbow trout fishing below Canyon Dam</li>
                  <li>Abundant wildlife viewing opportunities</li>
                  <li>Clear, crisp days with excellent visibility</li>
                  <li>Hiking without summer heat</li>
                  <li>Lowest accommodation rates of the year</li>
                </ul>
                <p className="text-darkText italic">
                  "Winter reveals a peaceful side of Canyon Lake that many visitors never experience, with crisp air and clear views across the water."
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Weather Considerations</h3>
              <p className="text-darkText mb-4">
                When planning your Canyon Lake visit, keep these weather patterns in mind:
              </p>
              <ul className="list-disc list-inside space-y-2 text-darkText">
                <li>Summer temperatures regularly reach the 90s and can exceed 100°F in July and August</li>
                <li>Afternoon thunderstorms are common during summer months and can develop quickly</li>
                <li>Spring is the rainiest season, with May typically receiving the most precipitation</li>
                <li>Winter temperatures are mild by northern standards but can occasionally drop below freezing</li>
                <li>Water temperature in the lake varies from the 50s in winter to the 80s in summer</li>
                <li>The river below the dam maintains a relatively constant cool temperature year-round due to bottom releases from the lake</li>
                <li>Hill Country weather can change rapidly - check forecasts regularly during your visit</li>
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
                  Canyon Lake is centrally located in the Texas Hill Country, making it accessible from several major cities. The lake itself is surrounded by a network of roads that provide access to various parks, marinas, and recreation areas around its shore.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">By Car:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                      <li><span className="font-bold">From San Antonio:</span> 40 miles northeast (approximately 50 minutes) via US-281 N and FM 306</li>
                      <li><span className="font-bold">From Austin:</span> 50 miles southwest (approximately 1 hour) via I-35 S and FM 306</li>
                      <li><span className="font-bold">From Houston:</span> 200 miles west (approximately 3 hours) via I-10 W and US-281 N</li>
                      <li><span className="font-bold">From Dallas/Fort Worth:</span> 250 miles south (approximately 4 hours) via I-35 S</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Nearest Airports:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                      <li>San Antonio International Airport (SAT) - 40 miles (approximately 50 minutes)</li>
                      <li>Austin-Bergstrom International Airport (AUS) - 60 miles (approximately 1.25 hours)</li>
                      <li>Car rental is essential for visiting Canyon Lake</li>
                      <li>No public transportation connects the airports to Canyon Lake</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Getting Around Canyon Lake</h3>
                <p className="text-darkText mb-4">
                  The Canyon Lake area is relatively spread out, with attractions, parks, and accommodations distributed around the lake's 80-mile shoreline and along the river below the dam. A personal vehicle is essential for exploring the area effectively.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Transportation Options:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText">
                      <li>Personal vehicle (essential)</li>
                      <li>Boat travel on the lake (convenient for accessing lakeside attractions)</li>
                      <li>River shuttle services (for tubing on the Guadalupe)</li>
                      <li>Very limited rideshare availability</li>
                      <li>Bicycle travel (limited to specific areas due to hilly terrain)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Key Routes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-darkText">
                      <li>FM 306 - Main road traversing the north side of the lake</li>
                      <li>FM 2673 - Primary route along the south side of the lake</li>
                      <li>River Road - Follows the Guadalupe below the dam</li>
                      <li>FM 3159 - Connects the dam area to Startzville</li>
                      <li>FM 32 (Devil's Backbone) - Scenic route south of the lake</li>
                    </ul>
                  </div>
                </div>
                <p className="text-darkText italic text-center">
                  "The Canyon Lake area rewards exploration - take time to drive the scenic routes around the lake and discover hidden coves and viewpoints."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nearby Destinations */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Day Trips from Canyon Lake</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-darkText mb-8 text-center">
              Canyon Lake's central location in the Hill Country makes it an ideal base for exploring the wider region. These nearby destinations offer perfect day-trip opportunities, allowing you to return to your Canyon Lake accommodation each evening.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">New Braunfels (15 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Gruene Historic District with Gruene Hall</li>
                  <li>Schlitterbahn Waterpark</li>
                  <li>Comal River tubing</li>
                  <li>German heritage and cuisine</li>
                  <li>Shopping and dining in downtown</li>
                  <li>Animal World & Snake Farm Zoo</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">San Antonio (40 miles)</h3>
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
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">San Marcos (25 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Glass-bottom boat tours at Spring Lake</li>
                  <li>Premium outlet shopping</li>
                  <li>Texas State University campus</li>
                  <li>San Marcos River activities</li>
                  <li>Wonder World Cave and Adventure Park</li>
                  <li>Downtown arts and dining district</li>
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
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Austin (50 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>State Capitol tours</li>
                  <li>Barton Springs Pool</li>
                  <li>South Congress shopping and dining</li>
                  <li>Live music venues</li>
                  <li>Lady Bird Lake activities</li>
                  <li>Museum and gallery visits</li>
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

export default CanyonLake;