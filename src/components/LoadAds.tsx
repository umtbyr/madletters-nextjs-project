"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function LoadAds() {
  const [loadAds, setLoadAds] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("adsConsent");
    if (consent === "true") {
      setLoadAds(true);
    }
  }, []);

  if (!loadAds) return null;

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      data-ad-client="YOUR-AD-CLIENT-ID"
      crossOrigin="anonymous"
    />
  );
}
