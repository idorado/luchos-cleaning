'use client';

interface LocationMapProps {
  location: string;
  zoom?: number;
  className?: string;
}

export function LocationMap({ location, zoom = 13, className = '' }: LocationMapProps) {
  // Convert location to URL-friendly format for Google Maps
  const getMapUrl = (loc: string) => {
    const baseUrl = 'https://www.google.com/maps/embed/v1/place';
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Reemplaza con tu API key
    const locationMap: { [key: string]: string } = {
      'Englewood': 'Englewood,CO',
      'Greenwood Village': 'Greenwood+Village,CO',
      'Littleton': 'Littleton,CO',
      'Denver': 'Denver,CO',
      'Parker': 'Parker,CO',
      'Castle Rock': 'Castle+Rock,CO',
      'Lone Tree': 'Lone+Tree,CO',
      'Highlands Ranch': 'Highlands+Ranch,CO',
      'Centennial': 'Centennial,CO',
      'Central Park': 'Central+Park,Denver,CO',
      'Hilltop': 'Hilltop,Denver,CO',
      'Washington Park': 'Washington+Park,Denver,CO',
      'Cherry Creek': 'Cherry+Creek,Denver,CO',
      'University Park': 'University+Park,Denver,CO',
      'Highland': 'Highland,Denver,CO'
    };

    const locationParam = locationMap[loc] || 'Denver,CO';
    return `${baseUrl}?key=${apiKey}&q=${locationParam}&zoom=${zoom}`;
  };

  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-xl font-semibold mb-4">Our Location in {location}</h3>
      <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={getMapUrl(location)}
          title={`${location} Location Map`}
        ></iframe>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Serving {location} and surrounding areas with professional cleaning services.
      </p>
    </div>
  );
}
