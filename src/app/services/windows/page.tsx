import { Button } from "@/components/ui/button"
import HeroSection from "@/components/HeroSection";
import WindowPriceCalculator from "@/components/WindowPriceCalculator";
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default async function WindowsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection>
				<div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
					<Badge className="bg-ring">SERVICES</Badge>
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
						Window Washing
					</h1>
					<p className="text-base sm:text-lg">
						You work hard, so let us handle the cleaning. Enjoy a spotless home and spend your time on what truly matters.
					</p>
					<Button size="lg" className="w-full sm:w-auto" asChild>
						<Link
							href="https://clienthub.getjobber.com/client_hubs/40b56a75-dbed-4f70-b807-d9a216f025a3/public/work_request/new?source=new_webpage"
							className="w-full"
						>
							REQUEST A SERVICE
						</Link>
					</Button>
				</div>
				<div className="relative hidden md:flex w-full justify-center items-center">
					<Image
						src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomM7ix4wYzdDOT26oVhPrB8Uy5g9WlSQn1sNEG"
						alt="Professional window washing service"
						width={400}
						height={400}
						className="object-cover rounded-lg shadow-md"
						priority
					/>
				</div>
      </HeroSection>


      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Request a Quote */}
            <div id="request-quote">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Request a Quote</h2>
              <p className="text-gray-600 mb-8">
                For more than a decade, we've been delivering spotless, streak-free windows to homes and businesses. Formerly known as C-Thru Cleaning Services, we now operate under Kathy Clean, continuing our commitment to excellence with the same trusted quality and expertise.
              </p>
            </div>
            
            {/* Price Calculator */}
            <div>
                <WindowPriceCalculator />
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}
