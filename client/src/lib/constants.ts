import { Cabin, Destination, Attraction, BlogPost, Testimonial } from "./types";

// Cabin data
export const cabins: Cabin[] = [
  {
    id: "1",
    name: "Coyote Cabin",
    imageUrl: "/images/coyote-cabin.jpg",
    details: "Rustic charm meets modern comfort in this beautifully appointed Hill Country retreat",
    rating: 4.9,
    reviewCount: 124,
    amenities: ["Hot Tub", "Fire Pit", "Full Kitchen", "WiFi", "Pet Friendly"],
    url: "https://www.hillcountrypremier.com/cabins-at-flite-acres",
    pricePerNight: 189
  },
  {
    id: "2", 
    name: "Desert Willow",
    imageUrl: "/images/desert-willow.jpg",
    details: "Secluded cabin with stunning views and luxurious amenities for the perfect getaway",
    rating: 4.8,
    reviewCount: 97,
    amenities: ["Private Deck", "Fireplace", "Spa Bath", "BBQ Grill", "WiFi"],
    url: "https://www.hillcountrypremier.com/cabins-at-flite-acres",
    pricePerNight: 225
  },
  {
    id: "3",
    name: "Mockingbird Cabin", 
    imageUrl: "/images/mockingbird-cabin.jpg",
    details: "Family-friendly cabin with spacious living areas and outdoor entertainment space",
    rating: 4.7,
    reviewCount: 156,
    amenities: ["Game Room", "Large Deck", "Fire Pit", "Full Kitchen", "Washer/Dryer"],
    url: "https://www.hillcountrypremier.com/cabins-at-flite-acres",
    pricePerNight: 199
  }
];

// Destination data
export const destinations: Destination[] = [
  {
    id: "1",
    name: "Fredericksburg",
    imageUrl: "/images/fredericksburg.jpg",
    description: "German heritage town famous for wineries, wildflowers, and Enchanted Rock",
    highlights: ["90+ Wineries", "Historic Main Street", "Enchanted Rock State Park", "German Culture"]
  },
  {
    id: "2",
    name: "New Braunfels", 
    imageUrl: "/images/new-braunfels.jpg",
    description: "River town perfect for tubing, German culture, and family fun",
    highlights: ["Guadalupe River Tubing", "Schlitterbahn Waterpark", "Historic Gruene", "Comal Springs"]
  },
  {
    id: "3",
    name: "Wimberley",
    imageUrl: "/images/wimberley.jpg", 
    description: "Artistic community along the Blanco River with natural swimming holes",
    highlights: ["Jacob's Well", "Blue Hole Regional Park", "Art Galleries", "Wimberley Square"]
  }
];

// Attraction data
export const attractions: Attraction[] = [
  {
    id: "1",
    title: "Enchanted Rock State Natural Area",
    imageUrl: "/images/enchanted-rock.jpg",
    description: "Massive pink granite dome offering hiking trails and stunning Hill Country views",
    link: "/attractions", 
    linkText: "Plan Your Visit",
    highlights: ["Granite Dome Hiking", "Stargazing", "Rock Climbing", "Wildflower Viewing"]
  },
  {
    id: "2",
    title: "Natural Bridge Caverns",
    imageUrl: "/images/natural-bridge-caverns.jpg", 
    description: "Underground limestone formations showcasing millions of years of geological history",
    link: "/attractions",
    linkText: "Explore Underground",
    highlights: ["Guided Cave Tours", "Formation Viewing", "Adventure Tours", "Discovery Challenge"]
  },
  {
    id: "3",
    title: "Hamilton Pool Preserve",
    imageUrl: "/images/hamilton-pool.jpg",
    description: "Stunning natural pool formed by thousands of years of water erosion over limestone",
    link: "/attractions", 
    linkText: "Reserve Your Spot",
    highlights: ["Natural Swimming", "50-foot Waterfall", "Limestone Grotto", "Photography"]
  }
];

// More attractions
export const moreAttractions: Attraction[] = [
  {
    id: "4",
    title: "Lost Maples State Natural Area",
    imageUrl: "/images/lost-maples.jpg",
    description: "Pristine wilderness area famous for fall colors and limestone canyons",
    link: "/attractions",
    linkText: "Discover Nature",
    highlights: ["Fall Colors", "Hiking Trails", "Bird Watching", "Maple Trees"]
  },
  {
    id: "5", 
    title: "Garner State Park",
    imageUrl: "/images/garner-state-park.jpg",
    description: "Historic park along the Frio River with swimming, dancing, and camping",
    link: "/attractions",
    linkText: "Experience History", 
    highlights: ["River Swimming", "Historic Pavilion", "Hiking", "Dancing"]
  }
];

