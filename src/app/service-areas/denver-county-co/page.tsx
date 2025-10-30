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
  title: "Professional House Cleaning Service in Denver County, CO",
  description:
    "Kathy Clean Service offers professional house cleaning service in Denver County, CO. Trusted, thorough, and eco-friendly cleaning solutions. Call now!",
  keywords: [
    "House Cleaning Denver County CO",
    "Professional House Cleaning",
    "Kathy Clean Service",
  ],
  alternates: {
    canonical: "https://kathyclean.com/service-areas/denver-county-co",
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
                  Professional House Cleaning Service
                </span>
                <br />
                <span className="text-background">in Denver County, CO</span>
              </h1>
              <p className="text-lg">
                <a
                  href="https://kathyclean.com/"
                  className="underline text-secondary"
                >
                  Kathy Clean Service
                </a>{" "}
                provides professional house cleaning service in Denver County,
                CO. Our experienced team delivers spotless homes with reliable,
                eco-friendly cleaning that fits your schedule. From the heart of
                downtown Denver to surrounding neighborhoods, we bring quality
                care to every corner of your home.
              </p>
              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <Button variant="default" className="font-medium" asChild>
                  <CtaButton href="/request-quote">REQUEST A QUOTE</CtaButton>
                </Button>
                <PhoneButton />
                <a
                  href="sms:3036812559"
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
              Cities We Serve in Denver County
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Denver, CO",
                  imageUrl: "/images/locations/Denver County, CO/denver.jpeg",
                  imageAlt: "House Cleaning Service in Denver, CO",
                },
              ].map((location, index) => (
                <LocationCard
                  key={index}
                  title={location.title}
                  imageUrl={location.imageUrl}
                  imageAlt={location.imageAlt}
                  //link={location.link}
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
                  alt="House Cleaning Service in Denver County CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean Service for House Cleaning in Denver
                County, CO?
              </h2>
              <p className="text-gray-600 mb-6">
                Trusted professionals delivering exceptional cleaning throughout
                Denver County.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Experienced Urban Cleaning Specialists:{" "}
                  </dt>
                  <dd className="inline">
                    Our professional house cleaning service in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Denver_County,_Colorado"
                      target="_blank"
                      className="underline text-cyan-500"
                    >
                      Denver County, CO
                    </a>{" "}
                    is designed for city living. We understand the unique needs
                    of urban homes and apartments, delivering thorough cleaning
                    that keeps your space fresh and welcoming.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Green Cleaning for Healthy Homes:{" "}
                  </dt>
                  <dd className="inline">
                    Kathy Clean Service uses only eco-friendly, non-toxic
                    cleaning products that are safe for families, pets, and the
                    environment. Our sustainable approach delivers powerful
                    cleaning without harsh chemicals.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Flexible Service for Busy Schedules:{" "}
                  </dt>
                  <dd className="inline">
                    Whether you need weekly maintenance or a one-time deep
                    clean, our flexible scheduling adapts to your Denver
                    lifestyle. Count on reliable, consistent service that keeps
                    your home pristine without disrupting your routine.
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
                Why House Cleaning Matters in Denver County, CO
              </h2>
              <p className="text-gray-600 mb-6">
                Professional cleaning supports health, comfort, and urban living
                quality.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Cleaner Air in the Mile High City:{" "}
                  </dt>
                  <dd className="inline">
                    Regular professional cleaning reduces dust, allergens, and
                    pollutants that accumulate in urban homes. Denver's high
                    altitude and dry climate make consistent cleaning essential
                    for respiratory health and comfort.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Maintains Property Value:{" "}
                  </dt>
                  <dd className="inline">
                    Denver County homeowners and renters benefit from
                    professional cleaning that protects flooring, fixtures, and
                    surfaces. A well-maintained home preserves value and appeal
                    in one of Colorado's most competitive housing markets.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    More Time for What Matters:{" "}
                  </dt>
                  <dd className="inline">
                    Living in Denver means access to incredible outdoor
                    activities, cultural events, and dining. With Kathy Clean
                    Service handling your home cleaning, you can spend more time
                    enjoying everything the city has to offer.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
                  alt="Denver County House Cleaning Service"
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
                      What does a house cleaning service in Denver County, CO
                      include?
                    </AccordionTrigger>
                    <AccordionContent>
                      A house cleaning service in Denver County, CO includes
                      thorough dusting, vacuuming, mopping, and sanitizing of
                      all rooms, including kitchens and bathrooms.{" "}
                      <b>Kathy Clean Service</b> delivers meticulous cleaning
                      using eco-friendly products, ensuring every surface is
                      fresh and spotless.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How often should I schedule a house cleaning service in
                      Denver County, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      The ideal frequency for a house cleaning service in Denver
                      County, CO depends on your lifestyle and household size.
                      Most Denver residents choose weekly or bi-weekly
                      cleanings, while <b>Kathy Clean Service</b> also offers
                      monthly and deep-cleaning options for flexible
                      maintenance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Are cleaning supplies included with a house cleaning
                      service in Denver County, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, professional cleaners provide all necessary tools and
                      products for a house cleaning service in Denver County,
                      CO. <b>Kathy Clean Service</b> arrives fully equipped with
                      safe, biodegradable cleaning solutions and professional
                      equipment for exceptional results.
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
              Our professional house cleaning service in Denver County, CO
              serves homes throughout the city. <b>Kathy Clean Service</b>{" "}
              provides reliable, thorough cleaning that keeps your Denver home
              fresh, healthy, and welcoming all year round.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98140.9160518899!2d-105.01063492323823!3d39.76427215474649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sin!4v1761821228596!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                House cleaning service in Denver County, CO, Cleaning company
                near me, house cleaning service near me
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
