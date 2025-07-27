import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ShoppingCart, Heart, Users, Clock, Utensils } from "lucide-react";

export default function CharcuterieCart() {
  const features = [
    { icon: <ShoppingCart className="h-6 w-6" />, title: "Mobile Cart", description: "Elegant vintage-style cart" },
    { icon: <Heart className="h-6 w-6" />, title: "Premium Selection", description: "Artisan cheeses & cured meats" },
    { icon: <Users className="h-6 w-6" />, title: "Serves 50+", description: "Perfect for any group size" },
    { icon: <Clock className="h-6 w-6" />, title: "Fresh Preparation", description: "Prepared on the day" },
    { icon: <Utensils className="h-6 w-6" />, title: "Complete Setup", description: "Plates, napkins & serving tools" },
  ];

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
                Charcuterie Cart
              </h1>
              <p className="text-xl mb-8 text-gray-600">
                Add a touch of indulgence to your event with our charcuterie cart hire, featuring a stunning selection of premium cheeses, cured meats, fresh fruits, and gourmet accompaniments.
              </p>
              <p className="text-lg mb-8 text-gold font-semibold">
                Our elegantly styled cart creates a luxurious grazing experience your guests will love!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gold text-white hover:bg-gold-dark">
                    Book Now
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" size="lg">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Elegant charcuterie cart display"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Luxury Grazing Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our charcuterie cart brings elegance and sophistication to any event with premium selections and beautiful presentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Selection */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Premium Selection
            </h2>
            <p className="text-xl text-gray-600">
              Carefully curated artisan products for the ultimate grazing experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4 text-gold">Artisan Cheeses</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Aged Cheddar</li>
                  <li>Brie de Meaux</li>
                  <li>Goat's Cheese</li>
                  <li>Blue Stilton</li>
                  <li>Manchego</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4 text-gold">Cured Meats</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Prosciutto di Parma</li>
                  <li>Salami Milano</li>
                  <li>Chorizo Iberico</li>
                  <li>Pancetta</li>
                  <li>Bresaola</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4 text-gold">Fresh & Dried</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Seasonal Grapes</li>
                  <li>Fresh Berries</li>
                  <li>Dried Apricots</li>
                  <li>Mixed Nuts</li>
                  <li>Fig Preserve</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4 text-gold">Accompaniments</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Artisan Crackers</li>
                  <li>Sourdough Bread</li>
                  <li>Honey Comb</li>
                  <li>Cornichons</li>
                  <li>Olives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Charcuterie cart at event"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-black mb-8">
                What's Included
              </h2>
              <div className="space-y-4">
                {[
                  "Elegant vintage-style cart",
                  "Premium cheese selection (5-6 varieties)",
                  "Artisan cured meats (4-5 types)",
                  "Fresh seasonal fruits",
                  "Dried fruits and nuts",
                  "Gourmet crackers and bread",
                  "Preserves and honey",
                  "Complete serving setup",
                  "Biodegradable plates and napkins",
                  "Professional styling and setup",
                  "Serves 50-80 guests",
                  "Custom name signage"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-black mb-8">
            Charcuterie Cart Pricing
          </h2>
          
          <Card className="border-2 border-gold shadow-xl">
            <CardContent className="p-12">
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold mb-4">Premium Package</h3>
                <div className="text-5xl font-bold text-gold mb-6">
                  From £349
                </div>
                <p className="text-gray-600 mb-8">Serves 50-80 guests</p>
                
                <div className="space-y-2 mb-8 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Full premium selection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Professional styling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Complete serving setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Custom signage included</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gold text-white hover:bg-gold-dark">
                      Get Quote
                    </Button>
                  </Link>
                  <Link href="/packages">
                    <Button variant="outline" size="lg">
                      View All Packages
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Elevate Your Event
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Add sophistication and indulgence to your special occasion with our premium charcuterie cart experience.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
              Book Your Charcuterie Cart
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
