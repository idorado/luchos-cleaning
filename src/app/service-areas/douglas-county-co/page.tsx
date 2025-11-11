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
  title: "Premium House Cleaning Service in Douglas County, CO",
  description:
    "Kathy Clean Service offers premium house cleaning service in Douglas County, CO. Reliable, detailed, and eco-friendly cleaning solutions. Call now!",
  keywords: [
    "House Cleaning Douglas County CO",
    "Premium House Cleaning",
    "Kathy Clean Service",
  ],
  alternates: {
    canonical: "https://kathyclean.com/service-areas/douglas-county-co",
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
                  Premium House Cleaning Service
                </span>
                <br />
                <span className="text-background">in Douglas County, CO</span>
              </h1>
              <p className="text-lg">
                <a
                  href="https://kathyclean.com/"
                  className="underline text-secondary"
                >
                  Kathy Clean Service
                </a>{" "}
                provides premium house cleaning service in Douglas County, CO.
                From Castle Rock to Parker, our dedicated team delivers
                exceptional cleaning that matches the quality of life you
                expect. We bring meticulous care, eco-friendly products, and
                reliable service to every home.
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
              Cities We Serve in Douglas County
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Castle Rock, CO",
                  imageUrl:
                    "/images/locations/Douglas County, CO/castle-rock.jpeg",
                  imageAlt: "House Cleaning Service in Castle Rock, CO",
                  link: "/service-areas/douglas-county-co/castle-rock",
                },
                {
                  title: "Castle Pines, CO",
                  imageUrl:
                    "/images/locations/Douglas County, CO/castle-pines.jpeg",
                  imageAlt: "House Cleaning Service in Castle Pines, CO",
                  link: "/service-areas/douglas-county-co/castle-pines",
                },
                {
                  title: "Highlands Ranch, CO",
                  imageUrl:
                    "/images/locations/Douglas County, CO/highlands-ranch.jpeg",
                  imageAlt: "House Cleaning Service in Highlands Ranch, CO",
                  link: "/service-areas/douglas-county-co/highlands-ranch",
                },
                {
                  title: "Lone Tree, CO",
                  imageUrl:
                    "/images/locations/Douglas County, CO/lone-tree.jpeg",
                  imageAlt: "House Cleaning Service in Lone Tree, CO",
                  link: "/service-areas/douglas-county-co/lone-tree",
                },
                {
                  title: "Parker, CO",
                  imageUrl: "/images/locations/Douglas County, CO/parker.jpeg",
                  imageAlt: "House Cleaning Service in Parker, CO",
                  link: "/service-areas/douglas-county-co/parker",
                },
                {
                  title: "Roxborough Park, CO",
                  imageUrl:
                    "/images/locations/Douglas County, CO/roxborough-park.jpeg",
                  imageAlt: "House Cleaning Service in Roxborough Park, CO",
                  link: "/service-areas/douglas-county-co/roxborough-park",
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
                  alt="House Cleaning Service in Douglas County CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean Service for House Cleaning in Douglas
                County, CO?
              </h2>
              <p className="text-gray-600 mb-6">
                Premium cleaning services designed for Douglas County's finest
                homes.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Tailored Service for Luxury Homes:{" "}
                  </dt>
                  <dd className="inline">
                    Our premium house cleaning service in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Douglas_County,_Colorado"
                      target="_blank"
                      className="underline text-cyan-500"
                    >
                      Douglas County, CO
                    </a>{" "}
                    is designed for larger homes with attention to detail and
                    care. We understand the high standards Douglas County
                    homeowners expect and deliver exceptional results every
                    time.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Eco-Friendly Products You Can Trust:{" "}
                  </dt>
                  <dd className="inline">
                    Kathy Clean Service uses only premium, biodegradable
                    cleaning solutions that are safe for your family, pets, and
                    the beautiful Colorado environment. Quality cleaning without
                    compromise.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Reliable, Consistent Excellence:{" "}
                  </dt>
                  <dd className="inline">
                    From Castle Rock to Lone Tree, our professional team
                    provides dependable service on your schedule. Whether you
                    need weekly upkeep or deep seasonal cleaning, we deliver
                    spotless homes with unwavering consistency.
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
                Why House Cleaning Matters in Douglas County, CO
              </h2>
              <p className="text-gray-600 mb-6">
                Professional cleaning protects your investment and enhances your
                quality of life.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Preserves Premium Property Value:{" "}
                  </dt>
                  <dd className="inline">
                    Douglas County homes represent significant investments.
                    Regular professional cleaning protects high-end finishes,
                    flooring, and fixtures, maintaining the beauty and value of
                    your property for years to come.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Creates Healthier Living Spaces:{" "}
                  </dt>
                  <dd className="inline">
                    Professional cleaning removes allergens, dust, and bacteria
                    that accumulate in larger homes. With Kathy Clean Service,
                    your family enjoys cleaner air and a healthier indoor
                    environment year-round.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    More Time for Colorado Living:{" "}
                  </dt>
                  <dd className="inline">
                    Douglas County offers incredible outdoor recreation,
                    excellent schools, and vibrant communities. Let us handle
                    the cleaning so you can spend more time enjoying everything
                    this beautiful county has to offer.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
                  alt="Douglas County House Cleaning Service"
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
                      What does a house cleaning service in Douglas County, CO
                      include?
                    </AccordionTrigger>
                    <AccordionContent>
                      A house cleaning service in Douglas County, CO includes
                      comprehensive cleaning of all living areas, bedrooms,
                      kitchens, and bathrooms with complete dusting, vacuuming,
                      mopping, and sanitizing. <b>Kathy Clean Service</b>{" "}
                      delivers premium results using eco-friendly products and
                      meticulous attention to detail.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How often should I schedule a house cleaning service in
                      Douglas County, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      The frequency of a house cleaning service in Douglas
                      County, CO depends on your home size and lifestyle. Many
                      homeowners choose weekly or bi-weekly cleanings, while{" "}
                      <b>Kathy Clean Service</b> also offers monthly maintenance
                      and deep-cleaning options for larger properties.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Do you provide cleaning supplies for a house cleaning
                      service in Douglas County, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, professional cleaners arrive fully equipped for a
                      house cleaning service in Douglas County, CO.{" "}
                      <b>Kathy Clean Service</b> provides all premium cleaning
                      products, tools, and equipment needed to deliver
                      exceptional results in your home.
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
              Our premium house cleaning service in Douglas County, CO serves
              Castle Rock, Highlands Ranch, Parker, Lone Tree, and surrounding
              communities. <b>Kathy Clean Service</b> delivers the quality and
              reliability Douglas County homeowners expect and deserve.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197463.31755354578!2d-105.15960626746548!3d39.347985248941704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876cbefd7edd25c7%3A0x325e08a5a92be458!2sDouglas%20County%2C%20CO%2C%20USA!5e0!3m2!1sen!2sin!4v1761821392990!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                House cleaning service in Douglas County, CO, Cleaning company
                near me, house cleaning service near me
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
