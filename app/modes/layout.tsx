import { type ReactNode } from "react";
import { getPageMetadata } from "@practice-tests-exams-platform/lib/seo";
import "styles/globals.css";

type ModesLayoutProps = {
  children: ReactNode;
};

export const metadata = getPageMetadata("/modes");

export default function ModesLayout({ children }: ModesLayoutProps) {
  return <>{children}</>;
}
