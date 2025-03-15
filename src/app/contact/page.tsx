"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    toast.success("Message sent successfully! We'll get back to you soon.")
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CONTACT</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please contact us by email or phone today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-full md:w-1/2">
                  <Image 
                    src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8WFaPuKhMCiFKE7nTrZgcpJWtXBskwHlzmqf" 
                    alt="Kathy Clean office" 
                    width={500} 
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Kathy Clean</h2>
                  <address className="not-italic text-gray-600 space-y-2">
                    <p>7500 E. Arapahoe Road</p>
                    <p>Suite 200</p>
                    <p>Centennial, CO 80112</p>
                  </address>
                  <div className="space-y-2">
                    <p className="font-medium">Email:</p>
                    <p className="text-blue-600">support@kathyclean.com</p>
                    <p className="font-medium mt-2">Phone:</p>
                    <p className="text-blue-600">(303) 681-2559</p>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full md:w-auto" asChild>
                      <a href="tel:3036812559">Call Us</a>
                    </Button>
                    <Button className="w-full md:w-auto mt-2 md:mt-0 md:ml-2" variant="outline" asChild>
                      <a href="mailto:support@kathyclean.com">Email Us</a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-2">
                  Serving South Denver, Castle Rock, Littleton, Englewood, Colorado Springs, Parker, Centennial, 
                  Highlands Ranch, Lone Tree, Castle Pines and Aurora.
                </p>
                <div className="mt-6 h-[300px] w-full rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.53356767537!2d-104.99519863183581!3d39.64700579672784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f7a3c25cfa3%3A0x74c9fb8a0c3f23ea!2sCentennial%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kathy Clean Service Area Map"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email address" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of professional cleaning services for both residential and commercial clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Residential Cleaning</h3>
                <p className="text-gray-600 mb-4">House Cleaning • Move In/Out • Weekly • Monthly • One-time</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/residential">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Commercial Cleaning</h3>
                <p className="text-gray-600 mb-4">Office Cleaning • Medical Facilities • Retail Spaces • Schools</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/commercial">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Window Washing</h3>
                <p className="text-gray-600 mb-4">Interior & Exterior • Residential • Commercial • High-Rise</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/windows">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
