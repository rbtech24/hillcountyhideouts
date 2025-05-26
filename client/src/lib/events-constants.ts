import { BlogPost } from "./types";

// Hill Country Events for 2025
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  website?: string;
  featured?: boolean;
}

export const ongoingEvents: Event[] = [
  {
    id: "ongoing-1",
    title: "Live Music at Gruene Hall",
    date: "Year-round",
    location: "Gruene/New Braunfels",
    description: "Texas's oldest dance hall hosts live music almost nightly. Check their schedule for specific artists.",
    category: "Music"
  },
  {
    id: "ongoing-2", 
    title: "Live Music at Luckenbach Dance Hall",
    date: "Year-round",
    location: "Luckenbach",
    description: "Iconic Texas dance hall with a regular schedule of country and Americana artists.",
    category: "Music"
  },
  {
    id: "ongoing-3",
    title: "Hill Country Winery Tastings & Tours",
    date: "Daily",
    location: "Throughout Hill Country",
    description: "Nearly every winery offers daily tastings and many have scheduled tours.",
    category: "Wine & Dining"
  },
  {
    id: "ongoing-4",
    title: "First Friday Art Walk",
    date: "First Friday monthly",
    location: "Fredericksburg",
    description: "Galleries and shops extend hours and host special showings on the first Friday of each month.",
    category: "Arts & Culture"
  },
  {
    id: "ongoing-5",
    title: "Gruene Market Days",
    date: "Third weekend monthly",
    location: "Gruene",
    description: "Monthly market featuring nearly 100 artisans, live entertainment, and food.",
    category: "Markets & Festivals"
  }
];

export const upcomingEvents: Event[] = [
  // June 2025
  {
    id: "june-1",
    title: "53rd Annual Kerrville Folk Festival",
    date: "May 22 - June 8, 2025",
    location: "Kerrville",
    description: "Long-standing folk music festival with multiple stages, camping, and workshops.",
    category: "Music",
    featured: true
  },
  {
    id: "june-2",
    title: "Blanco Lavender Festival",
    date: "June 6-8, 2025",
    location: "Blanco",
    description: "Celebrates the lavender harvest with vendors, food, music, and lavender farm tours.",
    category: "Nature & Outdoors",
    featured: true
  },
  {
    id: "june-3",
    title: "Stonewall Peach JAMboree & Rodeo",
    date: "June 19-21, 2025",
    location: "Stonewall",
    description: "Celebrates the peach harvest with rodeo, music, and peach dishes.",
    category: "Food & Festivals"
  },
  {
    id: "june-4",
    title: "Fredericksburg Trade Days",
    date: "June 20-22, 2025",
    location: "Fredericksburg",
    description: "Large outdoor market with antiques, crafts, and more.",
    category: "Markets & Festivals"
  },
  {
    id: "june-5",
    title: "Watermelon Thump",
    date: "June 26-29, 2025",
    location: "Luling",
    description: "Iconic festival celebrating watermelons with contests, music, and food.",
    category: "Food & Festivals"
  },

  // July 2025
  {
    id: "july-1",
    title: "Austin Symphony H-E-B July 4th Concert & Fireworks",
    date: "July 4, 2025",
    location: "Austin",
    description: "Patriotic concert and large fireworks display over Lady Bird Lake.",
    category: "Music",
    featured: true
  },
  {
    id: "july-2",
    title: "Kerrville's 4th on the River Festival",
    date: "July 4, 2025",
    location: "Kerrville",
    description: "Free concert and fireworks celebration.",
    category: "Music"
  },
  {
    id: "july-3",
    title: "MLS All Star Game",
    date: "July 23, 2025",
    location: "Austin",
    description: "Major League Soccer event at Q2 Stadium.",
    category: "Sports"
  },

  // August 2025
  {
    id: "august-1",
    title: "Gillespie County Fair & Race Meet",
    date: "Mid to Late August 2025",
    location: "Fredericksburg",
    description: "Horse racing, rodeo, live music, and carnival.",
    category: "Sports & Entertainment",
    featured: true
  },

  // September 2025
  {
    id: "september-1",
    title: "University of Texas Football Season",
    date: "September - November 2025",
    location: "Austin",
    description: "Experience the Longhorns in the SEC! Home games throughout the season.",
    category: "Sports",
    featured: true
  },
  {
    id: "september-2",
    title: "Dripping Springs Pumpkin Festival",
    date: "Late September - October 2025",
    location: "Dripping Springs",
    description: "Family-friendly fall festival with themed weekends, activities, and pumpkin patch.",
    category: "Family & Seasonal"
  },

  // October 2025
  {
    id: "october-1",
    title: "Austin City Limits Music Festival",
    date: "October 3-5 & October 10-12, 2025",
    location: "Austin",
    description: "One of the nation's premier music festivals at Zilker Park.",
    category: "Music",
    featured: true
  },
  {
    id: "october-2",
    title: "Fredericksburg Oktoberfest",
    date: "First weekend of October 2025",
    location: "Fredericksburg",
    description: "Celebrates German heritage with polka, food, beer, and crafts.",
    category: "Food & Culture",
    featured: true
  },
  {
    id: "october-3",
    title: "Formula 1 United States Grand Prix",
    date: "October 17-19, 2025",
    location: "Austin",
    description: "High-speed racing and major concerts at Circuit of The Americas.",
    category: "Sports",
    featured: true
  },
  {
    id: "october-4",
    title: "Wurstfest",
    date: "Late October - Early November 2025",
    location: "New Braunfels",
    description: "A Ten Day Salute To Sausage - massive German festival with food, beer, music, and carnival.",
    category: "Food & Culture",
    featured: true
  },

  // November 2025
  {
    id: "november-1",
    title: "Texas Monthly BBQ Fest",
    date: "November 1-2, 2025",
    location: "Lockhart",
    description: "Celebrates the state's best BBQ with live music and demos.",
    category: "Food & Festivals",
    featured: true
  },
  {
    id: "november-2",
    title: "Lights Spectacular",
    date: "Mid-November 2025 - January 2026",
    location: "Johnson City",
    description: "Twinkle Town transforms the town into a dazzling light display.",
    category: "Holiday & Seasonal"
  },
  {
    id: "november-3",
    title: "Walkway of Lights",
    date: "Mid-November 2025 - January 2026",
    location: "Marble Falls",
    description: "Thousands of lights decorating the lakeside park.",
    category: "Holiday & Seasonal"
  },
  {
    id: "november-4",
    title: "Fredericksburg's Christmas Nights of Lights",
    date: "Late November 2025 - January 2026",
    location: "Fredericksburg",
    description: "German-Texas holiday celebrations with light show and events.",
    category: "Holiday & Seasonal"
  },

  // December 2025
  {
    id: "december-1",
    title: "Festival of Texas Fiddling",
    date: "December 5-7, 2025",
    location: "Blanco",
    description: "Celebrates Texas fiddling tradition at Twin Sisters Dance Hall.",
    category: "Music",
    featured: true
  },
  {
    id: "december-2",
    title: "Eisbahn Outdoor Ice Skating",
    date: "Throughout December 2025",
    location: "Fredericksburg",
    description: "Outdoor ice skating rink in Marktplatz.",
    category: "Holiday & Seasonal"
  },
  {
    id: "december-3",
    title: "Christmas on Mercer Street",
    date: "December 7, 2025",
    location: "Dripping Springs",
    description: "Holiday market, activities, and tree lighting.",
    category: "Holiday & Seasonal"
  }
];

