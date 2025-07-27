import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "360 Photo Booth",
    description: "Step into the hottest trend in event entertainment... our 360 Photo Booth! Elevate your event by capturing every angle with our cutting-edge video technology.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    href: "/360-photo-booth"
  },
  {
    title: "Selfie Booth",
    description: "Ready to step your party up a notch? Our selfie booth gives your guests the freedom to express themselves and capture unforgettable moments.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    href: "/selfie-booth"
  },
  {
    title: "Mini Pancake Cart",
    description: "Want to make your event even sweeter? Our mini dutch pancake cart serves up fluffy, golden bites of happiness, made fresh right before your eyes!",
    image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    href: "/dutch-pancakes"
  },
  {
    title: "Charcuterie Cart",
    description: "Add a touch of indulgence to your event with our charcuterie cart hire, featuring a stunning selection of premium cheeses, cured meats, and fresh fruits.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    href: "/charcuterie-cart"
  },
  {
    title: "Backdrops & More",
    description: "Transform any space into a captivating setting with our versatile range of backdrops, balloon arches & acrylic signs tailored to suit any occasion.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    href: "/backdrops-more"
  },
  {
    title: "Event Furniture",
    description: "Complete your event with our luxury furniture hire including elegant tables, sophisticated chairs, and stylish plinths & cake stands.",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    href: "/event-furniture"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">OUR SERVICES</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Think we are just your ordinary photo booth hire company? Think again... We make your party EPIC with high quality photos, irresistible food carts and eye catching backdrops!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Link href={service.href}>
                  <span className="inline-flex items-center text-gold font-semibold hover:text-gold-dark transition-colors cursor-pointer">
                    Find Out More <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
