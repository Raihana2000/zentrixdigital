import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const ServiceApplicaties = () => {
  const { t } = useTranslation();
  const data = t.servicePages.applicaties;
  return (
    <ServiceDetailPage
      data={data}
      pageTitle={t.meta.applicatiesTitle}
      backLabel={t.nav.services}
      servicesLabel={t.nav.services}
      contactLabel={t.home.ctaSecondary}
      metaDesc={t.meta.applicatiesDesc}
      canonical="https://www.zentrixdigital.eu/applicaties"
    />
  );
};

export default ServiceApplicaties;
