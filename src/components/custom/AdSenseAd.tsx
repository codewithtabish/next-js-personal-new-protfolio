/** @format */

'use client'; // Ensure this runs client-side
import { useEffect, useRef } from 'react';

// TypeScript declaration for adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSenseAd = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && adRef.current) {
      const scriptAlreadyExists = document.querySelector(
        'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
      );

      if (!scriptAlreadyExists) {
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5517689121320829`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);

        script.onload = () => {
          if (
            window.adsbygoogle &&
            adRef.current &&
            !adRef.current.hasAttribute('data-adsbygoogle-status')
          ) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        };
      } else {
        // Only push ads for uninitialized elements
        if (
          window.adsbygoogle &&
          adRef.current &&
          !adRef.current.hasAttribute('data-adsbygoogle-status')
        ) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }
    }
  }, []);

  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-5517689121320829'
      data-ad-slot='7562574138'
      data-ad-format='auto'
      data-full-width-responsive='true'
      ref={adRef} // Attach the reference to the ins element
    ></ins>
  );
};

export default AdSenseAd;
