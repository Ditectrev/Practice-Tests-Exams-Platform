import { readFileSync } from "fs";
import { join } from "path";
import robots from "../../app/robots";
import sitemap from "../../app/sitemap";
import {
  AI_CRAWLERS,
  COMPANY_NAME,
  DEFAULT_TITLE,
  LLMS_FULL_TXT_URL,
  LLMS_TXT_URL,
  PRICING_FAQS,
  PRICING_PLANS,
  SITE_DESCRIPTION,
  SITE_ORIGIN,
  absoluteUrl,
  canonicalizePath,
  getExamCatalog,
  getHomeJsonLd,
  getOrganizationJsonLd,
  getPageMetadata,
  getPageSeo,
  getPricingJsonLd,
  getRootMetadata,
  getWebsiteJsonLd,
} from "../seo";

describe("SEO helpers", () => {
  it("canonicalizes paths the same way as ditectrev.com", () => {
    expect(canonicalizePath("/")).toBe("/");
    expect(canonicalizePath("/pricing/")).toBe("/pricing");
    expect(canonicalizePath("/pricing?plan=byok#faq")).toBe("/pricing");
  });

  it("builds absolute URLs without a trailing slash except home", () => {
    expect(absoluteUrl("/")).toBe(`${SITE_ORIGIN}/`);
    expect(absoluteUrl("/pricing")).toBe(`${SITE_ORIGIN}/pricing`);
  });

  it("uses unique titles and snippet-friendly robots on indexable pages", () => {
    const home = getPageSeo("/");
    const pricing = getPageSeo("/pricing");
    expect(home.title).toBe(DEFAULT_TITLE);
    expect(pricing.title).toContain("Pricing");
    expect(home.title).not.toBe(pricing.title);
    expect(home.description).toBe(SITE_DESCRIPTION);

    const homeMeta = getPageMetadata("/");
    expect(homeMeta.robots).toMatchObject({
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    });
    expect(homeMeta.alternates).toMatchObject({
      canonical: `${SITE_ORIGIN}/`,
    });
  });

  it("marks app, account, and unknown routes noindex", () => {
    expect(getPageSeo("/practice").robots).toMatchObject({
      index: false,
      follow: true,
    });
    expect(getPageSeo("/exam").robots).toMatchObject({ index: false });
    expect(getPageSeo("/modes").robots).toMatchObject({ index: false });
    expect(getPageSeo("/profile").robots).toMatchObject({ index: false });
    expect(getPageSeo("/this-page-does-not-exist").robots).toMatchObject({
      index: false,
      follow: true,
    });
  });

  it("emits Organization identity used on ditectrev.com", () => {
    const organization = getOrganizationJsonLd();
    expect(organization.name).toBe(COMPANY_NAME);
    expect(organization.legalName).toBe("IBStructure Daniel Danielecki");
    expect(organization.taxID).toBe("PL9121899240");
    expect(organization.sameAs).toContain("https://github.com/ditectrev");
  });

  it("emits WebSite JSON-LD without a SearchAction", () => {
    const website = getWebsiteJsonLd();
    expect(website["@type"]).toBe("WebSite");
    expect(website).not.toHaveProperty("potentialAction");
  });

  it("lists visible exams on the homepage ItemList", () => {
    const catalog = getExamCatalog();
    const home = getHomeJsonLd();
    const itemList = home["@graph"].find(
      (node: { "@type": string }) => node["@type"] === "ItemList",
    ) as { numberOfItems: number; itemListElement: unknown[] };

    expect(catalog.length).toBeGreaterThan(0);
    expect(itemList.numberOfItems).toBe(catalog.length);
    expect(itemList.itemListElement).toHaveLength(catalog.length);
  });

  it("builds pricing FAQPage and OfferCatalog from visible copy", () => {
    const pricing = getPricingJsonLd();
    const types = pricing["@graph"].map(
      (node: { "@type": string }) => node["@type"],
    );
    expect(types).toContain("FAQPage");
    expect(types).toContain("OfferCatalog");

    const faq = pricing["@graph"].find(
      (node: { "@type": string }) => node["@type"] === "FAQPage",
    ) as { mainEntity: unknown[] };
    expect(faq.mainEntity).toHaveLength(PRICING_FAQS.length);
    expect(PRICING_PLANS).toHaveLength(4);
  });

  it("points root metadata at llms.txt for AI discovery", () => {
    const metadata = getRootMetadata();
    expect(metadata.alternates).toMatchObject({
      types: {
        "text/markdown": [
          {
            url: LLMS_TXT_URL,
            title: "LLM-friendly site summary",
          },
        ],
      },
    });
    expect(metadata.twitter).toMatchObject({ card: "summary" });
  });
});

describe("robots and sitemap", () => {
  it("allows named AI crawlers and lists the sitemap", () => {
    const document = robots();
    const rules = Array.isArray(document.rules)
      ? document.rules
      : [document.rules];
    const userAgents = rules.map((rule) => rule.userAgent);
    expect(userAgents).toContain("*");
    for (const crawler of AI_CRAWLERS) {
      expect(userAgents).toContain(crawler);
    }
    expect(document.sitemap).toBe(`${SITE_ORIGIN}/sitemap.xml`);
    expect(document.host).toBe(SITE_ORIGIN);
  });

  it("lists indexable pages and both LLM files without stale lastmod", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(urls).toEqual([
      `${SITE_ORIGIN}/`,
      `${SITE_ORIGIN}/pricing`,
      LLMS_TXT_URL,
      LLMS_FULL_TXT_URL,
    ]);
    expect(entries.every((entry) => entry.lastModified === undefined)).toBe(
      true,
    );
  });
});

describe("llms.txt files", () => {
  const publicDir = join(process.cwd(), "public");

  it("publishes a spec-style llms.txt overview", () => {
    const body = readFileSync(join(publicDir, "llms.txt"), "utf8");
    expect(body).toMatch(/^# Practice Tests Exams Platform/m);
    expect(body).toContain("https://education.ditectrev.com/pricing");
    expect(body).toContain("llms-full.txt");
  });

  it("publishes llms-full.txt with citation Q&A from visible copy", () => {
    const body = readFileSync(join(publicDir, "llms-full.txt"), "utf8");
    expect(body).toContain("What is Ditectrev?");
    expect(body).toContain("IBStructure Daniel Danielecki");
    expect(body).toContain(
      "What's the difference between BYOK and Ditectrev plans?",
    );
  });
});
