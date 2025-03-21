import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Providers, PostHogProvider } from "@/components/providers"

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["100",  "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Kathy Clean",
  description: "Residential and commercial cleaning services",
  icons: [{ rel: "icon", url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomJmgQP9jvTxoXV9D2iqbpnGgyKMaCYt3F0h6r" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${poppins.className} ${roboto.className}`, "antialiased")}> 
        <PostHogProvider>

        <Providers>
          <div className="min-h-screen flex flex-col">
            <TopBar />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        </PostHogProvider>
      </body>
    </html>
  );
}
