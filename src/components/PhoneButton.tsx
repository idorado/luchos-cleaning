"use client";

import { Phone } from "lucide-react";

export default function PhoneButton() {
  return (
    <div
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px] text-base
                border border-input bg-background text-foreground
                [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
    >
      <Phone className="h-5 w-5 text-black" />
      <span className="text-black">
        <a href="tel:3036812559" className="hover:text-cyan-500">
          (303) 681-2559
        </a>
      </span>
    </div>
  );
}
