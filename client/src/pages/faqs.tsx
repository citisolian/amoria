import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function FAQs() {
  const faqCategories = [
    {
      title: "Booking & General",
      questions: [
        {
          q: "How far in advance should I book?",
          a: "We recommend booking at least 4-6 weeks in advance for optimal availability, especially during peak season (April-October). However, we often accommodate last-minute bookings depending on availability."
        },
        {
          q: "What areas do you cover?",
          a: "We cover the entire UK, with our main service areas being London, Birmingham, Manchester, and surrounding regions. Travel fees may apply for locations outside our standard service area."
        },
        {
          q: "Do you provide services for all types of events?",
          a: "Yes! We cater to weddings, corporate events, birthday parties, baby showers, engagements, anniversaries, and any special celebration you have in mind."
        },
        {
          q: "Can I view your equipment before booking?",
          a: "Absolutely! We'd be happy to arrange a viewing appointment at our showroom or via video call to show you our equipment and discuss your requirements."
        }
      ]
    },
    {
      title: "Photo Booths",
      questions: [
        {
          q: "How many people can use the photo booth at once?",
          a: "Our 360° photo booth can accommodate up to 4 people comfortably, while our selfie booth can fit 6-8 people depending on the setup. We provide guidance for optimal results."
        },
        {
          q: "How do guests receive their photos/videos?",
          a: "Guests receive instant prints for selfie booth photos, plus digital copies via QR code or email. For 360° booth videos, they're shared via QR code for immediate download and social sharing."
        },
        {
          q: "Can you customize the photo/video templates?",
          a: "Yes! We create custom overlays and templates featuring your names, event date, logos, or any design elements that match your theme - all included in our packages."
        },
        {
          q: "What happens if the equipment breaks down?",
          a: "We carry backup equipment for all our services and have 24/7 technical support. In the unlikely event of equipment failure, we'll have you up and running within minutes."
        }
      ]
    },
    {
      title: "Food Carts",
      questions: [
        {
          q: "How many guests can your food carts serve?",
          a: "Our charcuterie cart serves 50-80 guests, while our mini pancake cart can serve up to 100 guests per hour. We can extend service time or bring additional equipment for larger events."
        },
        {
          q: "Do you accommodate dietary restrictions?",
          a: "Yes! We offer vegetarian, vegan, gluten-free, and other dietary options. Please inform us of any specific requirements when booking, and we'll ensure suitable alternatives are available."
        },
        {
          q: "Is the food prepared fresh on-site?",
          a: "Our mini pancakes are cooked fresh on-site for the ultimate experience. Charcuterie items are professionally prepared on the day of your event using premium, fresh ingredients."
        },
        {
          q: "What's included with the food cart service?",
          a: "All food cart services include a professional chef/attendant, all ingredients, serving equipment, plates, napkins, and complete setup/breakdown. Just enjoy the delicious experience!"
        }
      ]
    },
    {
      title: "Backdrops & Decor",
      questions: [
        {
          q: "Can I customize the colors of my backdrop?",
          a: "Absolutely! We work with you to match your exact color scheme and theme. Our design team can create custom arrangements to perfectly complement your event styling."
        },
        {
          q: "How long does setup take?",
          a: "Backdrop setup typically takes 1-2 hours depending on complexity. Balloon arches require 2-3 hours. We arrive early to ensure everything is perfect before your guests arrive."
        },
        {
          q: "Do you provide fresh or artificial flowers?",
          a: "We offer both options! Fresh flowers provide natural beauty and fragrance, while high-quality artificial flowers offer durability and can be kept as mementos. We'll help you choose the best option."
        },
        {
          q: "Can backdrops be used outdoors?",
          a: "Yes, many of our backdrops are suitable for outdoor use. We use weather-resistant materials and secure installation methods. We'll assess your venue and recommend the best options."
        }
      ]
    },
    {
      title: "Payment & Policies",
      questions: [
        {
          q: "What are your payment terms?",
          a: "We require a 30% deposit to secure your booking, with the balance due 7 days before your event. We accept bank transfers, credit/debit cards, and PayPal for your convenience."
        },
        {
          q: "What is your cancellation policy?",
          a: "Cancellations made 30+ days before the event receive a full refund minus a £50 admin fee. 14-29 days: 50% refund. Less than 14 days: no refund, but we offer date changes subject to availability."
        },
        {
          q: "Do you have insurance?",
          a: "Yes, we carry comprehensive public liability insurance (£2 million coverage) and all our equipment is PAT tested. We can provide insurance certificates if required by your venue."
        },
        {
          q: "What happens in case of bad weather?",
          a: "For outdoor events, we monitor weather forecasts closely and will work with you to adjust setup or relocate indoors if necessary. Most of our services can be adapted for covered areas."
        }
      ]
    }
  ];

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about our services, booking process, and policies. 
            If you can't find what you're looking for, we're always here to help!
          </p>
          <p className="text-lg text-gold font-semibold">
            Still have questions? Get in touch with our friendly team
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-black mb-8 text-center">
                {category.title}
              </h2>
              
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-b border-gray-200 last:border-b-0">
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gold/5 transition-colors">
                          <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-0">
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">
              Planning Tips
            </h2>
            <p className="text-xl text-gray-600">
              Make the most of your event with these helpful tips from our experienced team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Book Early</h3>
                <p className="text-gray-600 text-sm">
                  Popular dates fill up quickly, especially during wedding season. Book 4-6 weeks in advance for the best availability and to secure your preferred services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Plan Your Space</h3>
                <p className="text-gray-600 text-sm">
                  Consider your venue layout when choosing services. We can provide space requirements and help you optimize the setup for maximum guest enjoyment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Communicate Needs</h3>
                <p className="text-gray-600 text-sm">
                  Share your vision, color themes, and any special requirements with us. The more we know about your event, the better we can tailor our services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-black mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Our friendly team is here to help with any questions about our services, booking process, or custom requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-gold">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4 text-sm">Speak directly with our team</p>
                <a href="tel:+447123456789">
                  <Button className="bg-gold text-white hover:bg-gold-dark">
                    +44 7123 456789
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-gold">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4 text-sm">Quick chat support</p>
                <a href="https://wa.me/447123456789" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 text-white hover:bg-green-600">
                    Message Us
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-gold">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Get Quote</h3>
                <p className="text-gray-600 mb-4 text-sm">Detailed consultation</p>
                <Link href="/contact">
                  <Button className="bg-gold text-white hover:bg-gold-dark">
                    Contact Form
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
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Now that you have all the information you need, let's start planning your perfect celebration. We're here to make it amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
                Get Your Quote
              </Button>
            </Link>
            <Link href="/packages">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
