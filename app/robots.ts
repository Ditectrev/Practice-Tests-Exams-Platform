import type { MetadataRoute } from "next";
import {
  AI_CRAWLERS,
  SITE_ORIGIN,
} from "@practice-tests-exams-platform/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/practice?*", "/exam?*", "/modes?*"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
