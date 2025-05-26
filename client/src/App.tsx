import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Attractions from "@/pages/Attractions";
import Destinations from "@/pages/Destinations";
import Blog from "@/pages/Blog";
import VacationRentals from "@/pages/VacationRentals";
import Contact from "@/pages/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Destination pages
import Wimberley from "@/pages/destinations/Wimberley";
import Fredericksburg from "@/pages/destinations/Fredericksburg";
import DrippingSprings from "@/pages/destinations/DrippingSprings";
import NewBraunfels from "@/pages/destinations/NewBraunfels";
import CanyonLake from "@/pages/destinations/CanyonLake";

function Router() {
  // Automatically scroll to top when route changes
  useScrollToTop();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/attractions" component={Attractions} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/blog" component={Blog} />
          <Route path="/vacation-rentals" component={VacationRentals} />
          <Route path="/contact" component={Contact} />
          
          {/* Destination detail pages */}
          <Route path="/destinations/wimberley" component={Wimberley} />
          <Route path="/destinations/fredericksburg" component={Fredericksburg} />
          <Route path="/destinations/drippingsprings" component={DrippingSprings} />
          <Route path="/destinations/newbraunfels" component={NewBraunfels} />
          <Route path="/destinations/canyonlake" component={CanyonLake} />
          
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
