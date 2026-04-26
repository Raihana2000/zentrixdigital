import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Website for Businesses",
  intro: "A professional business website is your most powerful growth tool. ZentrixDigital builds modern websites for businesses that improve trust, drive conversions and scale alongside your organisation.",
  benefitsTitle: "Why every business needs a professional website",
  benefits: [
    "Better visibility on Google — more organic traffic, more clients",
    "Professional presentation that matches your market position",
    "Higher conversion — more visitors become actual customers",
    "Available 24/7 — generate leads even outside office hours",
    "Scalable platform that grows with your business",
    "Expandable with client portals, bookings and automation"
  ],
  includedTitle: "What's included in your business website?",
  included: [
    "Custom design aligned with your brand identity and industry",
    "Fully responsive layout for mobile, tablet and desktop",
    "Clear page structure focused on conversions and user experience",
    "Contact page with form, WhatsApp and phone integration",
    "SEO-ready structure for improved search engine visibility",
    "Fast loading speeds and secure technical foundation"
  ],
  whoForTitle: "Which businesses do we work with?",
  whoFor: [
    { title: "Small & Medium Businesses", text: "Companies that want to be taken seriously online and attract new clients through their digital presence." },
    { title: "Service Organisations", text: "Agencies, consultancies and service companies that want to showcase their expertise professionally." },
    { title: "Local Businesses", text: "Shops, hospitality businesses and local service providers that want to be found on Google in their area." },
    { title: "Startups & New Ventures", text: "New businesses that want a strong professional online presence from day one to build credibility fast." }
  ],
  processTitle: "How it works",
  process: [
    { title: "Free analysis", text: "We analyse your current situation, discuss your goals and outline a tailored plan — with no obligation." },
    { title: "Design & development", text: "We design and build your business website from scratch, tailored to your audience and business objectives." },
    { title: "Go live & optimise", text: "After launch, we monitor results and continuously optimise for maximum growth and performance." }
  ],
  ctaTitle: "Ready to attract more clients online?",
  ctaText: "Request a free analysis and discover what a professional business website can do for your organisation. Honest advice, no strings attached.",
  ctaButton: "Request free analysis"
};

const SeoBusinessesEN = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website for Businesses | ZentrixDigital"
    metaDesc="Professional websites for businesses that improve trust, conversion and online growth. ZentrixDigital builds modern business websites. Request a free analysis."
    canonical="https://www.zentrixdigital.eu/en/website-for-businesses"
    backLabel="Back to services"
    servicesLabel="View all services"
    contactLabel="Request free analysis"
    langToggle={{ label: "Nederlandse versie", href: "/website-laten-maken-bedrijven" }}
    relatedTitle="Related pages"
    relatedLinks={[
      { label: "Website for Freelancers", href: "/en/website-for-freelancers" },
      { label: "CRM System Development", href: "/en/crm-system-development" },
      { label: "Business Automation", href: "/en/business-automation" },
      { label: "NL: Website laten maken voor bedrijven", href: "/website-laten-maken-bedrijven" }
    ]}
  />
);

export default SeoBusinessesEN;
