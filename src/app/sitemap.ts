import type { MetadataRoute } from "next";
import { services, locations } from "@/config/route";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://kathyclean.com";

	// Static routes
	const staticRoutes = [
		"",
		"/about-us",
		"/resources",
		"/contact",
		"/sitemap",
		"/robots.txt",
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: route === "" ? 1.0 : 0.8,
	}));

	const dynamicRoutes = services.flatMap((service) =>
		locations.map((location) => ({
			url: `${baseUrl}/${service}-${location}`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
		})),
	);

	return [...staticRoutes, ...dynamicRoutes];
}
