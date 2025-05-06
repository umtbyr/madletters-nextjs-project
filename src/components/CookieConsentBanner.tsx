"import";

import { Cookie } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [loadAds, setLoadAds] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("adsConsent");
    if (!consent) setVisible(true);
    if (consent === "true") setLoadAds(true);
  }, []);

  const acceptAds = () => {
    localStorage.setItem("adsConsent", "true");
    setVisible(false);
    setLoadAds(true); // Dynamically trigger ads
  };

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 w-full bg-gray-900 text-white text-sm p-4 flex flex-col md:flex-row justify-between items-center z-50 gap-2">
          <div className="flex gap-2 items-center">
            <p className="font-bold text-md">But first, cookies</p> <Cookie />
          </div>
          <p>
            We use cookies to make MadLetter work. We{"'"}d like to use other
            cookies to show personalized ads by Google. By clicking {"'"}Accept
            {"'"}, you consent to the use of Google advertising cookies.
          </p>
          <button
            className="bg-blue-500 px-4 py-2 rounded text-white m-1"
            onClick={acceptAds}
          >
            Accept
          </button>
        </div>
      )}

      {loadAds && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="YOUR-AD-CLIENT-ID"
          crossOrigin="anonymous"
        />
      )}
    </>
  );
}
