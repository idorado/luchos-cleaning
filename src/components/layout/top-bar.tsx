import { MapPin, Phone } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-2 flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Houston, Texas</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href="tel:+13464886044" className="hover:text-primary">
            (346) 488-6044
          </a>
        </div>
      </div>
    </div>
  )
}
