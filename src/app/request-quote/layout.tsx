import { Metadata } from 'next';
import { canonicalPath } from "@/lib/canonical";

export const metadata: Metadata = {
  title: "Get your free cleaning quote",
  description: "Get a fast, free cleaning quote from Kathy Clean, trusted residential and commercial cleaning services in Denver & surrounding areas",
  alternates: {
    canonical: canonicalPath("request-quote"),
  },
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
