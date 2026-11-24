import "./globals.css";
import Script from "next/script";
import { hotel, site } from "../site";
import Seo from "../components/Seo";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Hotel Swarna Heights" },
  description: site.description,
  applicationName: hotel.full,
  category: "travel",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: hotel.full,
    title: site.title,
    description: site.description,
    locale: "en_IN",
    images: [{ url: site.ogImg, width: 1600, height: 900, alt: hotel.full }],
  },
  robots: { index: true, follow: true },
  other: { "geo.region": "IN-AP", "geo.placename": hotel.city },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c0e",
};

export default function Layout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.purebook.in" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Montserrat:wght@300;400;500&display=swap"
        />
      </head>
      <body className="bg-onyx font-fb text-[15px] font-light leading-[1.8] text-ivory antialiased">
        {children}
        <Seo hotel={hotel} site={site} />
        <Script
          src="https://cdn.purebook.in/engine.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
