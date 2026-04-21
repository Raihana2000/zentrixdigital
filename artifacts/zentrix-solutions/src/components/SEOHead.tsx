import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
}

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (el) (el as any)[attr] = value;
};

const setOrCreateHreflang = (hreflang: string, href: string) => {
  let el = document.querySelector(
    `link[rel="alternate"][hreflang="${hreflang}"]`
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'alternate';
    el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
};

const SEOHead = ({ title, description, canonical }: SEOHeadProps) => {
  const { language } = useTranslation();

  useEffect(() => {
    const locale = language === 'nl' ? 'nl_NL' : 'en_GB';

    document.title = title;
    document.documentElement.lang = language;

    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', canonical);

    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:locale"]', 'content', locale);
    setMeta('meta[property="og:image:alt"]', 'content', title);

    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image:alt"]', 'content', title);

    setOrCreateHreflang('nl', canonical);
    setOrCreateHreflang('en', canonical);
    setOrCreateHreflang('x-default', canonical);
  }, [title, description, canonical, language]);

  return null;
};

export default SEOHead;
