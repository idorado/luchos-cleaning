"use client";

import { Phone } from "lucide-react";

interface PhoneButtonProps {
  phone?: string;
}

const toTelHref = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  if (phone.startsWith("+")) return phone;
  return `+${digits || phone}`;
};

export default function PhoneButton({ phone = "(346) 488-6044" }: PhoneButtonProps) {
  return (
    <div
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px] text-base
                border border-input bg-background text-foreground
                [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
    >
      <Phone className="h-5 w-5 text-black" />
      <span className="text-black">
        <a href={`tel:${toTelHref(phone)}`} className="hover:text-cyan-500">
          {phone}
        </a>
      </span>
    </div>
  );
}
