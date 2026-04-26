import React, { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { useTranslation } from '@/hooks/useTranslation';

export interface ServicePageData {
  h1: string;
  intro: string;
  benefitsTitle: string;
  benefits: string[];
  includedTitle: string;
  included: string[];
  extrasTitle?: string;
  extras?: string[];
  examplesTitle?: string;
  examples?: string[];
  whoForTitle: string;
  whoFor: { title: string; text: string }[];
  processTitle: string;
  process: { title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export interface RelatedLink {
  label: string;
  href: string;
  external?: boolean;
}

interface ServiceDetailPageProps {
  data: ServicePageData;
  pageTitle: string;
  backLabel: string;
  servicesLabel: string;
  contactLabel: string;
  metaDesc?: string;
  canonical?: string;
  relatedLinks?: RelatedLink[];
  langToggle?: { label: string; href: string };
  relatedTitle?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  data,
  pageTitle,
  backLabel,
  servicesLabel,
  contactLabel,
  metaDesc,
  canonical,
  relatedLinks,
  langToggle,
  relatedTitle,
}) => {
  const [, navigate] = useLocation();
  const { setLanguage } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pageTitle]);

  const handleLangToggle = () => {
    if (!langToggle) return;
    const targetLang = langToggle.href.startsWith('/en/') ? 'en' : 'nl';
    setLanguage(targetLang);
    navigate(langToggle.href);
  };

  const hasExtras = (data.extrasTitle && data.extras && data.extras.length > 0) || (data.examplesTitle && data.examples && data.examples.length > 0);
  const extrasList = data.extras || data.examples || [];
  const extrasTitle = data.extrasTitle || data.examplesTitle;

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] page-top-pad">
      {canonical && metaDesc && (
        <SEOHead title={pageTitle} description={metaDesc} canonical={canonical} />
      )}

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 px-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_0%,rgba(37,99,235,0.10),transparent_60%)]" />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '72px 72px' }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8 flex-wrap">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-400 transition-colors uppercase tracking-widest font-semibold"
              >
                <ArrowLeft className="w-3 h-3" />
                {backLabel}
              </Link>
              {langToggle && (
                <button
                  onClick={handleLangToggle}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400/70 hover:text-blue-300 transition-colors uppercase tracking-widest font-semibold border border-blue-500/20 rounded-full px-3 py-1 hover:border-blue-400/40 cursor-pointer"
                >
                  {langToggle.label}
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
              )}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.04] text-white mb-7"
            >
              {data.h1}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-white text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {data.intro}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_36px_rgba(37,99,235,0.6)] hover:scale-[1.03]"
              >
                {contactLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── BENEFITS ──────────────────────────────────────────── */}
      <section className="py-24 px-5 bg-[#080d16]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-10 tracking-tight">
              {data.benefitsTitle}
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.benefits.map((b, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="flex items-start gap-3.5 p-5 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.55] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] hover:border-blue-400/[0.90] transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="text-white text-sm leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── INCLUDED ──────────────────────────────────────────── */}
      <section className="py-24 px-5 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-10 tracking-tight">
              {data.includedTitle}
            </motion.h2>
            <motion.ul variants={stagger} className="flex flex-col gap-3 max-w-2xl">
              {data.included.map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600/[0.14] border border-blue-400/[0.30] flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-white text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ─── EXTRAS / EXAMPLES ─────────────────────────────────── */}
      {hasExtras && (
        <section className="py-24 px-5 bg-[#080d16]">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-10 tracking-tight">
                {extrasTitle}
              </motion.h2>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extrasList.map((item, i) => (
                  <motion.div
                    key={i} variants={fadeUp}
                    className="flex items-start gap-3.5 p-5 rounded-xl bg-[rgba(9,14,26,0.98)] border border-blue-500/[0.55] hover:border-blue-400/[0.90] shadow-[0_8px_24px_rgba(0,0,0,0.30),0_0_0_1px_rgba(59,130,246,0.16)] transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600/[0.14] border border-blue-400/[0.30] flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-white text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── WHO FOR ───────────────────────────────────────────── */}
      <section className={`py-24 px-5 ${hasExtras ? 'bg-[#0B0B0B]' : 'bg-[#080d16]'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-10 tracking-tight">
              {data.whoForTitle}
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.whoFor.map((item, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="p-6 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.55] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] hover:border-blue-400/[0.90] transition-all duration-300"
                >
                  <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white text-xs leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ───────────────────────────────────────────── */}
      <section className={`py-24 px-5 ${hasExtras ? 'bg-[#080d16]' : 'bg-[#0B0B0B]'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-14 tracking-tight">
              {data.processTitle}
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.process.map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl border border-blue-500/25 bg-blue-600/10 flex items-center justify-center text-blue-400 font-black text-sm shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                  <p className="text-white text-xs leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── RELATED LINKS ─────────────────────────────────────── */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-16 px-5 bg-[#080d16] border-t border-blue-500/[0.12]">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-xs text-[#D9E1F2] uppercase tracking-widest font-semibold mb-5">
                {relatedTitle || 'Gerelateerde pagina\'s'}
              </motion.p>
              <motion.div variants={stagger} className="flex flex-wrap gap-3">
                {relatedLinks.map((link, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm text-white hover:text-blue-300 border border-blue-500/[0.30] hover:border-blue-400/[0.65] rounded-full px-4 py-2 transition-all duration-200 hover:bg-blue-500/[0.06]"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-28 px-5 bg-[#060b13]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/[0.50] p-7 sm:p-12 md:p-16 text-center"
            style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(37,99,235,0.1) 0%, rgba(11,11,11,0) 70%), linear-gradient(135deg, rgba(15,25,50,0.6) 0%, rgba(11,11,11,1) 100%)' }}
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-blue-600/12 blur-[90px] rounded-full" />
            <motion.h2 variants={fadeUp} className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {data.ctaTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="relative z-10 text-white text-base leading-relaxed max-w-xl mx-auto mb-10">
              {data.ctaText}
            </motion.p>
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:shadow-[0_0_48px_rgba(37,99,235,0.6)] hover:scale-[1.03] text-sm"
              >
                {data.ctaButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 text-blue-200 hover:text-white border border-blue-500/[0.40] hover:border-blue-400/[0.75] px-8 py-4 rounded-full transition-all duration-200 text-sm hover:bg-blue-500/[0.08]"
              >
                {servicesLabel}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetailPage;
