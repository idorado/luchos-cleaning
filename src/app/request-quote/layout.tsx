import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get your free cleaning quote | Kathy Clean",
  description: "Get a fast, free cleaning quote from Kathy Clean – trusted residential and commercial cleaning services in Denver, Centennial, Parker, Castle Rock & surrounding areas.",
  alternates: {
    canonical: "https://www.kathyclean.com/request-quote"
  }
};

export default function RequestQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
