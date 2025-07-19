import { Metadata } from 'next';
import CleaningServicesComponent from '@/components/CleaningServicesComponent';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Englewood | Kathy Clean',
  description: 'Professional house cleaning and maid services in Englewood, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
  openGraph: {
    title: 'Professional Cleaning Services in Englewood | Kathy Clean',
    description: 'Professional house cleaning and maid services in Englewood, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
    url: 'https://www.kathyclean.com/cleaning-services-englewood',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/cleaning-services-englewood',
  },
};

const englewoodDescription = `In Englewood, we offer reliable and thorough cleaning services tailored to your schedule. Trust our experienced team to keep your home looking its best.`;

export default function CleaningServicesEnglewood() {
  return (
    <CleaningServicesComponent 
      location="Englewood"
      // La URL de la imagen ya está definida en el componente principal
      whyChooseUsDescription={englewoodDescription}
    />
  );
}
