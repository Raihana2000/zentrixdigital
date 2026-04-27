import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import SEOHead from '@/components/SEOHead';
import { ArrowRight, ExternalLink, X, Lightbulb } from 'lucide-react';
import conceptImg from '@assets/concept_accounting_website_1777332217094.png';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const CONTENT = {
  nl: {
    badge: 'Portfolio',
    title: 'Concepten & Website Verbeteringen',
    intro: 'Een selectie van website concepten en redesign ideeën gericht op duidelijkheid, vertrouwen en conversie. Deze voorbeelden laten zien hoe ZentrixDigital websites bouwt als klantgenererende systemen.',
    conceptBadge: 'Concept project',
    conceptTitle: 'Administratiekantoor Website Concept — Amsterdam',
    conceptDesc: 'Dit concept is gemaakt om te laten zien hoe een traditioneel administratiekantoor verbeterd kan worden op het gebied van duidelijkheid, vertrouwen en gebruikservaring.',
    conceptDetail: 'De focus ligt op sterke positionering en het sturen van bezoekers naar actie — met een heldere hero, vertrouwenssignalen en een duidelijke call-to-action boven de vouw.',
    disclaimer: 'Dit is een conceptproject en geen officiële klantcase.',
    ctaQuestion: 'Wil je iets soortgelijks voor jouw bedrijf?',
    ctaBtn: 'Vraag een snelle analyse aan',
    viewImage: 'Bekijk afbeelding',
    closeImage: 'Sluiten',
    moreTitle: 'Meer concepten onderweg',
    moreText: 'Wij werken continu aan nieuwe concepten voor verschillende branches. Neem contact op om te bespreken hoe wij jouw website kunnen verbeteren.',
    moreBtn: 'Start een gesprek',
  },
  en: {
    badge: 'Portfolio',
    title: 'Concepts & Website Improvements',
    intro: 'A selection of website concepts and redesign ideas focused on clarity, trust and client conversion. These examples demonstrate how ZentrixDigital builds websites as client-generating systems.',
    conceptBadge: 'Concept project',
    conceptTitle: 'Accounting Website Concept — Amsterdam',
    conceptDesc: 'This concept was created to demonstrate how a traditional accounting website can be redesigned to improve clarity, trust and user experience.',
    conceptDetail: 'The focus is on strong positioning and guiding visitors toward taking action — with a clear hero, trust signals and a prominent call-to-action above the fold.',
    disclaimer: 'This is a concept project and not a live client website.',
    ctaQuestion: 'Want something similar for your business?',
    ctaBtn: 'Request a quick review',
    viewImage: 'View image',
    closeImage: 'Close',
    moreTitle: 'More concepts coming soon',
    moreText: 'We continuously work on new concepts for different industries. Get in touch to discuss how we can improve your website.',
    moreBtn: 'Start a conversation',
  },
};

const Concepts: React.FC = () => {
  const { t, language } = useTranslation();
  const isNL = language === 'nl';
  const c = isNL ? CONTENT.nl : CONTENT.en;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  return (
    <>
      <SEOHead
        title={isNL ? 'Concepten & Website Verbeteringen | ZentrixDigital' : 'Concepts & Website Improvements | ZentrixDigital'}
        description={isNL
          ? 'Bekijk website concepten en redesign ideeën van ZentrixDigital. Gericht op conversie, vertrouwen en meer klanten. Gratis analyse aanvragen.'
          : 'View website concepts and redesign ideas by ZentrixDigital. Focused on conversion, trust and more clients. Request a free analysis.'}
        canonical={`https://www.zentrixdigital.eu/concepts`}
      />

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-5 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-900/10 blur-[140px] rounded-full" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-6">
                <Lightbulb className="w-3.5 h-3.5" />
                {c.badge}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white leading-[1.05] mb-6"
            >
              {c.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/60 leading-relaxed max-w-2xl"
            >
              {c.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Concept cards ── */}
      <section className="pb-32 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Card */}
            <motion.div
              variants={fadeUp}
              className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0d1525]/80 to-[#080d18]/60 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(true)}>
                <img
                  src={conceptImg}
                  alt={c.conceptTitle}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-black/60 text-white text-sm font-semibold px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10">
                    <ExternalLink className="w-4 h-4" />
                    {c.viewImage}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  {c.conceptBadge}
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-[-0.02em] leading-tight mb-4">
                  {c.conceptTitle}
                </h2>

                <p className="text-white/65 text-base leading-relaxed mb-3">
                  {c.conceptDesc}
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {c.conceptDetail}
                </p>

                {/* Disclaimer */}
                <div className="inline-flex items-start gap-2.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-8">
                  <span className="text-blue-400/70 text-xs mt-0.5 shrink-0">ℹ</span>
                  <p className="text-white/40 text-xs leading-relaxed">{c.disclaimer}</p>
                </div>

                {/* CTA block */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-white/[0.06]">
                  <p className="text-white/70 text-sm font-medium flex-1">{c.ctaQuestion}</p>
                  <Link href="/contact">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-[1.03] whitespace-nowrap shrink-0">
                      {c.ctaBtn}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* More concepts placeholder */}
            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-3xl border border-dashed border-white/[0.10] bg-white/[0.02] p-10 text-center"
            >
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-3">{c.moreTitle}</p>
              <p className="text-white/30 text-sm leading-relaxed max-w-md mx-auto mb-6">{c.moreText}</p>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/25 text-blue-400/80 text-sm font-semibold hover:border-blue-400/50 hover:text-blue-300 transition-all duration-200">
                  {c.moreBtn}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.9)]"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={conceptImg}
                alt={c.conceptTitle}
                className="w-full h-auto object-contain"
              />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm border border-white/10"
                aria-label={c.closeImage}
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Concepts;
