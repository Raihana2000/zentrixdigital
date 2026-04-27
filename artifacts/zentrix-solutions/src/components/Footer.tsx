import React from 'react';
import { Clock, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import logoPath from "@assets/ChatGPT_Image_20_apr_2026,_10_49_46_1776675127194.png";

const Footer = () => {
  const { t, language } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isNL = language === 'nl';

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

  const solutions = isNL ? solutionsNL : solutionsEN;

  const legalNL = [
    { href: '/privacy', label: 'Privacybeleid' },
    { href: '/cookies', label: 'Cookiebeleid' },
    { href: '/terms', label: 'Algemene voorwaarden' },
  ];

  const legalEN = [
    { href: '/en/privacy', label: 'Privacy Policy' },
    { href: '/en/cookies', label: 'Cookie Policy' },
    { href: '/en/terms', label: 'Terms and Conditions' },
  ];

  const legal = isNL ? legalNL : legalEN;

  return (
    <footer className="relative bg-[#060606] mt-24 overflow-hidden">
      <div className="glow-line" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-900/8 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 mb-16">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center w-fit" data-testid="footer-logo">
              <img src={logoPath} alt="ZentrixDigital" className="h-9 w-auto object-contain opacity-90" />
            </Link>
            <p className="text-white text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 uppercase tracking-widest transition-colors duration-200 group">
                {t.home.primaryCta}
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </Link>

            <a
              href="https://www.linkedin.com/in/karim-hizi-95663b405/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-white transition-all duration-300 group w-fit"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                <Link key={href} href={href} className="text-white hover:text-blue-300 transition-colors duration-200 text-sm w-fit" data-testid={testid}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Oplossingen / Solutions column */}
          <div className="col-span-2 sm:col-span-1 md:col-span-3 flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">{t.footer.solutionsLabel}</h4>
            <nav className="flex flex-col gap-3">
              {solutions.map(({ href, label }) => (
                <Link key={href} href={href} className="text-white hover:text-blue-300 transition-colors duration-200 text-sm w-fit">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal column */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              {isNL ? 'Juridisch' : 'Legal'}
            </h4>
            <nav className="flex flex-col gap-3.5">
              {legal.map(({ href, label }) => (
                <Link key={href} href={href} className="text-white hover:text-blue-300 transition-colors duration-200 text-sm w-fit">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">{t.nav.contact}</h4>
            <address className="flex flex-col gap-3 not-italic">
              <p className="text-white text-sm">{t.contact.company}</p>
              <p className="text-white text-sm">{t.contact.location}</p>
              <a href="tel:+31683284995" className="group inline-flex items-center gap-2 text-white hover:text-blue-300 text-sm transition-colors duration-200 w-fit">
                <Phone className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300 shrink-0 transition-colors duration-200" />
                {t.contact.phone}
              </a>
              <a href="mailto:info@zentrixdigital.eu" className="group inline-flex items-center gap-2 text-white hover:text-blue-300 text-sm transition-colors duration-200 w-fit">
                <Mail className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300 shrink-0 transition-colors duration-200" />
                {t.contact.email}
              </a>
            </address>

            <div className="pt-4 border-t border-blue-500/[0.18]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <p className="text-xs text-white uppercase tracking-widest font-semibold">
                  {t.contact.hours.title}
                </p>
              </div>
              <ul className="flex flex-col gap-1.5">
                {t.contact.hours.lines.map((line, i) => (
                  <li key={i} className="text-xs text-white leading-snug">{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Populaire diensten ── */}
        <div className="mb-10 pb-10 border-b border-blue-500/[0.10]">
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            {isNL ? 'Populaire diensten' : 'Popular services'}
          </h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5">
            {(isNL ? [
              { href: '/website-laten-maken-amsterdam', label: 'Website laten maken Amsterdam' },
              { href: '/webdesign-bedrijf', label: 'Webdesign bedrijf' },
              { href: '/website-kosten', label: 'Kosten website laten maken' },
              { href: '/website-voor-bedrijven', label: 'Website voor bedrijven' },
              { href: '/website-laten-maken-zzp', label: 'Website voor ZZP' },
              { href: '/website-laten-maken-bedrijven', label: 'Website voor MKB' },
            ] : [
              { href: '/website-laten-maken-amsterdam', label: 'Website Amsterdam' },
              { href: '/webdesign-bedrijf', label: 'Web design agency' },
              { href: '/website-kosten', label: 'Website pricing' },
              { href: '/website-voor-bedrijven', label: 'Website for businesses' },
              { href: '/en/website-for-freelancers', label: 'Website for freelancers' },
              { href: '/en/website-for-businesses', label: 'Website for companies' },
            ]).map(({ href, label }) => (
              <Link key={href} href={href} className="text-white/50 hover:text-blue-300 transition-colors duration-200 text-xs w-fit">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 border-t border-blue-500/[0.12] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {currentYear} ZentrixDigital. {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center sm:justify-end">
            <button
              onClick={() => window.dispatchEvent(new Event('zentrix-open-cookie-settings'))}
              data-testid="footer-cookie-settings"
              className="text-xs text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {isNL ? 'Cookie-instellingen' : 'Cookie settings'}
            </button>
            <span className="text-white/15 text-xs">·</span>
            <span className="text-xs text-white/30">www.zentrixdigital.eu</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
