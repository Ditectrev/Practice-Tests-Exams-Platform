import type { MetadataRoute } from "next";
import {
  LLMS_FULL_TXT_URL,
  LLMS_TXT_URL,
  absoluteUrl,
} from "@practice-tests-exams-platform/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      priority: 1,
    },
    {
      url: absoluteUrl("/pricing"),
      priority: 0.8,
    },
    {
      url: LLMS_TXT_URL,
      priority: 0.7,
    },
    {
      url: LLMS_FULL_TXT_URL,
      priority: 0.6,
    },
  ];
}
