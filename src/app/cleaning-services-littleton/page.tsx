import { Metadata } from 'next';
import CleaningServicesComponent from '@/components/CleaningServicesComponent';


const littletonDescription = `Experience the difference with our professional cleaning services in Littleton. We're committed to providing exceptional results and outstanding customer service.`;

export default function CleaningServicesLittleton() {
  return (
    <CleaningServicesComponent 
      location="Littleton"
      // La URL de la imagen ya está definida en el componente principal
      whyChooseUsDescription={littletonDescription}
    />
  );
}
