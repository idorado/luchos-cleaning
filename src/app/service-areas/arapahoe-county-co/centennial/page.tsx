import JsonLd from "@/components/json-ld";
import { home } from "@/config/json-ld";
import LocationServiceAreaPage from "@/components/service-areas/LocationServiceAreaPage";

export const metadata = {
  title: "Reliable House Cleaning Service in Centennial, CO",
  description:
    "Kathy Clean provides a reliable house cleaning service in Centennial, CO. Trusted, detailed, and eco-conscious cleaning for spotless homes. Call now!",
  alternates: {
    canonical:
      "https://kathyclean.com/service-areas/arapahoe-county-co/centennial",
  },
  robots: { index: false, follow: false },
};

// NOTE: Si algún día agregamos Server Actions a esta page, la directiva va dentro de la función acción, no a nivel de archivo.

export default async function Home() {
  return (
    <LocationServiceAreaPage
      title={metadata.title}
      description={metadata.description}
      canonical={metadata.alternates.canonical}
      robotsIndex={false}
      heroTitle="Reliable House Cleaning Service"
      heroSubtitle="in Centennial, CO"
      heroParagraphs={[
        `<a href=\"https://kathyclean.com/\" class=\"underline text-secondary\">Kathy Clean</a> provides a reliable house cleaning service in Centennial, CO. Our dedicated cleaners focus on consistent quality, spotless results, and eco-friendly methods that refresh every corner of your home. Whether for weekly upkeep or a full deep clean, we ensure every surface shines with care and precision.`,
      ]}
      heroImage={{
        url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu",
        alt: "Professional house cleaning service in Centennial, CO",
      }}
      ctaPhone="+13464886044"
      ctaSmsNumber="+13464886044"
      benefitsTitle="Why Choose Kathy Clean for a Reliable House Cleaning Service in Centennial, CO?"
      benefitsParagraph="Trusted professionals delivering spotless, healthy, and organized homes throughout Centennial."
      benefitsItems={[
        {
          title: "Detailed Room-by-Room Cleaning:",
          body: `Our reliable house cleaning service in <a href=\"https://en.wikipedia.org/wiki/Centennial,_Colorado\" target=\"_blank\" class=\"underline text-cyan-500\">Centennial, CO</a> includes meticulous cleaning for kitchens, bathrooms, living spaces, and bedrooms. From baseboards to ceiling fans, every corner is cleaned with precision to ensure lasting freshness and hygiene.`,
        },
        {
          title: "Safe and Eco-Friendly Cleaning Products:",
          body: "Kathy Clean uses biodegradable, non-toxic cleaning solutions safe for your family, pets, and the environment. Our products eliminate dirt and allergens effectively while maintaining indoor air quality and promoting a healthier home.",
        },
        {
          title: "Flexible Scheduling and Consistent Results:",
          body: "Whether you prefer weekly, bi-weekly, or one-time cleaning, our team adapts to your schedule for maximum convenience. Homeowners in Centennial trust our reliable house cleaning service for dependable timing and consistent results that exceed expectations.",
        },
      ]}
      benefitsImage={{
        url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomlkWQowW1K9N4DUxFng7weyZbAGHESLJh3Ifa",
        alt: "Reliable House Cleaning Service in Centennial CO",
      }}
      whyTitle="Why House Cleaning Matters in Centennial, CO"
      whyParagraph="Clean homes support health, comfort, and lasting property value in every Centennial neighborhood."
      whyItems={[
        {
          title: "Improves Indoor Air and Family Health:",
          body: "Regular cleaning reduces allergens, dust mites, and pet dander that accumulate in fabrics, carpets, and vents. A reliable house cleaning service in Centennial, CO helps ensure fresher air, healthier breathing, and a more hygienic home for you and your loved ones.",
        },
        {
          title: "Protects Home Surfaces and Long-Term Value:",
          body: "Consistent upkeep prevents buildup of grime, mold, and bacteria that can damage finishes and fixtures. By scheduling a reliable house cleaning service in Centennial, CO, homeowners maintain both cleanliness and the long-term integrity of their property’s interior spaces.",
        },
        {
          title: "Boosts Comfort, Confidence, and Community Pride:",
          body: `A clean, organized home enhances mood and productivity while fostering a sense of pride in one’s surroundings. Residents of Centennial trust <a href=\"https://kathyclean.com/\" class=\"underline text-cyan-500\">Kathy Clean</a> to maintain pristine living environments that reflect care, comfort, and community standards.`,
        },
      ]}
      whyImage={{
        url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh",
        alt: "Reliable House Cleaning in Centennial CO",
      }}
      faqItems={[
        {
          question:
            "What does a reliable house cleaning service in Centennial, CO include?",
          answer:
            "A reliable house cleaning service in Centennial, CO typically covers dusting, mopping, vacuuming, and sanitizing all major areas of your home including bathrooms, kitchens, and bedrooms. <b>Kathy Clean</b> delivers thorough cleaning using eco-friendly solutions, leaving every room spotless, fresh, and comfortable for your family.",
        },
        {
          question:
            "How often should I schedule a house cleaning service in Centennial, CO?",
          answer:
            "The ideal frequency for a house cleaning service in Centennial, CO depends on lifestyle and household size. Many residents prefer weekly or biweekly cleanings, while <b>Kathy Clean</b> also provides monthly deep cleans and custom maintenance plans to ensure your home always stays spotless and welcoming.",
        },
        {
          question:
            "Do I need to supply cleaning materials for a house cleaning service in Centennial, CO?",
          answer:
            "No, you don’t need to provide any products or tools for a house cleaning service in Centennial, CO. <b>Kathy Clean</b> arrives with professional-grade, non-toxic supplies and advanced equipment to ensure consistent, high-quality results while protecting your family and home environment.",
        },
      ]}
      mapTitle="Find Us"
      mapParagraph="Our reliable house cleaning service in Centennial, CO extends to homes across neighborhoods like Willow Creek, Foxridge, and Piney Creek. Kathy Clean delivers consistent, eco-friendly cleaning that keeps every home spotless and inviting. We proudly serve Centennial residents with dependable quality, attention to detail, and customer-focused care."
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30670.930710086667!2d-104.8869616!3d39.5945516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8586c6b0a8cb%3A0xe8c5b8b84cc7eb7b!2sCentennial%2C%20CO%2C%20USA!5e0!3m2!1sen!2sus!4v1761825439021!5m2!1sen!2sus"
    >
      <JsonLd data={home()} />
    </LocationServiceAreaPage>
  );
}
