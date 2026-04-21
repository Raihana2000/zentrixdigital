import React from 'react';
import { Clock } from 'lucide-react';
import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import logoPath from "@assets/ChatGPT_Image_20_apr_2026,_10_49_46_1776675127194.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-border/30 pt-16 pb-8 mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center" data-testid="footer-logo">
              <img src={logoPath} alt="ZentrixDigital" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground max-w-md">
              {t.footer.tagline}
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg">{t.footer.navLabel}</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors w-fit" data-testid="footer-link-about">
                {t.nav.about}
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors w-fit" data-testid="footer-link-services">
                {t.nav.services}
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors w-fit" data-testid="footer-link-contact">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg">{t.nav.contact}</h4>
            <address className="flex flex-col gap-3 text-muted-foreground not-italic">
              <p>{t.contact.company}</p>
              <p>{t.contact.location}</p>
              <p>
                <a href="tel:0683284995" className="hover:text-primary transition-colors">{t.contact.phone}</a>
              </p>
              <p>
                <a href="mailto:info@zentrixdigital.eu" className="hover:text-primary transition-colors">{t.contact.email}</a>
              </p>
            </address>

            <div className="pt-2 border-t border-white/6 mt-1">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">
                  {t.contact.hours.title}
                </p>
              </div>
              <ul className="flex flex-col gap-1.5">
                {t.contact.hours.lines.map((line, i) => (
                  <li key={i} className="text-xs text-muted-foreground leading-snug">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ZentrixDigital. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
