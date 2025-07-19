import { Metadata } from 'next';
import CleaningServicesComponent from '@/components/CleaningServicesComponent';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Centennial | Kathy Clean',
  description: 'Professional house cleaning and maid services in Centennial, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
  openGraph: {
    title: 'Professional Cleaning Services in Centennial | Kathy Clean',
    description: 'Professional house cleaning and maid services in Centennial, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
    url: 'https://www.kathyclean.com/cleaning-services-centennial',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/cleaning-services-centennial',
  },
};

const centennialDescription = `At Kathy Clean, we provide exceptional cleaning services to the Centennial community. Our team is dedicated to delivering top-quality results for your home, whether you need a one-time deep clean or regular maintenance.`;

export default function CleaningServicesCentennial() {
  return (
    <CleaningServicesComponent 
      location="Centennial"
      // La URL de la imagen ya está definida en el componente principal
      whyChooseUsDescription={centennialDescription}
    />
  );
}
