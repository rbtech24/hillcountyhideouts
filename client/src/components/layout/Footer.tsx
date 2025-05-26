import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Hill Country Hideouts</h3>
            <p className="mb-4">Your gateway to luxury cabin rentals in the beautiful Texas Hill Country.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><a href="https://wimberleycabins.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">Our Cabins</a></li>
              <li><Link href="/attractions" onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors">Attractions</Link></li>
              <li><Link href="/destinations" onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors">Destinations</Link></li>
              <li><Link href="/blog" onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Destinations</h3>
            <ul className="space-y-2">
              <li><Link href="/destinations" onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors">Wimberley</Link></li>
              <li><Link href="/destinations" onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors">Fredericksburg</Link></li>
              <li><Link href="/destinations" onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors">Dripping Springs</Link></li>
              <li><Link href="/destinations" onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors">New Braunfels</Link></li>
              <li><Link href="/destinations" onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors">Canyon Lake</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-3" />
                <span>Wimberley, TX 78676</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhoneAlt} className="mt-1 mr-3" />
                <span>(512) 847-7460</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-3" />
                <span>info@hillcountryhideouts.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hill Country Hideouts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
