import { type ReactNode } from "react";
import { type Viewport } from "next";
import { Philosopher, Lora } from "next/font/google";
import Header from "@practice-tests-exams-platform/components/Header";
import Footer from "@practice-tests-exams-platform/components/Footer";
import { JsonLd } from "@practice-tests-exams-platform/components/JsonLd";
import ApolloProvider from "@practice-tests-exams-platform/components/ApolloProvider";
import Cookie from "@practice-tests-exams-platform/components/Cookie";
import GoogleAnalytics from "@practice-tests-exams-platform/components/GoogleAnalytics";
import GoogleAdSense from "@practice-tests-exams-platform/components/GoogleAdSense";
import { AuthProvider } from "@practice-tests-exams-platform/contexts/AuthContext";
import { ThemeProvider } from "@practice-tests-exams-platform/contexts/ThemeContext";
import { TrialWarning } from "@practice-tests-exams-platform/components/TrialWarning";
import {
  LLMS_TXT_URL,
  getOrganizationJsonLd,
  getRootMetadata,
  getWebsiteJsonLd,
} from "@practice-tests-exams-platform/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "styles/globals.css";

const philosopher = Philosopher({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-philosopher",
});

const lora = Lora({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const viewport: Viewport = {
  themeColor: "#3f51b5",
  width: "device-width",
  initialScale: 1,
};

export const metadata = getRootMetadata();

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="describedby" href={LLMS_TXT_URL} type="text/markdown" />
      </head>
      <body
        className={`${lora.className} ${philosopher.variable} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <JsonLd data={getOrganizationJsonLd()} />
        <JsonLd data={getWebsiteJsonLd()} />
        <ThemeProvider>
          <ApolloProvider>
            <AuthProvider>
              <Header />
              <main className="flex flex-col justify-between min-h-[calc(100vh-4rem)]">
                {children}
                <Footer />
                <Cookie />
                <GoogleAnalytics />
                <GoogleAdSense />
                <TrialWarning />
              </main>
            </AuthProvider>
          </ApolloProvider>
        </ThemeProvider>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
