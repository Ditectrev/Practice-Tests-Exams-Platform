import { expect, test } from "@playwright/test";

test("home page has indexable title, description, and canonical", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Practice Tests Exams Platform/i);
  await expect(
    page.locator('meta[name="description"]').first(),
  ).toHaveAttribute("content", /practice tests/i);
  await expect(page.locator('link[rel="canonical"]').first()).toHaveAttribute(
    "href",
    /https:\/\/education\.ditectrev\.com\/?$/,
  );
  await expect(page.locator('link[rel="describedby"]').first()).toHaveAttribute(
    "href",
    "https://education.ditectrev.com/llms.txt",
  );
  await expect(page.getByRole("heading", { level: 1 }).first()).toHaveText(
    /Welcome/,
  );
});

test("pricing page uses a unique title and self-canonical", async ({
  page,
}) => {
  await page.goto("/pricing");
  await expect(page).toHaveTitle(/Pricing/i);
  await expect(page.locator('link[rel="canonical"]').first()).toHaveAttribute(
    "href",
    /\/pricing$/,
  );
});

test("serves llms.txt for AI agents", async ({ request }) => {
  const response = await request.get("/llms.txt");
  expect(response.ok()).toBeTruthy();
  const body = await response.text();
  expect(body).toMatch(/^# Practice Tests Exams Platform/m);
  expect(body).toContain("https://education.ditectrev.com/pricing");
  expect(body).toContain("llms-full.txt");
});

test("serves llms-full.txt with citation Q&A", async ({ request }) => {
  const response = await request.get("/llms-full.txt");
  expect(response.ok()).toBeTruthy();
  const body = await response.text();
  expect(body).toContain("What is Ditectrev?");
  expect(body).toContain("IBStructure Daniel Danielecki");
});

test("XML sitemap lists llms.txt for crawler discovery", async ({
  request,
}) => {
  const response = await request.get("/sitemap.xml");
  expect(response.ok()).toBeTruthy();
  const body = await response.text();
  expect(body).toContain("https://education.ditectrev.com/llms.txt");
  expect(body).toContain("https://education.ditectrev.com/llms-full.txt");
  expect(body).not.toContain("<lastmod>");
});

test("unknown routes are marked noindex", async ({ page }) => {
  await page.goto("/this-page-does-not-exist");
  await expect(page).toHaveTitle(/Page Not Found/i);
  await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute(
    "content",
    /noindex/i,
  );
  await expect(page.getByRole("link", { name: /Browse Exams/i })).toBeVisible();
});
