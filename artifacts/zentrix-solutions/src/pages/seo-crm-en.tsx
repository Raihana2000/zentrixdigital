import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "CRM System Development for Businesses",
  intro: "Without proper client management, leads and opportunities fall through the cracks. ZentrixDigital builds custom CRM systems that structure your sales process, strengthen client relationships and measurably increase your revenue.",
  benefitsTitle: "Benefits of a custom CRM system",
  benefits: [
    "Complete overview of all your clients, leads and interaction history",
    "Higher revenue through better follow-up of quotes and opportunities",
    "Work more efficiently — fewer manual tasks, more focus on clients",
    "Team transparency: everyone knows the status of every client relationship",
    "Automated reminders and follow-ups for open deals and proposals",
    "Scalable system that grows alongside your organisation"
  ],
  includedTitle: "What's included in your custom CRM?",
  included: [
    "Client database tailored to your industry and workflow",
    "Lead and opportunity management with status overview and forecasting",
    "Interaction history and notes per client or project",
    "Quote module with automated follow-up reminders",
    "Dashboard with custom KPIs and reporting",
    "User roles and access control for your team"
  ],
  whoForTitle: "Which businesses benefit from a custom CRM?",
  whoFor: [
    { title: "Sales & Advisory Firms", text: "Companies with an active sales process that want to follow up on leads and manage clients professionally." },
    { title: "Service Organisations", text: "Businesses with ongoing client relationships that need central management of projects, contracts and communications." },
    { title: "Growing SMEs", text: "Companies ready to replace spreadsheets with a structured, scalable system that supports their growth." },
    { title: "Multi-person Teams", text: "Organisations where transparency and collaboration around client management are essential to success." }
  ],
  processTitle: "How the development works",
  process: [
    { title: "Analysis & design", text: "We map out your current workflow, define the requirements and design the structure of your CRM." },
    { title: "Build & integrate", text: "We build your custom CRM and connect it to your existing tools such as email, calendar or accounting software." },
    { title: "Training & delivery", text: "We deliver the system, train your team and remain available for updates and further development." }
  ],
  ctaTitle: "More control over your clients and higher revenue?",
  ctaText: "Request a free consultation and discover how a custom CRM system can help your business grow. No obligation, just concrete advice.",
  ctaButton: "Request a consultation"
};

const SeoCRMEN = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="CRM System Development | ZentrixDigital"
    metaDesc="Custom CRM system development for businesses. More structure, higher revenue and efficient client management. ZentrixDigital builds CRM software for SMEs."
    canonical="https://www.zentrixdigital.eu/en/crm-system-development"
    backLabel="Back to services"
    servicesLabel="View all services"
    contactLabel="Request a consultation"
    langToggle={{ label: "Nederlandse versie", href: "/crm-systeem-laten-maken" }}
    relatedTitle="Related pages"
    relatedLinks={[
      { label: "Booking System Development", href: "/en/booking-system-development" },
      { label: "Business Automation Solutions", href: "/en/business-automation" },
      { label: "Website for Businesses", href: "/en/website-for-businesses" },
      { label: "NL: CRM systeem laten maken", href: "/crm-systeem-laten-maken" }
    ]}
  />
);

export default SeoCRMEN;
