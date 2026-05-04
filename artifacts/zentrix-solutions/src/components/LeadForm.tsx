import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const LeadForm: React.FC = () => {
  const { t, language } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  const isNL = language !== 'en';
  const labels = {
    heading: isNL ? 'Liever direct een aanvraag doen?' : 'Prefer to send a request directly?',
    submit: isNL ? 'Verstuur aanvraag' : 'Send request',
    sending: isNL ? 'Bezig…' : 'Sending…',
    successTitle: isNL ? 'Aanvraag ontvangen!' : 'Message received!',
    successText: isNL
      ? 'Wij nemen binnen 1 werkdag contact met u op.'
      : 'We will get back to you within 1 working day.',
    errorText: isNL
      ? 'Er is iets misgegaan. Probeer het opnieuw of neem direct contact op via WhatsApp.'
      : 'Something went wrong. Please try again or reach us directly via WhatsApp.',
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      message: fd.get('message'),
    };
    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT ?? '/api/contact';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return (
      <div className="pc p-7 text-center">
        <div className="w-12 h-12 rounded-full bg-green-500/15 border border-green-400/30 flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-green-400 fill-none" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold mb-1">{labels.successTitle}</p>
        <p className="text-white/60 text-sm">{labels.successText}</p>
      </div>
    );
  }

  return (
    <div className="pc p-6 sm:p-8">
      <h3 className="text-base font-bold text-white mb-5 tracking-tight">{labels.heading}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lf-name" className="premium-label">{t.contact.form.name}</label>
            <input
              id="lf-name" name="name" type="text" required
              placeholder={t.contact.form.namePlaceholder}
              className="premium-input"
              data-testid="lf-name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lf-email" className="premium-label">{t.contact.form.email}</label>
            <input
              id="lf-email" name="email" type="email" required
              placeholder={t.contact.form.emailPlaceholder}
              className="premium-input"
              data-testid="lf-email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lf-phone" className="premium-label">{t.contact.form.phone}</label>
          <input
            id="lf-phone" name="phone" type="tel"
            placeholder={t.contact.form.phonePlaceholder}
            className="premium-input"
            data-testid="lf-phone"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lf-message" className="premium-label">{t.contact.form.message}</label>
          <textarea
            id="lf-message" name="message" required rows={3}
            placeholder={t.contact.form.messagePlaceholder}
            className="premium-textarea"
            data-testid="lf-message"
          />
        </div>
        {status === 'error' && (
          <p className="text-red-400 text-xs" role="alert">{labels.errorText}</p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          data-testid="lf-submit"
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_32px_rgba(37,99,235,0.55)] hover:scale-[1.02]"
        >
          {status === 'sending' ? (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {labels.sending}
            </span>
          ) : (
            <>{labels.submit} <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
        <p className="text-center text-xs text-white/50">{t.contact.noSpamNotice}</p>
      </form>
    </div>
  );
};

export default LeadForm;
