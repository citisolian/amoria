import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <div className="pt-16">
        <section className="py-20 bg-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-gray-300 rounded w-96 mx-auto"></div>
              <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 space-y-4">
                    <div className="h-48 bg-gray-300 rounded"></div>
                    <div className="h-6 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16">
        <section className="py-20 bg-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold text-gray-800 mb-2">
                Unable to Load Blog Posts
              </h2>
              <p className="text-gray-600 mb-6">
                We're having trouble loading our latest articles. Please try refreshing the page or contact us if the issue persists.
              </p>
              <Button onClick={() => window.location.reload()} className="bg-gold text-white hover:bg-gold-dark">
                Try Again
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const featuredPost = blogPosts?.[0];
  const otherPosts = blogPosts?.slice(1) || [];

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
            Event Planning Blog
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Discover expert tips, inspiration, and insider secrets for creating unforgettable events. 
            From styling tips to planning advice, we share everything you need to know.
          </p>
          <p className="text-lg text-gold font-semibold">
            Your guide to extraordinary celebrations
          </p>
        </div>
      </section>

      {blogPosts && blogPosts.length === 0 ? (
        /* Empty State */
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-12">
              <CardContent className="space-y-6">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto" />
                <h2 className="font-serif text-3xl font-bold text-gray-800">
                  Coming Soon!
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We're working on creating amazing content for you. Check back soon for expert event planning tips, 
                  styling inspiration, and behind-the-scenes insights from our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-gold text-white hover:bg-gold-dark">
                      Get Planning Tips Now
                    </Button>
                  </Link>
                  <Link href="/gallery">
                    <Button variant="outline">
                      View Our Gallery
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl font-bold text-black mb-4">
                    Featured Article
                  </h2>
                </div>
                
                <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                      <img
                        src={featuredPost.imageUrl || "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                        alt={featuredPost.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.createdAt!).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>Amoria Team</span>
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-3xl font-bold text-black mb-4">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <Button className="bg-gold text-white hover:bg-gold-dark w-fit">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          {otherPosts.length > 0 && (
            <section className="py-20 bg-beige">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="font-serif text-3xl font-bold text-black mb-4">
                    Latest Articles
                  </h2>
                  <p className="text-gray-600">
                    Stay updated with our latest tips and insights
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((post) => (
                    <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img
                          src={post.imageUrl || "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.createdAt!).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>Amoria Team</span>
                          </div>
                        </div>
                        
                        <h3 className="font-serif text-xl font-bold text-black mb-3 group-hover:text-gold transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        
                        <Button variant="outline" size="sm" className="text-gold border-gold hover:bg-gold hover:text-white">
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-2 border-gold shadow-xl">
            <CardContent className="p-12">
              <h2 className="font-serif text-3xl font-bold text-black mb-4">
                Never Miss Our Latest Tips
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for exclusive event planning tips, seasonal inspiration, 
                and special offers delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                />
                <Button className="bg-gold text-white hover:bg-gold-dark px-8">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Categories/Topics */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-black mb-4">
              Popular Topics
            </h2>
            <p className="text-gray-600">
              Explore our most popular event planning categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Wedding Planning", count: "12 articles" },
              { title: "Photo Booth Tips", count: "8 articles" },
              { title: "Event Styling", count: "15 articles" },
              { title: "Party Ideas", count: "10 articles" },
              { title: "Corporate Events", count: "6 articles" },
              { title: "Seasonal Themes", count: "9 articles" },
              { title: "Food & Catering", count: "7 articles" },
              { title: "Budget Tips", count: "5 articles" }
            ].map((topic, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-bold text-black group-hover:text-gold transition-colors mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-500">{topic.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Put our expert tips into action! Let us help you create the perfect celebration with our premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
                Start Planning
              </Button>
            </Link>
            <Link href="/packages">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
