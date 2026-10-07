import site from "@/content/site.json";

// Only facts the site can stand behind: no ratings or download counts.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  description: site.description,
  url: site.url,
  applicationCategory: site.seo.applicationCategory,
  operatingSystem: site.seo.operatingSystem,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  sameAs: [site.links.github],
};

export function SoftwareJsonLd() {
  return (
    <script
      type="application/ld+json"
      // Escaping "<" keeps any string in the payload from closing the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
