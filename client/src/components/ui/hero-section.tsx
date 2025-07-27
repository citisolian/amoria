import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative z-20 text-center text-white px-4 animate-fade-in">
        <p className="text-2xl md:text-3xl mb-6 font-bold text-gold tracking-wide drop-shadow-lg bg-black/30 px-6 py-3 rounded-lg inline-block">
          Ready to Make Your Event Epic?
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          PHOTO BOOTH HIRE, <br />
          <span className="text-gold">FOOD CARTS & BACKDROPS</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
          Weddings, Corporate Events, Parties, Birthdays & More!
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gold text-white hover:bg-gold-dark transform hover:scale-105 transition-all duration-300 shadow-lg text-lg px-8 py-4">
            Get Free Quote
          </Button>
        </Link>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ArrowDown className="text-gold text-2xl" />
        </div>
      </div>
    </section>
  );
}
