"use server";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import WhyTrustUsSection from "@/components/sections/why-trust-us";
import ReviewHighlightHouseCleaning from "@/components/sections/review-highlight-house-cleaning";
import ThreeStepProcess from "@/components/sections/three-step-process";
import ReadyForHouseCleaning from "@/components/sections/ready-for-house-cleaning";
import { ServiceCards } from "@/components/cards/services";

interface CleaningServicesComponentProps {
  location?: string;
}

export default async function CleaningServicesComponent({ location = 'Denver' }: CleaningServicesComponentProps) {

  const neighborhoods: { [key: string]: string[] } = {
    'Castle Rock': [
      'The Meadows',
      'Founders Village',
      'Castle Pines',
      'Castle Oaks',
      'Red Hawk Ridge',
      'Plum Creek',
      'Downtown Castle Rock',
      'Terrain',
      'Crystal Valley Ranch',
    ],
    'Denver': [
        'Central Park',
        'Hilltop',
        'Washington Park',
        'Cherry Creek',
        'University Park',
        'Highland',
        'LoDo',
        'RiNo'
    ],
    'Englewood': ['Bates-Logan Park', 'Cherry Creek Vista', 'South Broadway'],
    'Littleton': ['Historic Downtown Littleton', 'The Preserve', 'Highlands Ranch'],
  };

  const locationNeighborhoods = location ? neighborhoods[location] : [];

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection>
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Professional Cleaning Services in {location}
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Kathy Clean offers top-rated, affordable, and reliable cleaning services in {location}.<br /> From homes to offices, we deliver a spotless clean every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="default"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full sm:w-auto min-w-[180px]"
              asChild
            >
              <CtaButton href="/request-quote" className="w-full">
                REQUEST A SERVICE
              </CtaButton>
            </Button>
            <div className="w-full sm:w-auto min-w-[180px] h-10">
              <PhoneButton />
            </div>
          </div>
        </div>
        <div className="relative hidden md:flex w-full justify-center items-center">
          <img
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomlkWQowW1K9N4DUxFng7weyZbAGHESLJh3Ifa"
            alt="Professional cleaning services"
            width={480}
            height={480}
            className="object-cover rounded-lg shadow-md"
            style={{ color: 'transparent', maxWidth: 480, maxHeight: 480 }}
          />
        </div>
      </HeroSection>

      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-foreground">Why Choose Kathy Clean in {location}?</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Kathy Clean, we specialize in providing professional house cleaning services in {location}, tailored to the needs of busy families, professionals, and retirees. Our team of trained, background-checked cleaners understands the specific needs of {location} households, from detailed deep cleanings to regular recurring cleaning services that help you maintain a fresh and organized home every week.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We proudly serve both residential and commercial properties in {location}, offering flexible schedules and custom cleaning plans to suit your home, lifestyle, or business needs.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <li className="flex items-center"><span className="text-green-500 mr-2">✅</span> Fully insured & bonded</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✅</span> Pet-safe and eco-friendly products</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✅</span> Easy online quotes and scheduling</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✅</span> Locally trusted, woman-led team</li>
          </ul>
        </div>
      </section>

      {locationNeighborhoods && locationNeighborhoods.length > 0 && (
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-foreground">Neighborhoods We Serve in {location}</h2>
            <p className="text-lg text-center text-gray-700 mb-8">Kathy Clean provides cleaning services across the most vibrant and established communities in {location}. Our cleaning crews are already active in these neighborhoods, ensuring fast response times and local knowledge.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {locationNeighborhoods.map(hood => <div key={hood} className="bg-white p-4 rounded-lg shadow-sm text-center">{hood}</div>)}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-foreground">Life in {location}: Clean Homes for a Growing Community</h2>
          <p className="text-lg text-gray-700 mb-6">
            The active lifestyle in {location} often leaves little time for deep cleaning—and that's where we come in. Kathy Clean supports {location}’s way of life by taking cleaning off your to-do list, so you can focus on what matters most.
          </p>
          <p className="text-lg text-gray-700">
            Whether you’re a parent juggling school pickups, a retiree enjoying local parks, or a remote worker, our services are built for modern {location} living.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-primary-foreground text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Cleaning Quote in {location} Today</h2>
          <p className="text-lg mb-8">We make it easy to get started. Simply fill out our quote form or give us a call, and we'll provide a transparent estimate with no pressure and no surprises.</p>
          <p className="text-2xl mb-4">🧽 Ready to enjoy a cleaner home in {location}?</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-200">
            <CtaButton href="/request-quote">
              Click below to schedule your quote
            </CtaButton>
          </Button>
        </div>
      </section>

    </main>
  );
}
