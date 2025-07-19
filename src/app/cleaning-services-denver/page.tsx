import { Metadata } from 'next';
import LandingHero from '@/components/sections/landing-hero';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Denver | Kathy Clean',
  description: 'Professional house cleaning and maid services in Denver, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
  openGraph: {
    title: 'Professional Cleaning Services in Denver | Kathy Clean',
    description: 'Professional house cleaning and maid services in Denver, CO. Deep cleaning, move-in/move-out, and regular maintenance with a 100% satisfaction guarantee.',
    url: 'https://www.kathyclean.com/cleaning-services-denver',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/cleaning-services-denver',
  },
};

const denverDescription = `At Kathy Clean, we specialize in providing professional house cleaning services in Denver, tailored to the needs of busy families, professionals, and retirees. Our team of trained, background-checked cleaners understands the specific needs of Denver households, from detailed deep cleanings to regular recurring cleaning services that help you maintain a fresh and organized home every week.`;

import CleaningServicesComponent from '@/components/CleaningServicesComponent';

export default function CleaningServicesDenver() {
  return (
    <CleaningServicesComponent 
      location="Denver"
      heroImageUrl="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomn8OQ9kVwNq3haW9IjyTl7dbP5tZX4mrvg1GQ"
      whyChooseUsDescription={denverDescription}
    />
  );
}
