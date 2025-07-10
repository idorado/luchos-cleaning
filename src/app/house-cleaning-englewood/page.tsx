import ResidentialServiceComponent from "@/components/ResidentialServiceComponent";

export default function HouseCleaningService() {
  return <ResidentialServiceComponent location="Englewood" />;
}

export const metadata = {
  title: 'House Cleaning & Maid Service in Englewood, CO | Kathy Clean',
  description: 'Professional house cleaning and maid services in Englewood, CO. Enjoy a spotless home with our trusted cleaning services. Satisfaction guaranteed!',
  openGraph: {
    title: 'House Cleaning & Maid Service in Englewood, CO | Kathy Clean',
    description: 'Professional house cleaning and maid services in Englewood, CO. Enjoy a spotless home with our trusted cleaning services. Satisfaction guaranteed!',
    url: 'https://www.kathyclean.com/house-cleaning-englewood',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/house-cleaning-englewood',
  },
};
