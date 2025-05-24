import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };
  
  return (
    <>
      <Helmet>
        <title>Contact Us - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Contact Hill Country Hideouts for information about our cabin rentals, booking assistance, or to plan your perfect Texas Hill Country getaway."
        />
        <meta property="og:title" content="Contact Us - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Contact Hill Country Hideouts for information about our cabin rentals, booking assistance, or to plan your perfect Texas Hill Country getaway."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/contact" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">Contact Us</h1>
            <p className="text-xl text-darkText max-w-3xl mx-auto">
              Have questions about our cabins or need help planning your Hill Country getaway? We're here to help!
            </p>
          </div>
        </div>
        
        {/* Contact info and form */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 font-heading">Get In Touch</h2>
              <p className="text-lg text-darkText mb-8">
                Whether you have questions about our cabins, need recommendations for local attractions, or want to provide feedback about your stay, we'd love to hear from you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent mt-1 mr-4 w-5" />
                  <div>
                    <h3 className="font-bold text-darkText mb-1">Address</h3>
                    <p className="text-darkText">Wimberley, TX 78676</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-accent mt-1 mr-4 w-5" />
                  <div>
                    <h3 className="font-bold text-darkText mb-1">Phone</h3>
                    <p className="text-darkText">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faEnvelope} className="text-accent mt-1 mr-4 w-5" />
                  <div>
                    <h3 className="font-bold text-darkText mb-1">Email</h3>
                    <p className="text-darkText">info@hillcountryhideouts.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faClock} className="text-accent mt-1 mr-4 w-5" />
                  <div>
                    <h3 className="font-bold text-darkText mb-1">Office Hours</h3>
                    <p className="text-darkText">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-darkText">Saturday: 10:00 AM - 3:00 PM</p>
                    <p className="text-darkText">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">Reservations</h3>
                <p className="text-darkText mb-4">
                  For all booking inquiries and reservations, please visit our partner's website or contact them directly:
                </p>
                <div className="space-y-2">
                  <p className="font-bold">Hill Country Premier Lodging</p>
                  <p><a href="https://www.hillcountrypremier.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">www.hillcountrypremier.com</a></p>
                  <p>(555) 987-6543</p>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6 font-heading">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-darkText">Your Name *</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-darkText">Email Address *</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-darkText">Phone Number</Label>
                      <Input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-darkText">Subject *</Label>
                    <Select onValueChange={handleSelectChange} value={formData.subject}>
                      <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="reservation">Reservation Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="activities">Local Activities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-darkText">Your Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-secondary text-white font-accent font-semibold py-3 px-6 rounded-lg transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-6 font-heading">Our Location</h2>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110009.83764936954!2d-98.14673482666013!3d30.0403311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b3d90f6ff0417%3A0xe968747a5781961!2sWimberley%2C%20TX!5e0!3m2!1sen!2sus!4v1651245301999!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hill Country Hideouts Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
