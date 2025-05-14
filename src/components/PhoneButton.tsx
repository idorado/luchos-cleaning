"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function PhoneButton() {
  return (
    <Button
      variant="outline"
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px] text-base"
      onClick={() => window.location.href = 'tel:+13036812559'}
    >
      <Phone className="h-5 w-5 text-black" />
      <span className="text-black">(303) 681-2559</span>
    </Button>
  )
}
