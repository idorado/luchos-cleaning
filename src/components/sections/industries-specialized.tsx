"use server"


const IndustriesSpecialized = async () => {
	const industries = [
		{
			title: "Preschools & Daycares",
			description:
				"Specialized cleaning for safe, healthy environments for children and staff.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOa14iZLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu"
					alt="Preschools & Daycares"
				/>
			),
		},
		{
			title: "Pet Stores",
			description: "Clean, odor-free spaces for pets and customers alike.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom89FJzAKhMCiFKE7nTrZgcpJWtXBskwHlzmqf"
					alt="Pet Stores"
				/>
			),
		},
		{
			title: "Medical Offices & Healthcare",
			description:
				"Strict protocols for hygienic, compliant healthcare environments.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUMazhBuxbLyY5TVln2vGePNI6BEHMuo4rXcz"
					alt="Medical Offices & Healthcare"
				/>
			),
		},
		{
			title: "HOA's",
			description:
				"Community-focused cleaning for shared living spaces and amenities.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUWa1k9uxbLyY5TVln2vGePNI6BEHMuo4rXcz"
					alt="HOA's"
				/>
			),
		},
		{
			title: "Fitness Centers, Gyms & Studios",
			description:
				"Sanitized equipment and spaces for healthy, active lifestyles.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom3s8OSHQ7wMhU5pckd8lfSqEHr2VL9OoNGxPs"
					alt="Fitness Centers, Gyms & Studios"
				/>
			),
		},
		{
			title: "Facility Management Companies",
			description:
				"Comprehensive solutions for large and multi-site properties.",
			icon: (
				<img
					src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomQrFNlQz8aAfRP5i946jBEorHLxSGqWcp3OkX"
					alt="Facility Management Companies"
				/>
			),
		},
	];
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-24 bg-gray-100">
      <div className="container mx-auto px-4 text-center text-sm text-muted">
        <h3 className="font-semibold mb-2 text-2xl md:text-3xl lg:text-4xl text-primary-foreground">
          Industries we specialize in
        </h3>
      <p className="mb-4 text-lg">
        Each industry has unique cleaning needs, from specific processes and products to the ideal cleaning frequency. We tailor our services to ensure the best results for your business, providing the right solutions to keep your space clean, safe, and well-maintained.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl px-4">
      {industries.map((industry) => (
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
          <p className="text-gray-600 text-sm md:text-base">
            {industry.description}
          </p>
        </div>
      ))}
    </div>
  </section>
  );
};

export default IndustriesSpecialized;
