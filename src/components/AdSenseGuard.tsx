"use client";

import { useEffect, useState } from "react";
import { TriggerAdSenseScan } from "./TriggerAdSenseScan";

export function AdSenseGuard() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("adsConsent") === "true") {
      setAllowed(true);
    }
  }, []);

  return allowed ? <TriggerAdSenseScan /> : null;
}
