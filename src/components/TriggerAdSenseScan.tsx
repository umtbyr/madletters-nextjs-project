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
        // eslint-disable-next-line no-undef
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense re-trigger failed", e);
      }
    }
  }, [pathName]);

  return <></>;
}
