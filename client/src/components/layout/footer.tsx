import { Link } from "wouter";
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="font-script text-3xl font-bold text-gold mb-4">
              Amoria Events
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating magical moments with premium photo booth hire, luxury backdrops, 
              and gourmet food carts for weddings, parties, and corporate events across the UK.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Phone size={24} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/360-photo-booth">
                  <span className="hover:text-gold transition-colors cursor-pointer">360 Photo Booth</span>
                </Link>
              </li>
              <li>
                <Link href="/selfie-booth">
                  <span className="hover:text-gold transition-colors cursor-pointer">Selfie Booth</span>
                </Link>
              </li>
              <li>
                <Link href="/charcuterie-cart">
                  <span className="hover:text-gold transition-colors cursor-pointer">Charcuterie Cart</span>
                </Link>
              </li>
              <li>
                <Link href="/dutch-pancakes">
                  <span className="hover:text-gold transition-colors cursor-pointer">Dutch Pancakes</span>
                </Link>
              </li>
              <li>
                <Link href="/backdrops-more">
                  <span className="hover:text-gold transition-colors cursor-pointer">Backdrops & Decor</span>
                </Link>
              </li>
              <li>
                <Link href="/event-furniture">
                  <span className="hover:text-gold transition-colors cursor-pointer">Event Furniture</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/">
                  <span className="hover:text-gold transition-colors cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="hover:text-gold transition-colors cursor-pointer">Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/packages">
                  <span className="hover:text-gold transition-colors cursor-pointer">Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  <span className="hover:text-gold transition-colors cursor-pointer">FAQs</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-gold transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-gold transition-colors cursor-pointer">Blog</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest event styling tips and exclusive offers</p>
            </div>
            <div className="flex w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-gold text-white hover:bg-gold-dark ml-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400">We Accept:</span>
              <div className="flex space-x-3 text-2xl">
                <span className="text-blue-500">💳</span>
                <span className="text-red-500">💳</span>
                <span className="text-blue-400">💳</span>
                <span className="text-white">💳</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms & Conditions</a>
              <span>&copy; 2025 Amoria Events UK. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
