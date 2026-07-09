import type { Metadata } from "next";

const siteUrl = "https://www.acubeskills.in";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with A-Cube Institute of Skills for manpower supply, recruitment, HR consulting, or skill development in Tamil Nadu and Karnataka. Call +91 98947 51538 or email acubeskills@gmail.com.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | A-Cube Institute of Skills",
    description:
      "Reach out for manpower supply, recruitment, HR consulting, or skill development services. Head office: Tiruppur, Tamil Nadu.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact A-Cube Institute of Skills",
      },
    ],
  },
  twitter: {
    title: "Contact Us | A-Cube Institute of Skills",
    description:
      "Reach out for manpower supply, recruitment, and skill development in Tamil Nadu.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
