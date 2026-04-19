import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from '@/context/TranslationContext';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoPath from "@assets/ChatGPT_Image_19_apr_2026,_10_01_14_1776586282902.png";

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="nav-logo">
          <img src={logoPath} alt="Zentrix Solutions Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)] transition-all duration-300" />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            Zentrix
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}
                data-testid={`nav-link-${link.label}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-border/50 pl-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLang}
              className="flex items-center gap-2 text-muted-foreground hover:text-white"
              data-testid="btn-toggle-lang"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </Button>
            <Link href="/contact">
              <Button data-testid="btn-nav-cta" className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all">
                {t.home.ctaButton}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLang}
            className="text-muted-foreground hover:text-white"
            data-testid="btn-toggle-lang-mobile"
          >
            <span className="uppercase font-semibold">{language}</span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="btn-mobile-menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l-border/50 pt-20">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-medium transition-colors ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}
                    data-testid={`mobile-nav-link-${link.label}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-6 border-t border-border/50">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg" data-testid="btn-mobile-nav-cta">
                      {t.home.ctaButton}
                    </Button>
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
