import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import { ArrowRight } from "lucide-react";

interface LocationCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  link?: string;
}

export const LocationCard: FC<LocationCardProps> = ({
  title,
  imageUrl,
  imageAlt,
  link,
}) => {
  const cardContent = (
    <div className={`flex flex-col bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full h-full min-h-[400px] ${link ? 'cursor-pointer' : ''}`}>
      <div className="relative w-full h-[220px] sm:h-[270px] md:h-[300px] flex-shrink-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="370px"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <h2 className="text-xl sm:text-2xl font-semibold text-navy-700 mb-1 sm:mb-3">
          {title}
        </h2>
        {link && (
          <Button variant="default" className="self-center mt-2">
            Explore Service Area
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        className="group block focus:outline-none"
        tabIndex={-1}
        style={{ textDecoration: "none" }}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
