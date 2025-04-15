import React from "react";

interface HeroSectionProps {
  children: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section className="relative bg-foreground py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {children}
        </div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute top-20 right-[5%] w-32 h-32 text-primary ">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Decorative large star shape" role="img">
          <title>Large decorative star</title>
          <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-[10%] w-20 h-20 text-primary">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Decorative medium star shape" role="img">
          <title>Medium decorative star</title>
          <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
