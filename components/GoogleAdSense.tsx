import Script from "next/script";

/**
 * Loads the AdSense bootstrap script. Set NEXT_PUBLIC_ADSENSE_CLIENT_ID (e.g. ca-pub-…)
 * in the environment. Place ad units in the UI or enable Auto ads in the AdSense console.
 */
export default function GoogleAdSense() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim();
  if (!clientId) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
