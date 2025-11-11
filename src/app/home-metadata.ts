import { Metadata } from 'next';

export const homePageMetadata: Metadata = {
  title: "Residential & Commercial Cleaning in Houston | Lucho's Cleaning",
  description: "Top-rated cleaning in Houston & nearby. Residential & commercial cleaning. 48h guarantee",
  icons: [{ rel: "icon", url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomaYo5lyrN0W8yorQH6lnDudV4OjgIFLEC2YpM" }],
  keywords: "cleaning, Houston, residential, commercial, 48h guarantee",
  alternates: {
    canonical: "https://kathyclean.com/",
    languages: {
      "en-US": "https://kathyclean.com/"
    }
  },
  other: {
    'application-ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Lucho's Cleaning",
      "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
      "@id": "https://www.kathyclean.com",
      "url": "https://www.kathyclean.com",
      "telephone": "+1 346-488-6044",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7500 E Arapahoe Rd #200",
        "addressLocality": "Centennial",
        "addressRegion": "CO",
        "postalCode": "80112",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.5952,
        "longitude": -104.9003
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "priceRange": "$$",
      "areaServed": [
        { "@type": "Place", "name": "Castle Rock" },
        { "@type": "Place", "name": "Centennial" },
        { "@type": "Place", "name": "Houston" },
        { "@type": "Place", "name": "Englewood" },
        { "@type": "Place", "name": "Greenwood Village" },
        { "@type": "Place", "name": "Highlands Ranch" },
        { "@type": "Place", "name": "Littleton" },
        { "@type": "Place", "name": "Lone Tree" },
        { "@type": "Place", "name": "Parker" }
      ],
      "sameAs": [
        "https://www.facebook.com/kathyclean",
        "https://www.instagram.com/kathyclean",
        "https://g.co/kgs/tifVeFC"
      ]
    })
  }
};
