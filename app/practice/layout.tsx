import { type ReactNode } from "react";
import { getPageMetadata } from "@practice-tests-exams-platform/lib/seo";

export const metadata = getPageMetadata("/practice");

export default function PracticeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
