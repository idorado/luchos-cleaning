"use server"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default async function ResidentialPage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Residential Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional cleaning services tailored to your home
        </p>
        <div className="mt-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="#request-quote">Request a Quote</Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-72 sm:h-96 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl my-8">
        <Image 
          src="/residential.png" 
          alt="Professional residential cleaning service" 
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1280px"
          priority
        />
      </div>


      {/* Our Residential Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Our Residential Services</h2>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Recurring Cleaning */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="relative w-full md:w-2/5 h-48 md:h-auto">
              <Image 
                src="/recurring-cleaning.png" 
                alt="Recurring Cleaning Service" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-2xl font-semibold mb-3">Recurring Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance cleaning on a weekly, bi-weekly, or monthly schedule to keep your home consistently clean and comfortable.
              </p>
            </div>
          </div>

          {/* Move In/Move Out Cleaning */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="relative w-full md:w-2/5 h-48 md:h-auto">
              <Image 
                src="/move-in.png" 
                alt="Move In/Move Out Cleaning Service" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-2xl font-semibold mb-3">Move In/Move Out Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive cleaning services for when you're moving into a new home or leaving your current residence.
              </p>
            </div>
          </div>

          {/* Post-Construction Cleaning */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="relative w-full md:w-2/5 h-48 md:h-auto">
              <Image 
                src="/post-cleaning.jpg" 
                alt="Post-Construction Cleaning Service" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-2xl font-semibold mb-3">Post-Construction Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Specialized cleaning after renovation or construction projects to remove debris, dust, and construction residue for a safe, clean home.
              </p>
            </div>
          </div>

          {/* Pressure Washing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="relative w-full md:w-2/5 h-48 md:h-auto">
              <Image 
                src="/pressure-washing.jpg" 
                alt="Pressure Washing Service" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-2xl font-semibold mb-3">Pressure Washing</h3>
              <p className="text-gray-600 mb-4">
                Powerful exterior cleaning for driveways, patios, decks, and siding to remove dirt, grime, and mildew for a fresh, renewed appearance.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Additional Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Additional Services for a Deeper Clean</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Window Cleaning</h3>
            <p className="text-gray-600 text-sm">Professional interior and exterior window cleaning for a crystal-clear view.</p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Carpet Cleaning</h3>
            <p className="text-gray-600 text-sm">Deep carpet cleaning to remove stains, allergens, and restore your carpets.</p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Appliance Cleaning</h3>
            <p className="text-gray-600 text-sm">Detailed cleaning of ovens, refrigerators, and other kitchen appliances.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
