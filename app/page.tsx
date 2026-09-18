import HomePage from "@practice-tests-exams-platform/components/HomePage";
import { JsonLd } from "@practice-tests-exams-platform/components/JsonLd";
import { getHomeJsonLd } from "@practice-tests-exams-platform/lib/seo";

export default function Page() {
  return (
    <>
      <JsonLd data={getHomeJsonLd()} />
      <HomePage />
    </>
  );
}
