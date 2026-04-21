import React, { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Shield, Lightbulb, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
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
      <section className="relative py-24 md:py-32 px-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-7">
              {t.nav.about}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6"
            >
              {t.about.heroTitle}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              {t.about.heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE ARE / MISSION ──────────────────────────────── */}
      <section className="py-24 px-5 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-8 lg:gap-14"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                {t.about.whoWeAreTitle}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                {t.about.whoWeAreText}
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 p-8 rounded-2xl bg-white/[0.03] border border-blue-500/15"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                {t.about.missionTitle}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                {t.about.missionText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── VALUES ────────────────────────────────────────────── */}
      <section className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.about.valuesTitle}
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-5">
              {Object.values(t.about.values).map((value, idx) => {
                const Icon = valuesIcons[idx];
                return (
                  <motion.div
                    key={idx} variants={fadeUp}
                    className="flex items-start gap-5 p-7 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/30 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-semibold text-white">{value.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT SETS US APART ────────────────────────────────── */}
      <section className="py-24 px-5 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-12 md:p-16"
          >
            <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[200px] bg-blue-600/8 blur-[100px] rounded-full" />
            <motion.span variants={fadeUp} className="inline-block text-blue-500 text-xs font-bold uppercase tracking-widest mb-5 relative z-10">
              ZentrixDigital
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-snug max-w-2xl"
            >
              {t.about.differentTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="relative z-10 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {t.about.differentText}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 px-5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-[#0B0B0B] to-[#0B0B0B] p-12 md:p-16 text-center"
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/15 blur-[80px] rounded-full" />
            <motion.h2
              variants={fadeUp}
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            >
              {t.home.ctaTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="relative z-10 text-gray-400 text-base leading-relaxed max-w-xl mx-auto mb-8"
            >
              {t.home.ctaText}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-sm sm:text-base shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
              >
                {t.home.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white border border-white/10 hover:border-white/25 px-8 py-4 rounded-full transition-colors duration-200 text-sm sm:text-base hover:bg-white/5"
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
