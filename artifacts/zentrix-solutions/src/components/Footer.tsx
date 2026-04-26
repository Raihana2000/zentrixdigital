import React from 'react';
import { Clock, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import logoPath from "@assets/ChatGPT_Image_20_apr_2026,_10_49_46_1776675127194.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const solutionsNL = [
    { href: '/website-laten-maken-zzp', label: 'Website voor ZZP' },
    { href: '/website-laten-maken-bedrijven', label: 'Website voor bedrijven' },
    { href: '/crm-systeem-laten-maken', label: 'CRM systeem laten maken' },
    { href: '/boekingssysteem-laten-maken', label: 'Boekingssysteem laten maken' },
    { href: '/bedrijfsprocessen-automatiseren', label: 'Procesautomatisering' },
  ];

  const solutionsEN = [
    { href: '/en/website-for-freelancers', label: 'Website for Freelancers' },
    { href: '/en/website-for-businesses', label: 'Website for Businesses' },
    { href: '/en/crm-system-development', label: 'CRM System Development' },
    { href: '/en/booking-system-development', label: 'Booking System Development' },
    { href: '/en/business-automation', label: 'Business Automation' },
  ];

  return (
    <footer className="relative bg-[#060606] mt-24 overflow-hidden">
      {/* Top glow line */}
      <div className="glow-line" />

      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-900/8 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">

          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center w-fit" data-testid="footer-logo">
              <img src={logoPath} alt="ZentrixDigital" className="h-9 w-auto object-contain opacity-90" />
            </Link>
            <p className="text-white text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            {/* CTA hint */}
            <Link href="/contact">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 uppercase tracking-widest transition-colors duration-200 group">
                {t.home.primaryCta}
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </Link>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/karim-hizi-95663b405/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-white transition-all duration-300 group w-fit"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 shrink-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                <path fill="white" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
              </svg>
              <span className="group-hover:underline underline-offset-4 decoration-white/40">
                {t.contact.linkedinCta}
              </span>
            </a>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">{t.footer.navLabel}</h4>
            <nav className="flex flex-col gap-3.5">
              {[
                { href: '/about', label: t.nav.about, testid: 'footer-link-about' },
                { href: '/services', label: t.nav.services, testid: 'footer-link-services' },
                { href: '/contact', label: t.nav.contact, testid: 'footer-link-contact' },
              ].map(({ href, label, testid }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white hover:text-blue-300 transition-colors duration-200 text-sm w-fit"
                  data-testid={testid}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Oplossingen / Solutions column */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Oplossingen</h4>
            <nav className="flex flex-col gap-3">
              {solutionsNL.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white hover:text-blue-300 transition-colors duration-200 text-sm w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Solutions EN column */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Solutions</h4>
            <nav className="flex flex-col gap-3">
              {solutionsEN.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white hover:text-blue-300 transition-colors duration-200 text-sm w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Contact info — compact */}
            <div className="mt-4 pt-4 border-t border-blue-500/[0.15] flex flex-col gap-2.5">
              <a
                href="tel:+31683284995"
                className="group inline-flex items-center gap-2 text-white hover:text-blue-300 text-xs transition-colors duration-200 w-fit"
              >
                <Phone className="w-3 h-3 text-blue-400 group-hover:text-blue-300 shrink-0 transition-colors duration-200" />
                {t.contact.phone}
              </a>
              <a
                href="mailto:info@zentrixdigital.eu"
                className="group inline-flex items-center gap-2 text-white hover:text-blue-300 text-xs transition-colors duration-200 w-fit"
              >
                <Mail className="w-3 h-3 text-blue-400 group-hover:text-blue-300 shrink-0 transition-colors duration-200" />
                {t.contact.email}
              </a>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-3 h-3 text-blue-400 shrink-0" />
                <span className="text-xs text-white">{t.contact.hours.lines[0]}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 border-t border-blue-500/[0.12] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white">
            &copy; {currentYear} ZentrixDigital. {t.footer.rights}
          </p>
          <p className="text-xs text-white">
            www.zentrixdigital.eu
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
