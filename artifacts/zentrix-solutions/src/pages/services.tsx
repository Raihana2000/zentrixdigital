import React, { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Code2, Cpu, Wrench, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

const SERVICE_ICONS = [Code2, Cpu, Wrench, LineChart];

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t.services.heroTitle} | ZentrixDigital`;
    window.scrollTo({ top: 0 });
  }, [t.services.heroTitle]);

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
      <section className="relative py-24 md:py-32 px-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.10),transparent_55%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {t.services.heroTitle}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              {t.services.heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─────────────────────────────────────── */}
      <section className="py-16 px-5 bg-[#0e0e0e] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {services.map((svc, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <motion.div key={i} variants={fadeUp}>
                  <Link href={svc.href}>
                    <div
                      data-testid={`service-overview-card-${i}`}
                      className="group h-full flex flex-col gap-5 p-8 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/35 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.25)] transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1 flex flex-col gap-3">
                        <h2 className="text-xl font-bold text-white">{svc.title}</h2>
                        <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                        <ul className="flex flex-col gap-2 mt-1">
                          {svc.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-center gap-2 text-gray-400 text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/70 shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-blue-500 text-xs font-semibold uppercase tracking-widest group-hover:gap-2.5 transition-all duration-200">
                        {t.services.moreInfoLabel}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-[#0B0B0B] to-[#0B0B0B] p-12 md:p-16 text-center"
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-blue-600/15 blur-[80px] rounded-full" />
            <motion.h2 variants={fadeUp} className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {t.services.ctaTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="relative z-10 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              {t.services.ctaText}
            </motion.p>
            <motion.div variants={fadeUp} className="relative z-10">
              <Link
                href="/contact"
                data-testid="services-cta-btn"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm sm:text-base"
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
