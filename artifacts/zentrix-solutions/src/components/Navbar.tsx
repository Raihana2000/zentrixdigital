import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from '@/context/TranslationContext';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoPath from "@assets/ChatGPT_Image_20_apr_2026,_10_49_46_1776675127194.png";

const Navbar = () => {
  const [location] = useLocation();
  const { t, language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0B] border-b border-white/10 shadow-[0_1px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">

        {/* ── Brand ── */}
        <Link href="/" className="flex items-center shrink-0 group" data-testid="nav-logo">
          <img
            src={logoPath}
            alt="ZentrixDigital"
            className="h-[55px] md:h-[70px] w-auto object-contain shrink-0 transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.75)]"
            style={{ maxHeight: 'none', maxWidth: 'none', display: 'block' }}
          />
        </Link>

        {/* ── Desktop nav — centered ── */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-white relative group/link ${
                location === link.href ? 'text-white' : 'text-gray-400'
              }`}
              data-testid={`nav-link-${link.label}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-blue-500 transition-all duration-200 ${
                  location === link.href ? 'w-full' : 'w-0 group-hover/link:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* ── Right: Lang + CTA ── */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
            data-testid="btn-toggle-lang"
          >
            <span className={language === 'nl' ? 'text-blue-400' : 'text-gray-500'}>NL</span>
            <span className="text-white/20">/</span>
            <span className={language === 'en' ? 'text-blue-400' : 'text-gray-500'}>EN</span>
          </button>

          <Link href="/contact">
            <button
              data-testid="btn-nav-cta"
              className="px-5 py-2 text-sm font-medium rounded-full border border-blue-500/60 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:text-white transition-all duration-200"
            >
              {t.home.ctaButton}
            </button>
          </Link>
        </div>

        {/* ── Mobile: Lang + Hamburger ── */}
        <div className="md:hidden flex items-center gap-2 shrink-0">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
            data-testid="btn-toggle-lang-mobile"
          >
            {language === 'nl' ? (
              <><span className="text-blue-400">NL</span><span className="text-white/20">/</span><span className="text-gray-500">EN</span></>
            ) : (
              <><span className="text-gray-500">NL</span><span className="text-white/20">/</span><span className="text-blue-400">EN</span></>
            )}
          </button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" data-testid="btn-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0B0B0B] border-l border-white/10 pt-28 px-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-semibold transition-colors duration-200 ${
                      location === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                    data-testid={`mobile-nav-link-${link.label}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-6 border-t border-white/10">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <button
                      className="w-full py-3 rounded-full border border-blue-500/60 text-blue-400 font-medium hover:bg-blue-500/10 hover:text-white transition-all duration-200"
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
