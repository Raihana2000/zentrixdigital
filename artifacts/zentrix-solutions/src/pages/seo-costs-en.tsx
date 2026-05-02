import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "How much does website development cost in 2026?",
  intro: "The cost of website development varies significantly — from a few hundred euros for a simple site to tens of thousands for a complex platform. On this page we give you an honest and transparent overview of prices, factors and what you can expect from ZentrixDigital.",
  benefitsTitle: "What determines the cost of a website?",
  benefits: [
    "Scope: a one-pager costs less than a website with 10+ pages and subpages",
    "Custom vs template: custom design costs more, but delivers higher conversion",
    "Features: forms, booking systems and integrations increase the price",
    "SEO optimisation: an SEO-ready website takes more effort but delivers more",
    "Content writing: professional copy costs more, but strongly improves conversion",
    "Maintenance and hosting: ongoing costs in addition to the one-off build price"
  ],
  includedTitle: "Our pricing overview (2026)",
  included: [
    "Simple website (1–5 pages): from €700 — ideal for freelancers and start-ups",
    "Professional business website (5–10 pages): from €1,200 — including SEO and design",
    "Website with booking system or CRM integration: from €2,000 — for growing businesses",
    "Extensive business platform (10+ pages + systems): from €3,500",
    "E-commerce / online shop: from €2,500 — including product pages and payment integration",
    "Custom applications and client portals: on request — depending on specifications"
  ],
  extrasTitle: "Cheap website vs professional investment",
  extras: [
    "A €200 Wix website rarely attracts customers — it lacks strategy, SEO and conversion focus",
    "An overpriced agency charges €15,000 for something ZentrixDigital builds for €1,500",
    "The price isn't what counts — the ROI counts: what does your website deliver per month?",
    "A good website pays for itself within 1–3 months through extra customers",
    "We work transparently: you know in advance exactly what it costs and what you get",
    "No hidden costs: all agreements are set out clearly in your quote"
  ],
  whoForTitle: "Which budget is right for you?",
  whoFor: [
    { title: "Starter or freelancer (€700–€1,200)", text: "A professional website with a clear message, contact options and basic Google optimisation. Quick to go live, affordable and effective." },
    { title: "SME business (€1,200–€2,500)", text: "A more comprehensive website with multiple service and landing pages, SEO optimisation, integrations and a stronger conversion focus." },
    { title: "Growing business (€2,500–€5,000)", text: "A complete online presence with systems, integrations, client portals or booking functionality — focused on scalability and revenue growth." },
    { title: "Custom platform (€5,000+)", text: "Complex platforms, e-commerce solutions, CRM systems and custom applications that fully digitalise and automate your business processes." }
  ],
  processTitle: "What you get with ZentrixDigital",
  process: [
    { title: "Transparent quote", text: "After a free consultation you receive a clear quote with exact price, scope and timeline — no surprises afterwards." },
    { title: "Custom within your budget", text: "We help you get the most out of your budget. Sometimes a smart one-pager is more effective than an expensive platform." },
    { title: "Investment with returns", text: "Our websites are built to generate customers. We don't deliver pretty pictures — we deliver conversion-focused websites that grow your business." }
  ],
  ctaTitle: "Want to know what a website costs for your situation?",
  ctaText: "Request a free quote. We discuss your wishes, situation and budget — and give you honest advice and a concrete price. No obligation, no hidden costs.",
  ctaButton: "Request free quote"
};

const SeoCostsEN = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website development costs 2026 | ZentrixDigital"
    metaDesc="How much does website development cost in 2026? Honest overview of prices and factors. From €700 to custom platforms. Request a free quote."
    canonical="https://www.zentrixdigital.eu/en/website-development-costs"
    backLabel="Back to services"
    servicesLabel="View all services"
    contactLabel="Request free quote"
    langToggle={{ label: "Nederlandse versie", href: "/kosten-website-laten-maken" }}
    relatedTitle="Related pages"
    relatedLinks={[
      { label: "Website development Amsterdam", href: "/en/website-development-amsterdam" },
      { label: "Web design company", href: "/en/web-design-company" },
      { label: "Website for businesses", href: "/en/website-for-businesses" },
      { label: "Website for freelancers", href: "/en/website-for-freelancers" }
    ]}
  />
);

export default SeoCostsEN;