// Featured events for home page
export const featuredEvents = upcomingEvents.filter(event => event.featured);

// Events by category
export const eventCategories = [
  "All",
  "Music",
  "Food & Culture", 
  "Wine & Dining",
  "Sports",
  "Arts & Culture",
  "Nature & Outdoors",
  "Holiday & Seasonal",
  "Family & Seasonal",
  "Markets & Festivals"
];

// Events blog post for SEO
export const eventsContent: BlogPost = {
  id: "events-2025",
  title: "Complete Guide to Hill Country Events 2025: Festivals, Music, and Seasonal Celebrations",
  slug: "hill-country-events-2025-complete-guide",
  imageUrl: "/images/texas-longhorns.jpg",
  date: "January 26, 2025",
  category: "Events & Festivals",
  excerpt: "Your ultimate guide to the best Hill Country events throughout 2025, from music festivals and food celebrations to holiday light displays and seasonal activities.",
  tags: ["events", "festivals", "music", "2025", "Hill Country"],
  content: "The Texas Hill Country hosts some of the most exciting events in the state throughout 2025, offering something for every interest and season. From world-renowned music festivals like Austin City Limits to charming German heritage celebrations in Fredericksburg, the region's event calendar is packed with memorable experiences. Music lovers can enjoy year-round performances at iconic venues like Gruene Hall and Luckenbach Dance Hall, while foodies will delight in events like the Texas Monthly BBQ Fest and Stonewall Peach JAMboree. Sports enthusiasts can catch University of Texas football games in their new SEC conference or experience the thrill of Formula 1 racing. The holiday season transforms towns like Johnson City and Marble Falls into winter wonderlands with spectacular light displays, while Fredericksburg celebrates its German heritage with Christmas markets and Oktoberfest. Plan your Hill Country adventure around these incredible events and create memories that will last a lifetime."
};