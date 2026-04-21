import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import {
  ArrowRight, Code2, Cpu, Wrench, LineChart,
  MessageSquareOff, Smartphone, MousePointerClick, Clock,
  CheckCircle2, Search, Lightbulb, Hammer, Rocket,
  TrendingUp, Store, Users,
  Mail,
  MessageCircle, CalendarCheck, FileText, Globe, MapPin, Star, Lock, BarChart3, CreditCard, Plug, Zap
} from 'lucide-react';
import logoPath from "@assets/ChatGPT_Image_20_apr_2026,_10_49_46_1776675127194.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
};

const Home = () => {
  const { t } = useTranslation();

  const problemIcons = [MessageSquareOff, MousePointerClick, Smartphone, Clock];
  const serviceIcons = [Code2, Cpu, Wrench, LineChart];
  const whoWeHelpIcons = [Store, Users, Rocket, TrendingUp];
  const processIcons = [Search, Lightbulb, Hammer, Rocket];
  const extensionIcons = [MessageCircle, CalendarCheck, FileText, Globe, MapPin, Star, Lock, BarChart3, Mail, CreditCard, Plug, Zap];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      <SEOHead
        title={t.meta.homeTitle}
        description={t.meta.homeDesc}
        canonical="https://www.zentrixdigital.eu/"
      />

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-5 page-top-pad pb-24 text-center overflow-hidden noise-overlay">
        {/* Multi-layer glow orbs */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-700/8 blur-[140px] rounded-full" />
          <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[350px] h-[350px] bg-blue-800/7 blur-[120px] rounded-full" />
        </div>
        {/* Refined grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
            backgroundSize: '72px 72px'
          }}
        />
        {/* Radial vignette */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,rgba(11,11,11,0.8)_100%)]" />

        <motion.div
          initial="hidden" animate="visible" variants={stagger}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8"
        >
          {/* Premium badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/25 bg-gradient-to-r from-blue-950/60 to-blue-900/30 text-blue-400/90 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
              {t.home.heroBadge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-[-0.03em] leading-[1.03] text-white"
          >
            {t.home.heroTitle}
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            {t.home.heroSubtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
            <Link href="/contact">
              <button
                data-testid="hero-btn-primary"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-base transition-all duration-300 shadow-[0_0_32px_rgba(37,99,235,0.5)] hover:shadow-[0_0_48px_rgba(37,99,235,0.7)] hover:scale-[1.03]"
              >
                {t.home.primaryCta} <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/services">
              <button
                data-testid="hero-btn-secondary"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/25 font-medium text-base transition-all duration-200 hover:bg-white/[0.04]"
              >
                {t.home.secondaryCta}
              </button>
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-2">
            {t.home.trustSignals.map((signal, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/70 shrink-0" />
                {signal}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeIn}
          initial="hidden" animate="visible"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ─── PROBLEM SECTION ─────────────────────────────────── */}
      <section className="py-28 px-5 bg-[#080d16]">
        <div className="pointer-events-none absolute left-0 right-0 h-px glow-line opacity-50" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              {t.home.problemTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              {t.home.problemIntro}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {t.home.problems.map((p, i) => {
              const Icon = problemIcons[i];
              return (
                <motion.div
                  key={i} variants={fadeUp}
                  className="flex flex-col gap-5 p-7 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.28] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-red-500/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red-400/80" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────── */}
      <section className="py-32 px-5 bg-[#0B0B0B]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              {t.home.servicesTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              {t.home.servicesIntro}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { key: 'websites', icon: serviceIcons[0], href: '/websites' },
              { key: 'apps', icon: serviceIcons[1], href: '/applicaties' },
              { key: 'maintenance', icon: serviceIcons[2], href: '/onderhoud-optimalisatie' },
              { key: 'growth', icon: serviceIcons[3], href: '/digitale-groeiondersteuning' }
            ].map(({ key, icon: Icon, href }) => {
              const svc = t.home.services[key as keyof typeof t.home.services] as { title: string; desc: string };
              return (
                <Link key={key} href={href}>
                  <motion.div
                    variants={fadeUp}
                    data-testid={`service-card-${key}`}
                    className="group h-full flex flex-col gap-5 p-7 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.28] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-blue-400/[0.65] hover:-translate-y-2 hover:shadow-[0_24px_60px_-16px_rgba(37,99,235,0.2),inset_0_1px_0_rgba(59,130,246,0.1)] transition-all duration-400 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-400/[0.60] transition-all duration-300">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-base font-semibold text-white tracking-tight">{svc.title}</h3>
                      <p className="text-xs text-gray-300 leading-relaxed flex-1">{svc.desc}</p>
                    </div>
                    <span className="text-blue-500/70 text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 group-hover:text-blue-400 transition-all duration-200">
                      {t.home.servicesMoreInfo} <ArrowRight className="w-3 h-3" />
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── EXTENSIONS ──────────────────────────────────────── */}
      <section className="py-32 px-5 bg-gradient-to-b from-[#060b13] to-[#080d18]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-7">
              {t.home.heroBadge.split(' · ')[2]}
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              {t.home.extensionsTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              {t.home.extensionsSubtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerFast}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {t.home.extensions.map((ext, i) => {
              const Icon = extensionIcons[i];
              return (
                <motion.div
                  key={i} variants={fadeUp}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-blue-500/[0.22] hover:border-blue-400/[0.60] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white/90">{ext.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{ext.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-blue-500/25 bg-blue-950/40 text-blue-400/90 hover:bg-blue-950/60 hover:border-blue-500/40 hover:text-blue-300 font-semibold text-sm transition-all duration-200 backdrop-blur-sm">
                {t.home.extensionsCta} <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE HELP ─────────────────────────────────────── */}
      <section className="py-28 px-5 bg-[#0B0B0B]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              {t.home.whoWeHelpTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              {t.home.whoWeHelpIntro}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {t.home.whoWeHelp.map((item, i) => {
              const Icon = whoWeHelpIcons[i];
              return (
                <motion.div
                  key={i} variants={fadeUp}
                  className="flex flex-col gap-4 p-7 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.28] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] hover:border-blue-400/[0.60] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY ZENTRIX ─────────────────────────────────────── */}
      <section className="py-32 px-5 bg-[#080d16]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-6 md:sticky md:top-32">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {t.home.whyZentrixTitle}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                {t.home.whyZentrixIntro}
              </p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
              {t.home.whyZentrix.map((item, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.28] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] hover:border-blue-400/[0.60] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────── */}
      <section className="py-28 px-5 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {t.home.processTitle}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative"
          >
            {/* Connecting line desktop */}
            <div className="hidden lg:block absolute top-[22px] left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none" />

            {t.home.processSteps.map((step, i) => {
              const Icon = processIcons[i];
              return (
                <motion.div
                  key={i} variants={fadeUp}
                  className="relative flex flex-col gap-5 p-6 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.28] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-blue-500/40 text-xs font-black uppercase tracking-widest">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{step.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── PORTFOLIO / ON REQUEST ───────────────────────────── */}
      <section className="py-28 px-5 bg-[#080d16]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/[0.22] bg-gradient-to-b from-white/[0.04] to-transparent p-12 md:p-16 text-center"
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-700/10 blur-[100px] rounded-full" />

            <motion.div variants={fadeUp} className="relative z-10">
              <span className="inline-block text-blue-500/70 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                {t.home.casesLabel}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                {t.home.casesTitle}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-3">
                {t.home.casesIntro}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed max-w-lg mx-auto mb-10">
                {t.home.casesBody}
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm">
                  <Mail className="w-4 h-4" />
                  {t.home.casesCtaLabel}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── GEOGRAPHIC REACH ────────────────────────────────── */}
      <section className="py-20 px-5 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16"
          >
            <motion.div variants={fadeUp} className="flex-1 min-w-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug tracking-tight">
                {t.home.reachTitle}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                {t.home.reachText}
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-row gap-3 shrink-0 w-full md:w-auto justify-center md:justify-end">
              {t.home.reachItems.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center px-5 py-4 rounded-xl bg-white/[0.03] border border-blue-500/[0.22] min-w-[105px]">
                  <p className="text-white font-bold text-xs leading-tight mb-1.5">{item.label}</p>
                  <p className="text-gray-400 text-xs leading-tight">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-32 px-5 bg-[#060b13]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/15 p-12 md:p-20 text-center"
            style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(37,99,235,0.12) 0%, rgba(11,11,11,0) 70%), linear-gradient(135deg, rgba(15,25,50,0.8) 0%, rgba(11,11,11,0.95) 100%)' }}
          >
            {/* Glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-600/12 blur-[100px] rounded-full" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[200px] bg-blue-800/8 blur-[80px] rounded-full" />

            <motion.div variants={fadeUp} className="flex justify-center mb-10">
              <img src={logoPath} alt="ZentrixDigital" className="h-9 w-auto object-contain opacity-70" loading="lazy" decoding="async" />
            </motion.div>

            <motion.h2 variants={fadeUp} className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white mb-6 leading-tight tracking-tight">
              {t.home.ctaTitle}
            </motion.h2>

            <motion.p variants={fadeUp} className="relative z-10 text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              {t.home.ctaText}
            </motion.p>

            <motion.div variants={fadeUp} className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button
                  data-testid="cta-btn-primary"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-base transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_rgba(37,99,235,0.7)] hover:scale-[1.03]"
                >
                  {t.home.ctaPrimary} <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button
                  data-testid="cta-btn-secondary"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-9 py-4 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 font-medium text-base transition-all duration-200 hover:bg-white/[0.04]"
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
