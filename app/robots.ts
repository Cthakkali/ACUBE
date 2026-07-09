import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privacy", "/terms", "/disclaimer"],
      },
    ],
    sitemap: "https://www.acubeskills.in/sitemap.xml",
  };
}
