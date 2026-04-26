import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import { Menu, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoPath from "@assets/ChatGPT_Image_20_apr_2026,_10_49_46_1776675127194.png";

const ROUTE_MAP_NL_TO_EN: Record<string, string> = {
  '/website-laten-maken-zzp': '/en/website-for-freelancers',
  '/website-laten-maken-bedrijven': '/en/website-for-businesses',
  '/crm-systeem-laten-maken': '/en/crm-system-development',
  '/boekingssysteem-laten-maken': '/en/booking-system-development',
  '/bedrijfsprocessen-automatiseren': '/en/business-automation',
};

const ROUTE_MAP_EN_TO_NL: Record<string, string> = {
  '/en/website-for-freelancers': '/website-laten-maken-zzp',
  '/en/website-for-businesses': '/website-laten-maken-bedrijven',
  '/en/crm-system-development': '/crm-systeem-laten-maken',
  '/en/booking-system-development': '/boekingssysteem-laten-maken',
  '/en/business-automation': '/bedrijfsprocessen-automatiseren',
};

const Navbar = () => {
  const [location, navigate] = useLocation();
  const { t, language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    const nextLang = language === 'nl' ? 'en' : 'nl';
    setLanguage(nextLang);
    if (nextLang === 'en') {
      const mapped = ROUTE_MAP_NL_TO_EN[location];
      navigate(mapped ?? '/');
    } else {
      const mapped = ROUTE_MAP_EN_TO_NL[location];
      navigate(mapped ?? '/');
    }
  };

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

  const solutions = language === 'nl' ? solutionsNL : solutionsEN;

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/contact', label: t.nav.contact },
  ];

  const handleDropdownEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
  };

  const isSolutionsActive = solutions.some(s => s.href === location);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
          : 'bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-white/[0.04]'
      }`}
    >
      <div className="site-header-inner max-w-7xl mx-auto px-6 md:px-10 gap-6">

        {/* ── Brand ── */}
        <Link href="/" className="site-logo-link group" data-testid="nav-logo">
          <img
            src={logoPath}
            alt="ZentrixDigital"
            className="site-logo-img transition-all duration-500 group-hover:drop-shadow-[0_0_28px_rgba(59,130,246,0.9)] group-hover:opacity-95"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 flex-1 justify-center">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-white relative group/link whitespace-nowrap ${
                location === link.href ? 'text-white' : 'text-gray-500 hover:text-gray-200'
              }`}
              data-testid={`nav-link-${link.label}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                  location === link.href
                    ? 'w-full bg-gradient-to-r from-blue-500 to-blue-400'
                    : 'w-0 group-hover/link:w-full bg-blue-500/60'
                }`}
              />
            </Link>
          ))}

          {/* ── Oplossingen/Solutions dropdown ── */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-all duration-200 hover:text-white whitespace-nowrap ${
                isSolutionsActive ? 'text-white' : 'text-gray-500 hover:text-gray-200'
              }`}
              data-testid="nav-solutions-trigger"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              {t.nav.solutions}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
              />
              <span
                className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                  isSolutionsActive
                    ? 'w-full bg-gradient-to-r from-blue-500 to-blue-400'
                    : solutionsOpen ? 'w-full bg-blue-500/60' : 'w-0'
                }`}
              />
            </button>

            {/* Dropdown panel */}
            {solutionsOpen && (
              <div
                className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-[#0a0f1e]/98 backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_0_1px_rgba(59,130,246,0.08)] overflow-hidden"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="p-2">
                  {solutions.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                        location === href
                          ? 'bg-blue-600/20 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                      }`}
                      data-testid={`nav-solutions-link-${href}`}
                    >
                      <span>{label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-blue-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-white relative group/link whitespace-nowrap ${
              location === '/contact' ? 'text-white' : 'text-gray-500 hover:text-gray-200'
            }`}
            data-testid="nav-link-Contact"
          >
            {t.nav.contact}
            <span
              className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                location === '/contact'
                  ? 'w-full bg-gradient-to-r from-blue-500 to-blue-400'
                  : 'w-0 group-hover/link:w-full bg-blue-500/60'
              }`}
            />
          </Link>
        </div>

        {/* ── Right: Lang + CTA ── */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/[0.08] text-gray-500 hover:text-gray-300 hover:border-blue-500/30 transition-all duration-200"
            data-testid="btn-toggle-lang"
          >
            <span className={language === 'nl' ? 'text-blue-400' : 'text-gray-600'}>NL</span>
            <span className="text-white/15 mx-0.5">/</span>
            <span className={language === 'en' ? 'text-blue-400' : 'text-gray-600'}>EN</span>
          </button>

          <Link href="/contact">
            <button
              data-testid="btn-nav-cta"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-blue-600/90 hover:bg-blue-500 text-white transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-[1.03]"
            >
              {t.home.ctaButton}
            </button>
          </Link>
        </div>

        {/* ── Mobile: Lang + Hamburger ── */}
        <div className="md:hidden flex items-center gap-2.5 shrink-0">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/[0.08] text-gray-400 hover:text-white hover:border-blue-500/30 transition-all duration-200"
            data-testid="btn-toggle-lang-mobile"
          >
            {language === 'nl' ? (
              <><span className="text-blue-400">NL</span><span className="text-white/15">/</span><span className="text-gray-600">EN</span></>
            ) : (
              <><span className="text-gray-600">NL</span><span className="text-white/15">/</span><span className="text-blue-400">EN</span></>
            )}
          </button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5" data-testid="btn-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#080808]/98 backdrop-blur-2xl border-l border-white/[0.06] pt-28 px-8 overflow-y-auto">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-semibold tracking-tight transition-all duration-200 ${
                      location === link.href ? 'text-white' : 'text-gray-500 hover:text-white'
                    }`}
                    data-testid={`mobile-nav-link-${link.label}`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile solutions section */}
                <div className="border-t border-white/[0.06] pt-5">
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="flex items-center justify-between w-full text-2xl font-semibold tracking-tight text-gray-500 hover:text-white transition-all duration-200"
                    data-testid="mobile-nav-solutions-toggle"
                  >
                    {t.nav.solutions}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="mt-4 flex flex-col gap-3 pl-1">
                      {solutions.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => { setIsOpen(false); setMobileSolutionsOpen(false); }}
                          className={`text-base font-medium transition-all duration-200 flex items-center gap-2 ${
                            location === href ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                          }`}
                          data-testid={`mobile-solutions-link-${href}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-blue-500/60 shrink-0" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <button
                      className="w-full py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-200 shadow-[0_0_24px_rgba(37,99,235,0.35)]"
                      data-testid="btn-mobile-nav-cta"
                    >
                      {t.home.ctaButton}
                    </button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
