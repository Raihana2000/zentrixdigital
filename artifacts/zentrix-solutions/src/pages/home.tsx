import React from 'react';
import { useTranslation } from '@/context/TranslationContext';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowRight, Code2, Cpu, Wrench, LineChart,
  MessageSquareOff, Smartphone, MousePointerClick, Clock,
  CheckCircle2, Search, Lightbulb, Hammer, Rocket,
  Building2, Users, TrendingUp, Store,
  ClipboardList
} from 'lucide-react';
import logoPath from "@assets/ChatGPT_Image_20_apr_2026,_10_49_46_1776675127194.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const Home = () => {
  const { t } = useTranslation();

  const problemIcons = [MessageSquareOff, MousePointerClick, Smartphone, Clock];
  const serviceIcons = [Code2, Cpu, Wrench, LineChart];
  const whoWeHelpIcons = [Store, Users, Rocket, TrendingUp];
  const processIcons = [Search, Lightbulb, Hammer, Rocket];
  const whyIcons = [CheckCircle2, CheckCircle2, CheckCircle2, CheckCircle2];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-5 pt-[118px] pb-20 text-center overflow-hidden">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[-10%] w-[300px] h-[300px] bg-blue-800/8 blur-[100px] rounded-full" />
        </div>
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
        />

        <motion.div
          initial="hidden" animate="visible" variants={stagger}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-7"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase">
            {t.home.heroBadge}
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            {t.home.heroTitle}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
            {t.home.heroSubtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
            <Link href="/contact">
              <button
                data-testid="hero-btn-primary"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:shadow-[0_0_36px_rgba(37,99,235,0.65)]"
              >
                {t.home.primaryCta} <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/services">
              <button
                data-testid="hero-btn-secondary"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white/30 font-medium text-base transition-all duration-200 hover:bg-white/5"
              >
                {t.home.secondaryCta}
              </button>
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-2">
            {t.home.trustSignals.map((signal, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-blue-400" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {signal}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── PROBLEM SECTION ─────────────────────────────────── */}
      <section className="py-24 px-5 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              {t.home.problemTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              {t.home.problemIntro}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {t.home.problems.map((p, i) => {
              const Icon = problemIcons[i];
              return (
                <motion.div
                  key={i} variants={fadeUp}
                  className="flex flex-col gap-4 p-7 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────── */}
      <section className="py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              {t.home.servicesTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              {t.home.servicesIntro}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              { key: 'websites', icon: serviceIcons[0] },
              { key: 'apps', icon: serviceIcons[1] },
              { key: 'maintenance', icon: serviceIcons[2] },
              { key: 'growth', icon: serviceIcons[3] }
            ].map(({ key, icon: Icon }, i) => {
              const svc = t.home.services[key as keyof typeof t.home.services] as { title: string; desc: string };
              return (
                <Link key={key} href="/services">
                  <motion.div
                    variants={fadeUp}
                    data-testid={`service-card-${key}`}
                    className="group h-full flex flex-col gap-5 p-7 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.25)] transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{svc.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{svc.desc}</p>
                    <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      Meer info <ArrowRight className="w-3 h-3" />
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE HELP ─────────────────────────────────────── */}
      <section className="py-24 px-5 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              {t.home.whoWeHelpTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              {t.home.whoWeHelpIntro}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {t.home.whoWeHelp.map((item, i) => {
              const Icon = whoWeHelpIcons[i];
              return (
                <motion.div
                  key={i} variants={fadeUp}
                  className="flex flex-col gap-4 p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/8 hover:border-blue-500/25 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY ZENTRIX ─────────────────────────────────────── */}
      <section className="py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              {t.home.whyZentrixTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              {t.home.whyZentrixIntro}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {t.home.whyZentrix.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="flex items-start gap-5 p-7 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────── */}
      <section className="py-24 px-5 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t.home.processTitle}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {t.home.processSteps.map((step, i) => {
              const Icon = processIcons[i];
              return (
                <motion.div
                  key={i} variants={fadeUp}
                  className="relative flex flex-col gap-4 p-7 rounded-2xl bg-white/[0.03] border border-white/8"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-blue-500/60 text-xs font-bold uppercase tracking-widest">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── CASES / SOCIAL PROOF ────────────────────────────── */}
      <section className="py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              {t.home.casesTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              {t.home.casesIntro}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {t.home.cases.map((c, i) => (
              <motion.div
                key={i} variants={fadeUp}
                data-testid={`case-card-${i}`}
                className="flex flex-col gap-4 p-8 rounded-2xl border border-dashed border-white/12 bg-white/[0.02] hover:border-blue-500/25 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="text-base font-semibold text-gray-300">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── GEOGRAPHIC REACH ────────────────────────────────── */}
      <section className="py-16 px-5 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16"
          >
            <motion.div variants={fadeUp} className="flex-1 min-w-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                {t.home.reachTitle}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                {t.home.reachText}
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-row sm:flex-row gap-4 shrink-0 w-full md:w-auto justify-center md:justify-end">
              {t.home.reachItems.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/8 min-w-[110px]">
                  <p className="text-white font-bold text-sm leading-tight mb-1">{item.label}</p>
                  <p className="text-gray-600 text-xs leading-tight">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-28 px-5 bg-[#0e0e0e] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-[#0B0B0B] to-[#0B0B0B] p-12 md:p-16 text-center"
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/15 blur-[80px] rounded-full" />

            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <img src={logoPath} alt="ZentrixDigital" className="h-10 w-auto object-contain opacity-90" />
            </motion.div>

            <motion.h2 variants={fadeUp} className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t.home.ctaTitle}
            </motion.h2>

            <motion.p variants={fadeUp} className="relative text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.home.ctaText}
            </motion.p>

            <motion.div variants={fadeUp} className="relative flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <button
                  data-testid="cta-btn-primary"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
                >
                  {t.home.ctaPrimary} <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button
                  data-testid="cta-btn-secondary"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white/30 font-medium text-base transition-all duration-200 hover:bg-white/5"
                >
                  {t.home.ctaSecondary}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
