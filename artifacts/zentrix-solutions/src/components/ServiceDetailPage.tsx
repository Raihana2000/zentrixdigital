import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export interface ServicePageData {
  h1: string;
  intro: string;
  benefitsTitle: string;
  benefits: string[];
  includedTitle: string;
  included: string[];
  whoForTitle: string;
  whoFor: { title: string; text: string }[];
  processTitle: string;
  process: { title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

interface ServiceDetailPageProps {
  data: ServicePageData;
  pageTitle: string;
  backLabel: string;
  servicesLabel: string;
  contactLabel: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  data,
  pageTitle,
  backLabel,
  servicesLabel,
  contactLabel,
}) => {
  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo({ top: 0 });
  }, [pageTitle]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] pt-[118px]">

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.10),transparent_55%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors uppercase tracking-widest font-semibold"
              >
                <ArrowLeft className="w-3 h-3" />
                {backLabel}
              </Link>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              {data.h1}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl"
            >
              {data.intro}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm sm:text-base"
              >
                {contactLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── BENEFITS ──────────────────────────────────────────── */}
      <section className="py-20 px-5 bg-[#0e0e0e] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-10">
              {data.benefitsTitle}
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.benefits.map((b, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="flex items-start gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/8"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── INCLUDED ──────────────────────────────────────────── */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-10">
              {data.includedTitle}
            </motion.h2>
            <motion.ul variants={stagger} className="flex flex-col gap-3 max-w-2xl">
              {data.included.map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                  <div className="w-5 h-5 shrink-0 mt-0.5 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO FOR ───────────────────────────────────────────── */}
      <section className="py-20 px-5 bg-[#0e0e0e] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-10">
              {data.whoForTitle}
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.whoFor.map((item, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/25 transition-colors duration-300"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ───────────────────────────────────────────── */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white mb-12">
              {data.processTitle}
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.process.map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500/60 bg-blue-600/10 flex items-center justify-center text-blue-400 font-bold text-sm shadow-[0_0_12px_rgba(37,99,235,0.2)]">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 px-5 bg-[#0e0e0e] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-[#0B0B0B] to-[#0B0B0B] p-12 md:p-16 text-center"
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-blue-600/15 blur-[80px] rounded-full" />
            <motion.h2 variants={fadeUp} className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {data.ctaTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="relative z-10 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              {data.ctaText}
            </motion.p>
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm sm:text-base"
              >
                {data.ctaButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 px-7 py-3.5 rounded-full transition-colors duration-200 text-sm sm:text-base"
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
