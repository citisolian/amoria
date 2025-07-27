const brands = [
  "DAVID LLOYD",
  "CHAK DE",
  "MOD",
  "CROWNE PLAZA",
  "MINISTRY OF DEFENCE",
  "BRAND PARTNER",
  "LUXURY HOTELS",
  "EVENT VENUES"
];

export default function BrandCarousel() {
  return (
    <section className="py-16 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-4">
            JOIN THE BRANDS WHO LOVE US
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Amoria we don't only do weddings and parties, we are also the go to for corporate events and brand activation's! 
            Trusted by both local businesses and global brands.
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm"
              >
                <span className="font-bold text-sm text-gray-800 text-center px-2">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="/contact" 
            className="inline-block bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-dark transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
