import { redirect } from 'next/navigation';

export default function EmploymentRedirect() {
  redirect('/work-with-us');
  
  // Este código no se ejecutará debido a la redirección
  return null;
}
