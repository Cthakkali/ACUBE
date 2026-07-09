import type { Metadata } from "next";

const siteUrl = "https://www.acubeskills.in";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about A-Cube Institute of Skills — an ISO 9001:2015 certified manpower supply and skill development company in Tiruppur & Erode, Tamil Nadu. Established 2021, 5+ years of experience, 2000+ candidates trained.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Us | A-Cube Institute of Skills",
    description:
      "ISO 9001:2015 certified manpower supply and skill development company in Tamil Nadu. Official AMHSSC training partner with 2000+ candidates trained.",
    url: `${siteUrl}/about`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "About A-Cube Institute of Skills",
      },
    ],
  },
  twitter: {
    title: "About Us | A-Cube Institute of Skills",
    description:
      "ISO 9001:2015 certified manpower supply and skill development company in Tamil Nadu.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
