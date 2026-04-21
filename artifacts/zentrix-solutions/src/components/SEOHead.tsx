import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
}

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (el) (el as any)[attr] = value;
};

const SEOHead = ({ title, description, canonical }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', canonical);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [title, description, canonical]);

  return null;
};

export default SEOHead;
