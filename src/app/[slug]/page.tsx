import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import HouseCleaningPage from '@/app/services/residential/page';
import CommercialCleaningPage from '@/app/services/commercial/page';
import WindowCleaningPage from '@/app/services/windows/page';

// Define services and locations
const services = [
  { id: 'house-cleaning', name: 'House Cleaning', description: 'Professional residential cleaning services for your home.' },
  { id: 'commercial-cleaning', name: 'Commercial Cleaning', description: 'Comprehensive cleaning solutions for businesses and commercial spaces.' },
  { id: 'window-cleaning', name: 'Window Cleaning', description: 'Crystal clear windows inside and out for homes and businesses.' },
  { id: 'pressure-washing', name: 'Pressure Washing', description: 'High-powered cleaning for exterior surfaces.' },
  { id: 'gutter-cleaning', name: 'Gutter Cleaning', description: 'Thorough cleaning and maintenance of gutters and downspouts.' },
];

const locations = [
  { id: 'denver', name: 'Denver', description: 'Serving the greater Denver metropolitan area.' },
  { id: 'parker', name: 'Parker', description: 'Quality cleaning services throughout Parker.' },
  { id: 'castle-rock', name: 'Castle Rock', description: 'Trusted cleaning professionals in Castle Rock.' },
  { id: 'lone-tree', name: 'Lone Tree', description: 'Dependable cleaning services for Lone Tree residents.' },
  { id: 'highlands-ranch', name: 'Highlands Ranch', description: 'Comprehensive cleaning solutions in Highlands Ranch.' },
  { id: 'centennial', name: 'Centennial', description: 'Professional cleaning services for Centennial homes and businesses.' },
  { id: 'central-park', name: 'Central Park', description: 'Dedicated cleaning services for the Central Park neighborhood.' },
  { id: 'hilltop', name: 'Hilltop', description: 'Premium cleaning services for Hilltop residents.' },
  { id: 'washington-park', name: 'Washington Park', description: 'Quality cleaning for the Washington Park area.' },
  { id: 'cherry-creek', name: 'Cherry Creek', description: 'Expert cleaning services in Cherry Creek.' },
  { id: 'university-park', name: 'University Park', description: 'Reliable cleaning for University Park homes and businesses.' },
  { id: 'highland', name: 'Highland', description: 'Comprehensive cleaning solutions for Highland residents.' },
];

// Validate if the slug is a valid service-location combination
function isValidSlug(slug: string) {
  const parts = slug.split('-');
  if (parts.length < 2) return false;
  
  // Find where to split between service and location
  let serviceEndIndex = 1;
  if (parts[0] === 'house' || parts[0] === 'commercial' || parts[0] === 'window' || parts[0] === 'pressure' || parts[0] === 'gutter') {
    serviceEndIndex = parts[0] === 'house' || parts[0] === 'commercial' || parts[0] === 'window' ? 2 : 1;
  }
  
  const serviceId = parts.slice(0, serviceEndIndex).join('-');
  const locationId = parts.slice(serviceEndIndex).join('-');
  
  const service = services.find(s => s.id === serviceId);
  const location = locations.find(l => l.id === locationId);
  
  return !!service && !!location;
}

// Get service and location from slug
function getServiceAndLocation(slug: string) {
  const parts = slug.split('-');
  let serviceEndIndex = 1;
  
  if (parts[0] === 'house' || parts[0] === 'commercial' || parts[0] === 'window' || parts[0] === 'pressure' || parts[0] === 'gutter') {
    serviceEndIndex = parts[0] === 'house' || parts[0] === 'commercial' || parts[0] === 'window' ? 2 : 1;
  }
  
  const serviceId = parts.slice(0, serviceEndIndex).join('-');
  const locationId = parts.slice(serviceEndIndex).join('-');
  
  const service = services.find(s => s.id === serviceId);
  const location = locations.find(l => l.id === locationId);
  
  return { service, location };
}

// Generate static params for dynamic routes
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return services.flatMap(service => locations.map(location => ({
    slug: `${service.id}-${location.id}`,
  })));
}

export default async function ServiceLocationPage({ params }: { params: { slug: string } }) {
  // Check if slug is valid
  const {slug} = await params;
  console.log(slug);
  if (!isValidSlug(slug)) {
    notFound();
  }
  
  const { service, location } = getServiceAndLocation(slug);
  
  if (!service || !location) {
    notFound();
  }

  if (service.id === 'house-cleaning'){
    return <HouseCleaningPage />
  }

  if (service.id === 'commercial-cleaning'){
    return <CommercialCleaningPage />
  }

  if (service.id === 'window-cleaning'){
    return <WindowCleaningPage />
  }


  
  return (
    <div className="container mx-auto py-8">
      <HeroSection 
        title={`${service.name} in ${location.name}, Colorado`}
        description={`Professional ${service.name.toLowerCase()} services for ${location.name} residents and businesses.`}
        imageUrl="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomvfSA3qPbKyoL90JCXD3QJsIFYOVkiWmHnwpG"
      />
      
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">Professional {service.name} in {location.name}</h2>
        <p className="text-lg mb-4">
          Looking for reliable {service.name.toLowerCase()} services in {location.name}? Kathy Clean offers exceptional 
          cleaning solutions customized to your specific needs.
        </p>
        <p className="text-lg mb-8">
          Our team of experienced professionals delivers thorough, consistent, and high-quality service 
          for homes and businesses throughout the {location.name} area.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Why Choose Kathy Clean for {service.name} in {location.name}?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Locally owned and operated with knowledge of {location.name}</li>
              <li>Fully insured and bonded professionals</li>
              <li>Eco-friendly cleaning options available</li>
              <li>Flexible scheduling to fit your needs</li>
              <li>Satisfaction guaranteed</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Our {service.name} Process</h3>
            <p>
              We follow a thorough process to ensure exceptional results every time:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li>Initial consultation to understand your specific needs</li>
              <li>Customized cleaning plan for your property</li>
              <li>Careful execution with attention to detail</li>
              <li>Quality inspection to ensure your complete satisfaction</li>
            </ol>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold mb-4">Ready for Professional {service.name} in {location.name}?</h3>
          <p className="mb-6">Contact us today to schedule your service or get a free quote.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
