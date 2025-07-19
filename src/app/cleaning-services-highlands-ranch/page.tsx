import { Metadata } from 'next';
import CleaningServicesComponent from '@/components/CleaningServicesComponent';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Highlands Ranch | Kathy Clean',
  description: 'Professional house cleaning and maid services in Highlands Ranch, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
  openGraph: {
    title: 'Professional Cleaning Services in Highlands Ranch | Kathy Clean',
    description: 'Professional house cleaning and maid services in Highlands Ranch, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
    url: 'https://www.kathyclean.com/cleaning-services-highlands-ranch',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/cleaning-services-highlands-ranch',
  },
};

const highlandsRanchDescription = `In Highlands Ranch, we deliver top-notch cleaning services that leave your home spotless and refreshed.`;

export default function CleaningServicesHighlandsRanch() {
  return (
    <CleaningServicesComponent 
      location="Highlands Ranch"
      // La URL de la imagen ya está definida en el componente principal
      whyChooseUsDescription={highlandsRanchDescription}
    />
  );
}
