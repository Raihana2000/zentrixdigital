import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Business Automation Solutions",
  intro: "Manual processes waste your team's valuable time and introduce unnecessary errors. ZentrixDigital automates business processes so your organisation works faster, makes fewer mistakes and scales without friction.",
  benefitsTitle: "Benefits of business process automation",
  benefits: [
    "Less manual work — your team focuses on what truly matters",
    "Faster throughput times through automatic task processing",
    "Fewer errors through standardised and automated workflows",
    "Scalability — handle more volume without additional staff",
    "Real-time visibility into process and task statuses",
    "Seamless connection of existing systems and tools"
  ],
  includedTitle: "What can be automated?",
  included: [
    "Quote and order processing — from request to confirmation",
    "Client and supplier communication via email and messaging",
    "Invoice processing, reminders and payment management",
    "Reports and dashboards with automatic data aggregation",
    "Inventory management and procurement processes",
    "Onboarding workflows for new employees or clients"
  ],
  whoForTitle: "Which organisations benefit from automation?",
  whoFor: [
    { title: "SMEs with Repetitive Processes", text: "Businesses that repeat the same steps constantly and want to organise this more efficiently without hiring more staff." },
    { title: "Scaling Organisations", text: "Companies growing rapidly that don't want to linearly increase headcount for administrative and operational tasks." },
    { title: "E-commerce & Web Shops", text: "Online retailers that want to automate orders, inventory, shipping and customer service workflows." },
    { title: "Service Businesses", text: "Agencies and service companies that want to streamline their project and client workflow for higher capacity." }
  ],
  processTitle: "How we approach automation",
  process: [
    { title: "Process analysis", text: "We map your current workflows, identify bottlenecks and design the target automation architecture." },
    { title: "Build & integrate", text: "We automate your processes and connect all relevant systems — from CRM to accounting software." },
    { title: "Test & scale", text: "We test everything thoroughly, deliver the solution and scale the automation as your business grows." }
  ],
  ctaTitle: "Ready to save time and grow faster?",
  ctaText: "Request a free analysis and discover which processes in your business can be automated. Concrete and to the point, no strings attached.",
  ctaButton: "Discover automation"
};

const SeoAutomationEN = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Business Automation Solutions | ZentrixDigital"
    metaDesc="Business automation software for more efficiency and fewer errors. ZentrixDigital builds workflow and process automation for SMEs. Request a free analysis."
    canonical="https://www.zentrixdigital.eu/en/business-automation"
    backLabel="Back to services"
    servicesLabel="View all services"
    contactLabel="Discover automation"
    langToggle={{ label: "Nederlandse versie", href: "/bedrijfsprocessen-automatiseren" }}
    relatedTitle="Related pages"
    relatedLinks={[
      { label: "CRM System Development", href: "/en/crm-system-development" },
      { label: "Booking System Development", href: "/en/booking-system-development" },
      { label: "Website for Businesses", href: "/en/website-for-businesses" },
      { label: "NL: Bedrijfsprocessen automatiseren", href: "/bedrijfsprocessen-automatiseren" }
    ]}
  />
);

export default SeoAutomationEN;
