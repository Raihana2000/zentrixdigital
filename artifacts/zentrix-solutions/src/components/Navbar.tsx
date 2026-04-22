import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoPath from "@assets/ChatGPT_Image_20_apr_2026,_10_49_46_1776675127194.png";

const Navbar = () => {
  const [location] = useLocation();
  const { t, language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/contact', label: t.nav.contact },
  ];

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

        {/* ── Desktop nav — centered ── */}
        <div className="hidden md:flex items-center gap-5 lg:gap-10 flex-1 justify-center">
          {navLinks.map((link) => (
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
            <SheetContent side="right" className="bg-[#080808]/98 backdrop-blur-2xl border-l border-white/[0.06] pt-28 px-8">
              <div className="flex flex-col gap-7">
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
                <div className="pt-6 border-t border-white/[0.06]">
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
