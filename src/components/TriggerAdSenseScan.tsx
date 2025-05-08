"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function TriggerAdSenseScan() {
  const pathName = usePathname();
  useEffect(() => {
    if (localStorage.getItem("adsConsent") === "true") {
      try {
        if (typeof window !== "undefined") {
          // Prevent duplicate push on already-initialized ads
          const ads = document.querySelectorAll("ins.adsbygoogle");
          ads.forEach((ad) => {
            if (!ad.getAttribute("data-ad-status")) {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
          });
        }
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [pathName]);

  return <></>;
}