// Blog post data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Hill Country Wildflower Season 2025: Best Viewing Spots and Peak Bloom Times",
    slug: "hill-country-wildflower-season-2025-guide",
    imageUrl: "/images/texas-longhorns.jpg",
    date: "January 15, 2025",
    category: "Nature & Outdoors",
    excerpt: "Your complete guide to experiencing the spectacular 2025 Texas Hill Country wildflower season, including bluebonnet hotspots, peak bloom dates, and photography tips.",
    tags: ["wildflowers", "bluebonnets", "spring 2025", "photography", "nature"],
    content: "The Texas Hill Country wildflower season is one of the most spectacular natural displays in North America. Every spring, millions of wildflowers transform the rolling hills into a vibrant tapestry of color that draws visitors from around the world. The season typically begins with bluebonnets in mid-March, reaches peak bloom in early to mid-April when bluebonnets join with Indian paintbrush, and extends into early May with gallardia and black-eyed Susans. Best viewing locations include Highway 290 between Austin and Fredericksburg, the famous Willow City Loop near Fredericksburg, Llano County highways, and Burnet County roads around Inks Lake State Park. For photography, visit during golden hour and get low to capture flowers at eye level."
  },
  {
    id: "2",
    title: "Ultimate Guide to Hill Country Wineries: 2025 Wine Trail Adventures", 
    slug: "hill-country-wineries-wine-trail-guide-2025",
    imageUrl: "/images/texas-longhorns.jpg",
    date: "January 10, 2025",
    category: "Wine & Dining",
    excerpt: "Discover the best wineries along the Texas Hill Country Wine Trail, featuring new releases, harvest season updates, and insider tips for wine enthusiasts.",
    tags: ["wineries", "wine trail", "Texas wine", "tastings", "2025"],
    content: "The Texas Hill Country Wine Trail has grown into one of America's premier wine destinations, with over 50 wineries spread across the rolling hills. The region's unique terroir features limestone-rich soils and dramatic temperature variations that create ideal conditions for wine grape cultivation. Must-visit wineries include Becker Vineyards for their award-winning Viognier and Tempranillo, and Driftwood Estate Winery for sophisticated Super Tuscan-style wines. Tempranillo has emerged as Texas's signature grape, while other successful varietals include Viognier for whites and Mourvèdre for reds. Always arrange designated transportation and make reservations, especially on weekends."
  },
  {
    id: "3",
    title: "Winter Adventures in Texas Hill Country: Your 2025 Cold Weather Guide",
    slug: "winter-adventures-texas-hill-country-2025", 
    imageUrl: "/images/texas-longhorns.jpg",
    date: "December 28, 2024",
    category: "Seasonal Travel",
    excerpt: "Discover why winter is one of the best times to visit the Hill Country, with fewer crowds, cozy cabin stays, and unique seasonal activities.",
    tags: ["winter travel", "seasonal activities", "cozy cabins", "holiday events"],
    content: "Winter offers some of the most magical Hill Country experiences, from cozy cabin stays with crackling fireplaces to crisp hiking days with crystal-clear views. Winter is the Hill Country's off-season, meaning fewer crowds, easier restaurant reservations, and better accommodation rates. Daytime temperatures typically range from 45-65°F, perfect for hiking without overheating. Winter provides ideal conditions for climbing Enchanted Rock, and many wineries offer cozy indoor tastings with fireplaces. Fredericksburg's German heritage shines during holiday season with traditional Christmas markets, while winter's clear, dry air provides exceptional stargazing conditions."
  }
];

// Testimonial data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Our stay at the Hill Country cabin was absolutely magical. The wildflower views were breathtaking and the cabin had everything we needed for a perfect romantic getaway.",
    name: "Sarah & Mike Johnson",
    initials: "SJ", 
    location: "Austin, TX",
    avatarColor: "bg-blue-500"
  },
  {
    id: "2",
    text: "We've been coming to the Hill Country for years, but this cabin rental exceeded all our expectations. The location was perfect for wine tasting and the amenities were top-notch.",
    name: "Jennifer Martinez",
    initials: "JM",
    location: "San Antonio, TX", 
    avatarColor: "bg-green-500"
  },
  {
    id: "3",
    text: "The perfect family retreat! Our kids loved exploring the nature trails while we enjoyed the peaceful evenings on the deck. Already planning our next visit.",
    name: "The Thompson Family",
    initials: "TF",
    location: "Houston, TX",
    avatarColor: "bg-purple-500"
  }
];