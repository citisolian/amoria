import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ShoppingCart, Flame, Users, Heart, Clock } from "lucide-react";

export default function DutchPancakes() {
  const features = [
    { icon: <ShoppingCart className="h-6 w-6" />, title: "Mobile Cart", description: "Charming vintage-style cart" },
    { icon: <Flame className="h-6 w-6" />, title: "Fresh Made", description: "Cooked live at your event" },
    { icon: <Users className="h-6 w-6" />, title: "Serves All", description: "Perfect for any group size" },
    { icon: <Heart className="h-6 w-6" />, title: "Irresistible", description: "Fluffy golden mini pancakes" },
    { icon: <Clock className="h-6 w-6" />, title: "Quick Service", description: "Fresh in under 2 minutes" },
  ];

  const toppings = [
    "Nutella & Strawberries",
    "Maple Syrup & Butter",
    "Fresh Berry Compote",
    "Lemon & Sugar",
    "Cinnamon & Sugar",
    "Chocolate Sauce",
    "Whipped Cream",
    "Caramel Drizzle",
    "Banana & Honey",
    "Powdered Sugar"
  ];

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
                Mini Pancake Cart
              </h1>
              <p className="text-xl mb-8 text-gray-600">
                Want to make your event even sweeter? Our mini dutch pancake cart serves up fluffy, golden bites of happiness, made fresh right before your eyes!
              </p>
              <p className="text-lg mb-8 text-gold font-semibold">
                Topped with delicious flavors of your choice, they're the perfect treat for any occasion!
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
                src="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Fresh mini pancakes being made"
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
              Sweet Happiness Delivered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch as our skilled chef creates golden mini pancakes right at your event, bringing joy and delicious aromas to your celebration
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

      {/* Toppings Selection */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Delicious Toppings
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our selection of mouth-watering toppings to create the perfect treat
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {toppings.map((topping, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <p className="font-medium text-gray-700">{topping}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All toppings are included in our packages, and guests can choose multiple combinations 
              to create their perfect mini pancake experience!
            </p>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Mini pancake cart setup"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-black mb-8">
                What's Included
              </h2>
              <div className="space-y-4">
                {[
                  "Vintage-style mobile pancake cart",
                  "Professional Dutch pancake chef",
                  "Fresh pancake batter preparation",
                  "Live cooking demonstration",
                  "All premium toppings included",
                  "Serving containers and utensils",
                  "Napkins and wet wipes",
                  "Setup and breakdown service",
                  "Minimum 2 hours operation",
                  "Serves up to 100 guests",
                  "Custom cart signage",
                  "Professional presentation"
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Mini Pancake Cart Packages
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Standard Package</h3>
                <div className="text-4xl font-bold text-gold mb-6">From £249</div>
                <p className="text-gray-600 mb-6">2-hour service for up to 50 guests</p>
                
                <div className="space-y-3 mb-8">
                  {[
                    "2 hours of service",
                    "Fresh mini pancakes", 
                    "5 topping choices",
                    "Professional chef",
                    "Basic cart setup"
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

            <Card className="border-2 border-gold shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    POPULAR
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Premium Package</h3>
                <div className="text-4xl font-bold text-gold mb-6">From £349</div>
                <p className="text-gray-600 mb-6">3-hour service for up to 100 guests</p>
                
                <div className="space-y-3 mb-8">
                  {[
                    "3 hours of service",
                    "Unlimited mini pancakes",
                    "All topping options", 
                    "Professional chef & assistant",
                    "Premium cart styling",
                    "Custom signage",
                    "Extended serving area",
                    "Additional setup time"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Sweeten Your Event
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bring joy, delicious aromas, and golden happiness to your celebration with our mini pancake cart experience.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
              Book Your Pancake Cart
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
