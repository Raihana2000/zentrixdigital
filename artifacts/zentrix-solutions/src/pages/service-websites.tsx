import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const ServiceWebsites = () => {
  const { t } = useTranslation();
  const data = t.servicePages.websites;
  return (
    <ServiceDetailPage
      data={data}
      pageTitle={t.meta.websitesTitle}
      backLabel={t.nav.services}
      servicesLabel={t.nav.services}
      contactLabel={t.home.ctaSecondary}
      metaDesc={t.meta.websitesDesc}
      canonical="https://www.zentrixdigital.eu/websites"
    />
  );
};

export default ServiceWebsites;
