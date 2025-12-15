import type { MetadataRoute } from "next";

const baseUrl = "https://luchoscleaning.com";

const staticRoutes: string[] = [
  "/",
  "/about-us",
  "/request-quote",
  "/service-areas",
  "/service-areas/houston",
  "/service-areas/spring-branch",
  "/service-areas/greater-heights",
  "/service-areas/greenway-upper-kirby-area",
  "/service-areas/memorial",
  "/service-areas/greater-uptown",
  "/service-areas/bellaire",
  "/service-areas/medical-center-area",
  "/service-areas/the-memorial-villages",
  "/service-areas/river-oaks",
  "/service-areas/mid-west",
  "/service-areas/briar-forest",
  "/service-areas/west-university-place",
  "/service-areas/washington-ave-memorial-park",
  "/house-cleaning-houston",
  "/commercial-cleaning-houston",
  "/our-services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((route) => {
    let priority = 0.7;
    if (route === "/") {
      priority = 1;
    } else if (
      route === "/house-cleaning-houston" ||
      route === "/commercial-cleaning-houston" ||
      route === "/service-areas" ||
      route === "/request-quote"
    ) {
      priority = 0.9;
    } else if (route.startsWith("/service-areas/")) {
      priority = 0.8;
    }

    return {
      url: baseUrl + route,
      lastModified,
      changeFrequency: "monthly",
      priority,
    };
  });
}
