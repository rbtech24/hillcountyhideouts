import { Button } from "@/components/ui/button";
import hillCountrySceneImg from "@assets/shutterstock_754782883.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24">
      {/* Hero background image */}
      <div 
        className="relative h-[80vh] min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hillCountrySceneImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading max-w-4xl">
            Discover Your Perfect Hill Country Hideaway
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Luxurious cabins nestled in the heart of Texas Hill Country, surrounded by nature's beauty
          </p>
          <Button 
            onClick={scrollToBooking}
            className="bg-accent hover:bg-primary text-white font-accent font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Find Your Cabin
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
