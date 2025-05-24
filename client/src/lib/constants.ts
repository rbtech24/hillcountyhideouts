import { Cabin, Destination, Attraction, BlogPost, Testimonial } from "./types";

// Cabin data
export const cabins: Cabin[] = [
  {
    id: "mockingbird",
    name: "Mockingbird Cabin",
    imageUrl: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    details: "1 bedroom | 1 bath | sleeps 2",
    rating: 5.0,
    reviewCount: 12,
    amenities: ["Romantic", "Fire Pit", "BBQ Grill"],
    url: "https://www.hillcountrypremier.com/vacation-rentals/rental/204/",
    pricePerNight: 189
  },
  {
    id: "texassage",
    name: "Texas Sage",
    imageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    details: "1 bedroom | 1 bath | sleeps 2",
    rating: 5.0,
    reviewCount: 6,
    amenities: ["Romantic", "Fireplace", "Fire Pit"],
    url: "https://www.hillcountrypremier.com/vacation-rentals/rental/116/",
    pricePerNight: 179
  },
  {
    id: "desertwillow",
    name: "Desert Willow",
    imageUrl: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    details: "1 bedroom | 1 bath | sleeps 2",
    rating: 5.0,
    reviewCount: 10,
    amenities: ["Romantic", "Fireplace", "BBQ Grill"],
    url: "https://www.hillcountrypremier.com/vacation-rentals/rental/117/",
    pricePerNight: 175
  },
  {
    id: "coyote",
    name: "Coyote Cabin",
    imageUrl: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    details: "1 bedroom | 1 bath | sleeps 2",
    rating: 5.0,
    reviewCount: 13,
    amenities: ["Romantic", "Child Friendly", "BBQ Grill"],
    url: "https://www.hillcountrypremier.com/vacation-rentals/rental/203/",
    pricePerNight: 185
  },
  {
    id: "morningdove",
    name: "Morning Dove",
    imageUrl: "https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    details: "1 bedroom | 1 bath | sleeps 2",
    rating: 5.0,
    reviewCount: 11,
    amenities: ["Romantic", "Child Friendly", "BBQ Grill"],
    url: "https://www.hillcountrypremier.com/vacation-rentals/rental/205/",
    pricePerNight: 179
  },
  {
    id: "mountainlaurel",
    name: "Mountain Laurel",
    imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    details: "2 bedrooms | 1 bath | sleeps 4",
    rating: 4.8,
    reviewCount: 4,
    amenities: ["Family Friendly", "Fireplace", "Fire Pit"],
    url: "https://www.hillcountrypremier.com/vacation-rentals/rental/118/",
    pricePerNight: 225
  }
];

