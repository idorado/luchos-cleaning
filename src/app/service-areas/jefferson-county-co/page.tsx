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
  title: "Trusted House Cleaning Service in Jefferson County, CO",
  description:
    "Kathy Clean Service offers trusted house cleaning service in Jefferson County, CO. Professional, reliable, and eco-friendly cleaning solutions. Call now!",
  keywords: [
    "House Cleaning Jefferson County CO",
    "Trusted House Cleaning",
    "Kathy Clean Service",
  ],
  alternates: {
    canonical: "https://kathyclean.com/service-areas/jefferson-county-co",
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
                  Trusted House Cleaning Service
                </span>
                <br />
                <span className="text-background">in Jefferson County, CO</span>
              </h1>
              <p className="text-lg">
                <a
                  href="https://kathyclean.com/"
                  className="underline text-secondary"
                >
                  Kathy Clean Service
                </a>{" "}
                provides trusted house cleaning service in Jefferson County, CO.
                From Lakewood to Arvada and beyond, our reliable team delivers
                spotless homes with eco-friendly care. We bring professional
                cleaning expertise and personal attention to every home we
                serve.
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
              Cities We Serve in Jefferson County
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Arvada, CO",
                  imageUrl:
                    "/images/locations/Jefferson County, CO/arvada.jpeg",
                  imageAlt: "House Cleaning Service in Arvada, CO",
                  link: "/service-areas/jefferson-county-co/arvada",
                },
                {
                  title: "Ken Caryl, CO",
                  imageUrl:
                    "/images/locations/Jefferson County, CO/ken-caryl.jpeg",
                  imageAlt: "House Cleaning Service in Ken Caryl, CO",
                  link: "/service-areas/jefferson-county-co/ken-caryl",
                },
                {
                  title: "Lakewood, CO",
                  imageUrl:
                    "/images/locations/Jefferson County, CO/lakewood.jpeg",
                  imageAlt: "House Cleaning Service in Lakewood, CO",
                  link: "/service-areas/jefferson-county-co/lakewood",
                },
                {
                  title: "Wheat Ridge, CO",
                  imageUrl:
                    "/images/locations/Jefferson County, CO/wheat-ridge.jpeg",
                  imageAlt: "House Cleaning Service in Wheat Ridge, CO",
                  link: "/service-areas/jefferson-county-co/wheat-ridge",
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
                  alt="House Cleaning Service in Jefferson County CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean Service for House Cleaning in Jefferson
                County, CO?
              </h2>
              <p className="text-gray-600 mb-6">
                Reliable professionals serving Jefferson County with care and
                consistency.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Local Expertise and Trusted Service:{" "}
                  </dt>
                  <dd className="inline">
                    Our trusted house cleaning service in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Jefferson_County,_Colorado"
                      target="_blank"
                      className="underline text-cyan-500"
                    >
                      Jefferson County, CO
                    </a>{" "}
                    is built on years of experience serving local communities.
                    We understand Jefferson County homes and deliver dependable
                    cleaning that exceeds expectations every visit.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Eco-Friendly Cleaning Solutions:{" "}
                  </dt>
                  <dd className="inline">
                    Kathy Clean Service uses only non-toxic, environmentally
                    safe cleaning products that protect your family, pets, and
                    the beautiful Colorado environment. Effective cleaning
                    without harsh chemicals.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Flexible Scheduling for Your Lifestyle:{" "}
                  </dt>
                  <dd className="inline">
                    Whether you need weekly upkeep, bi-weekly maintenance, or a
                    one-time deep clean, our flexible scheduling adapts to your
                    busy life. Count on Jefferson County's trusted cleaning
                    professionals for reliable service.
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
                Why House Cleaning Matters in Jefferson County, CO
              </h2>
              <p className="text-gray-600 mb-6">
                Professional cleaning enhances health, comfort, and home value.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Healthier Indoor Air Quality:{" "}
                  </dt>
                  <dd className="inline">
                    Regular professional cleaning reduces allergens, dust, and
                    pollutants that build up in Colorado homes. With Kathy Clean
                    Service, your family breathes cleaner air and enjoys a
                    healthier living environment.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Protects Your Home Investment:{" "}
                  </dt>
                  <dd className="inline">
                    Jefferson County homeowners understand the importance of
                    property maintenance. Professional cleaning prevents dirt
                    buildup, protects surfaces, and maintains your home's value
                    and appeal for years to come.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    More Time for Mountain Living:{" "}
                  </dt>
                  <dd className="inline">
                    Jefferson County offers incredible access to hiking, biking,
                    and outdoor recreation. Let Kathy Clean Service handle your
                    cleaning so you can spend more time exploring the Rockies
                    and enjoying everything Colorado has to offer.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
                  alt="Jefferson County House Cleaning Service"
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
                      What does a house cleaning service in Jefferson County, CO
                      include?
                    </AccordionTrigger>
                    <AccordionContent>
                      A house cleaning service in Jefferson County, CO includes
                      thorough cleaning of all rooms with complete dusting,
                      vacuuming, mopping, and sanitizing of kitchens and
                      bathrooms. <b>Kathy Clean Service</b> delivers
                      professional results using eco-friendly products and
                      attention to detail.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How often should I schedule a house cleaning service in
                      Jefferson County, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      The frequency of a house cleaning service in Jefferson
                      County, CO depends on your household needs and lifestyle.
                      Most homeowners choose weekly or bi-weekly cleanings,
                      while <b>Kathy Clean Service</b> also offers monthly and
                      deep-cleaning options for flexible maintenance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Do you provide all cleaning supplies for a house cleaning
                      service in Jefferson County, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, professional cleaners bring all necessary supplies
                      for a house cleaning service in Jefferson County, CO.{" "}
                      <b>Kathy Clean Service</b> arrives fully equipped with
                      safe, eco-friendly cleaning products and professional
                      tools for exceptional results.
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
              Our trusted house cleaning service in Jefferson County, CO serves
              Lakewood, Arvada, Golden, Wheat Ridge, and surrounding
              communities. <b>Kathy Clean Service</b> provides reliable,
              professional cleaning that Jefferson County residents trust and
              recommend.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393216.96427773713!2d-105.2401758!3d39.5777758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8d4e278dafd3%3A0x82d15bc42d8fba83!2sJefferson%20County%2C%20CO%2C%20USA!5e0!3m2!1sen!2sus!4v1759301700000!5m2!1sen!2sus"
                width="1000"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                House cleaning service in Jefferson County, CO, Cleaning company
                near me, house cleaning service near me
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
