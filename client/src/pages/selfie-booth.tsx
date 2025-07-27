import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Camera, Printer, Heart, Smile, Share } from "lucide-react";

export default function SelfieBoothe() {
  const features = [
    { icon: <Camera className="h-6 w-6" />, title: "HD Photography", description: "Crystal clear photos & GIFs" },
    { icon: <Printer className="h-6 w-6" />, title: "Instant Prints", description: "Photos ready in 10 seconds" },
    { icon: <Heart className="h-6 w-6" />, title: "Custom Templates", description: "Personalized to your event" },
    { icon: <Smile className="h-6 w-6" />, title: "Fun Props", description: "Extensive prop collection" },
    { icon: <Share className="h-6 w-6" />, title: "Digital Sharing", description: "Email & social media ready" },
  ];

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blush to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
                Selfie Booth
              </h1>
              <p className="text-xl mb-8 text-gray-600">
                Ready to step your party up a notch? Our selfie booth gives your guests the freedom to express themselves and capture unforgettable moments through photos, GIFs & boomerangs.
              </p>
              <p className="text-lg mb-8 text-gold font-semibold">
                In just 10 seconds, they'll have a printed memory to take home and cherish forever!
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
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Friends enjoying selfie booth"
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
              Everything You Need for Fun
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our selfie booth is packed with features to keep your guests entertained and create lasting memories
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

      {/* Package Details */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Selfie booth setup with props"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-black mb-8">
                Package Includes
              </h2>
              <div className="space-y-4">
                {[
                  "Professional DSLR camera system",
                  "Touch screen interface",
                  "Instant photo printing (unlimited)",
                  "Digital copies via email/QR code",
                  "Custom photo templates",
                  "Fun props collection",
                  "Professional backdrop",
                  "Attendant for full duration",
                  "Setup and breakdown",
                  "Photos, GIFs & Boomerangs",
                  "Social media sharing",
                  "Custom branding options"
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Selfie Booth Packages
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Standard Package</h3>
                <div className="text-4xl font-bold text-gold mb-6">From £199</div>
                <p className="text-gray-600 mb-6">3-hour hire</p>
                
                <div className="space-y-3 mb-8">
                  {[
                    "3 hours operation",
                    "Unlimited photos & prints", 
                    "Basic prop collection",
                    "Standard backdrop",
                    "Attendant included"
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
                <div className="text-4xl font-bold text-gold mb-6">From £299</div>
                <p className="text-gray-600 mb-6">4-hour hire</p>
                
                <div className="space-y-3 mb-8">
                  {[
                    "4 hours operation",
                    "Unlimited photos & prints",
                    "Premium prop collection", 
                    "Custom backdrop options",
                    "Custom photo templates",
                    "GIFs & Boomerangs",
                    "Social media integration",
                    "Guest book alternative"
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
            Ready to Capture the Fun?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Give your guests the freedom to create, capture, and take home beautiful memories from your special event.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
              Book Your Selfie Booth
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
