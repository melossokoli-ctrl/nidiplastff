import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { projectImages, siteConfig, ui } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${siteConfig.name} | ${ui.metaTitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "dritare PVC",
    "dyer alumini",
    "dyer hyrëse",
    "roleta",
    "eksport dritaresh",
    "montim dritaresh",
    "dritare evropiane",
    "NIDI Plast",
    "Nidiplast",
    "Nidiplast Rahovec",
    "dritare Rahovec",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: projectImages.hero,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [projectImages.hero],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  alternateName: ["Nidiplast", "NIDI Plast Rahovec"],
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}${projectImages.hero}`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rr. Xhelal Hajda Toni",
    addressLocality: "Rahovec",
    postalCode: "21000",
    addressCountry: "XK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.393889,
    longitude: 20.648056,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.google,
  ],
  areaServed: "Evropa",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
