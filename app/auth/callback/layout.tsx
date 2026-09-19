import { type ReactNode, Suspense } from "react";
import { getPageMetadata } from "@practice-tests-exams-platform/lib/seo";

export const metadata = getPageMetadata("/auth/callback");

export default function AuthCallbackLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
