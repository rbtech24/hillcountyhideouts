import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const Wimberley = () => {
  return (
    <>
      <Helmet>
        <title>Wimberley, Texas - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Discover Wimberley, the artistic heart of Texas Hill Country, with its pristine swimming holes, vibrant arts scene, and charming downtown square."
        />
        <meta name="keywords" content="Wimberley Texas, Blue Hole, Jacob's Well, Wimberley Square, Hill Country cabins" />
        <meta property="og:title" content="Wimberley, Texas - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Discover Wimberley, the artistic heart of Texas Hill Country, with its pristine swimming holes, vibrant arts scene, and charming downtown square."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/destinations/wimberley" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626635134826-de653df7fce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading max-w-4xl">
                Wimberley, Texas
              </h1>
              <p className="text-xl text-white max-w-2xl">
                The artistic soul of Texas Hill Country, where crystal-clear waters meet creative spirit
              </p>
            </div>
          </div>
        </div>
        
        {/* Introduction */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading text-center">Welcome to Wimberley</h2>
            <p className="text-lg text-darkText mb-6">
              Nestled in the heart of Texas Hill Country along the banks of Cypress Creek and the Blanco River, Wimberley has earned its reputation as one of the most charming small towns in Texas. Originally established as a mill town in the mid-1800s, Wimberley has evolved into a haven for artists, musicians, and those seeking the perfect blend of natural beauty and creative culture.
            </p>
            <p className="text-lg text-darkText mb-6">
              Just 40 minutes southwest of Austin and an hour north of San Antonio, Wimberley offers an accessible escape that feels worlds away from city life. The town's population of around 3,000 residents swells on weekends and during summer months as visitors flock to experience its natural swimming holes, browse its galleries and boutiques, and soak in the relaxed Hill Country atmosphere.
            </p>
            <p className="text-lg text-darkText">
              Whether you're planning a romantic weekend getaway, a family vacation, or a solo retreat to reconnect with nature, Wimberley offers experiences that will leave you enchanted and eager to return.
            </p>
          </div>
        </div>
        
        {/* Natural Attractions */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Natural Wonders</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Blue Hole */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1626635134826-de653df7fce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Blue Hole Regional Park" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Blue Hole Regional Park</h3>
                <p className="text-darkText mb-4">
                  Perhaps Wimberley's most iconic natural attraction, Blue Hole Regional Park centers around a pristine swimming hole surrounded by ancient cypress trees. The crystal-clear waters maintain a refreshing temperature year-round, while rope swings suspended from cypress branches invite the adventurous to make a splash.
                </p>
                <p className="text-darkText mb-4">
                  Beyond the swimming area, the 126-acre park offers hiking trails, picnic areas, a basketball court, sand volleyball courts, an amphitheater, and playgrounds. The park's commitment to environmental sustainability earned it recognition from the Sustainable Sites Initiative.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">Visitor Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Reservations are required during swimming season (May-September)</li>
                    <li>Swimming is available from 10am to 6pm</li>
                    <li>The park itself is open from 8am to dusk year-round</li>
                    <li>Admission fees apply for swimming ($12 adults, $6 seniors/children)</li>
                    <li>Non-swimming park access is free</li>
                  </ul>
                </div>
              </div>
              
              {/* Jacob's Well */}
              <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Jacob's Well" 
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Jacob's Well</h3>
                <p className="text-darkText mb-4">
                  This artesian spring, formed from the headwaters of Cypress Creek, features a fascinating underwater cave system that descends vertically for over 120 feet. The main chamber's mouth creates a natural swimming hole with stunningly clear, 68-degree water. Brave swimmers can jump from the surrounding limestone ledges into the well's deep blue waters.
                </p>
                <p className="text-darkText mb-4">
                  As one of the longest underwater cave systems in Texas, Jacob's Well has attracted adventurous divers for decades. However, due to its dangerous underwater passageways, diving is now strictly regulated. The area surrounding the well has been developed as Jacob's Well Natural Area, preserving the delicate ecosystem and offering interpretive exhibits about the Edwards Aquifer.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary mb-2">Visitor Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Advance reservations required for swimming (May-September)</li>
                    <li>Hiking trails open year-round from 9am to 5:30pm</li>
                    <li>Swimming is only permitted during reserved 2-hour time slots</li>
                    <li>$9 fee for swimmers, free for hikers and non-swimmers</li>
                    <li>No pets allowed in the natural area</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">More Natural Wonders</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Cypress Creek Nature Preserve</h4>
                  <p className="text-darkText mb-3">
                    This scenic preserve along Cypress Creek offers a peaceful setting for hiking, birding, and enjoying native plants. The preserve plays a crucial role in protecting the watershed that feeds Jacob's Well and ultimately the Blanco River.
                  </p>
                  <p className="text-darkText">
                    Several access points along Ranch Road 12 provide opportunities to enjoy the creek's clear waters and shady banks. The preserve is home to diverse wildlife, including hundreds of bird species, making it a favorite spot for naturalists.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">7A Ranch and Pioneer Town</h4>
                  <p className="text-darkText mb-3">
                    Located on the banks of the Blanco River, this historic ranch offers riverside cabins and access to a beautiful stretch of the river. The property includes Pioneer Town, a recreated Old West town that showcases the area's history.
                  </p>
                  <p className="text-darkText">
                    Visitors can enjoy swimming, tubing, and fishing in the Blanco River, with rental equipment available seasonally. The riverside setting, with its towering cypress trees, provides a quintessential Hill Country experience.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Devil's Backbone</h4>
                  <p className="text-darkText">
                    This scenic limestone ridge offers some of the most spectacular views in the Hill Country. The Devil's Backbone Scenic Drive (FM 32) winds along the top of this ridge, with numerous pullouts offering panoramic vistas of rolling hills, ranchland, and distant horizons. Popular with motorcyclists and photographers, this drive is particularly breathtaking at sunset or during wildflower season.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Blanco River</h4>
                  <p className="text-darkText">
                    Running through Wimberley, the Blanco River offers numerous access points for swimming, fishing, and kayaking. The river's limestone bottom creates crystal-clear waters, while cypress trees line its banks. Several local outfitters offer kayak and tube rentals during summer months, allowing visitors to experience the river's gentle currents and peaceful scenery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Arts and Culture */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Arts and Culture</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-3">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Wimberley's Artistic Heritage</h3>
              <p className="text-lg text-darkText mb-4">
                Wimberley has long been a haven for artists inspired by the natural beauty of the Texas Hill Country. The town's artistic heritage dates back decades, with painters, sculptors, glassblowers, writers, and musicians drawn to its scenic landscapes and creative community. Today, Wimberley boasts one of the highest concentrations of working artists in Texas, with their work showcased in numerous galleries around the town square.
              </p>
              <p className="text-lg text-darkText">
                The town's commitment to the arts extends beyond its galleries to public art installations, community theater, music venues, and regular arts events. The artistic spirit of Wimberley is woven into the fabric of daily life, creating a culturally rich environment that visitors can experience throughout the year.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1526224617867-e3d81da716b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Art galleries in Wimberley" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Art Galleries</h3>
              <p className="text-darkText mb-4">
                Wimberley Square and its surrounding streets are home to numerous galleries featuring works from local and regional artists. From traditional landscape paintings capturing Hill Country vistas to contemporary sculptures, mixed media works, and handcrafted jewelry, these galleries showcase the diverse talents of the Wimberley artistic community.
              </p>
              <p className="text-darkText">
                Notable galleries include the Wimberley Valley Art League Gallery, Art on 12, and numerous artist-owned spaces that often provide opportunities to meet the creators and learn about their processes. Gallery openings frequently feature wine, live music, and chances to interact with the artists.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1546921431-b549739520de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Wimberley Market Days" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Wimberley Market Days</h3>
              <p className="text-darkText mb-4">
                Operating since 1964, Wimberley Market Days is the oldest outdoor market in the Texas Hill Country and the second-largest in the state. Held on the first Saturday of each month from March through December, this sprawling market features over 450 booths selling everything from antiques and handcrafted furniture to artisanal foods, jewelry, clothing, and art.
              </p>
              <p className="text-darkText">
                The market grounds at Lions Field include shaded areas, food vendors, and live music, creating a festive atmosphere that draws thousands of visitors each month. Market Days has become a beloved tradition for both locals and tourists, offering a showcase for local artisans and a treasure trove for shoppers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="EmilyAnn Theatre" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">EmilyAnn Theatre & Gardens</h3>
              <p className="text-darkText mb-4">
                This community theater and garden complex hosts year-round performances in its outdoor amphitheater and indoor black box theater. Founded in memory of Emily Ann Rolling, a local student with a passion for theater, the EmilyAnn has grown into a beloved cultural institution offering a diverse season of plays, musicals, and special events.
              </p>
              <p className="text-darkText">
                Beyond theatrical performances, the EmilyAnn is known for its annual Shakespeare Under the Stars series and its spectacular Trail of Lights during the holiday season. The beautiful gardens, which include a butterfly garden, meditation spaces, and an interactive children's garden, are open to the public daily from dawn to dusk.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-8">
            <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Cultural Events and Festivals</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4 text-darkText">
                <li>
                  <span className="font-bold text-primary">Wimberley Arts Fest (April)</span> - This juried fine arts festival showcases works from over 100 artists, accompanied by live music, food vendors, and wine tastings.
                </li>
                <li>
                  <span className="font-bold text-primary">Butterfly Festival (April)</span> - Held at the EmilyAnn Theatre & Gardens, this family-friendly event celebrates the release of butterflies with educational exhibits, children's activities, and garden tours.
                </li>
                <li>
                  <span className="font-bold text-primary">Wimberley Book Festival (June)</span> - Bringing together authors and readers, this literary event features book signings, readings, panel discussions, and workshops for aspiring writers.
                </li>
                <li>
                  <span className="font-bold text-primary">Wimberley Film Festival (July)</span> - An independent film showcase highlighting work from Texas filmmakers, with screenings, Q&A sessions, and networking opportunities.
                </li>
                <li>
                  <span className="font-bold text-primary">Gospel Music Festival (September)</span> - A celebration of gospel music featuring choirs and performers from across Texas.
                </li>
                <li>
                  <span className="font-bold text-primary">Trail of Lights (December)</span> - The EmilyAnn Theatre transforms into a winter wonderland with over 100 lighted displays created by community organizations, plus live music, visits with Santa, and food vendors.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Shopping and Dining */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Shopping and Dining</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Shopping */}
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Wimberley Square shops" 
                  className="w-full h-60 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Unique Shopping Experiences</h3>
                <p className="text-lg text-darkText mb-4">
                  Wimberley Square serves as the heart of the town's shopping district, with charming storefronts housed in historic buildings. Unlike typical tourist towns filled with cookie-cutter souvenirs, Wimberley offers a truly unique shopping experience focused on local artisans, boutiques, and specialty shops.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Wimberley Square and Beyond</h4>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li><span className="font-bold">Kiss the Cook</span> - Gourmet kitchen supplies and unique culinary tools</li>
                    <li><span className="font-bold">Wall Street Western</span> - High-quality western wear and boots</li>
                    <li><span className="font-bold">Wimberley Glassworks</span> - Hand-blown glass studio with demonstrations</li>
                    <li><span className="font-bold">Old Mill Store</span> - Eclectic mix of gifts, home decor, and Texas souvenirs</li>
                    <li><span className="font-bold">Taste Buds Market</span> - Specialty foods, local honey, and Hill Country wines</li>
                    <li><span className="font-bold">Lion's Den</span> - Used books and vinyl records</li>
                    <li><span className="font-bold">Bella Vista Ranch</span> - Olive oil and wine tastings just outside town</li>
                  </ul>
                </div>
                <p className="text-darkText">
                  Most shops around the square are open daily from around 10am to 5pm, with extended hours on weekends. Many shops close on Mondays and Tuesdays during the off-season (January-February), so call ahead if planning a weekday visit during winter months.
                </p>
              </div>
              
              {/* Dining */}
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Dining in Wimberley" 
                  className="w-full h-60 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Local Flavors</h3>
                <p className="text-lg text-darkText mb-4">
                  Wimberley's dining scene reflects its artistic character, with creative cuisine that ranges from sophisticated farm-to-table restaurants to casual cafes and authentic Texas barbecue. Many establishments feature outdoor patios where diners can enjoy meals alongside creek views or under ancient oak trees.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Where to Eat</h4>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li><span className="font-bold">The Leaning Pear</span> - Sophisticated Hill Country cuisine with riverside dining. Their seasonal menu features local ingredients and their patio offers stunning views of Cypress Creek. Known for their creative salads, gourmet sandwiches, and weekend specials like cedar-plank salmon and herb-roasted chicken.</li>
                    <li><span className="font-bold">Jobell Cafe & Bistro</span> - French-inspired dishes with Texas influences in an elegant yet relaxed setting. Their farm-to-table approach showcases the best of Hill Country produce alongside carefully selected wines. Don't miss their duck confit, seasonal risotto, or the charcuterie board featuring local cheeses.</li>
                    <li><span className="font-bold">Community Pizza</span> - Wood-fired pizzas with creative toppings and craft beer. The casual atmosphere and outdoor seating make this a perfect family spot. Their dough is made fresh daily and they source many ingredients locally, resulting in unique combinations like the popular fig and prosciutto pizza.</li>
                    <li><span className="font-bold">Ino'z Brew and Chew</span> - Casual dining with a deck overlooking Cypress Creek. A Wimberley institution, Ino'z offers burgers, sandwiches, salads, and a great selection of local beers. The outdoor deck is a prime spot for people-watching as tubers float by in summer. Live music on weekends adds to the lively atmosphere.</li>
                    <li><span className="font-bold">Wimberley Cafe</span> - Classic Texas breakfast and comfort food in the heart of the square. Their migas and chicken fried steak are local favorites. The cafe's cozy interior features work from local artists, and their homemade pies are not to be missed.</li>
                    <li><span className="font-bold">Hays City Store</span> - Barbecue and Tex-Mex in a historic building. This beloved spot offers smoked meats, authentic tacos, and cold beer in a rustic setting. Live music on weekends adds to the ambiance, and their outdoor area is perfect for enjoying a Hill Country sunset.</li>
                    <li><span className="font-bold">Creekside Cookers</span> - Authentic Texas barbecue served Thursday-Sunday. This no-frills smokehouse offers brisket, ribs, and sausage prepared in the traditional Texas style - slow-smoked over post oak. Get there early, as they often sell out of their most popular items, particularly their renowned beef ribs.</li>
                    <li><span className="font-bold">Linda's Fine Foods</span> - A charming bistro offering homemade soups, sandwiches, and pastries. Their patio is a peaceful spot for lunch, and their selection of desserts makes for a perfect afternoon treat. The quiche and homemade bread are particular standouts.</li>
                    <li><span className="font-bold">Kate's Place</span> - Upscale comfort food in a converted historic home. Their brunch is legendary among locals, featuring dishes like crab cake benedict and pecan-crusted French toast. Dinner service offers sophisticated Texas cuisine with seasonal ingredients.</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">Wineries and Breweries</h4>
                  <ul className="list-disc list-inside space-y-2 text-darkText">
                    <li><span className="font-bold">Wimberley Valley Winery</span> - Local wines with a tasting room and vineyard tours. Their hillside setting provides beautiful views of the surrounding countryside, making it a perfect afternoon destination. Specializing in Mediterranean varietals like Sangiovese and Viognier, they offer both structured tastings and casual wine-by-the-glass options. Weekend visitors often enjoy live music on the covered patio.</li>
                    <li><span className="font-bold">Cypress Creek Reserve Rum Distillery</span> - Handcrafted rum with tours and tastings, located in a rustic setting near Cypress Creek. Their small-batch approach yields distinctive spirits, including their signature silver rum and several aged varieties. The knowledgeable staff provides engaging tours explaining the distillation process, and their tasting room doubles as a cocktail bar where you can sample creative rum-based drinks.</li>
                    <li><span className="font-bold">Middleton Brewing</span> - Craft brewery with a scenic Hill Country view from their expansive deck. This family-owned operation produces a range of beers from traditional German-style lagers to experimental IPAs. Their taproom features rotating seasonal offerings alongside their core lineup, and food trucks often park on-site during weekends. Beer flights provide an excellent way to sample their diverse styles.</li>
                    <li><span className="font-bold">Roughhouse Brewing</span> - Farm brewery specializing in naturally fermented beers on a family ranch. Their unique approach incorporates local ingredients and native yeasts to create distinctive brews with a sense of place. The rustic tasting room and outdoor beer garden encourage relaxation among the oak trees. They frequently host events featuring local food producers, musicians, and artisans, creating a true Hill Country experience.</li>
                    <li><span className="font-bold">Driftwood Estate Winery</span> - Just a short drive from Wimberley, this winery offers some of the most spectacular views in the Hill Country from its ridge-top tasting room. Their estate-grown wines include excellent Syrah and Cabernet Sauvignon, and the relaxed atmosphere invites visitors to linger over a glass while enjoying the panoramic vistas. Weekend visitors can often enjoy live music and special food pairings.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Accommodation */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Where to Stay</h2>
          <p className="text-lg text-darkText max-w-4xl mx-auto text-center mb-10">
            Wimberley specializes in intimate, character-filled accommodations that connect visitors with the natural beauty and relaxed atmosphere of the Hill Country. From creekside cabins to luxury bed and breakfasts, the lodging options here emphasize privacy, comfort, and authentic Hill Country experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Wimberley cabins" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Cabins and Cottages</h3>
                <p className="text-darkText mb-4">
                  Wimberley is renowned for its charming cabins and cottages, many situated along Cypress Creek or the Blanco River. These accommodations range from rustic, historic cabins to modern, luxury cottages with hot tubs and outdoor kitchens.
                </p>
                <p className="text-darkText mb-4">
                  Many properties offer private water access, allowing guests to enjoy swimming, fishing, or simply relaxing by the water. Mountain shadows, cypress-lined creek banks, and secluded settings create perfect retreats for couples or families seeking privacy and natural beauty.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Romantic</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Private</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Nature Setting</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Bed and Breakfasts" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Bed and Breakfasts</h3>
                <p className="text-darkText mb-4">
                  Wimberley offers some of the finest bed and breakfast experiences in Texas, with historic homes and purpose-built lodges providing upscale accommodations and personalized hospitality. These establishments often feature gourmet breakfasts showcasing local ingredients and Hill Country flavors.
                </p>
                <p className="text-darkText mb-4">
                  Many B&Bs are owned by long-time residents who serve as knowledgeable guides to the area's attractions and hidden gems. Properties like Blair House Inn even offer cooking schools where guests can learn to prepare Hill Country cuisine.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Gourmet Breakfast</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Historic</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Personalized Service</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Vacation Rentals" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Vacation Rentals</h3>
                <p className="text-darkText mb-4">
                  For families or larger groups, Wimberley offers numerous vacation homes ranging from historic ranch houses to modern luxury properties. These spacious accommodations provide full kitchens, multiple bedrooms, and outdoor living spaces perfect for extended stays.
                </p>
                <p className="text-darkText mb-4">
                  Many vacation rentals feature large decks, outdoor fire pits, game rooms, and expansive Hill Country views. Properties are available throughout the area, from in-town locations within walking distance of the square to secluded ranches offering complete privacy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Family-Friendly</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Fully-Equipped</span>
                  <span className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">Extended Stays</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4 font-heading">Booking Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-darkText mb-6">
                <li>Wimberley accommodations often book months in advance for summer weekends and holidays</li>
                <li>For the best rates and availability, consider mid-week stays or off-season visits (January-February)</li>
                <li>Many properties have minimum stay requirements (typically 2-3 nights) during peak season</li>
                <li>If water access is important, verify the type of access (private, shared, or nearby) when booking</li>
                <li>For stays during Market Days weekends, book well in advance and expect higher rates</li>
                <li>Many Wimberley properties are pet-friendly, but always confirm pet policies before booking</li>
              </ul>
              <div className="text-center">
                <Link href="/vacationrentals" className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors">
                  Browse our Wimberley cabin rentals <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seasonal Guide */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 font-heading text-center">Seasonal Guide to Wimberley</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Spring (March-May)</h3>
                <p className="text-darkText mb-4">
                  Perhaps the most magical season in Wimberley, spring brings wildflower displays, comfortable temperatures, and flowing creeks and rivers. The hills come alive with bluebonnets, Indian paintbrush, and dozens of other native wildflowers, creating breathtaking landscapes perfect for photography.
                </p>
                <h4 className="font-bold text-primary mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li>Wildflower viewing along country roads</li>
                  <li>Butterfly Festival at EmilyAnn Theatre</li>
                  <li>Market Days begin their season in March</li>
                  <li>Wimberley Arts Fest in April</li>
                  <li>Pleasant hiking weather</li>
                </ul>
                <p className="text-darkText italic">
                  "Spring is prime time for photography in Wimberley—the wildflowers and green hills create stunning backdrops."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Summer (June-August)</h3>
                <p className="text-darkText mb-4">
                  Summer brings warm temperatures and the perfect conditions for enjoying Wimberley's famous swimming holes. Blue Hole and Jacob's Well reach peak popularity during these months, while Cypress Creek and the Blanco River offer relief from the Texas heat. Evening concerts, outdoor dining, and stargazing are summer staples.
                </p>
                <h4 className="font-bold text-primary mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li>Swimming at Blue Hole and Jacob's Well</li>
                  <li>Tubing on the Blanco River</li>
                  <li>Summer music series at various venues</li>
                  <li>Emily Ann Summer Stock performances</li>
                  <li>Wimberley Film Festival</li>
                </ul>
                <p className="text-darkText italic">
                  "Early mornings and evenings are magical in summer—hike before the heat or enjoy dinner under the stars."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Fall (September-November)</h3>
                <p className="text-darkText mb-4">
                  As temperatures moderate, fall brings a new energy to Wimberley. The changing colors of cypress trees create beautiful scenes along creek banks, while festivals and events celebrate the harvest season. With fewer tourists than summer, fall offers a more relaxed pace while still providing warm enough days for outdoor activities.
                </p>
                <h4 className="font-bold text-primary mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li>Changing foliage along Cypress Creek</li>
                  <li>Gospel Music Festival</li>
                  <li>Pleasant temperatures for hiking</li>
                  <li>Continued swimming at Blue Hole (through September)</li>
                  <li>Less crowded Market Days</li>
                </ul>
                <p className="text-darkText italic">
                  "Fall combines comfortable temperatures with fewer crowds—the perfect time for a peaceful getaway."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Winter (December-February)</h3>
                <p className="text-darkText mb-4">
                  Winter reveals another side of Wimberley, with quiet trails, cozy restaurants, and the spectacular Trail of Lights. While swimming is off the menu, winter offers perfect weather for exploring shops, galleries, and restaurants around the square. Occasional cold fronts provide the perfect excuse to enjoy a fireplace in a cabin or cottage.
                </p>
                <h4 className="font-bold text-primary mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                  <li>Trail of Lights at EmilyAnn Theatre</li>
                  <li>Winter Farmers Market</li>
                  <li>Holiday shopping on the square</li>
                  <li>Cozy dining experiences</li>
                  <li>Best accommodation rates of the year</li>
                </ul>
                <p className="text-darkText italic">
                  "Winter evenings by a fireplace with a bottle of local wine exemplify the quiet charm of off-season Wimberley."
                </p>
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
                Wimberley is located in Hays County, approximately 40 minutes southwest of Austin and about an hour north of San Antonio. Its central location in the Texas Hill Country makes it easily accessible from major cities while maintaining its small-town character.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">By Car:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li><span className="font-bold">From Austin:</span> Take TX-1 (MoPac) south to TX-45, then continue to FM 150 and RR 12</li>
                    <li><span className="font-bold">From San Antonio:</span> Take I-35 north to San Marcos, then RR 12 west</li>
                    <li><span className="font-bold">From Houston:</span> Take I-10 west to Luling, then US 183 north to San Marcos and RR 12</li>
                    <li><span className="font-bold">From Dallas/Fort Worth:</span> Take I-35 south to Kyle, then FM 150 west</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Nearest Airports:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText mb-4">
                    <li>Austin-Bergstrom International Airport (AUS) - 45 miles</li>
                    <li>San Antonio International Airport (SAT) - 55 miles</li>
                    <li>Car rental is recommended for visiting Wimberley</li>
                    <li>Limited shuttle services available from airports (reservation required)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Getting Around Wimberley</h3>
              <p className="text-darkText mb-4">
                Wimberley's attractions are somewhat spread out, making a car necessary for most visitors. The town square itself is walkable, with shops, restaurants, and galleries clustered in a compact area. However, natural attractions like Blue Hole, Jacob's Well, and the Blanco River require short drives from the center of town.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-primary mb-2">Transportation Options:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Personal vehicle (recommended)</li>
                    <li>Bicycle rentals available seasonally</li>
                    <li>Limited taxi services (call ahead)</li>
                    <li>Rideshare services have limited availability</li>
                    <li>Some accommodations offer shuttle service to town</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Distances from Town Square:</h4>
                  <ul className="list-disc list-inside space-y-1 text-darkText">
                    <li>Blue Hole Regional Park - 1.5 miles</li>
                    <li>Jacob's Well Natural Area - 4 miles</li>
                    <li>EmilyAnn Theatre & Gardens - 2 miles</li>
                    <li>Wimberley Glassworks - 3 miles</li>
                    <li>Cypress Creek Nature Preserve - 0.5 miles</li>
                    <li>Devil's Backbone Scenic Drive - 7 miles</li>
                  </ul>
                </div>
              </div>
              <p className="text-darkText italic text-center">
                "The winding roads of the Hill Country are part of the Wimberley experience—drive slowly and enjoy the scenic beauty along the way."
              </p>
            </div>
          </div>
        </div>
        
        {/* Local Tips */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Local Tips</h2>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Insider Advice</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>Visit Blue Hole early in the morning (when it opens at 10am) to secure a good spot during summer</li>
                  <li>Make Jacob's Well swimming reservations weeks in advance for summer visits</li>
                  <li>The Blanco River levels can vary dramatically—check conditions before planning water activities</li>
                  <li>Most restaurants in town close by 9pm, with some closing earlier on weekdays</li>
                  <li>The Devil's Backbone is especially beautiful at sunset, but drive carefully as deer are abundant</li>
                  <li>Many galleries offer wine during evening hours on the first Saturday of each month</li>
                  <li>Sunday brunch is a Wimberley tradition—make reservations to avoid long waits</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Hidden Gems</h3>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li><span className="font-bold">Old Baldy Mountain</span> - A short but steep hike with 360-degree views of the valley</li>
                  <li><span className="font-bold">The Boot Whisperer</span> - A legendary shop where the owner has an uncanny ability to match customers with perfect boots</li>
                  <li><span className="font-bold">Winters-Wimberley House</span> - Historic home with beautiful grounds, occasionally open for tours</li>
                  <li><span className="font-bold">Cypress Creek Café's Back Porch</span> - Local live music venue with an authentic Texas atmosphere</li>
                  <li><span className="font-bold">Sheila's Cottage</span> - British imports and custom crafts hidden on a side street</li>
                  <li><span className="font-bold">Fischer Hall</span> - Historic dance hall in nearby Fischer, hosting occasional events</li>
                  <li><span className="font-bold">Chalk Ridge Falls</span> - Less-known waterfall area about 30 minutes from Wimberley</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">For Families with Children</h3>
                <p className="text-darkText mb-4">
                  Wimberley offers numerous family-friendly activities that children of all ages will enjoy. Beyond the obvious appeal of swimming holes and nature areas, consider these kid-approved experiences:
                </p>
                <ul className="list-disc list-inside space-y-2 text-darkText">
                  <li>The interactive children's garden at EmilyAnn Theatre & Gardens</li>
                  <li>Glass-blowing demonstrations at Wimberley Glassworks (check schedule)</li>
                  <li>The wooden playscape at Blue Hole Regional Park</li>
                  <li>Zedler Mill Park in nearby Luling, with its historic water wheel</li>
                  <li>Pioneer Town at 7A Ranch, with its Old West buildings and exhibits</li>
                  <li>Corral Theatre's unique outdoor movie experience (summer weekends)</li>
                  <li>Shallow wading areas along Cypress Creek near the square</li>
                  <li>Wimberley Zipline Adventures for older children and teens</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nearby Destinations */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">Day Trips from Wimberley</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-darkText mb-8 text-center">
              Wimberley's central location in the Hill Country makes it an ideal base for exploring the region. These nearby destinations offer perfect day-trip opportunities, allowing you to return to your Wimberley accommodation each evening.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">San Marcos (15 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Glass-bottom boat tours at Spring Lake</li>
                  <li>Premium outlet shopping</li>
                  <li>Texas State University campus</li>
                  <li>San Marcos River tubing and kayaking</li>
                  <li>Wonder World Cave and Adventure Park</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Gruene (20 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Historic Gruene Hall (Texas' oldest dance hall)</li>
                  <li>Antique shopping</li>
                  <li>Gristmill Restaurant overlooking the Guadalupe River</li>
                  <li>Guadalupe River activities</li>
                  <li>Wine tasting rooms</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Driftwood (15 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Salt Lick BBQ (legendary Texas barbecue)</li>
                  <li>Driftwood Estate Winery</li>
                  <li>Desert Door Distillery (sotol spirits)</li>
                  <li>Vista Brewing</li>
                  <li>Duchman Family Winery</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Dripping Springs (20 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>Hamilton Pool Preserve (reservation required)</li>
                  <li>Craft distilleries (Deep Eddy Vodka, Treaty Oak)</li>
                  <li>Breweries and taprooms</li>
                  <li>Solaro Estate Winery</li>
                  <li>Mercer Street shopping</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Fredericksburg (50 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>German heritage and architecture</li>
                  <li>National Museum of the Pacific War</li>
                  <li>Wine Road 290 wineries</li>
                  <li>Enchanted Rock State Natural Area</li>
                  <li>Shopping on Main Street</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">Austin (40 miles)</h3>
                <ul className="list-disc list-inside space-y-1 text-darkText">
                  <li>State Capitol tours</li>
                  <li>Barton Springs Pool</li>
                  <li>South Congress shopping</li>
                  <li>Live music venues</li>
                  <li>Zilker Park and Lady Bird Lake</li>
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

export default Wimberley;