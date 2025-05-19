"use client";

import Script from 'next/script';
import { useEffect } from 'react';

export default function RequestQuote() {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    
    const v = function() {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof window.Tally !== 'undefined') {
      v();
    } else if (d.querySelector('script[src="' + w + '"]') === null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background px-2 sm:px-4 py-8">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe 
          data-tally-src="https://tally.so/embed/nGyB9p?transparentBackground=1&dynamicHeight=1"
          loading="lazy" 
          width="100%" 
          height="630" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0} 
          title="Request a Quote"
          className="w-full min-h-[630px]"
        ></iframe>
      </div>
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
    </main>
  );
}
