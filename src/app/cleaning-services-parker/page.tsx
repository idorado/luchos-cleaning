import { Metadata } from 'next';
import CleaningServicesComponent from '@/components/CleaningServicesComponent';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Parker | Kathy Clean',
  description: 'Professional house cleaning and maid services in Parker, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
  openGraph: {
    title: 'Professional Cleaning Services in Parker | Kathy Clean',
    description: 'Professional house cleaning and maid services in Parker, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
    url: 'https://www.kathyclean.com/cleaning-services-parker',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/cleaning-services-parker',
  },
};

const parkerDescription = `Parker residents trust Kathy Clean for all their house cleaning needs. We bring professional service and attention to detail to every home we clean.`;

export default function CleaningServicesParker() {
  return (
    <CleaningServicesComponent 
      location="Parker"
      // La URL de la imagen ya está definida en el componente principal
      whyChooseUsDescription={parkerDescription}
    />
  );
}
