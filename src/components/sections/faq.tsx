"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const faqItems = [
  {
    question: "What areas do you service?",
    answer: "We cover all major metropolitan areas within a 50-mile radius. Contact us for specific location availability."
  },
  {
    question: "Do you use eco-friendly cleaning products?",
    answer: "Yes! We offer green cleaning options using EPA Safer Choice certified products upon request."
  },
  {
    question: "How does your pricing work for commercial contracts?",
    answer: "Commercial pricing is based on square footage, frequency, and specific facility requirements. We provide customized quotes after a free site assessment."
  },
  {
    question: "Can I schedule cleaning outside business hours?",
    answer: "Absolutely! We offer evening and weekend appointments for commercial clients to minimize business disruption."
  },
  {
    question: "What's included in your deep cleaning service?",
    answer: "Our deep clean includes: appliance interiors, baseboards, window tracks, cabinet fronts, and hard-to-reach areas."
  },
  {
    question: "Are your cleaners insured and background-checked?",
    answer: "Yes, all team members undergo rigorous background checks and carry full liability insurance."
  },
  {
    question: "How do I prepare for my first cleaning?",
    answer: "Simply secure pets, remove valuables, and let us know about any special requirements. We'll handle the rest!"
  },
  {
    question: "What's your cancellation policy?",
    answer: "We require 24-hour notice for residential cancellations and 48-hour notice for commercial appointments."
  },
  {
    question: "Do you provide supplies and equipment?",
    answer: "Yes, we bring all necessary equipment and premium cleaning supplies. You only need to provide access."
  },
  {
    question: "How does your satisfaction guarantee work?",
    answer: "If unsatisfied, contact us within 48 hours and we'll re-clean the affected area at no additional cost."
  }
]

export function FAQ() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}