import { Metadata } from 'next';
import CleaningServicesComponent from '@/components/CleaningServicesComponent';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Castle Rock | Kathy Clean',
  description: 'Professional house cleaning and maid services in Castle Rock, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
  openGraph: {
    title: 'Professional Cleaning Services in Castle Rock | Kathy Clean',
    description: 'Professional house cleaning and maid services in Castle Rock, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
    url: 'https://www.kathyclean.com/cleaning-services-castle-rock',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/cleaning-services-castle-rock',
  },
};

const castleRockDescription = `At Kathy Clean, we're proud to serve the Castle Rock community with top-tier cleaning services. Our local team is familiar with the unique needs of Castle Rock homes, from the historic downtown area to the beautiful suburban neighborhoods. We offer flexible scheduling to accommodate your busy lifestyle in Douglas County.`;

export default function CleaningServicesCastleRock() {
  return (
    <CleaningServicesComponent 
      location="Castle Rock"
      // La URL de la imagen ya está actualizada en el componente principal
      whyChooseUsDescription={castleRockDescription}
    />
  );
}
