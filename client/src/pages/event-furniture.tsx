import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Armchair, Table, Trophy, Users, Star } from "lucide-react";

export default function EventFurniture() {
  const furnitureCategories = [
    {
      title: "Tables",
      description: "Elegant tables in various styles and sizes to suit your event needs",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      types: ["Round tables", "Rectangle tables", "Cocktail tables", "High bar tables"]
    },
    {
      title: "Chairs",
      description: "Sophisticated seating options to complement your event styling",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      types: ["Chiavari chairs", "Ghost chairs", "Gold chairs", "Kids chairs"]
    },
    {
      title: "Plinths & Stands",
      description: "Display stands and plinths for cakes, centerpieces, and decorative elements",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      types: ["Cake plinths", "Dessert stands", "Display risers", "Centerpiece stands"]
    }
  ];

  const features = [
    { icon: <Star className="h-6 w-6" />, title: "Premium Quality", description: "High-end furniture pieces" },
    { icon: <Users className="h-6 w-6" />, title: "Various Capacities", description: "From intimate to large events" },
    { icon: <Trophy className="h-6 w-6" />, title: "Luxury Finishes", description: "Gold, silver, and crystal options" },
    { icon: <Armchair className="h-6 w-6" />, title: "Comfort Guaranteed", description: "Comfortable for extended events" },
  ];

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
              Event Furniture Hire
            </h1>
            <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Complete your event with our luxury furniture hire including elegant tables, sophisticated chairs, and stylish plinths & cake stands.
            </p>
            <p className="text-lg mb-8 text-gold font-semibold">
              From intimate gatherings to grand celebrations, we have the perfect pieces to elevate your event space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gold text-white hover:bg-gold-dark">
                  Get Quote
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" size="lg">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Our Furniture Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated selection of premium event furniture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {furnitureCategories.map((category, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-black">{category.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.types.map((type, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Why Choose Our Furniture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece is selected for its quality, comfort, and visual appeal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Furniture Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-black mb-8">
                Complete Event Setup
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-gold">Table Options</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>• Round tables (5ft, 6ft)</div>
                    <div>• Rectangle tables (6ft, 8ft)</div>
                    <div>• Cocktail tables (30", 36")</div>
                    <div>• High bar tables (42")</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-gold">Chair Styles</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>• Gold Chiavari chairs</div>
                    <div>• Clear ghost chairs</div>
                    <div>• White resin chairs</div>
                    <div>• Kids Chiavari chairs</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-gold">Display Pieces</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>• Cake plinths (various heights)</div>
                    <div>• Dessert stands (3-tier)</div>
                    <div>• Display risers</div>
                    <div>• Centerpiece stands</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f29d8ae8e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Complete event furniture setup"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Furniture Packages
            </h2>
            <p className="text-gray-600">Choose a package or mix and match individual pieces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Essential Package</h3>
                <div className="text-4xl font-bold text-gold mb-6">From £199</div>
                <p className="text-gray-600 mb-6">Perfect for smaller gatherings</p>
                <div className="space-y-3 mb-8 text-left">
                  {[
                    "4 round tables (5ft)",
                    "32 Chiavari chairs", 
                    "Basic setup included",
                    "Up to 32 guests"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-gold text-white hover:bg-gold-dark">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-gold shadow-xl text-center">
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    POPULAR
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Premium Package</h3>
                <div className="text-4xl font-bold text-gold mb-6">From £399</div>
                <p className="text-gray-600 mb-6">Complete event furniture</p>
                <div className="space-y-3 mb-8 text-left">
                  {[
                    "8 round tables (6ft)",
                    "64 premium chairs",
                    "2 cocktail tables",
                    "Cake display stand",
                    "Professional setup",
                    "Up to 64 guests"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-gold text-white hover:bg-gold-dark">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Luxury Complete</h3>
                <div className="text-4xl font-bold text-gold mb-6">From £699</div>
                <p className="text-gray-600 mb-6">Full event transformation</p>
                <div className="space-y-3 mb-8 text-left">
                  {[
                    "12+ tables (mixed sizes)",
                    "100+ premium chairs",
                    "Multiple display stands",
                    "Bar tables & stools",
                    "Designer consultation",
                    "Premium setup service"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-gold text-white hover:bg-gold-dark">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need something custom? We also offer individual piece rentals.</p>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Complete Your Event Setup
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From intimate dinners to grand celebrations, our premium furniture collection ensures your guests are comfortable and your event looks stunning.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
              Plan Your Event Furniture
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
