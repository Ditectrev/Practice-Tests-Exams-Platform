import type { Metadata } from "next";
import exams from "@practice-tests-exams-platform/lib/exams.json";

export const SITE_ORIGIN = "https://education.ditectrev.com";
export const SITE_NAME = "Practice Tests Exams Platform";
export const COMPANY_NAME = "Ditectrev";
export const DEFAULT_TITLE = `${SITE_NAME} | ${COMPANY_NAME}`;
export const SITE_DESCRIPTION =
  "Open source practice tests and exam simulator for IT certifications, including AWS, Azure, GCP, ITIL, Scrum, and more. Practice and timed exam modes with optional AI explanations.";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/icons/icon-512x512.png`;
export const DEFAULT_OG_IMAGE_ALT = "Ditectrev's logo";
export const LLMS_TXT_URL = `${SITE_ORIGIN}/llms.txt`;
export const LLMS_FULL_TXT_URL = `${SITE_ORIGIN}/llms-full.txt`;

const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

export const ORGANIZATION_SAME_AS: readonly string[] = [
  "https://discord.com/invite/RFjtXKfJy3",
  "https://www.facebook.com/ditectrev",
  "https://github.com/ditectrev",
  "https://github.com/Ditectrev/Practice-Tests-Exams-Platform",
  "https://www.instagram.com/ditectrev",
  "https://www.linkedin.com/company/ditectrev",
  "https://medium.com/@ditectrev",
  "https://x.com/ditectrev",
  "https://www.youtube.com/@Ditectrev",
];

export const INDEX_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  "max-snippet": -1,
  "max-image-preview": "large",
  "max-video-preview": -1,
};

export const NOINDEX_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: true,
};

export type SeoBreadcrumb = {
  name: string;
  path: string;
};

export type PageSeo = {
  title: string;
  description: string;
  robots?: Metadata["robots"];
  breadcrumbs: SeoBreadcrumb[];
};

const homeCrumb: SeoBreadcrumb = { name: "Home", path: "/" };

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    breadcrumbs: [homeCrumb],
  },
  "/pricing": {
    title: `Pricing | ${COMPANY_NAME}`,
    description:
      "Subscription plans for the Practice Tests Exams Platform: Ads Free, Local Explanations with Ollama, BYOK, and Ditectrev-powered AI explanations.",
    breadcrumbs: [homeCrumb, { name: "Pricing", path: "/pricing" }],
  },
};

export const NOT_FOUND_SEO: PageSeo = {
  title: `Page Not Found | ${COMPANY_NAME}`,
  description:
    "The page you requested was not found. Return to the homepage to browse practice exams.",
  robots: NOINDEX_ROBOTS,
  breadcrumbs: [homeCrumb, { name: "Page not found", path: "" }],
};

export const NOINDEX_PAGE_SEO: Record<string, PageSeo> = {
  "/practice": {
    title: `Practice Mode | ${COMPANY_NAME}`,
    description:
      "Untimed practice mode for IT certification questions. Select an exam from the homepage to begin.",
    robots: NOINDEX_ROBOTS,
    breadcrumbs: [homeCrumb, { name: "Practice mode", path: "/practice" }],
  },
  "/exam": {
    title: `Exam Mode | ${COMPANY_NAME}`,
    description:
      "Timed exam mode with a fixed set of randomly selected questions. Select an exam from the homepage to begin.",
    robots: NOINDEX_ROBOTS,
    breadcrumbs: [homeCrumb, { name: "Exam mode", path: "/exam" }],
  },
  "/modes": {
    title: `Practice or Exam Mode | ${COMPANY_NAME}`,
    description:
      "Choose timed exam mode or untimed practice mode after selecting a certification exam.",
    robots: NOINDEX_ROBOTS,
    breadcrumbs: [homeCrumb, { name: "Modes", path: "/modes" }],
  },
  "/profile": {
    title: `Profile | ${COMPANY_NAME}`,
    description: "Manage your Practice Tests Exams Platform account.",
    robots: NOINDEX_ROBOTS,
    breadcrumbs: [homeCrumb, { name: "Profile", path: "/profile" }],
  },
  "/auth/callback": {
    title: `Sign In | ${COMPANY_NAME}`,
    description: "Complete sign in to the Practice Tests Exams Platform.",
    robots: NOINDEX_ROBOTS,
    breadcrumbs: [homeCrumb, { name: "Sign in", path: "/auth/callback" }],
  },
};

/** Visible subscription plans from the pricing page. */
export const PRICING_PLANS: readonly {
  name: string;
  price: string;
  description: string;
}[] = [
  {
    name: "Ads Free",
    price: "1.99",
    description: "Remove ads and enjoy distraction-free learning",
  },
  {
    name: "Local Explanations",
    price: "2.99",
    description: "Get AI explanations using your local Ollama setup.",
  },
  {
    name: "BYOK Explanations",
    price: "4.99",
    description: "Bring Your Own Key - Use premium AI with your API keys",
  },
  {
    name: "Ditectrev Explanations",
    price: "9.99",
    description: "Premium AI explanations powered by our infrastructure",
  },
];

/** Visible Q&A copied from the pricing page for FAQ JSON-LD. */
export const PRICING_FAQS: readonly { question: string; answer: string }[] = [
  {
    question: "What's the difference between BYOK and Ditectrev plans?",
    answer:
      "BYOK requires you to provide your own API keys for AI services, while Ditectrev includes premium AI access using our infrastructure.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "Is Ollama really free with Local plan?",
    answer:
      "Yes! Ollama runs locally on your machine, so there are no API costs. You just need to install Ollama locally.",
  },
  {
    question: "How do I run Ollama?",
    answer:
      "It requires some technical setup. Ollama works best with Firefox (works out of the box) or Chrome/Edge (permission popup). Not supported in Opera or Safari.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and other payment methods supported by Stripe.",
  },
];

export const AI_CRAWLERS: readonly string[] = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Google-CloudVertexBot",
  "CCBot",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
];

export function canonicalizePath(rawPath: string): string {
  const withoutQuery = rawPath.split("?")[0].split("#")[0];
  if (!withoutQuery || withoutQuery === "/") {
    return "/";
  }
  return withoutQuery.length > 1 && withoutQuery.endsWith("/")
    ? withoutQuery.slice(0, -1)
    : withoutQuery;
}

export function absoluteUrl(path: string): string {
  if (!path || path === "/") {
    return `${SITE_ORIGIN}/`;
  }
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getPageSeo(rawPath: string): PageSeo {
  const path = canonicalizePath(rawPath);
  return PAGE_SEO[path] ?? NOINDEX_PAGE_SEO[path] ?? NOT_FOUND_SEO;
}

export function getExamCatalog(): readonly {
  name: string;
  subtitle: string;
}[] {
  return exams.map((exam) => ({ name: exam.name, subtitle: exam.subtitle }));
}

function openGraphAndTwitter(page: PageSeo, canonical: string) {
  return {
    openGraph: {
      type: "website" as const,
      locale: "en_US",
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      url: canonical,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: DEFAULT_OG_IMAGE_ALT,
          width: 512,
          height: 512,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary" as const,
      site: "@ditectrev",
      creator: "@ddanielecki",
      title: page.title,
      description: page.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: DEFAULT_OG_IMAGE_ALT,
        },
      ],
    },
  };
}

export function getPageMetadata(rawPath: string): Metadata {
  const path = canonicalizePath(rawPath);
  const page = getPageSeo(path);
  const canonical = absoluteUrl(path);

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    robots: page.robots ?? INDEX_ROBOTS,
    alternates: {
      canonical,
      types: {
        "text/markdown": LLMS_TXT_URL,
      },
    },
    ...openGraphAndTwitter(page, canonical),
  };
}

export function getRootMetadata(): Metadata {
  const page = PAGE_SEO["/"];
  const canonical = absoluteUrl("/");

  return {
    metadataBase: new URL(SITE_ORIGIN),
    applicationName: SITE_NAME,
    authors: [
      { name: COMPANY_NAME, url: "https://ditectrev.com" },
      {
        name: "Daniel Danielecki",
        url: "https://github.com/danieldanielecki",
      },
    ],
    creator: COMPANY_NAME,
    publisher: COMPANY_NAME,
    description: SITE_DESCRIPTION,
    formatDetection: { telephone: true },
    keywords: [
      "AWS Exams",
      "Azure Exams",
      "Exams Simulator",
      "GCP Exams",
      "ITIL4 Exams",
      "Practice Tests Exams Platform",
      "Practice Tests Platform",
      "Scrum Exams",
    ],
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      title: SITE_NAME,
      statusBarStyle: "black",
    },
    icons: [
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        url: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        url: "/favicon.ico",
      },
    ],
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${COMPANY_NAME}`,
    },
    robots: INDEX_ROBOTS,
    referrer: "strict-origin-when-cross-origin",
    alternates: {
      canonical,
      types: {
        "text/markdown": [
          {
            url: LLMS_TXT_URL,
            title: "LLM-friendly site summary",
          },
        ],
      },
    },
    other: {
      author: "Ditectrev, contact@ditectrev.com",
      copyright: COMPANY_NAME,
    },
    ...openGraphAndTwitter(page, canonical),
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: COMPANY_NAME,
    legalName: "IBStructure Daniel Danielecki",
    url: SITE_ORIGIN,
    email: "contact@ditectrev.com",
    telephone: "+48 732 280 741",
    foundingDate: "2017",
    taxID: "PL9121899240",
    founder: {
      "@type": "Person",
      name: "Daniel Danielecki",
    },
    logo: `${SITE_ORIGIN}/logoWhite.svg`,
    image: DEFAULT_OG_IMAGE,
    description:
      "Information Technology (IT) services company focused on consulting and online education.",
    knowsAbout: [
      "Online Education",
      "IT Certification Exams",
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "ITIL",
      "Scrum",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Irysowa 18",
      addressLocality: "Jelcz-Laskowice",
      postalCode: "55-220",
      addressCountry: "PL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@ditectrev.com",
      telephone: "+48 732 280 741",
      contactType: "customer service",
      availableLanguage: "English",
      url: "https://ditectrev.com/contact",
    },
    sameAs: [...ORGANIZATION_SAME_AS],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_ORIGIN}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

