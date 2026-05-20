import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Professional website development in Amsterdam",
  intro: "Looking for a professional website built in Amsterdam? reldio builds modern, conversion-focused websites for Amsterdam businesses that want to attract more customers online. We combine strategic design, strong SEO foundations and smart contact systems — tailored to your Amsterdam audience.",
  benefitsTitle: "Why Amsterdam businesses choose reldio",
  benefits: [
    "Local knowledge of the Amsterdam market and your target audience",
    "Conversion-focused design — built to turn visitors into customers",
    "Strong SEO foundation for better visibility in Google Amsterdam searches",
    "Fast load times on both desktop and mobile",
    "Fast delivery possible when all input is complete",
    "Transparent pricing — no hidden costs"
  ],
  includedTitle: "What your Amsterdam business website includes",
  included: [
    "Custom design matching your brand and Amsterdam target audience",
    "SEO-optimised page structure for better local findability",
    "Contact form, WhatsApp integration and direct call button",
    "Google Maps integration for local visibility in Amsterdam",
    "Full mobile responsiveness — works perfectly on every device",
    "Technical SEO: sitemaps, robots.txt, meta tags and load time optimisation"
  ],
  extrasTitle: "Why many Amsterdam websites fail to bring in customers",
  extras: [
    "No clear call-to-action — visitors don't know what to do next",
    "Slow load times — Google penalises this and visitors leave",
    "Not optimised for mobile — half your visitors leave immediately",
    "Unclear message — your unique value isn't visible to visitors",
    "No local SEO — you don't appear in Google Maps and local searches",
    "Poor structure — Google doesn't understand your page and ranks it lower"
  ],
  whoForTitle: "Which Amsterdam businesses do we build for?",
  whoFor: [
    { title: "SME businesses in Amsterdam", text: "From start-ups to established companies — we build websites that convince your Amsterdam customers and generate more enquiries." },
    { title: "Independent professionals (freelancers)", text: "As a freelancer in Amsterdam, you need a website that showcases your expertise and builds trust with potential clients." },
    { title: "Local service providers", text: "Hairdressers, installers, coaches, therapists and other service providers who want to be found locally via Google and receive more bookings." },
    { title: "Hospitality businesses", text: "Restaurants, cafés and food concepts that want online reservations, more visitors and a strong Amsterdam presence." }
  ],
  processTitle: "How we work",
  process: [
    { title: "Free strategy consultation", text: "We discuss your goals, your Amsterdam target audience and what your website needs to achieve. No obligation — just honest, concrete advice." },
    { title: "Design and build — fast and custom", text: "We build your website fully custom — conversion-focused, SEO-optimised and aimed at the Amsterdam market. Ready within 7 working days when texts, logo and domain details are provided on time." },
    { title: "Live and growing", text: "Your website goes live and starts working for you immediately. We then support your further growth, expansions and better Google rankings." }
  ],
  ctaTitle: "Ready for a website that brings in customers in Amsterdam?",
  ctaText: "Request a free strategy consultation today. We'll tell you honestly what your website can achieve, what it costs and how quickly you can be online. No obligation.",
  ctaButton: "Request free strategy call"
};

const SeoAmsterdamEN = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website development Amsterdam | reldio"
    metaDesc="Professional website development in Amsterdam by reldio. Fast delivery possible with complete input. Conversion-focused, SEO-optimised. Request free consultation."
    canonical="https://www.reldio.eu/en/website-development-amsterdam"
    backLabel="Back to services"
    servicesLabel="View all services"
    contactLabel="Request free strategy call"
    langToggle={{ label: "Nederlandse versie", href: "/website-laten-maken-amsterdam" }}
    relatedTitle="Related pages"
    relatedLinks={[
      { label: "Web design company", href: "/en/web-design-company" },
      { label: "Website development costs", href: "/en/website-development-costs" },
      { label: "Website for businesses", href: "/en/website-for-businesses" },
      { label: "Website for SMEs", href: "/en/website-for-smes" }
    ]}
  />
);

export default SeoAmsterdamEN;
