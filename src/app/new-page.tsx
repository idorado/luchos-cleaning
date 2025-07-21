"use server"
import { Testimonial } from "@/components/cards/testimonial"
import OurServices from "@/components/sections/our-services"
import WhyChooseUs from "@/components/sections/why-choose-us"
import CompaniesCountOnUs from "@/components/sections/companies-count-on-us";
import HomeHero from "@/components/sections/home-hero"
import { ServicesSection } from "@/components/sections/services-section"
import RequestQuoteButton from "@/components/sections/RequestQuoteButton"
import FeatureBar from "@/components/ui/FeatureBar"
import { homePageMetadata } from './home-metadata';

export const metadata = homePageMetadata;

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero />
      <OurServices />
      <WhyChooseUs />
      <CompaniesCountOnUs />
      <ServicesSection />
      <Testimonial />
      <RequestQuoteButton />
      <FeatureBar />
    </main>
  )
}
