import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
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

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverIntent = useRef<ReturnType<typeof setTimeout> | null>(null);

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
  const isSolutionsActive = solutions.some(s => location.replace(/\/$/, '') === s.href);

  const mainLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/concepts', label: t.nav.concepts },
  ];

  /* ── Scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close desktop dropdown on outside click ── */
  useEffect(() => {
    if (!desktopDropdownOpen) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [desktopDropdownOpen]);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ── Language toggle ── */
  const toggleLang = () => {
    const next = language === 'nl' ? 'en' : 'nl';
    setLanguage(next);
    const loc = location.replace(/\/$/, '');
    navigate(next === 'en' ? (ROUTE_MAP_NL_TO_EN[loc] ?? '/') : (ROUTE_MAP_EN_TO_NL[loc] ?? '/'));
  };

  /* ── Desktop dropdown: hover (mouse) + click (touch/keyboard) ── */
  const handleDropdownMouseEnter = () => {
    if (hoverIntent.current) clearTimeout(hoverIntent.current);
    setDesktopDropdownOpen(true);
  };
  const handleDropdownMouseLeave = () => {
    hoverIntent.current = setTimeout(() => setDesktopDropdownOpen(false), 150);
  };
  const handleDropdownToggleClick = () => {
    setDesktopDropdownOpen(v => !v);
  };

  const closeDesktop = useCallback(() => setDesktopDropdownOpen(false), []);
  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
  }, []);

  const navLinkClass = (href: string) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white relative group/link whitespace-nowrap ${
      location === href ? 'text-white' : 'text-white/50 hover:text-white/90'
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[9000] transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0B0B]/96 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
            : 'bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-white/[0.04]'
        }`}
      >
        <div className="site-header-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 gap-4">

          {/* ── Logo ── */}
          <Link href="/" className="site-logo-link group" data-testid="nav-logo" onClick={closeMobile}>
            <img
              src={logoPath}
              alt="ZentrixDigital"
              className="site-logo-img transition-all duration-500 group-hover:drop-shadow-[0_0_28px_rgba(59,130,246,0.9)]"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* ── Desktop / Tablet nav (≥ 768px) ── */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 flex-1 justify-center">

            {mainLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={navLinkClass(href)} data-testid={`nav-link-${label}`}>
                {label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${location === href ? 'w-full bg-gradient-to-r from-blue-500 to-blue-400' : 'w-0 group-hover/link:w-full bg-blue-500/60'}`} />
              </Link>
            ))}

            {/* Oplossingen dropdown — hover on mouse, click on touch */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                onClick={handleDropdownToggleClick}
                data-testid="nav-solutions-trigger"
                aria-expanded={desktopDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap relative ${
                  isSolutionsActive || desktopDropdownOpen ? 'text-white' : 'text-white/50 hover:text-white/90'
                }`}
              >
                {t.nav.solutions}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${isSolutionsActive ? 'w-full bg-gradient-to-r from-blue-500 to-blue-400' : desktopDropdownOpen ? 'w-full bg-blue-500/60' : 'w-0'}`} />
              </button>

              {desktopDropdownOpen && (
                <div
                  className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[260px] rounded-2xl bg-[#0a0f1e] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.75),0_0_0_1px_rgba(59,130,246,0.08)] overflow-hidden"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="p-2">
                    {solutions.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeDesktop}
                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                          location === href ? 'bg-blue-600/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
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
            <Link href="/contact" className={navLinkClass('/contact')} data-testid="nav-link-Contact">
              {t.nav.contact}
              <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${location === '/contact' ? 'w-full bg-gradient-to-r from-blue-500 to-blue-400' : 'w-0 group-hover/link:w-full bg-blue-500/60'}`} />
            </Link>
          </div>

          {/* ── Right: Lang + CTA (desktop) ── */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={toggleLang}
              className="flex items-center gap-0.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/[0.08] transition-all duration-200 hover:border-blue-500/30"
              data-testid="btn-toggle-lang"
            >
              <span className={language === 'nl' ? 'text-blue-400' : 'text-white/30'}>NL</span>
              <span className="text-white/15 mx-0.5">/</span>
              <span className={language === 'en' ? 'text-blue-400' : 'text-white/30'}>EN</span>
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

          {/* ── Mobile right: Lang + Hamburger (< 768px) ── */}
          <div className="md:hidden flex items-center gap-2 shrink-0">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/[0.08] transition-all duration-200"
              data-testid="btn-toggle-lang-mobile"
            >
              <span className={language === 'nl' ? 'text-blue-400' : 'text-white/30'}>NL</span>
              <span className="text-white/15">/</span>
              <span className={language === 'en' ? 'text-blue-400' : 'text-white/30'}>EN</span>
            </button>

            <button
              onClick={() => setMobileOpen(v => !v)}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
              data-testid="btn-mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile menu drawer (< 768px) ── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[8999] flex"
          role="dialog"
          aria-modal="true"
          aria-label="Navigatiemenu"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeMobile}
          />

          {/* panel */}
          <div className="relative ml-auto w-[85vw] max-w-sm h-full bg-[#080808] border-l border-white/[0.06] flex flex-col overflow-y-auto">

            {/* close button */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <img src={logoPath} alt="ZentrixDigital" className="h-12 w-auto object-contain opacity-80" />
              <button
                onClick={closeMobile}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
                aria-label="Menu sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col px-6 pt-4 pb-10 gap-1">

              {/* Main links */}
              {mainLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className={`flex items-center py-3.5 text-xl font-semibold tracking-tight transition-colors duration-200 border-b border-white/[0.05] ${
                    location === href ? 'text-white' : 'text-white/50 hover:text-white'
                  }`}
                  data-testid={`mobile-nav-link-${label}`}
                >
                  {label}
                </Link>
              ))}

              {/* Oplossingen accordion */}
              <div className="border-b border-white/[0.05]">
                <button
                  onClick={() => setMobileSolutionsOpen(v => !v)}
                  className={`flex items-center justify-between w-full py-3.5 text-xl font-semibold tracking-tight transition-colors duration-200 ${
                    isSolutionsActive || mobileSolutionsOpen ? 'text-white' : 'text-white/50 hover:text-white'
                  }`}
                  data-testid="mobile-nav-solutions-toggle"
                  aria-expanded={mobileSolutionsOpen}
                >
                  <span>{t.nav.solutions}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${mobileSolutionsOpen ? 'rotate-180 text-blue-400' : ''}`}
                  />
                </button>

                {mobileSolutionsOpen && (
                  <div className="pb-3 flex flex-col gap-0.5">
                    {solutions.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMobile}
                        className={`flex items-center gap-2.5 py-2.5 pl-2 pr-1 rounded-xl text-[15px] font-medium transition-all duration-150 ${
                          location === href
                            ? 'text-blue-400 bg-blue-600/10'
                            : 'text-white/55 hover:text-white hover:bg-white/[0.04]'
                        }`}
                        data-testid={`mobile-solutions-link-${href}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-blue-500/50 shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeMobile}
                className={`flex items-center py-3.5 text-xl font-semibold tracking-tight transition-colors duration-200 border-b border-white/[0.05] ${
                  location === '/contact' ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
                data-testid="mobile-nav-link-Contact"
              >
                {t.nav.contact}
              </Link>

              {/* CTA */}
              <div className="pt-6">
                <Link href="/contact" onClick={closeMobile}>
                  <button
                    className="w-full py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-200 shadow-[0_0_24px_rgba(37,99,235,0.35)] text-base"
                    data-testid="btn-mobile-nav-cta"
                  >
                    {t.home.ctaButton}
                  </button>
                </Link>
              </div>

            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
