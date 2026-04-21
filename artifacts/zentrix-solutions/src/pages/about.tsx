import React, { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Shield, Lightbulb, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const valuesIcons = [Shield, Lightbulb, CheckCircle2, Zap];

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden page-top-pad">
      <SEOHead
        title={t.meta.aboutTitle}
        description={t.meta.aboutDesc}
        canonical="https://www.zentrixdigital.eu/about"
      />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 px-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_0%,rgba(37,99,235,0.1),transparent_60%)]" />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '72px 72px' }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0" />
              {t.nav.about}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[1.03] text-white mb-7"
            >
              {t.about.heroTitle}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
            >
              {t.about.heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE ARE / MISSION ──────────────────────────────── */}
      <section className="py-28 px-5 bg-[#080d16]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 p-8 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.55] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)]"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight">
                {t.about.whoWeAreTitle}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.about.whoWeAreText}
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 p-8 rounded-2xl bg-[rgba(9,14,26,0.98)] border border-blue-500/[0.55] shadow-[0_10px_28px_rgba(0,0,0,0.34),0_0_0_1px_rgba(59,130,246,0.18)] shadow-[0_10px_28px_rgba(0,0,0,0.34),0_0_0_1px_rgba(59,130,246,0.18)]"
            >
              <span className="text-blue-500/60 text-xs font-bold uppercase tracking-widest">
                ZentrixDigital
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight">
                {t.about.missionTitle}
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed">
                {t.about.missionText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── VALUES ────────────────────────────────────────────── */}
      <section className="py-28 px-5 bg-[#0B0B0B]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {t.about.valuesTitle}
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
              {Object.values(t.about.values).map((value, idx) => {
                const Icon = valuesIcons[idx];
                return (
                  <motion.div
                    key={idx} variants={fadeUp}
                    className="flex items-start gap-5 p-7 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.55] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] hover:border-blue-400/[0.90] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-600/[0.14] border border-blue-400/[0.30] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-semibold text-white">{value.title}</h3>
                      <p className="text-xs text-gray-300 leading-relaxed">{value.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT SETS US APART ────────────────────────────────── */}
      <section className="py-28 px-5 bg-[#080d16]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/[0.55] bg-[rgba(9,14,26,0.98)] p-12 md:p-16 shadow-[0_10px_28px_rgba(0,0,0,0.34),0_0_0_1px_rgba(59,130,246,0.18)]"
          >
            <div className="pointer-events-none absolute top-0 left-0 w-[600px] h-[250px] bg-blue-700/8 blur-[120px] rounded-full" />
            <motion.span variants={fadeUp} className="inline-block text-blue-500/60 text-xs font-bold uppercase tracking-[0.2em] mb-5 relative z-10">
              ZentrixDigital
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-snug tracking-tight max-w-2xl"
            >
              {t.about.differentTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="relative z-10 text-gray-300 text-base leading-relaxed max-w-xl"
            >
              {t.about.differentText}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-28 px-5 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/[0.38] p-12 md:p-16 text-center"
            style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(37,99,235,0.1) 0%, rgba(11,11,11,0) 70%), linear-gradient(135deg, rgba(15,25,50,0.6) 0%, rgba(11,11,11,1) 100%)' }}
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/10 blur-[90px] rounded-full" />
            <motion.h2
              variants={fadeUp}
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight tracking-tight"
            >
              {t.home.ctaTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="relative z-10 text-gray-400 text-base leading-relaxed max-w-lg mx-auto mb-10"
            >
              {t.home.ctaText}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:shadow-[0_0_48px_rgba(37,99,235,0.6)] hover:scale-[1.02]"
              >
                {t.home.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 text-blue-200 hover:text-white border border-blue-500/[0.40] hover:border-blue-400/[0.75] px-8 py-4 rounded-full transition-all duration-200 text-sm hover:bg-blue-500/[0.08]"
              >
                {t.nav.services}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
