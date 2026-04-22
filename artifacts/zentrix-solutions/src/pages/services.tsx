import React, { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Code2, Cpu, Wrench, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const SERVICE_ICONS = [Code2, Cpu, Wrench, LineChart];

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const services = Object.values(t.services.servicesList) as {
    title: string;
    desc: string;
    bullets: string[];
    href: string;
  }[];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] page-top-pad">
      <SEOHead
        title={t.meta.servicesTitle}
        description={t.meta.servicesDesc}
        canonical="https://www.zentrixdigital.eu/services"
      />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 px-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_0%,rgba(37,99,235,0.1),transparent_60%)]" />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '72px 72px' }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0" />
              {t.nav.services}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[1.03] text-white mb-7"
            >
              {t.services.heroTitle}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[#F5F7FF] text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
            >
              {t.services.heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─────────────────────────────────────── */}
      <section className="py-16 px-5 bg-[#080d16]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {services.map((svc, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <motion.div key={i} variants={fadeUp}>
                  <Link href={svc.href}>
                    <div
                      data-testid={`service-overview-card-${i}`}
                      className="group h-full flex flex-col gap-6 p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.55] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-blue-400/[0.90] hover:-translate-y-2 hover:shadow-[0_24px_60px_-16px_rgba(37,99,235,0.18),inset_0_1px_0_rgba(59,130,246,0.08)] transition-all duration-400 cursor-pointer"
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-blue-600/[0.14] border border-blue-400/[0.30] flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-400/[0.90] transition-all duration-300">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-lg font-bold text-white tracking-tight mb-2">{svc.title}</h2>
                          <p className="text-sm text-[#F5F7FF] leading-relaxed">{svc.desc}</p>
                        </div>
                      </div>
                      <ul className="flex flex-col gap-2 pl-4 sm:pl-[68px]">
                        {svc.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-center gap-2.5 text-[#F5F7FF] text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/50 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="pl-4 sm:pl-[68px]">
                        <span className="inline-flex items-center gap-1.5 text-blue-500/60 text-xs font-bold uppercase tracking-widest group-hover:gap-2.5 group-hover:text-blue-400 transition-all duration-200">
                          {t.services.moreInfoLabel}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-32 px-5 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/[0.50] p-7 sm:p-12 md:p-16 text-center"
            style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(37,99,235,0.1) 0%, rgba(11,11,11,0) 70%), linear-gradient(135deg, rgba(15,25,50,0.6) 0%, rgba(11,11,11,1) 100%)' }}
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-600/10 blur-[90px] rounded-full" />
            <motion.h2 variants={fadeUp} className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {t.services.ctaTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="relative z-10 text-[#F5F7FF] text-base leading-relaxed max-w-xl mx-auto mb-10">
              {t.services.ctaText}
            </motion.p>
            <motion.div variants={fadeUp} className="relative z-10">
              <Link
                href="/contact"
                data-testid="services-cta-btn"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:shadow-[0_0_48px_rgba(37,99,235,0.6)] hover:scale-[1.03]"
              >
                {t.services.ctaButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;