function breadcrumbJsonLd(page: PageSeo, canonical: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: page.breadcrumbs
      .filter((crumb) => crumb.path !== "")
      .map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
  };
}

export function getHomeJsonLd() {
  const page = PAGE_SEO["/"];
  const canonical = absoluteUrl("/");
  const catalog = getExamCatalog();

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd(page, canonical),
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: page.title,
        description: page.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
        mainEntity: {
          "@id": `${canonical}#exams`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#exams`,
        name: "Practice certification exams",
        description:
          "IT certification practice tests available on the Practice Tests Exams Platform.",
        numberOfItems: catalog.length,
        itemListElement: catalog.map((exam, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: exam.name,
          description: exam.subtitle,
        })),
      },
    ],
  };
}

export function getPricingJsonLd() {
  const page = PAGE_SEO["/pricing"];
  const canonical = absoluteUrl("/pricing");

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd(page, canonical),
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: page.title,
        description: page.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        url: canonical,
        name: "Frequently Asked Questions",
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "en",
        mainEntity: PRICING_FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "OfferCatalog",
        "@id": `${canonical}#plans`,
        name: "Practice Tests Exams Platform plans",
        url: canonical,
        itemListElement: PRICING_PLANS.map((plan, index) => ({
          "@type": "Offer",
          position: index + 1,
          name: plan.name,
          description: plan.description,
          url: canonical,
          price: plan.price,
          priceCurrency: "EUR",
          seller: { "@id": ORGANIZATION_ID },
        })),
      },
    ],
  };
}
