import React from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import logoPath from "@assets/ChatGPT_Image_20_apr_2026,_10_49_46_1776675127194.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060606] mt-24 overflow-hidden">
      {/* Top glow line */}
      <div className="glow-line" />

      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-900/8 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-6">
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
              <span className="flex items-center justify-center w-6 h-6 rounded-[6px] bg-transparent group-hover:bg-[#0A66C2] transition-all duration-300 shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#0A66C2] group-hover:fill-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <span className="group-hover:underline underline-offset-4 decoration-white/40">
                {t.contact.linkedinCta}
              </span>
            </a>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 flex flex-col gap-5">
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

          {/* Contact column */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">{t.nav.contact}</h4>
            <address className="flex flex-col gap-3 not-italic">
              <p className="text-white text-sm">{t.contact.company}</p>
              <p className="text-white text-sm">{t.contact.location}</p>
              <a
                href="tel:+31683284995"
                className="text-white hover:text-blue-300 text-sm transition-colors duration-200 w-fit"
              >
                {t.contact.phone}
              </a>
              <a
                href="mailto:info@zentrixdigital.eu"
                className="text-white hover:text-blue-300 text-sm transition-colors duration-200 w-fit"
              >
                {t.contact.email}
              </a>
            </address>

            {/* Hours */}
            <div className="pt-4 border-t border-blue-500/[0.18]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <p className="text-xs text-[#D9E1F2] uppercase tracking-widest font-semibold">
                  {t.contact.hours.title}
                </p>
              </div>
              <ul className="flex flex-col gap-1.5">
                {t.contact.hours.lines.map((line, i) => (
                  <li key={i} className="text-xs text-white leading-snug">
                    {line}
                  </li>
                ))}
              </ul>
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
