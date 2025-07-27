import HeroSection from "@/components/ui/hero-section";
import ServicesGrid from "@/components/ui/services-grid";
import BrandCarousel from "@/components/ui/brand-carousel";
import Testimonials from "@/components/ui/testimonials";
import ContactForm from "@/components/ui/contact-form";

export default function Home() {
  return (
    <div className="header-spacing">
      {/* Scrolling Testimonials Bar */}
      <div className="bg-gold text-black py-4 overflow-hidden flex items-center">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center space-x-12 text-lg font-medium">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center space-x-12">
                <span className="flex items-center">
                  ⭐⭐⭐⭐⭐ 100+ HAPPY CUSTOMERS
                </span>
                <span>NOW TAKING 25/26 BOOKINGS</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HeroSection />
      <ServicesGrid />
      <BrandCarousel />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
