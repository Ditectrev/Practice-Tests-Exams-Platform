import { type ReactNode } from "react";
import { JsonLd } from "@practice-tests-exams-platform/components/JsonLd";
import {
  getPageMetadata,
  getPricingJsonLd,
} from "@practice-tests-exams-platform/lib/seo";

export const metadata = getPageMetadata("/pricing");

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={getPricingJsonLd()} />
      {children}
    </>
  );
}
