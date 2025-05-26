import { useParams } from "wouter";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/lib/blog-constants";
import NotFound from "@/pages/not-found";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Hill Country Hideouts</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
        <link rel="canonical" href={`https://hillcountryhideouts.com/blog/${post.slug}`} />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Image */}
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-500 font-accent">{post.date}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-500 font-accent">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">{post.title}</h1>
            <p className="text-xl text-darkText leading-relaxed">{post.excerpt}</p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-neutral px-3 py-1 rounded-full text-sm font-medium text-darkText">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content ? (
              post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-darkText leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-lg text-darkText leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
          
          {/* Call to Action */}
          <div className="bg-neutral p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Ready to Experience the Hill Country?</h3>
            <p className="text-lg text-darkText mb-6">
              Book your perfect cabin getaway and discover all that the Texas Hill Country has to offer.
            </p>
            <a href="https://wimberleycabins.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-accent hover:bg-primary text-white font-accent font-semibold py-3 px-6 rounded-lg transition-colors">
                View Our Cabins
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;