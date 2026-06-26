import { site, addresses, serviceTags } from "@/lib/site";

export const StructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        sameAs: [site.instagram],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${site.phoneRaw}`,
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
      },
      {
        "@type": ["AutoRepair", "LocalBusiness"],
        "@id": `${site.url}/#business`,
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: `+${site.phoneRaw}`,
        email: site.email,
        priceRange: "$$$",
        image: `${site.url}/og.jpg`,
        sameAs: [site.instagram],
        address: addresses.map((addr) => ({
          "@type": "PostalAddress",
          streetAddress: addr.line,
          addressLocality: "Londrina",
          addressRegion: "PR",
          addressCountry: "BR",
        })),
        areaServed: { "@type": "City", name: "Londrina" },
        makesOffer: serviceTags.map((tag) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: tag },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
