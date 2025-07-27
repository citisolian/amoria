import ContactForm from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
            Get In Touch
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Ready to make your event extraordinary? We'd love to hear about your vision and help bring it to life. 
            Get in touch for a free, no-obligation consultation and quote.
          </p>
          <p className="text-lg text-gold font-semibold">
            Let's create something magical together
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Phone</h3>
                <p className="text-gray-600 text-sm mb-3">Call us for immediate assistance</p>
                <a href="tel:+447123456789" className="text-gold hover:text-gold-dark font-medium">
                  +44 7123 456789
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-3">Send us your enquiry</p>
                <a href="mailto:hello@amoriaevents.co.uk" className="text-gold hover:text-gold-dark font-medium">
                  hello@amoriaevents.co.uk
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-3">Quick chat support</p>
                <a href="https://wa.me/447123456789" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark font-medium">
                  Message Us
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Hours</h3>
                <p className="text-gray-600 text-sm mb-1">Mon - Fri: 9am - 6pm</p>
                <p className="text-gray-600 text-sm mb-1">Saturday: 10am - 4pm</p>
                <p className="text-gray-600 text-sm">Sunday: By appointment</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Service Areas</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-black">Primary Areas</p>
                        <p>London, Birmingham, Manchester, Leeds, Liverpool</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-black">Extended Coverage</p>
                        <p>We travel across the UK - travel fees may apply for areas outside our primary coverage</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">What to Expect</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Free consultation call</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Customized quote</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Flexible payment options</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Dedicated event coordinator</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="/packages" className="block text-gold hover:text-gold-dark text-sm font-medium">
                      → View Our Packages
                    </a>
                    <a href="/gallery" className="block text-gold hover:text-gold-dark text-sm font-medium">
                      → Browse Gallery
                    </a>
                    <a href="/faqs" className="block text-gold hover:text-gold-dark text-sm font-medium">
                      → Frequently Asked Questions
                    </a>
                    <a href="/blog" className="block text-gold hover:text-gold-dark text-sm font-medium">
                      → Event Planning Tips
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-black mb-4">
              Find Us
            </h2>
            <p className="text-gray-600">
              Based in the heart of the UK, serving events nationwide
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-xl">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-gray-700 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600">
                  Map integration would be implemented here<br />
                  showing our service areas and location
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-black mb-8">
            Join Our Happy Customers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <p className="text-gray-600 text-sm">Events Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <p className="text-gray-600 text-sm">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">5⭐</div>
              <p className="text-gray-600 text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">24/7</div>
              <p className="text-gray-600 text-sm">Event Support</p>
            </div>
          </div>

          <p className="text-gray-600 text-lg">
            "Working with Amoria Events was the best decision we made for our wedding. 
            They made everything so easy and our guests are still talking about the photo booth!"
          </p>
          <p className="text-gold font-semibold mt-2">- Sarah & James, London</p>
        </div>
      </section>
    </div>
  );
}
