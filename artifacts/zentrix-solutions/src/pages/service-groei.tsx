import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const ServiceGroei = () => {
  const { t } = useTranslation();
  const data = t.servicePages.groei;
  return (
    <ServiceDetailPage
      data={data}
      pageTitle={t.meta.groeiTitle}
      backLabel={t.nav.services}
      servicesLabel={t.nav.services}
      contactLabel={t.home.ctaSecondary}
      metaDesc={t.meta.groeiDesc}
      canonical="https://www.zentrixdigital.eu/digitale-groeiondersteuning"
    />
  );
};

export default ServiceGroei;
