import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

import data from "./data.json";

// const siteUrl = "https://www.acubeskills.in";
const siteUrl = "https://acube-kappa.vercel.app";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A-Cube Institute of Skills | Manpower Supply & Skill Development in Tiruppur",
    template: "%s | A-Cube Institute of Skills",
  },
  description:
    "A-Cube Institute of Skills is an ISO 9001:2015 certified manpower supply and skill development company in Tiruppur, Tamil Nadu — serving government departments, corporates, and CSR projects across Tamil Nadu and Karnataka since 2021.",
  keywords: [
    "manpower supply Tiruppur",
    "skill development Tamil Nadu",
    "HR consulting Erode",
    "contract staffing Tamil Nadu",
    "AMHSSC training partner",
    "CSR skill development Karnataka",
    "recruitment agency Tiruppur",
    "workforce solutions Tamil Nadu",
    "A-Cube Institute of Skills",
  ],
  authors: [{ name: "A-Cube Institute of Skills", url: siteUrl }],
  creator: "A-Cube Institute of Skills",
  publisher: "A-Cube Institute of Skills",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "A-Cube Institute of Skills",
    title: "A-Cube Institute of Skills | Manpower Supply & Skill Development in Tiruppur",
    description:
      "ISO 9001:2015 certified manpower supply and skill development company in Tiruppur, Tamil Nadu — serving 100+ companies across 5+ states since 2021.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "A-Cube Institute of Skills — Manpower Supply & Skill Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A-Cube Institute of Skills | Manpower Supply & Skill Development",
    description:
      "ISO 9001:2015 certified manpower supply and skill development company in Tiruppur, Tamil Nadu.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Organization + LocalBusiness JSON-LD schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "A-Cube Institute of Skills",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
        width: 220,
        height: 60,
      },
      foundingDate: "2021",
      description:
        "A-Cube Institute of Skills is an ISO 9001:2015 certified human resources supply and skill development solutions provider committed to empowering individuals and supporting organizations through quality manpower and workforce development services.",
      areaServed: ["Tamil Nadu", "Karnataka"],
      telephone: data.company.phones.map((p) => p.display),
      email: data.company.email,
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "No:84, Sai Best Complex, Second Floor, Kuppana Chetty Street, Palladam road",
          addressLocality: "Tiruppur",
          addressRegion: "Tamil Nadu",
          postalCode: "641604",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "IInd Floor, Sibi's Nest, 042/14, Near Kannaki Departmental Stores, Perundurai Main Road, Thindal",
          addressLocality: "Erode",
          addressRegion: "Tamil Nadu",
          postalCode: "638012",
          addressCountry: "IN",
        },
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "ISO 9001:2015 Certification" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "AMHSSC Official Training Partner" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "MSME Registration" },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "A-Cube Institute of Skills",
      image: `${siteUrl}/hero.png`,
      url: siteUrl,
      telephone: data.company.phones[0].display,
      email: data.company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "No:84, Sai Best Complex, Second Floor, Kuppana Chetty Street, Palladam road",
        addressLocality: "Tiruppur",
        addressRegion: "Tamil Nadu",
        postalCode: "641604",
        addressCountry: "IN",
      },
      openingHours: "Mo-Sa 09:00-16:00",
      priceRange: "$$",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${dmSans.variable} h-full antialiased scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