// Destination data
export const destinations: Destination[] = [
  {
    id: "wimberley",
    name: "Wimberley",
    imageUrl: "https://pixabay.com/get/g7ce556fabbfbe07345cf5f26843c343d8d2b9cbdd2a385c8817774947c4b5264b1ed59405056221b5237bd55a2a28e74b6c904faab5240403d42474c425d01fe_1280.jpg",
    description: "Known for its artsy vibe, swimming holes, and charming town square, Wimberley offers the quintessential Hill Country experience.",
    extendedDescription: "Nestled in the heart of the Texas Hill Country, Wimberley is a picturesque town renowned for its natural beauty, artistic community, and laid-back atmosphere. With its crystal-clear spring-fed swimming holes, vibrant downtown square, and surrounding hills dotted with cypress trees, Wimberley captures the essence of Hill Country charm.",
    highlights: ["Blue Hole", "Market Days", "Art Galleries"],
    attractions: [
      "Blue Hole Regional Park - a pristine swimming spot surrounded by cypress trees",
      "Jacob's Well - one of the longest underwater caves in Texas",
      "Wimberley Market Days - one of the oldest and largest outdoor markets in the state",
      "Wimberley Valley Winery - offering tastings of locally produced wines",
      "The Corral Theatre - a unique outdoor movie experience under the stars"
    ],
    websiteUrl: "https://wimberley.org/"
  },
  {
    id: "fredericksburg",
    name: "Fredericksburg",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    description: "Celebrate German heritage in this historic town known for its wineries, peaches, and enchanting Main Street shopping district.",
    extendedDescription: "Founded by German immigrants in 1846, Fredericksburg maintains its rich cultural heritage through its architecture, festivals, and cuisine. Today, the town has become famous for its thriving wine industry, with over 50 wineries and tasting rooms in the surrounding countryside. The charming Main Street offers a delightful mix of boutiques, galleries, and German-inspired eateries.",
    highlights: ["Wineries", "German Food", "Shopping"],
    attractions: [
      "The National Museum of the Pacific War - a world-class military museum",
      "Enchanted Rock State Natural Area - a massive pink granite dome",
      "Wildseed Farms - the nation's largest working wildflower farm",
      "Wine Road 290 - featuring dozens of award-winning wineries",
      "Historic Main Street - lined with over 150 shops and restaurants"
    ],
    websiteUrl: "https://www.visitfredericksburgtx.com/"
  },
  {
    id: "drippingsprings",
    name: "Dripping Springs",
    imageUrl: "https://pixabay.com/get/gf8d1ba84f2ba6778a79c014245dfef9e5609e2bd02407c8307ff0bb38bed1dcbdb537e0a3aef20fdb6ad0664cd867ac2ea51cb18a2136f83a712655583bdaa39_1280.jpg",
    description: "The \"Gateway to the Hill Country\" offers distilleries, wedding venues, and natural attractions like Hamilton Pool.",
    extendedDescription: "Just 25 miles west of Austin, Dripping Springs serves as the eastern gateway to the Hill Country. The area has gained popularity for its craft distilleries, breweries, and as a premier wedding destination thanks to its stunning venues and scenic landscapes. Nature lovers are drawn to its remarkable swimming holes and preserves.",
    highlights: ["Distilleries", "Hamilton Pool", "Breweries"],
    attractions: [
      "Hamilton Pool Preserve - a unique natural pool created by the collapse of an underground river",
      "Treaty Oak Distilling - a 28-acre ranch and craft distillery",
      "Jester King Brewery - farmhouse brewery set on a beautiful ranch",
      "Pedernales Falls State Park - featuring dramatic limestone formations",
      "Dripping Springs Farmers Market - showcasing local produce and artisanal goods"
    ],
    websiteUrl: "https://www.destinationdrippingsprings.com/"
  }
];

// Attraction data
export const attractions: Attraction[] = [
  {
    id: "wineries",
    title: "Award-Winning Wineries",
    imageUrl: "https://pixabay.com/get/g89527b1783e2301aab9b4c5caf4531ac69f6251d829b6421d5795f5622dda58cc292b08ba27e61edaea3a897e203bbce8cc5308257ffc5a9c70e479f9aa02cb3_1280.jpg",
    description: "Explore over 50 wineries along the Texas Wine Trail, offering tastings of world-class wines in stunning settings.",
    link: "/attractions",
    linkText: "Discover Wineries"
  },
  {
    id: "swimming",
    title: "Natural Swimming Holes",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Cool off in the crystal-clear waters of Jacob's Well, Blue Hole, and Hamilton Pool, natural treasures of the Hill Country.",
    link: "/attractions",
    linkText: "Find Swimming Spots"
  },
  {
    id: "hiking",
    title: "Scenic Hiking Trails",
    imageUrl: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Explore miles of trails offering panoramic views of rolling hills, wildflower meadows, and limestone formations.",
    link: "/attractions",
    linkText: "Explore Trails"
  },
  {
    id: "shopping",
    title: "Boutique Shopping",
    imageUrl: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Discover unique treasures in the charming downtown squares filled with antique shops, art galleries, and local boutiques.",
    link: "/attractions",
    linkText: "Shop Local"
  }
];

