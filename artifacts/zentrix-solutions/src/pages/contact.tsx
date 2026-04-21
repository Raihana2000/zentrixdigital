import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CalendarClock, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
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

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden page-top-pad">
      <SEOHead
        title={t.meta.contactTitle}
        description={t.meta.contactDesc}
        canonical="https://www.zentrixdigital.eu/contact"
      />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-5 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full" />
        </div>
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5">
            {t.contact.heroTitle}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.contact.heroSubtitle}
          </p>
        </motion.div>
      </section>

      {/* ─── CONTACT SECTION ────────────────────────────────────── */}
      <section className="py-16 px-5 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* LEFT — Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  {t.contact.readyTitle}
                </h2>
                <p className="text-gray-400 text-base leading-relaxed">
                  {t.contact.readyText}
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-4">
                <a
                  href="https://maps.google.com/?q=Amsterdam,Netherlands"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/30 transition-colors duration-300"
                  data-testid="contact-location"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{t.contact.labelLocation}</p>
                    <p className="text-white font-medium">{t.contact.location}</p>
                  </div>
                </a>

                <a
                  href="tel:+31683284995"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/30 transition-colors duration-300"
                  data-testid="contact-phone"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{t.contact.labelPhone}</p>
                    <p className="text-white font-medium">{t.contact.phone}</p>
                  </div>
                </a>

                <a
                  href="mailto:info@zentrixdigital.eu"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-blue-500/30 transition-colors duration-300"
                  data-testid="contact-email"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{t.contact.labelEmail}</p>
                    <p className="text-white font-medium">{t.contact.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/8">
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{t.contact.labelResponse}</p>
                    <p className="text-white font-medium">{t.contact.responseTime}</p>
                  </div>
                </div>

                {/* Business hours */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <CalendarClock className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                      {t.contact.hours.title}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2 pl-[52px]">
                    {t.contact.hours.lines.map((line, i) => (
                      <li key={i} className="text-sm text-gray-400 leading-snug">
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
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/25 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 text-[#25D366] font-semibold transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.contact.whatsappCta}
              </a>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 sm:p-9"
            >
              <h3 className="text-xl font-bold text-white mb-7">{t.contact.formTitle}</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    data-testid="input-name"
                    className="w-full h-12 px-4 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder={t.contact.form.emailPlaceholder}
                      data-testid="input-email"
                      className="w-full h-12 px-4 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                      {t.contact.form.phone}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder={t.contact.form.phonePlaceholder}
                      data-testid="input-phone"
                      className="w-full h-12 px-4 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder={t.contact.form.messagePlaceholder}
                    data-testid="input-message"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="btn-submit-contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_32px_rgba(37,99,235,0.55)] mt-1"
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

                <p className="text-center text-xs text-gray-600 mt-1">
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
