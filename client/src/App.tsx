import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import Home from "@/pages/home";
import PhotoBooth360 from "@/pages/360-photo-booth";
import SelfieBoothe from "@/pages/selfie-booth";
import CharcuterieCart from "@/pages/charcuterie-cart";
import DutchPancakes from "@/pages/dutch-pancakes";
import BackdropsMore from "@/pages/backdrops-more";
import EventFurniture from "@/pages/event-furniture";
import Packages from "@/pages/packages";
import Gallery from "@/pages/gallery";
import FAQs from "@/pages/faqs";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/360-photo-booth" component={PhotoBooth360} />
      <Route path="/selfie-booth" component={SelfieBoothe} />
      <Route path="/charcuterie-cart" component={CharcuterieCart} />
      <Route path="/dutch-pancakes" component={DutchPancakes} />
      <Route path="/backdrops-more" component={BackdropsMore} />
      <Route path="/event-furniture" component={EventFurniture} />
      <Route path="/packages" component={Packages} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
