import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Website for Freelancers",
  intro: "As a freelancer, your website is your most powerful sales tool. ZentrixDigital builds professional freelance websites that attract clients, build instant trust and support your business growth — fully tailored to your niche.",
  benefitsTitle: "Why invest in a professional freelance website?",
  benefits: [
    "Get found on Google by the right clients searching for your services",
    "Build instant credibility — even without a large client portfolio",
    "Works for you 24/7 — generating enquiries outside office hours",
    "More direct clients without expensive agencies or platforms",
    "Expandable with booking systems, contact forms and WhatsApp",
    "Tailored to your freelance niche and personal brand"
  ],
  includedTitle: "What's included in your freelance website?",
  included: [
    "Custom design matching your personal brand and services",
    "Fully responsive layout for mobile, tablet and desktop",
    "Contact page with form, WhatsApp and phone integration",
    "Basic SEO optimisation for search engine visibility",
    "Fast loading times and reliable technical foundation",
    "Clear calls-to-action designed to convert visitors into clients"
  ],
  whoForTitle: "Which freelancers do we work with?",
  whoFor: [
    { title: "Consultants & Advisors", text: "Showcase your expertise professionally and generate more client enquiries with a website that positions you as the expert." },
    { title: "Creative Professionals", text: "Photographers, designers and writers who want a stunning portfolio website that attracts high-quality projects." },
    { title: "Coaches & Trainers", text: "Build trust with potential clients and fill your calendar with bookings through a clear, conversion-focused website." },
    { title: "Technical Specialists", text: "Developers, IT consultants and technical freelancers who want to be found online and receive direct enquiries." }
  ],
  processTitle: "How it works",
  process: [
    { title: "Free analysis", text: "We discuss your goals, target audience and what your website needs to achieve. No obligation, just honest advice." },
    { title: "Design & build", text: "We build your website to match your brand and convert visitors into clients — fast and on budget." },
    { title: "Go live & grow", text: "Your website launches and starts attracting enquiries. We're here for future growth and add-ons." }
  ],
  ctaTitle: "Ready for a website that brings in clients?",
  ctaText: "Request a free analysis and discover what a professional freelance website can do for your business. No obligation, just honest advice.",
  ctaButton: "Request free analysis"
};

const SeoFreelancersEN = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website for Freelancers | ZentrixDigital"
    metaDesc="Professional websites for freelancers that build trust, attract clients and support business growth. Request a free analysis today."
    canonical="https://www.zentrixdigital.eu/en/website-for-freelancers"
    backLabel="Back to services"
    servicesLabel="View all services"
    contactLabel="Request free analysis"
    langToggle={{ label: "Nederlandse versie", href: "/website-laten-maken-zzp" }}
    relatedTitle="Related pages"
    relatedLinks={[
      { label: "Website for Businesses", href: "/en/website-for-businesses" },
      { label: "CRM System Development", href: "/en/crm-system-development" },
      { label: "NL: Website laten maken voor ZZP", href: "/website-laten-maken-zzp" },
      { label: "Business Automation", href: "/en/business-automation" }
    ]}
  />
);

export default SeoFreelancersEN;
