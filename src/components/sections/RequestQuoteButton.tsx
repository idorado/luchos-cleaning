"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import posthog from "posthog-js";

type RequestQuoteButtonProps = {
  location?: string;
  className?: string;
  onClick?: () => void;
};

export default function RequestQuoteButton({ location, className, onClick }: RequestQuoteButtonProps) {
  const handleClick = () => {
    console.log("Request Quote Button Clicked");
    posthog?.capture("cta_request_quote_click", {
      location: location || "unknown",
    });

    if (onClick) {
      try {
        onClick();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Button
      variant="default"
      className={`mt-8 font-medium mx-auto px-8 py-3 text-lg shadow-lg hover:scale-105 transition-all${className ? ` ${className}` : ""}`}
      asChild
    >
      <CtaButton href="/request-quote" onClick={handleClick}>REQUEST A QUOTE</CtaButton>
    </Button>
  );
}
