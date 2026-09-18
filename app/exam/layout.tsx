import { type ReactNode } from "react";
import { getPageMetadata } from "@practice-tests-exams-platform/lib/seo";

export const metadata = getPageMetadata("/exam");

export default function ExamLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
