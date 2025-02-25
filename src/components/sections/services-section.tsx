"use client"
import { ServiceCard } from "@/components/cards/service-card"

export const services = [
  {
    title: "Residential Cleaning",
    description: "Comprehensive home cleaning services tailored to your needs",
  },
  {
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for businesses and offices",
  },
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning and sanitization of all spaces",
  },
  {
    title: "Move In/Out Cleaning",
    description: "Detailed cleaning services for property transitions",
  },
  {
    title: "Window Cleaning",
    description: "Professional window cleaning for crystal clear views",
  },
  {
    title: "Emergency Cleaning",
    description: "24/7 emergency cleaning services when you need them most",
  },
] as const

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
