import type { Metadata } from "next";

const siteUrl = "https://www.acubeskills.in";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of training sessions, CSR initiatives, and workforce deployment milestones by A-Cube Institute of Skills across Tamil Nadu and Karnataka.",
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
  openGraph: {
    title: "Gallery | A-Cube Institute of Skills",
    description:
      "A visual journey through our training sessions, CSR skill development projects, and workforce milestones across Tamil Nadu and Karnataka.",
    url: `${siteUrl}/gallery`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Gallery — A-Cube Institute of Skills",
      },
    ],
  },
  twitter: {
    title: "Gallery | A-Cube Institute of Skills",
    description:
      "Training sessions, CSR projects, and workforce milestones by A-Cube Institute of Skills.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
