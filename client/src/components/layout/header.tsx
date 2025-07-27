import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gold/20 z-50">
      {/* Top Info Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto flex justify-center items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Phone className="h-3 w-3" />
            <span>+44 7123 456789</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-3 w-3" />
            <span>hello@amoriaevents.co.uk</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="font-script text-2xl font-bold text-gold cursor-pointer">
                Amoria Events
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/">
              <span className={`text-black hover:text-gold transition-colors font-medium cursor-pointer ${isActive('/') ? 'text-gold' : ''}`}>
                Home
              </span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-black hover:text-gold transition-colors font-medium group">
                Services
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2 bg-white border border-gold/20 shadow-xl">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-xs font-semibold text-gold uppercase tracking-wide">
                    Photo Booths
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/360-photo-booth" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-gold rounded transition-colors">
                      360° Photo Booth
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/selfie-booth" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-gold rounded transition-colors">
                      Selfie Booth
                    </Link>
                  </DropdownMenuItem>
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  <div className="px-3 py-2 text-xs font-semibold text-gold uppercase tracking-wide">
                    Food Carts
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/charcuterie-cart" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-gold rounded transition-colors">
                      Charcuterie Cart
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dutch-pancakes" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-gold rounded transition-colors">
                      Dutch Pancakes
                    </Link>
                  </DropdownMenuItem>
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  <div className="px-3 py-2 text-xs font-semibold text-gold uppercase tracking-wide">
                    Styling & Decor
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/backdrops-more" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-gold rounded transition-colors">
                      Backdrops & More
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/event-furniture" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-gold rounded transition-colors">
                      Event Furniture
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/packages">
              <span className={`text-black hover:text-gold transition-colors font-medium cursor-pointer ${isActive('/packages') ? 'text-gold' : ''}`}>
                Packages
              </span>
            </Link>

            <Link href="/gallery">
              <span className={`text-black hover:text-gold transition-colors font-medium cursor-pointer ${isActive('/gallery') ? 'text-gold' : ''}`}>
                Gallery
              </span>
            </Link>

            <Link href="/blog">
              <span className={`text-black hover:text-gold transition-colors font-medium cursor-pointer ${isActive('/blog') ? 'text-gold' : ''}`}>
                Blog
              </span>
            </Link>

            <Link href="/faqs">
              <span className={`text-black hover:text-gold transition-colors font-medium cursor-pointer ${isActive('/faqs') ? 'text-gold' : ''}`}>
                FAQs
              </span>
            </Link>

            <Link href="/contact">
              <span className={`text-black hover:text-gold transition-colors font-medium cursor-pointer ${isActive('/contact') ? 'text-gold' : ''}`}>
                Contact
              </span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-gold text-white hover:bg-gold-dark">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <div className="block px-3 py-2 text-black hover:bg-gold/10 rounded-md">Home</div>
                  </Link>
                  
                  <div className="px-3 py-2 text-gold font-semibold text-sm">Services</div>
                  <Link href="/360-photo-booth" onClick={() => setIsOpen(false)}>
                    <div className="block px-6 py-2 text-black hover:bg-gold/10 rounded-md text-sm">360° Photo Booth</div>
                  </Link>
                  <Link href="/selfie-booth" onClick={() => setIsOpen(false)}>
                    <div className="block px-6 py-2 text-black hover:bg-gold/10 rounded-md text-sm">Selfie Booth</div>
                  </Link>
                  <Link href="/charcuterie-cart" onClick={() => setIsOpen(false)}>
                    <div className="block px-6 py-2 text-black hover:bg-gold/10 rounded-md text-sm">Charcuterie Cart</div>
                  </Link>
                  <Link href="/dutch-pancakes" onClick={() => setIsOpen(false)}>
                    <div className="block px-6 py-2 text-black hover:bg-gold/10 rounded-md text-sm">Dutch Pancakes</div>
                  </Link>
                  <Link href="/backdrops-more" onClick={() => setIsOpen(false)}>
                    <div className="block px-6 py-2 text-black hover:bg-gold/10 rounded-md text-sm">Backdrops & More</div>
                  </Link>
                  <Link href="/event-furniture" onClick={() => setIsOpen(false)}>
                    <div className="block px-6 py-2 text-black hover:bg-gold/10 rounded-md text-sm">Event Furniture</div>
                  </Link>
                  
                  <Link href="/packages" onClick={() => setIsOpen(false)}>
                    <div className="block px-3 py-2 text-black hover:bg-gold/10 rounded-md">Packages</div>
                  </Link>
                  <Link href="/gallery" onClick={() => setIsOpen(false)}>
                    <div className="block px-3 py-2 text-black hover:bg-gold/10 rounded-md">Gallery</div>
                  </Link>
                  <Link href="/blog" onClick={() => setIsOpen(false)}>
                    <div className="block px-3 py-2 text-black hover:bg-gold/10 rounded-md">Blog</div>
                  </Link>
                  <Link href="/faqs" onClick={() => setIsOpen(false)}>
                    <div className="block px-3 py-2 text-black hover:bg-gold/10 rounded-md">FAQs</div>
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <div className="block px-3 py-2 text-black hover:bg-gold/10 rounded-md">Contact</div>
                  </Link>
                  
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="mx-3 mt-4 bg-gold text-white hover:bg-gold-dark w-48">
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
