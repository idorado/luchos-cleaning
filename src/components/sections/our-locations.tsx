import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className={"flex flex-col bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full h-full min-h-[400px]"}>
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
        <h2 className="text-xl sm:text-2xl font-semibold text-navy-700 min-h-[3.25rem] leading-tight">
          {title}
        </h2>
        {link ? (
          <div className="mt-auto pt-6">
            <Link
              href={link}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Explore Service Area
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );

  return cardContent;
};
