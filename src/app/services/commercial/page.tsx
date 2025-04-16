"use server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import BusinessCleaningEstimateForm from "@/components/forms/BusinessCleaningEstimateForm";

export default async function CommercialPage() {
	const industries = [
		{
			title: "Preschools & Daycares",
			description:
				"Specialized cleaning for safe, healthy environments for children and staff.",
			icon: (
				<img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOa14iZLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu" alt="Preschools & Daycares"/>
			),
		},
		{
			title: "Pet Stores",
			description: "Clean, odor-free spaces for pets and customers alike.",
			icon: (
				<img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom89FJzAKhMCiFKE7nTrZgcpJWtXBskwHlzmqf" alt="Pet Stores"/>
			),
		},
		{
			title: "Medical Offices & Healthcare",
			description:
				"Strict protocols for hygienic, compliant healthcare environments.",
			icon: (
				<img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUMazhBuxbLyY5TVln2vGePNI6BEHMuo4rXcz" alt="Medical Offices & Healthcare"/>
			),
		},
		{
			title: "HOA's",
			description:
				"Community-focused cleaning for shared living spaces and amenities.",
			icon: (
				<img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUWa1k9uxbLyY5TVln2vGePNI6BEHMuo4rXcz" alt="HOA's"/>
			),
		},
		{
			title: "Fitness Centers, Gyms & Studios",
			description:
				"Sanitized equipment and spaces for healthy, active lifestyles.",
			icon: (
				<img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom3s8OSHQ7wMhU5pckd8lfSqEHr2VL9OoNGxPs" alt="Fitness Centers, Gyms & Studios"/>
			),
		},
		{
			title: "Facility Management Companies",
			description:
				"Comprehensive solutions for large and multi-site properties.",
			icon: (
				<img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomQrFNlQz8aAfRP5i946jBEorHLxSGqWcp3OkX" alt="Facility Management Companies"/>
			),
		},
	];

	return (
		<main className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<HeroSection>
				<div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
					<Badge className="bg-ring">SERVICES</Badge>
					<h1 className="text-4xl md:text-5xl font-bold mb-4 ">
						Janitorial Services
						<br />
						by Kathy Clean
					</h1>
					<p className="text-lg mb-8">
						A clean workspace protects your people, boosts productivity, and
						leaves a lasting impression. We help your business thrive with
						top-quality professional cleaning.
					</p>
					<Button size="lg" className="w-full sm:w-auto">
						<Link href="#request-quote">REQUEST A SERVICE</Link>
					</Button>
				</div>
				<div className="relative hidden md:flex w-full justify-center items-center">
					<Image
						src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8nF7NwKhMCiFKE7nTrZgcpJWtXBskwHlzmqf"
						alt="Professional commercial cleaning service"
						width={400}
						height={400}
						className="object-cover rounded-lg shadow-md "
					/>
				</div>
			</HeroSection>

			{/* Industries We Specialize In */}
			<section className="flex flex-col items-center justify-center gap-8 py-24 bg-gray-100">
				<div className="container mx-auto px-4 text-center text-sm text-muted">
					<h3 className="font-semibold mb-2 text-2xl md:text-3xl lg:text-4xl text-primary-foreground">
						Industries we specialize in
					</h3>
					<p className="mb-4 text-lg">
						Each industry has unique cleaning needs, from specific processes and
						products to the ideal cleaning frequency. We tailor our services to
						ensure the best results for your business, providing the right
						solutions to keep your space clean, safe, and well-maintained.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl px-4">
					{industries.map((industry, index) => (
						<div
							key={industry.title}
							className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 md:p-8 flex flex-col items-center md:items-start text-center md:text-left"
						>
							<div className="mb-4 md:mb-6 w-16 h-16 flex items-center justify-center">
								{industry.icon}
							</div>
							<h3 className="font-bold text-lg md:text-xl text-primary-foreground mb-2">
								{industry.title}
							</h3>
							<p className="text-gray-600 text-sm md:text-base">{industry.description}</p>
						</div>
					))}
				</div>
			</section>

			<BusinessCleaningEstimateForm />
		</main>
	);
}
