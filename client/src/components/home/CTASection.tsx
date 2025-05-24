import { Button } from "@/components/ui/button";

const CTASection = () => {
  const scrollToBooking = () => {
    const cabinsSection = document.getElementById("cabins");
    if (cabinsSection) {
      cabinsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://pixabay.com/get/g60edbe5cfb1fced2bdd309066f1b9a6e344e1eda7b0ca68c32fb321eb37d92050af7f14f5f79edafcac34190b85892a16b1ebf9edd484fcd66e0a0d74f1c7c45_1280.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">Ready for Your Hill Country Adventure?</h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Book your perfect cabin getaway today and experience the beauty, charm, and relaxation of the Texas Hill Country
        </p>
        <Button 
          onClick={scrollToBooking}
          className="bg-accent hover:bg-white hover:text-primary text-white font-accent font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Find Your Perfect Cabin
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
