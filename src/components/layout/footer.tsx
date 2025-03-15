import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>7500 East Arapahoe Road</p>
            <p>Centennial, CO 80112</p>
            <p className="mt-2">(303) 681-2559</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="h-5 w-5 flex items-center justify-center">
                <span className="sr-only">Visit our Facebook page</span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="h-5 w-5 flex items-center justify-center">
                <span className="sr-only">Visit our LinkedIn page</span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://instagram.com" className="h-5 w-5 flex items-center justify-center">
                <span className="sr-only">Visit our Instagram page</span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/residential" className="hover:text-gray-300">Residential Cleaning</Link></li>
              <li><Link href="/commercial" className="hover:text-gray-300">Commercial Cleaning</Link></li>
              <li><Link href="/windows" className="hover:text-gray-300">Window Washing</Link></li>
              <li><Link href="/emergency" className="hover:text-gray-300">Emergency Cleaning</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <p>Our cleaning services are available throughout Colorado, Houston, and Atlanta.</p>
            <div className="mt-4">
              <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Kathy Clean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
