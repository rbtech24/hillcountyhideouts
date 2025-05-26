import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Attractions", path: "/attractions" },
    { name: "Destinations", path: "/destinations" },
    { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  return (
    <header 
      className={cn(
        "bg-white shadow-sm fixed w-full z-50 transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" onClick={scrollToTop} className="flex items-center">
          <img src="/images/text-logo.svg" alt="Hill Country Hideouts" className="h-16" />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-primary focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              href={item.path}
              onClick={scrollToTop}
              className={cn(
                "nav-item font-accent font-medium text-darkText hover:text-accent transition-colors",
                location === item.path && "text-accent"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/vacation-rentals" onClick={scrollToTop}>
            <Button className="font-accent bg-accent text-white hover:bg-primary transition-colors">
              Book Now
            </Button>
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn("md:hidden bg-white pb-4 px-4", isMobileMenuOpen ? "block" : "hidden")}>
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              href={item.path}
              onClick={closeMobileMenu}
              className={cn(
                "nav-item font-accent font-medium text-darkText hover:text-accent py-2 transition-colors",
                location === item.path && "text-accent"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/vacation-rentals" onClick={closeMobileMenu}>
            <Button className="w-full font-accent bg-accent text-white hover:bg-primary transition-colors">
              Book Now
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
