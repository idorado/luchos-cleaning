import ResidentialServiceComponent from "@/components/ResidentialServiceComponent";

export default function HouseCleaningService() {
  return <ResidentialServiceComponent location="Littleton" />;
}

export const metadata = {
  title: 'House Cleaning & Maid Service in Littleton, CO | Kathy Clean',
  description: 'Professional house cleaning and maid services in Littleton, CO. Enjoy a spotless home with our trusted cleaning services. Satisfaction guaranteed!',
  openGraph: {
    title: 'House Cleaning & Maid Service in Littleton, CO | Kathy Clean',
    description: 'Professional house cleaning and maid services in Littleton, CO. Enjoy a spotless home with our trusted cleaning services. Satisfaction guaranteed!',
    url: 'https://www.kathyclean.com/house-cleaning-littleton',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/house-cleaning-littleton',
  },
};
