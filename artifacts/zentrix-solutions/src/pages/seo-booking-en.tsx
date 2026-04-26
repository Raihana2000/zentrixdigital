import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Booking System Development",
  intro: "Missed appointments and manual planning chaos cost you time and revenue. ZentrixDigital builds custom booking systems that automate appointments, eliminate errors and keep your schedule running 24/7.",
  benefitsTitle: "Benefits of a custom booking system",
  benefits: [
    "Fully automated appointment management — clients book online directly",
    "Fewer planning errors through complete automation",
    "Save hours every week — no more manual calls or emails for bookings",
    "Automatic confirmations and reminders for clients and staff",
    "Real-time schedule overview for your entire team",
    "Scalable for multiple locations, employees or service types"
  ],
  includedTitle: "What's included in your booking system?",
  included: [
    "Custom online booking page tailored to your services",
    "Integration with your existing calendar (Google Calendar, Outlook)",
    "Automatic confirmation and reminder emails or SMS messages",
    "Payment integration for deposits or upfront payments",
    "Dashboard with appointments, availability and statistics",
    "User management for multiple staff members or locations"
  ],
  whoForTitle: "Which industries benefit most from a booking system?",
  whoFor: [
    { title: "Healthcare & Therapy", text: "GPs, physiotherapists and coaches who want to manage appointments professionally without phone-based scheduling." },
    { title: "Beauty & Wellness", text: "Hair salons, nail studios and wellness centres that want their schedule filled online 24/7." },
    { title: "Training & Education", text: "Gyms, driving schools and course providers that want to manage class slots and places automatically." },
    { title: "Rental & Reservations", text: "Accommodation providers, vehicle rental and meeting room operators that want to streamline reservations online." }
  ],
  processTitle: "How the development works",
  process: [
    { title: "Planning analysis", text: "We map your current scheduling process, services and client flows to define the requirements." },
    { title: "Build & integrate", text: "We build your booking system and connect it to your calendar, payment solution and communication tools." },
    { title: "Go live & scale", text: "The system launches and starts processing bookings immediately. Expansions are always possible." }
  ],
  ctaTitle: "Ready to automate your bookings?",
  ctaText: "Request a free analysis and discover how a custom booking system simplifies your planning and generates more appointments.",
  ctaButton: "Start automating"
};

const SeoBookingEN = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Booking System Development | ZentrixDigital"
    metaDesc="Custom booking system development — automate appointments, reduce errors and save time. ZentrixDigital builds online appointment booking software."
    canonical="https://www.zentrixdigital.eu/en/booking-system-development"
    backLabel="Back to services"
    servicesLabel="View all services"
    contactLabel="Start automating"
    langToggle={{ label: "Nederlandse versie", href: "/boekingssysteem-laten-maken" }}
    relatedTitle="Related pages"
    relatedLinks={[
      { label: "CRM System Development", href: "/en/crm-system-development" },
      { label: "Business Automation Solutions", href: "/en/business-automation" },
      { label: "Custom Applications", href: "/applicaties" },
      { label: "NL: Boekingssysteem laten maken", href: "/boekingssysteem-laten-maken" }
    ]}
  />
);

export default SeoBookingEN;
