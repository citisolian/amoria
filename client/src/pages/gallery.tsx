import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "photo-booths", name: "Photo Booths" },
    { id: "food-carts", name: "Food Carts" },
    { id: "backdrops", name: "Backdrops" },
    { id: "furniture", name: "Furniture" },
    { id: "events", name: "Complete Events" }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "360 Photo Booth at wedding",
      category: "photo-booths",
      title: "360° Photo Booth Setup"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Selfie booth with props",
      category: "photo-booths",
      title: "Selfie Booth Experience"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Charcuterie cart display",
      category: "food-carts",
      title: "Premium Charcuterie Cart"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Mini pancake cart",
      category: "food-carts",
      title: "Dutch Mini Pancakes"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Floral backdrop setup",
      category: "backdrops",
      title: "Elegant Floral Backdrop"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Balloon arch installation",
      category: "backdrops",
      title: "Luxury Balloon Arch"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Event furniture setup",
      category: "furniture",
      title: "Premium Event Furniture"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Chiavari chairs arrangement",
      category: "furniture",
      title: "Gold Chiavari Chairs"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1519167758481-83f29d8ae8e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Complete wedding setup",
      category: "events",
      title: "Complete Wedding Setup"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Corporate event styling",
      category: "events",
      title: "Corporate Event Styling"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Birthday party setup",
      category: "events",
      title: "Birthday Celebration"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Custom signage display",
      category: "backdrops",
      title: "Custom Event Signage"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedIndex(0);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].src);
    setSelectedIndex(nextIndex);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].src);
    setSelectedIndex(prevIndex);
  };

  return (
    <div className="header-spacing">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-black">
            Event Gallery
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning events and see how we bring magical moments to life. 
            From intimate celebrations to grand occasions, every event tells a unique story.
          </p>
          <p className="text-lg text-gold font-semibold">
            Get inspired for your own special celebration
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category.id 
                    ? "bg-gold text-white hover:bg-gold-dark" 
                    : "text-gray-600 hover:text-gold hover:border-gold"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Card 
                  key={image.id} 
                  className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => openLightbox(image.src, index)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <p className="font-serif text-lg font-bold">{image.title}</p>
                        <p className="text-sm">Click to view</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black border-none">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            
            {selectedImage && (
              <>
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Navigation Arrows */}
                {filteredImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-8 w-8" />
                    </Button>
                  </>
                )}
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                  {selectedIndex + 1} of {filteredImages.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Gallery?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you create stunning moments that will be remembered forever. Every event is unique, and we're here to make yours extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-4">
                Plan Your Event
              </Button>
            </a>
            <a href="/packages">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                View Packages
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
