import type { Metadata } from "next";

import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import FeatureBar from "@/components/ui/FeatureBar";
import JsonLd from "@/components/json-ld";
import { home } from "@/config/json-ld";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { LocationCard } from "@/components/sections/our-locations";
import { canonicalPath } from "@/lib/canonical";

export const metadata = {
  title: "Comprehensive House Cleaning Service in Arapahoe County, CO",
  description:
    "Kathy Clean Service offers a comprehensive house cleaning service in Arapahoe County, CO. Detailed, and eco-friendly home cleaning solutions. Call now!",
  keywords: [
    "House Cleaning Arapahoe County CO",
    "Comprehensive House Cleaning",
    "Kathy Clean Service",
  ],
  alternates: {
    canonical: "https://kathyclean.com/service-areas/arapahoe-county-co",
  },
};

// NOTE: Si algún día agregamos Server Actions a esta page, la directiva va dentro de la función acción, no a nivel de archivo.

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={home()} />

      {/* Hero Section */}
      <section className="relative bg-foreground overflow-hidden min-h-[380px] md:min-h-[480px]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-2 text-white text-center p-4 md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-primary">
                  Comprehensive House Cleaning Service
                </span>
                <br />
                <span className="text-background">in Arapahoe County, CO</span>
              </h1>
              <p className="text-lg">
                <a
                  href="https://kathyclean.com/"
                  className="underline text-secondary"
                >
                  Kathy Clean Service
                </a>{" "}
                provides a comprehensive house cleaning service in Arapahoe
                County, CO. From detailed deep cleans to routine maintenance,
                our trusted professionals deliver spotless results that make
                every room shine. Whether you’re preparing for guests or
                maintaining a healthy home, our team ensures your space stays
                fresh, organized, and inviting.
              </p>
              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <Button variant="default" className="font-medium" asChild>
                  <CtaButton href="/request-quote">REQUEST A QUOTE</CtaButton>
                </Button>
                <PhoneButton />
                <a
                  href="sms:+13464886044"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px]
                      border border-input bg-background text-foreground
                      [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
                >
                  <span className="text-black hover:text-cyan-500">
                    TEXT US
                  </span>
                </a>
              </div>
              <FeatureBar />
            </div>
            <div className="relative hidden md:block w-full h-full">
              <Image
                src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu"
                alt="Professional cleaning service"
                width={400}
                height={400}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 0px, (max-width: 1280px) 50vw, 600px"
                quality={75}
                className="relative w-full h-full object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access by Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Cities We Serve in Arapahoe County
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Aurora, CO",
                  imageUrl: "/images/locations/Arapahoe County, CO/aurora.jpeg",
                  imageAlt: "House Cleaning Service in Aurora, CO",
                  //link: "/service-areas/arapahoe-county-co/aurora",
                },
                {
                  title: "Centennial, CO",
                  imageUrl:
                    "/images/locations/Arapahoe County, CO/centennial.jpeg",
                  imageAlt: "House Cleaning Service in Centennial, CO",
                  link: "/service-areas/arapahoe-county-co/centennial",
                },
                {
                  title: "Englewood, CO",
                  imageUrl:
                    "/images/locations/Arapahoe County, CO/englewood.jpeg",
                  imageAlt: "House Cleaning Service in Englewood, CO",
                  link: "/service-areas/arapahoe-county-co/englewood",
                },
                {
                  title: "Greenwood Village, CO",
                  imageUrl:
                    "/images/locations/Arapahoe County, CO/greenwood-village.jpeg",
                  imageAlt: "House Cleaning Service in Greenwood Village, CO",
                  link: "/service-areas/arapahoe-county-co/greenwood-village",
                },
                {
                  title: "Glendale, CO",
                  imageUrl:
                    "/images/locations/Arapahoe County, CO/glendale.jpeg",
                  imageAlt: "House Cleaning Service in Glendale, CO",
                  //link: "/service-areas/arapahoe-county-co/glendale",
                },
                {
                  title: "Littleton, CO",
                  imageUrl:
                    "/images/locations/Arapahoe County, CO/littleton.jpeg",
                  imageAlt: "House Cleaning Service in Littleton, CO",
                  //link: "/service-areas/arapahoe-county-co/littleton",
                },
                {
                  title: "Columbine, CO",
                  imageUrl:
                    "/images/locations/Arapahoe County, CO/columbine.jpg",
                  imageAlt: "House Cleaning Service in Columbine, CO",
                  link: "/service-areas/arapahoe-county-co/columbine",
                },
                {
                  title: "Sheridan, CO",
                  imageUrl:
                    "/images/locations/Arapahoe County, CO/sheridan.jpeg",
                  imageAlt: "House Cleaning Service in Sheridan, CO",
                  link: "/service-areas/arapahoe-county-co/sheridan",
                },
              ].map((location, index) => (
                <LocationCard
                  key={index}
                  title={location.title}
                  imageUrl={location.imageUrl}
                  imageAlt={location.imageAlt}
                  link={location.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomlkWQowW1K9N4DUxFng7weyZbAGHESLJh3Ifa"
                  alt="House Cleaning Service in Arapahoe County CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean Service for House Cleaning in Arapahoe
                County, CO?
              </h2>
              <p className="text-gray-600 mb-6">
                Dedicated professionals ensuring spotless, healthy homes across
                Arapahoe County.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Complete Home Cleaning Solutions:{" "}
                  </dt>
                  <dd className="inline">
                    Our comprehensive house cleaning service in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Arapahoe_County,_Colorado"
                      target="_blank"
                      className="underline text-cyan-500"
                    >
                      Arapahoe County, CO
                    </a>{" "}
                    covers every detail—from dusting high surfaces to sanitizing
                    kitchens and bathrooms. We bring care and consistency to
                    every visit, ensuring your home always looks and feels
                    refreshed.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Eco-Friendly and Safe Products:{" "}
                  </dt>
                  <dd className="inline">
                    Kathy Clean Service uses only non-toxic, biodegradable
                    cleaning supplies that are safe for children, pets, and the
                    environment. Our approach combines sustainability with
                    effective cleaning power for peace of mind.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Consistent Quality with Flexible Scheduling:{" "}
                  </dt>
                  <dd className="inline">
                    Whether you need a weekly clean or a one-time deep service,
                    our flexible scheduling ensures your home stays spotless
                    without interrupting your lifestyle. Arapahoe County
                    homeowners rely on our trusted cleaning experts for
                    reliable, on-time results.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why House Cleaning Matters in Arapahoe County, CO
              </h2>
              <p className="text-gray-600 mb-6">
                A cleaner home supports comfort, health, and long-term property
                value.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Promotes a Healthier Living Environment:{" "}
                  </dt>
                  <dd className="inline">
                    Regular professional cleaning reduces allergens, dust, and
                    bacteria that accumulate in carpets, furniture, and air
                    vents. A well-maintained home means cleaner air and fewer
                    health risks for your family.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Supports Community Standards and Appeal:{" "}
                  </dt>
                  <dd className="inline">
                    Homeowners in Arapahoe County, CO take pride in maintaining
                    clean, welcoming homes that enhance neighborhood appeal. A
                    well-cared-for home contributes to local value and community
                    reputation.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Prevents Long-Term Damage and Decline:{" "}
                  </dt>
                  <dd className="inline">
                    Routine cleaning prevents grime buildup and surface wear,
                    protecting flooring, walls, and fixtures. With Kathy Clean
                    Service, your home remains beautiful, comfortable, and
                    structurally sound year-round.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
                  alt="Arapahoe County House Cleaning Service"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Card className="w-full">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <AccordionTrigger className="text-left">
                      What does a house cleaning service in Arapahoe County, CO
                      include?
                    </AccordionTrigger>
                    <AccordionContent>
                      A house cleaning service in Arapahoe County, CO typically
                      includes complete dusting, floor mopping, vacuuming, and
                      disinfecting of all living areas, kitchens, and bathrooms.{" "}
                      <b>Kathy Clean Service</b> ensures every surface is
                      spotless using eco-friendly products and attention to
                      detail that leaves homes refreshed and inviting.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How often should I schedule a house cleaning service in
                      Arapahoe County, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      The frequency of a house cleaning service in Arapahoe
                      County, CO depends on your household size and activity
                      level. Most residents choose weekly or biweekly cleanings,
                      while <b>Kathy Clean Service</b> also offers flexible
                      monthly and deep-cleaning options to maintain your home’s
                      long-term cleanliness.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Do I need to provide supplies for a house cleaning service
                      in Arapahoe County, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      No, professional cleaners bring all necessary tools and
                      products for a house cleaning service in Arapahoe County,
                      CO. <b>Kathy Clean Service</b> arrives fully equipped with
                      safe, biodegradable cleaning agents and professional-grade
                      equipment to guarantee exceptional results without any
                      effort from homeowners.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MAP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
            <p className="text-gray-600 mb-6 text-center">
              Our comprehensive house cleaning service in Arapahoe County, CO
              covers homes of every size across Aurora, Centennial, and
              Greenwood Village. <b>Kathy Clean Service</b> provides detailed,
              dependable cleaning that ensures every home remains spotless,
              fresh, and welcoming for residents throughout the county.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196600.46009261836!2d-104.54516163227055!3d39.65236584848614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5e49bd3b8a0d%3A0x9a761e37e4be787e!2sArapahoe%20County%2C%20CO%2C%20USA!5e0!3m2!1sen!2sin!4v1761820973580!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                House cleaning service in Arapahoe County, CO, Cleaning company
                near me, house cleaning service near me
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
