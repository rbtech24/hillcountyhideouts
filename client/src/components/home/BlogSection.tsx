import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/constants";

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">Hill Country Insights</h2>
          <p className="text-lg text-darkText max-w-2xl mx-auto">
            Discover travel tips, local insights, and the best experiences the Texas Hill Country has to offer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-lg shadow-lg transition-transform hover:scale-[1.02] duration-300 p-6"
            >
              <div className="flex items-center mb-2">
                <span className="text-xs text-gray-500 font-accent">{post.date}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-xs text-gray-500 font-accent">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">{post.title}</h3>
              <p className="text-darkText mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-accent hover:text-primary font-accent font-medium transition-colors">
                Read More <ArrowRight className="inline ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="bg-secondary hover:bg-primary text-white font-accent font-semibold py-3 px-8 rounded-lg transition-colors">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
