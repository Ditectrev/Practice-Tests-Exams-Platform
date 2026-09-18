import { type ReactNode, Suspense } from "react";
import { getPageMetadata } from "@practice-tests-exams-platform/lib/seo";

export const metadata = getPageMetadata("/profile");

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
