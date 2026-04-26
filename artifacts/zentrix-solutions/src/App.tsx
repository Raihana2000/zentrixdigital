import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { TranslationProvider } from "@/context/TranslationContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import ServiceWebsites from "@/pages/service-websites";
import ServiceApplicaties from "@/pages/service-applicaties";
import ServiceOnderhoud from "@/pages/service-onderhoud";
import ServiceGroei from "@/pages/service-groei";

// SEO landing pages — websites
import SeoZZP from "@/pages/seo-zzp";
import SeoFreelancersEN from "@/pages/seo-freelancers-en";
import SeoBedrijven from "@/pages/seo-bedrijven";
import SeoBusinessesEN from "@/pages/seo-businesses-en";

// SEO landing pages — systemen
import SeoCRM from "@/pages/seo-crm";
import SeoCRMEN from "@/pages/seo-crm-en";
import SeoBoekingssysteem from "@/pages/seo-boekingssysteem";
import SeoBookingEN from "@/pages/seo-booking-en";
import SeoAutomatisering from "@/pages/seo-automatisering";
import SeoAutomationEN from "@/pages/seo-automation-en";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-full bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/websites" component={ServiceWebsites} />
          <Route path="/applicaties" component={ServiceApplicaties} />
          <Route path="/onderhoud-optimalisatie" component={ServiceOnderhoud} />
          <Route path="/digitale-groeiondersteuning" component={ServiceGroei} />
          <Route path="/contact" component={Contact} />

          {/* SEO landing pages — websites */}
          <Route path="/website-laten-maken-zzp" component={SeoZZP} />
          <Route path="/en/website-for-freelancers" component={SeoFreelancersEN} />
          <Route path="/website-laten-maken-bedrijven" component={SeoBedrijven} />
          <Route path="/en/website-for-businesses" component={SeoBusinessesEN} />

          {/* SEO landing pages — systemen & automatisering */}
          <Route path="/crm-systeem-laten-maken" component={SeoCRM} />
          <Route path="/en/crm-system-development" component={SeoCRMEN} />
          <Route path="/boekingssysteem-laten-maken" component={SeoBoekingssysteem} />
          <Route path="/en/booking-system-development" component={SeoBookingEN} />
          <Route path="/bedrijfsprocessen-automatiseren" component={SeoAutomatisering} />
          <Route path="/en/business-automation" component={SeoAutomationEN} />

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </TranslationProvider>
    </QueryClientProvider>
  );
}

export default App;
