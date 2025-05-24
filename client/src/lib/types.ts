export interface Cabin {
  id: string;
  name: string;
  imageUrl: string;
  details: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
  url: string;
  pricePerNight?: number;
}

export interface Destination {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  extendedDescription?: string;
  highlights: string[];
  attractions?: string[];
  websiteUrl?: string;
}

export interface Attraction {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  link: string;
  linkText: string;
  highlights?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  content?: string;
}

export interface Testimonial {
  id: string;
  text: string;
  name: string;
  initials: string;
  location: string;
  avatarColor: string;
}
