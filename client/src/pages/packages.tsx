import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Star, Crown, Sparkles } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      name: "Bronze Package",
      price: "From £499",
      description: "Perfect for intimate celebrations and smaller gatherings",
      icon: <Star className="h-8 w-8" />,
      color: "border-amber-600",
      bgColor: "bg-amber-50",
      popular: false,
      includes: [
        "Selfie booth (3 hours)",
        "Basic backdrop setup",
        "Props collection",
        "Instant prints",
        "Professional attendant",
        "Setup and breakdown"
      ],
      addOns: [
        "Additional hour: £75",
        "Premium backdrop: £99",
        "Custom signage: £49"
      ]
    },
    {
      name: "Silver Package",
      price: "From £799",
      description: "Most popular choice with perfect balance of features and value",
      icon: <Crown className="h-8 w-8" />,
      color: "border-gold",
      bgColor: "bg-gold/5",
      popular: true,
      includes: [
        "360° Photo booth (4 hours)",
        "Premium backdrop + balloon arch",
        "Food cart (2 hours)",
        "Custom photo templates",
        "Digital gallery access",
        "Props & styling",
        "Professional setup team",
        "Event coordination"
      ],
      addOns: [
        "Additional photo booth hour: £99",
        "Extra food cart hour: £149",
        "Upgraded backdrop: £199"
      ]
    },
    {
      name: "Gold Package",
      price: "From £1,299",
      description: "Complete luxury experience for unforgettable celebrations",
      icon: <Sparkles className="h-8 w-8" />,
      color: "border-gold-dark",
      bgColor: "bg-gold/10",
      popular: false,
      includes: [
        "360° Photo booth (6 hours)",
        "Selfie booth (4 hours)",
        "Premium food cart (3 hours)",
        "Multiple backdrops",
        "Balloon arch + ceiling decor",
        "Event furniture (tables & chairs)",
        "Custom signage package",
        "Dedicated event coordinator",
        "Premium styling",
        "Extended digital gallery"
      ],
      addOns: [
        "Additional service hours: £125/hr",
        "Extra furniture pieces: £199",
        "Luxury upgrades: £299"
      ]
    }
  ];

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
            Event Packages
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted packages designed to make your event planning effortless. 
            Each package includes everything you need for an unforgettable celebration.
          </p>
          <p className="text-lg text-gold font-semibold">
            Bronze, Silver, Gold - Find the perfect fit for your special occasion
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.color} ${pkg.popular ? 'border-2 shadow-2xl scale-105' : 'border hover:shadow-xl'} transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-white px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <CardContent className={`p-8 ${pkg.bgColor}`}>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 text-gold rounded-full mb-4">
                      {pkg.icon}
                    </div>
                    <h3 className="font-serif text-3xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-gold mb-2">{pkg.price}</div>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-serif text-lg font-bold mb-4 text-black">What's Included:</h4>
                    <div className="space-y-3">
                      {pkg.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-serif text-lg font-bold mb-4 text-black">Add-On Options:</h4>
                    <div className="space-y-2">
                      {pkg.addOns.map((addon, idx) => (
                        <div key={idx} className="text-sm text-gray-600">
                          • {addon}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className={`w-full ${pkg.popular ? 'bg-gold text-white hover:bg-gold-dark' : 'bg-gold text-white hover:bg-gold-dark'}`}>
                      Choose This Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Package Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Compare features across all our packages to find the perfect fit
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gold text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-serif text-lg">Features</th>
                  <th className="px-6 py-4 text-center font-serif text-lg">Bronze</th>
                  <th className="px-6 py-4 text-center font-serif text-lg">Silver</th>
                  <th className="px-6 py-4 text-center font-serif text-lg">Gold</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: "Photo Booth Hours", bronze: "3 hours", silver: "4 hours", gold: "6 hours" },
                  { feature: "360° Booth", bronze: "❌", silver: "✅", gold: "✅" },
                  { feature: "Selfie Booth", bronze: "✅", silver: "❌", gold: "✅ (4 hrs)" },
                  { feature: "Food Cart", bronze: "❌", silver: "✅ (2 hrs)", gold: "✅ (3 hrs)" },
                  { feature: "Backdrop Setup", bronze: "Basic", silver: "Premium", gold: "Multiple" },
                  { feature: "Balloon Decor", bronze: "❌", silver: "Arch", gold: "Arch + Ceiling" },
                  { feature: "Event Furniture", bronze: "❌", silver: "❌", gold: "✅" },
                  { feature: "Custom Signage", bronze: "❌", silver: "❌", gold: "✅" },
                  { feature: "Event Coordinator", bronze: "❌", silver: "Basic", gold: "Dedicated" },
                  { feature: "Setup Team", bronze: "1 person", silver: "2 people", gold: "Full team" }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.bronze}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.silver}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.gold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-black mb-6">
            Need Something Custom?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have specific requirements or a unique vision? We create bespoke packages tailored to your exact needs and budget.
          </p>
          
          <Card className="border-2 border-gold shadow-xl">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-6">
                  <Crown className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">Bespoke Package</h3>
                <div className="text-2xl font-bold text-gold mb-6">Custom Pricing</div>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Work directly with our event specialists to create the perfect package for your celebration
                </p>
                
                <div className="space-y-2 mb-8 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Personal consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Mix and match services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Flexible pricing options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    <span>Dedicated event coordinator</span>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button size="lg" className="bg-gold text-white hover:bg-gold-dark">
                    Request Custom Quote
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Book Your Package?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Choose your perfect package and let us handle the details. Our team will ensure your event is nothing short of spectacular.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
                Book Your Package
              </Button>
            </Link>
            <a href="tel:+447123456789">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                Call for Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
