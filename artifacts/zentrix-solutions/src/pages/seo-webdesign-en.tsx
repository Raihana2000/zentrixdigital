import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Professional web design company for businesses that want to grow",
  intro: "reldio is the web design company that thinks beyond just an attractive website. We combine strategic design, technical quality and conversion optimisation — so your website not only makes an impression, but actually brings in customers and revenue.",
  benefitsTitle: "Why businesses choose our web design",
  benefits: [
    "Design focused on conversion — not just aesthetics",
    "Every design choice is purposeful: colour, copy, structure and navigation",
    "SEO-optimised from foundation to detail, for higher Google rankings",
    "Fast load times on desktop and mobile — critical for ranking and conversion",
    "Fully mobile-responsive — your website works perfectly on every device",
    "Professional appearance that instantly builds trust with new visitors"
  ],
  includedTitle: "What makes our web design different?",
  included: [
    "Custom design based on your brand, target audience and competitor analysis",
    "Clear calls-to-action on every page — guiding visitors to take action",
    "Optimised page structure for Google and usability",
    "Integrated contact options: form, WhatsApp and phone button",
    "Built A/B-test ready for future conversion optimisation",
    "Expandable with booking systems, CRM integrations and client portals"
  ],
  extrasTitle: "Why good web design grows your business",
  extras: [
    "First impressions: visitors judge your website within 0.05 seconds",
    "Trust: a professional design directly increases conversion rates",
    "Mobile usage: 70%+ of your visitors use a smartphone",
    "SEO: technically correct structure significantly improves your Google rankings",
    "Speed: every second of delay costs you conversions and Google ranking",
    "Clarity: visitors who understand what you offer are more likely to become customers"
  ],
  whoForTitle: "Which businesses do we work with?",
  whoFor: [
    { title: "Growing SME businesses", text: "Companies ready to move from a basic website to a professional platform that actively contributes to growth and new client acquisition." },
    { title: "Service-based businesses", text: "Consultants, agencies, coaches and advisers who want to position their expertise professionally and attract higher-value clients." },
    { title: "E-commerce and online shops", text: "Entrepreneurs who want to build a conversion-focused online sales platform that turns visitors into paying customers." },
    { title: "Businesses rebranding", text: "Established companies wanting to modernise their existing website and reconnect with their target audience and brand identity." }
  ],
  processTitle: "Our web design process",
  process: [
    { title: "Strategy and analysis", text: "We start with a free consultation about your goals, your audience and your competitors. Then we lay the foundation for a conversion-focused website strategy." },
    { title: "Design and development", text: "Your website is designed and built with attention to every detail — from typography and colour to navigation, load time and mobile user experience." },
    { title: "Launch and growth", text: "After launch, we help you with further optimisation, better Google rankings and expansions that support your business growth." }
  ],
  ctaTitle: "Want a website that actually works for your business?",
  ctaText: "Get in touch for a free strategy consultation. We analyse your current situation, your audience and your competitors — and present a concrete plan for your new website. No obligation.",
  ctaButton: "Request free strategy call"
};

const SeoWebdesignEN = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Web design company Netherlands | reldio"
    metaDesc="Professional web design company for businesses that want to grow. Modern websites that bring in customers. Conversion-focused and SEO-optimised. Based in Amsterdam."
    canonical="https://www.reldio.eu/en/web-design-company"
    backLabel="Back to services"
    servicesLabel="View all services"
    contactLabel="Request free strategy call"
    langToggle={{ label: "Nederlandse versie", href: "/webdesign-bedrijf" }}
    relatedTitle="Related pages"
    relatedLinks={[
      { label: "Website development Amsterdam", href: "/en/website-development-amsterdam" },
      { label: "Website development costs", href: "/en/website-development-costs" },
      { label: "Website for businesses", href: "/en/website-for-businesses" },
      { label: "Website for SMEs", href: "/en/website-for-smes" }
    ]}
  />
);

export default SeoWebdesignEN;
