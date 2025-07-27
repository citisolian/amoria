import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Camera, Video, Zap, Users, Download } from "lucide-react";

export default function PhotoBooth360() {
  const features = [
    { icon: <Camera className="h-6 w-6" />, title: "4K Ultra HD Camera", description: "Crystal clear video quality" },
    { icon: <Video className="h-6 w-6" />, title: "360° Rotation", description: "Captures every angle perfectly" },
    { icon: <Zap className="h-6 w-6" />, title: "Slow Motion Effects", description: "Mesmerizing boomerang videos" },
    { icon: <Users className="h-6 w-6" />, title: "Group Friendly", description: "Fits up to 4 people" },
    { icon: <Download className="h-6 w-6" />, title: "Instant Sharing", description: "QR code download & social sharing" },
  ];

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                360° Photo Booth
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Step into the hottest trend in event entertainment with our cutting-edge 360 Photo Booth! 
                Capture every angle with mesmerizing slow-motion videos and personalized overlay filters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gold text-white hover:bg-gold-dark">
                    Book Now
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="360 Photo Booth in action"
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
              Premium Features Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our 360 Photo Booth comes packed with professional-grade features to create unforgettable moments
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

      {/* What's Included */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-black mb-8">
                What's Included
              </h2>
              <div className="space-y-4">
                {[
                  "Professional 360° camera setup",
                  "Premium LED ring platform",
                  "Personalized video overlays",
                  "Props box with fun accessories",
                  "Professional lighting setup",
                  "Trained operator for 4 hours",
                  "Instant QR code sharing",
                  "Custom backdrop options",
                  "Setup and breakdown service",
                  "Unlimited videos during hire"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="360 Photo Booth setup"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-black mb-8">
            360° Photo Booth Pricing
          </h2>
          
          <Card className="border-2 border-gold shadow-xl">
            <CardContent className="p-12">
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold mb-4">Standard Package</h3>
                <div className="text-5xl font-bold text-gold mb-6">
                  From £299
                </div>
                <p className="text-gray-600 mb-8">4-hour hire including all features</p>
                
                <div className="space-y-2 mb-8 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>4 hours of operation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Unlimited videos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Professional operator</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Props & backdrop included</span>
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
            Ready to Spin Into Action?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your event with the most exciting photo experience your guests have ever seen.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
              Book Your 360° Experience
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
