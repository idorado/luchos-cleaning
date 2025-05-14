import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

interface ServiceAreaHighlightProps {
  location?: string;
}

const MAP_URLS: Record<string, string> = {
  Denver: "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/denver-map.png",
  "Parker": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/parker-map.png",
  "Castle Rock": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/castlerock-map.png",
  "Lone Tree": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/lonetree-map.png",
  "Highlands Ranch": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/highlandsranch-map.png",
  "Centennial": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/centennial-map.png",
  "Central Park": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/centralpark-map.png",
  "Hilltop": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/hilltop-map.png",
  "Washington Park": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/washingtonpark-map.png",
  "Cherry Creek": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/cherrycreek-map.png",
  "University Park": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/universitypark-map.png",
  "Highland": "https://res.cloudinary.com/dqz7l3oy7/image/upload/v1715640000/highland-map.png"
};

export default function ServiceAreaHighlight({ location }: ServiceAreaHighlightProps) {
  const loc = location || "Denver";
  const mapUrl = MAP_URLS[loc] || MAP_URLS["Denver"];

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-navy-800 text-center mb-8">Servicing the {loc} Area</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4">
        <div className="flex-1 min-w-[300px] max-w-[520px]">
          <img
            src={mapUrl}
            alt={`Service area map for ${loc}`}
            className="rounded-xl w-full h-auto shadow-md"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-2">House Cleaning Services in {loc}</h3>
          <p className="font-semibold text-navy-800 mb-2">Enjoy peace of mind, more time, and a spotless space.</p>
          <p className="text-base md:text-lg text-[#454545] mb-6">
            Kathy Clean proudly offers residential and commercial cleaning services across {loc}. From downtown apartments to homes in local neighborhoods, we’re your local cleaning team — reliable, professional, and always on time.
          </p>
          <RequestQuoteButton />
        </div>
      </div>
    </section>
  );
}
