import { Metadata } from 'next';
import CleaningServicesComponent from '@/components/CleaningServicesComponent';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Lone Tree | Kathy Clean',
  description: 'Professional house cleaning and maid services in Lone Tree, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
  openGraph: {
    title: 'Professional Cleaning Services in Lone Tree | Kathy Clean',
    description: 'Professional house cleaning and maid services in Lone Tree, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
    url: 'https://www.kathyclean.com/cleaning-services-lone-tree',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/cleaning-services-lone-tree',
  },
};

const loneTreeDescription = `Serving Lone Tree with professional cleaning services that meet the highest standards. Our team is committed to making your home shine with attention to detail and exceptional service.`;

export default function CleaningServicesLoneTree() {
  return (
    <CleaningServicesComponent 
      location="Lone Tree"
      // La URL de la imagen ya está definida en el componente principal
      whyChooseUsDescription={loneTreeDescription}
    />
  );
}
