import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import FeaturedCabins from "@/components/home/FeaturedCabins";
import AboutSection from "@/components/home/AboutSection";
import DestinationGuides from "@/components/home/DestinationGuides";
import AttractionsSection from "@/components/home/AttractionsSection";
import BlogSection from "@/components/home/BlogSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EventsSection from "@/components/home/EventsSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hill Country Hideouts - Texas Hill Country Cabin Rentals</title>
        <meta 
          name="description" 
          content="Discover the perfect Texas Hill Country getaway. Luxury cabins nestled in nature, just minutes from wineries, hiking trails, and charming towns."
        />
        <meta name="keywords" content="hill country rentals, texas hill country getaways, lodging in hill country texas, luxury cabins" />
        <meta property="og:title" content="Hill Country Hideouts - Texas Hill Country Cabin Rentals" />
        <meta 
          property="og:description" 
          content="Discover the perfect Texas Hill Country getaway. Luxury cabins nestled in nature, just minutes from wineries, hiking trails, and charming towns."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hillcountryhideouts.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518457607834-6e8d80c183c5" />
        <link rel="canonical" href="https://hillcountryhideouts.com" />
      </Helmet>
      
      <HeroSection />
      <FeaturedCabins />
      <AboutSection />
      <DestinationGuides />
      <AttractionsSection />
      <EventsSection />
      <BlogSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
