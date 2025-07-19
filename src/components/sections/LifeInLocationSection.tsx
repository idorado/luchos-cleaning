import React from 'react';

export interface LifeInLocationSectionProps {
  location: string;
  title: string;
  paragraph: string;
  mapEmbedUrl: string;
}

const LifeInLocationSection: React.FC<LifeInLocationSectionProps> = ({ location, title, paragraph, mapEmbedUrl }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#1C2951' }}>{title || `Life in ${location}`}</h2>
        <p className="mb-8 text-lg text-gray-700 text-center">{paragraph}</p>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map of ${location}`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeInLocationSection;
