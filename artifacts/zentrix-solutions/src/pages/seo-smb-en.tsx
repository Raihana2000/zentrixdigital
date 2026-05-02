import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Website development for small businesses and SMEs",
  intro: "As a small business or SME, you need more than just an attractive website. Your site needs to build trust, clearly communicate what you offer, and guide visitors smoothly towards contact, quotes, or enquiries. ZentrixDigital builds professional websites for small businesses and SMEs that want to come across more credibly online and receive more inbound enquiries.",
  benefitsTitle: "Why a strong website matters for SMEs",
  benefits: [
    "Better visibility on Google — more relevant visitors, more enquiries",
    "A professional appearance that instantly builds trust with new clients",
    "Conversion-focused structure that guides visitors towards contact or a quote",
    "Always reachable — receive leads outside office hours via form or WhatsApp",
    "A scalable platform that grows with your SME",
    "Expandable with CRM, client portal, dashboard, or booking system"
  ],
  includedTitle: "What we build for SMEs",
  included: [
    "Custom design tailored to your brand, industry, and target audience",
    "Fully mobile-responsive — perfect on smartphone, tablet, and desktop",
    "Clear page structure focused on contact requests and conversions",
    "Contact page with form, WhatsApp integration, and phone accessibility",
    "SEO-technical foundation for better visibility in Google",
    "Fast load times and a secure technical base"
  ],
  examplesTitle: "From website to online system",
  examples: [
    "Client portals where customers log in, view documents, and manage orders",
    "Online booking systems for appointments, services, or consultations",
    "Dashboards with an overview of customers, data, or business processes",
    "Intake forms with automatic processing and direct email integration",
    "WhatsApp integrations and automated messaging systems",
    "CRM connections and integrations with accounting software or external tools"
  ],
  whoForTitle: "Which SMEs is this suitable for?",
  whoFor: [
    { title: "Administration and advisory firms", text: "Agencies that want to present themselves professionally, receive more enquiries, and communicate their services clearly." },
    { title: "Staffing agencies and recruiters", text: "Businesses that display vacancies, attract candidates, and convince employers through a strong online platform." },
    { title: "Estate agents and financial advisers", text: "Professionals where trust and presentation are decisive for winning new clients." },
    { title: "Growing SME businesses", text: "Organisations that need more than a standard website and want to scale with smart online systems." }
  ],
  processTitle: "How we work",
  process: [
    { title: "Free analysis", text: "We review your current online presence and discuss your goals — no strings attached." },
    { title: "Design & development", text: "We build your SME website from scratch — tailored to your industry, audience, and desired presentation." },
    { title: "Live & expand", text: "After launch, we guide you through further growth: from additional features to smart systems that make your business more efficient." }
  ],
  ctaTitle: "Get a website built for your SME?",
  ctaText: "Request a free no-obligation website review and find out how a professional SME website can strengthen your online presence and generate more enquiries. Based in Amsterdam, we work with SMEs across the Netherlands.",
  ctaButton: "Request free analysis"
};

const SeoSMBEN = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website development for small businesses and SMEs | ZentrixDigital Amsterdam"
    metaDesc="Professional website development for small businesses and SMEs by ZentrixDigital. Modern websites with SEO foundation, WhatsApp, forms and scalable business systems."
    canonical="https://www.zentrixdigital.eu/en/website-for-smes"
    backLabel="Back to services"
    servicesLabel="View all services"
    contactLabel="Request free analysis"
    langToggle={{ label: "Nederlandse versie", href: "/website-voor-mkb" }}
    relatedTitle="Related pages"
    relatedLinks={[
      { label: "Website for businesses", href: "/en/website-for-businesses" },
      { label: "Website for freelancers", href: "/en/website-for-freelancers" },
      { label: "CRM system development", href: "/en/crm-system-development" },
      { label: "Custom applications", href: "/applicaties" }
    ]}
  />
);

export default SeoSMBEN;
