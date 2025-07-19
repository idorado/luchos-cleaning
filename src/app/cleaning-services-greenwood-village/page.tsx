import { Metadata } from 'next';
import CleaningServicesComponent from '@/components/CleaningServicesComponent';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Greenwood Village | Kathy Clean',
  description: 'Professional house cleaning and maid services in Greenwood Village, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
  openGraph: {
    title: 'Professional Cleaning Services in Greenwood Village | Kathy Clean',
    description: 'Professional house cleaning and maid services in Greenwood Village, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
    url: 'https://www.kathyclean.com/cleaning-services-greenwood-village',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/cleaning-services-greenwood-village',
  },
};

const greenwoodVillageDescription = `Greenwood Village homeowners choose Kathy Clean for reliable, high-quality cleaning services that fit their busy lifestyles.`;

export default function CleaningServicesGreenwoodVillage() {
  return (
    <CleaningServicesComponent 
      location="Greenwood Village"
      // La URL de la imagen ya está definida en el componente principal
      whyChooseUsDescription={greenwoodVillageDescription}
    />
  );
}
