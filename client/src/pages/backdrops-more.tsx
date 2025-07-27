import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Palette, Sparkles, Camera, Heart, Settings } from "lucide-react";

export default function BackdropsMore() {
  const services = [
    {
      title: "Floral Backdrops",
      description: "Custom or pre-designed floral arrangements that create stunning photo opportunities",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Custom color schemes", "Fresh or artificial options", "Various sizes available", "Professional setup"]
    },
    {
      title: "Balloon Arches",
      description: "Eye-catching balloon arrangements in various styles and color combinations",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Single or double arches", "Organic styling", "Ceiling installations", "Color matching service"]
    },
    {
      title: "Event Signage",
      description: "Professional acrylic and vinyl signage to complete your event styling",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Welcome signs", "Seating charts", "Menu displays", "Custom designs"]
    }
  ];

  const features = [
    { icon: <Palette className="h-6 w-6" />, title: "Custom Colors", description: "Match your event theme perfectly" },
    { icon: <Sparkles className="h-6 w-6" />, title: "Premium Materials", description: "High-quality backdrops and props" },
    { icon: <Camera className="h-6 w-6" />, title: "Photo Ready", description: "Designed for stunning photography" },
    { icon: <Heart className="h-6 w-6" />, title: "Romantic Touch", description: "Creates magical atmospheres" },
    { icon: <Settings className="h-6 w-6" />, title: "Professional Setup", description: "Expert installation included" },
  ];

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blush to-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
              Backdrops & More
            </h1>
            <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Transform any space into a captivating setting with our versatile range of backdrops, balloon arches & acrylic signs tailored to suit any occasion.
            </p>
            <p className="text-lg mb-8 text-gold font-semibold">
              Whether it's a corporate event, wedding, or photo shoot, our collection offers stunning options to complement your vision perfectly.
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Our Backdrop Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of backdrop and decor options to create the perfect setting
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-black">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
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
              Why Choose Our Backdrops
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every backdrop and decoration is carefully crafted to create stunning visual impact for your special moments
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

      {/* Customization Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-black mb-8">
                Complete Customization
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2 text-gold">Size Options</h3>
                  <p className="text-gray-600">From intimate settings to grand celebrations, we offer backdrops in various sizes to suit your venue and guest count.</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2 text-gold">Color Coordination</h3>
                  <p className="text-gray-600">Our design team works with you to match colors to your theme, ensuring seamless integration with your event styling.</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2 text-gold">Setup Service</h3>
                  <p className="text-gray-600">Professional installation and styling included with every hire. We handle setup and breakdown so you can focus on your event.</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2 text-gold">Add-On Services</h3>
                  <p className="text-gray-600">Enhance your backdrop with additional lighting, props, or floral arrangements for the complete experience.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Custom backdrop setup"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Backdrop Packages
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Basic Backdrop</h3>
                <div className="text-4xl font-bold text-gold mb-6">From £149</div>
                <div className="space-y-3 mb-8 text-left">
                  {[
                    "Single backdrop setup",
                    "Standard size (2m x 2m)", 
                    "Basic installation",
                    "4-hour hire"
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
                <div className="text-4xl font-bold text-gold mb-6">From £299</div>
                <div className="space-y-3 mb-8 text-left">
                  {[
                    "Backdrop + balloon arch",
                    "Large size (3m x 3m)",
                    "Professional styling",
                    "Custom color matching",
                    "6-hour hire",
                    "Additional props included"
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
                <div className="text-4xl font-bold text-gold mb-6">From £499</div>
                <div className="space-y-3 mb-8 text-left">
                  {[
                    "Multiple backdrop setups",
                    "Balloon arch & ceiling decor",
                    "Custom signage included",
                    "Full day hire",
                    "Designer consultation",
                    "Premium installation"
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
            Transform Your Space
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Create the perfect backdrop for your special moments with our stunning collection of backdrops and decorative elements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
              Design Your Backdrop
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
