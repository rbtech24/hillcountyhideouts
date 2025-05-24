import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [_, setLocation] = useLocation();
  const [searchParams, setSearchParams] = useState({
    arrival: "",
    departure: "",
  });
  const [errors, setErrors] = useState({
    arrival: false,
    departure: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const newErrors = {
      arrival: !searchParams.arrival,
      departure: !searchParams.departure,
    };
    
    setErrors(newErrors);
    
    // If no errors, redirect to booking site
    if (!newErrors.arrival && !newErrors.departure) {
      window.location.href = `https://www.hillcountrypremier.com/cabins-at-flite-acres/?arrival=${searchParams.arrival}&departure=${searchParams.departure}`;
    }
  };

  const scrollToBooking = () => {
    const cabinsSection = document.getElementById("cabins");
    if (cabinsSection) {
      cabinsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24">
      {/* Hero background image */}
      <div 
        className="relative h-[80vh] min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
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
      
      {/* Search form */}
      <div className="container mx-auto px-4 relative">
        <div className="bg-white rounded-lg shadow-xl p-6 -mt-16 md:-mt-24 relative z-10 animate-fade-in">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="space-y-2">
              <Label htmlFor="arrival" className="block text-sm font-medium text-darkText font-accent">
                Arrival Date
              </Label>
              <Input
                type="date"
                id="arrival"
                name="arrival"
                value={searchParams.arrival}
                onChange={handleInputChange}
                className={cn(
                  "w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent",
                  errors.arrival ? "border-red-500" : "border-gray-300"
                )}
              />
              {errors.arrival && (
                <p className="text-red-500 text-xs mt-1">Please select an arrival date</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="departure" className="block text-sm font-medium text-darkText font-accent">
                Departure Date
              </Label>
              <Input
                type="date"
                id="departure"
                name="departure"
                value={searchParams.departure}
                onChange={handleInputChange}
                className={cn(
                  "w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent",
                  errors.departure ? "border-red-500" : "border-gray-300"
                )}
              />
              {errors.departure && (
                <p className="text-red-500 text-xs mt-1">Please select a departure date</p>
              )}
            </div>
            <div className="flex items-end">
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-secondary text-white font-accent font-semibold p-3 rounded-lg transition-colors"
              >
                Search Availability
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
