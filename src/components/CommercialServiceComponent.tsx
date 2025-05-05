"use server";
import HeroSection from "@/components/HeroSection";
import BusinessCleaningEstimateForm from "@/components/forms/BusinessCleaningEstimateForm";
import IndustriesSpecialized from "@/components/sections/industries-specialized";

interface CommercialServiceComponentProps {
  location: string;
}

const CommercialServiceComponent = async ({ location }: CommercialServiceComponentProps) => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        category="SERVICES"
        title={`Commercial Services${location ? ` in ${location}` : ''}`}
        description="A clean workspace protects your people, boosts productivity, and leaves a lasting impression. We help your business thrive with top-quality professional cleaning."
        linkUrl="#request-quote"
        linkText="REQUEST A SERVICE"
        imgUrl="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8nF7NwKhMCiFKE7nTrZgcpJWtXBskwHlzmqf"
        imgAlt="Professional commercial cleaning service"
        imgWidth={400}
        imgHeight={400}
      />

      <IndustriesSpecialized />

      <BusinessCleaningEstimateForm />
    </main>
  );
};

export default CommercialServiceComponent;
