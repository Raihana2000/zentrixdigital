import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CalendarClock, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t.contact.toastTitle,
        description: t.contact.toastDesc,
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  const inputCls = "premium-input";
  const textareaCls = "premium-textarea";

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden page-top-pad">
      <SEOHead
        title={t.meta.contactTitle}
        description={t.meta.contactDesc}
        canonical="https://www.zentrixdigital.eu/contact"
      />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 px-5 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-700/8 blur-[140px] rounded-full" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '72px 72px' }}
        />
        <motion.div
          initial="hidden" animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0" />
            {t.nav.contact}
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[-0.03em] leading-[1.03] mb-7">
            {t.contact.heroTitle}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {t.contact.heroSubtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* ─── CONTACT SECTION ────────────────────────────────────── */}
      <section className="py-8 px-5 pb-32 bg-[#080d16]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">

            {/* LEFT — Info */}
            <motion.div
              initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16,1,0.3,1] }}
              className="flex flex-col gap-7"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug tracking-tight">
                  {t.contact.readyTitle}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.contact.readyText}
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-3">
                {[
                  {
                    href: "https://maps.google.com/?q=Amsterdam,Netherlands",
                    external: true,
                    icon: MapPin,
                    label: t.contact.labelLocation,
                    value: t.contact.location,
                    testid: "contact-location"
                  },
                  {
                    href: "tel:+31683284995",
                    external: false,
                    icon: Phone,
                    label: t.contact.labelPhone,
                    value: t.contact.phone,
                    testid: "contact-phone"
                  },
                  {
                    href: "mailto:info@zentrixdigital.eu",
                    external: false,
                    icon: Mail,
                    label: t.contact.labelEmail,
                    value: t.contact.email,
                    testid: "contact-email"
                  },
                ].map(({ href, external, icon: Icon, label, value, testid }) => (
                  <a
                    key={testid}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.55] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] hover:border-blue-400/[0.90] transition-all duration-300"
                    data-testid={testid}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600/[0.14] border border-blue-400/[0.30] flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-400/[0.90] transition-all duration-300">
                      <Icon className="w-4.5 h-4.5 text-blue-400" size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#DCE8FF] uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ))}

                {/* Response time */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.55] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)]">
                  <div className="w-10 h-10 rounded-xl bg-green-500/[0.14] border border-green-400/[0.30] flex items-center justify-center shrink-0">
                    <Clock className="w-[18px] h-[18px] text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-[#DCE8FF] uppercase tracking-widest font-semibold mb-0.5">{t.contact.labelResponse}</p>
                    <p className="text-white text-sm font-medium">{t.contact.responseTime}</p>
                  </div>
                </div>

                {/* Business hours */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.55] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/[0.14] border border-blue-400/[0.30] flex items-center justify-center shrink-0">
                      <CalendarClock className="w-[18px] h-[18px] text-blue-400" />
                    </div>
                    <p className="text-xs text-[#DCE8FF] uppercase tracking-widest font-semibold">
                      {t.contact.hours.title}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2 pl-[52px]">
                    {t.contact.hours.lines.map((line, i) => (
                      <li key={i} className="text-xs text-[#F3F7FF] leading-snug">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/31683284995?text=Goedendag,%20ik%20heb%20interesse%20in%20jullie%20diensten.%20Kunnen%20jullie%20mij%20verder%20helpen%3F"
                target="_blank"
                rel="noreferrer"
                data-testid="btn-whatsapp-contact"
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#25D366]/8 border border-[#25D366]/20 hover:bg-[#25D366]/15 hover:border-[#25D366]/40 text-[#25D366] font-semibold transition-all duration-200 text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.contact.whatsappCta}
              </a>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16,1,0.3,1] }}
              className="pc p-7 sm:p-9"
            >
              <h3 className="text-xl font-bold text-white mb-8 tracking-tight">{t.contact.formTitle}</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="premium-label">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name" type="text" required
                    placeholder={t.contact.form.namePlaceholder}
                    data-testid="input-name"
                    className={inputCls}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="premium-label">
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email" type="email" required
                      placeholder={t.contact.form.emailPlaceholder}
                      data-testid="input-email"
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="premium-label">
                      {t.contact.form.phone}
                    </label>
                    <input
                      id="phone" type="tel"
                      placeholder={t.contact.form.phonePlaceholder}
                      data-testid="input-phone"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="premium-label">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message" required rows={5}
                    placeholder={t.contact.form.messagePlaceholder}
                    data-testid="input-message"
                    className={textareaCls}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="btn-submit-contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:scale-[1.02] mt-1"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      {t.contact.sendingLabel}
                    </span>
                  ) : (
                    <>{t.contact.submitLabel} <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-center text-xs text-blue-200/70 mt-1">
                  {t.contact.noSpamNotice}
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
