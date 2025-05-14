import { ThumbsUp, Users, ShieldCheck } from "lucide-react";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

interface WhyTrustUsProps {
  location?: string;
}

export default function WhyTrustUsSection({ location }: WhyTrustUsProps) {
  return (
    <section className="bg-[#F4F4F4] border-t border-b border-border py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-navy-800 mb-4">
          Why {location ? location : "Denver"} Trusts Our Cleaning Services
        </h2>
        <p className="text-base md:text-lg text-[#454545] max-w-4xl text-left mb-4 md:mb-6">
          Since 2010, we've been providing top-quality cleaning services to homes and businesses throughout {location ? location : "Denver"} and the surrounding Colorado communities.
        </p>
        <p className="text-base md:text-lg text-[#454545] max-w-4xl text-left mb-10">
          Our team of experienced professionals is committed to delivering exceptional results with attention to detail and a personal touch that large cleaning chains simply can't match.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 justify-items-start">
          <div className="flex flex-col text-left min-w-[275px] max-w-[275px]">
            <img alt="Satisfaction Guaranteed" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomf784HIMOIyEW8fnCaPxAMTFk0iZhHrQ5NVgb" className="h-14 w-14 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg mb-1">Satisfaction Guaranteed</h3>
            <p className="text-base md:text-lg text-[#454545] max-w-4xl mx-auto text-left">
              If you’re not 100% satisfied or we missed something, let us know within 48 hours, we’ll re-clean at no extra cost.
            </p>
          </div>
          <div className="flex flex-col text-left min-w-[275px] max-w-[275px]">
            <img alt="Happy Employees = Better Service" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom4AHAO15dAlomP7EFuMse5X0rqt64ZLkg13W9" className="h-14 w-14 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg mb-1">Lowest Turnover in the Industry</h3>
            <p className="text-base md:text-lg text-[#454545] max-w-4xl mx-auto text-left">
              Low turnover means a dedicated, motivated team that delivers better service every time.
            </p>
          </div>
          <div className="flex flex-col text-left min-w-[275px] max-w-[275px]">
            <img alt="Fully Insured & Bonded" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomxlikN0PQRcBU1VN4YrWbTIXj8k39sPLKdZiv" className="h-14 w-14 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg mb-1">Fully Insured and Bonded</h3>
            <p className="text-base md:text-lg text-[#454545] max-w-4xl mx-auto text-left">
              We are fully insured and bonded for your peace of mind.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <RequestQuoteButton />
        </div>
      </div>
    </section>
  );
}
