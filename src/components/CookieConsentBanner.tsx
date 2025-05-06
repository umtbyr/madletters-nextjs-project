"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("adsConsent");
    if (!consent) setVisible(true);
  }, []);

  const acceptAds = () => {
    localStorage.setItem("adsConsent", "true");
    setVisible(false);

    // ✅ Optional: trigger ad scripts here if loaded lazily
    window.location.reload(); // Reloading triggers ads if you're loading conditionally
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 w-full bg-gray-900 text-white text-sm p-4 flex flex-col md:flex-row justify-between items-center z-50 gap-2"
    >
      <div className="flex gap-2 items-center">
        <p className="font-bold text-md">But first, cookies</p> <Cookie />
      </div>
      <p>
        We use cookies to make MadLetter work. We'd like to use other cookies to
        show personalized ads by Google. By clicking 'Accept', you consent to
        the use of Google advertising cookies.
      </p>
      <button
        className="bg-blue-500 px-4 py-2 rounded text-white m-1"
        onClick={acceptAds}
      >
        Accept
      </button>
    </div>
  );
}
