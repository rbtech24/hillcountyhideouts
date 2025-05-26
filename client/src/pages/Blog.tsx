import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/constants";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Hill Country Hideouts</title>
        <meta 
          name="description" 
          content="Discover travel tips, local insights, and the best experiences the Texas Hill Country has to offer through our blog."
        />
        <meta name="keywords" content="texas hill country blog, hill country travel tips, hill country wineries, hill country activities" />
        <meta property="og:title" content="Blog - Hill Country Hideouts" />
        <meta 
          property="og:description" 
          content="Discover travel tips, local insights, and the best experiences the Texas Hill Country has to offer through our blog."
        />
        <link rel="canonical" href="https://hillcountryhideouts.com/blog" />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="bg-neutral py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">Hill Country Insights</h1>
            <p className="text-xl text-darkText max-w-3xl mx-auto">
              Discover travel tips, local insights, and the best experiences the Texas Hill Country has to offer
            </p>
          </div>
        </div>
        
        {/* Blog posts */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300"
              >
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs text-gray-500 font-accent">{post.date}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-gray-500 font-accent">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-3 font-heading">{post.title}</h2>
                  <p className="text-darkText mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 font-accent font-medium">
                    Coming Soon <ArrowRight className="inline ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
            
            {/* Additional blog posts */}
            {[...Array(3)].map((_, index) => {
              const post = blogPosts[index % blogPosts.length];
              const imageUrls = [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              ];
              const modifiedPost = {
                ...post,
                id: `additional-${index}`,
                imageUrl: imageUrls[index],
                title: index === 0 
                  ? "Best Hill Country Events in 2025" 
                  : index === 1 
                    ? "Family-Friendly Activities in the Hill Country" 
                    : "Hidden Gems: Lesser-Known Hill Country Attractions",
                excerpt: index === 0 
                  ? "Mark your calendars for these must-attend festivals, concerts, and events throughout the Texas Hill Country in 2025."
                  : index === 1 
                    ? "Discover activities and attractions that the whole family will enjoy during your Hill Country vacation."
                    : "Go beyond the popular attractions and discover these lesser-known treasures throughout the Hill Country region."
              };
              
              return (
                <div 
                  key={modifiedPost.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300"
                >
                  <img 
                    src={modifiedPost.imageUrl} 
                    alt={modifiedPost.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-xs text-gray-500 font-accent">{modifiedPost.date}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-xs text-gray-500 font-accent">{modifiedPost.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-3 font-heading">{modifiedPost.title}</h2>
                    <p className="text-darkText mb-4">{modifiedPost.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {modifiedPost.tags.map((tag, idx) => (
                        <span key={idx} className="bg-neutral px-3 py-1 rounded-full text-xs font-medium text-darkText">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-500 font-accent font-medium">
                      Coming Soon <ArrowRight className="inline ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Featured article */}
          <div className="bg-neutral p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Planning Your Perfect Hill Country Getaway</h2>
            <p className="text-lg text-darkText mb-4">
              The Texas Hill Country offers an incredible variety of experiences for every type of traveler. Whether you're seeking a romantic weekend, a family vacation, or a solo adventure, here are some tips to help you plan the perfect Hill Country getaway:
            </p>
            <ul className="list-disc list-inside space-y-3 text-darkText mb-6">
              <li><strong>Choose the right season:</strong> Each season in the Hill Country offers different attractions, from spring wildflowers to fall foliage and summer water activities.</li>
              <li><strong>Plan your activities:</strong> Research and prioritize which wineries, towns, and natural attractions you want to visit based on your interests.</li>
              <li><strong>Book accommodations early:</strong> The most desirable cabins and rentals often book up months in advance, especially for popular weekends and holidays.</li>
              <li><strong>Allow for downtime:</strong> Don't overschedule your trip. Leave time to simply relax and enjoy the peaceful Hill Country atmosphere.</li>
              <li><strong>Explore beyond the main attractions:</strong> While Fredericksburg and Wimberley are popular destinations, consider visiting smaller towns like Comfort, Blanco, or Johnson City for a more authentic experience.</li>
            </ul>
            <p className="text-lg text-darkText">
              Our cabins provide the perfect home base for your Hill Country adventures, with comfortable accommodations and a central location that makes it easy to explore all that the region has to offer.
            </p>
          </div>
          
          {/* Newsletter signup */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Stay Updated</h2>
            <p className="text-lg text-darkText mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest Hill Country travel tips, cabin availability updates, and special offers.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  required
                />
                <button 
                  type="submit"
                  className="bg-accent hover:bg-primary text-white font-accent font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