// More attractions for the Attractions page
export const moreAttractions: Attraction[] = [
  {
    id: "music",
    title: "Live Music Venues",
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    description: "Experience authentic Texas music at legendary venues like Gruene Hall, Luckenbach Dance Hall, and local breweries featuring live performances.",
    link: "/attractions",
    linkText: "Find Live Music",
    highlights: ["Gruene Hall", "Luckenbach", "Local Breweries"]
  },
  {
    id: "lavender",
    title: "Lavender Farms",
    imageUrl: "https://images.unsplash.com/photo-1594155930985-7f80e45deae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    description: "Visit fragrant lavender farms throughout the Hill Country, especially beautiful during the blooming season from May to July.",
    link: "/attractions",
    linkText: "Visit Lavender Farms",
    highlights: ["Seasonal Blooms", "Farm Tours", "Lavender Products"]
  },
  {
    id: "olive",
    title: "Olive Orchards & Oil Tastings",
    imageUrl: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    description: "Discover the flourishing olive industry with orchard tours and tastings of award-winning olive oils produced in the Hill Country's Mediterranean-like climate.",
    link: "/attractions",
    linkText: "Experience Olive Tastings",
    highlights: ["Orchard Tours", "Tastings", "Artisanal Products"]
  }
];

// Blog post data
export const blogPosts: BlogPost[] = [
  {
    id: "wineries",
    title: "Top 10 Hill Country Wineries to Visit This Summer",
    slug: "top-hill-country-wineries",
    imageUrl: "https://pixabay.com/get/g6339f398fcba88b040aa55dc22d1eca3f7220440c6bb7451a7805ce307899c274cea88b289bf75c5178bbd878e5c0cb183686d5850138091479a9f0ffa701e8a_1280.jpg",
    date: "May 15, 2023",
    category: "Wine & Dining",
    excerpt: "Discover the best wineries in the Texas Hill Country, from established vineyards to hidden gems offering unique tasting experiences.",
    tags: ["Wineries", "Wine Tasting", "Summer Activities", "Day Trips"]
  },
  {
    id: "wildflowers",
    title: "Wildflower Season: Best Spots for Bluebonnet Viewing",
    slug: "wildflower-season-bluebonnet-viewing",
    imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    date: "April 3, 2023",
    category: "Outdoor Adventures",
    excerpt: "Plan your spring getaway to see the famous Texas bluebonnets and other wildflowers that transform the Hill Country landscape.",
    tags: ["Wildflowers", "Bluebonnets", "Spring", "Photography", "Scenic Drives"]
  },
  {
    id: "culinary",
    title: "Hidden Culinary Gems of the Hill Country",
    slug: "hidden-culinary-gems",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    date: "June 8, 2023",
    category: "Food & Drink",
    excerpt: "From farm-to-table restaurants to roadside BBQ joints, discover the diverse and delicious dining options in the Texas Hill Country.",
    tags: ["Restaurants", "Local Cuisine", "BBQ", "Farm-to-Table", "Foodie"]
  }
];

// Testimonial data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Our stay at Mockingbird Cabin was absolutely perfect. The attention to detail in the cabin's design made us feel right at home, and the peaceful setting was exactly what we needed to unwind.",
    name: "James D.",
    initials: "JD",
    location: "Austin, TX",
    avatarColor: "secondary"
  },
  {
    id: "2",
    text: "The Texas Sage cabin was the perfect romantic getaway. We loved sitting on the deck in the evenings, watching the sunset with a glass of local wine. The fireplace made the cool evenings so cozy!",
    name: "Sarah L.",
    initials: "SL",
    location: "Houston, TX",
    avatarColor: "primary"
  },
  {
    id: "3",
    text: "Mountain Laurel exceeded our expectations! The cabin was spotlessly clean, beautifully decorated, and had everything we needed. Perfect location for exploring wineries and the charming town of Wimberley.",
    name: "Michael C.",
    initials: "MC",
    location: "Dallas, TX",
    avatarColor: "accent"
  }
];
