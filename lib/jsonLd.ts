import { BLOG_URL, CONTACTS, EMAIL, OPENSOURCES, SITE_URL } from "./constants";

/**
 * jsonLd Metadata
 * SEO - google rich snippet for website
 */

export const jsonLdWebsite = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "BusshiDev",
  alternateName: "BusshiDev - Design. Develop. Deploy. Boost",

  url: `${SITE_URL}`,
  logo: `${SITE_URL}/banner.png`,
  sameAs: [
    "https://www.malt.fr/profile/alexandredubar",
    "https://www.linkedin.com/in/alexandre-dubar/",
    "https://github.com/busshi",
    `${BLOG_URL}`,
  ],
};

/**
 * jsonLd Metadata
 * SEO - google rich snippet for logo
 */

export const jsonLdLogo = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BusshiDev",
  email: `${EMAIL}`,
  url: `${SITE_URL}`,
  logo: `${SITE_URL}/banner.png`,
};

/**
 * jsonLd Metadata
 * SEO - google rich snippet for organization
 */

export const jsonLdOrganization = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "BusshiDev",
  alternateName: "BusshiDev - Design. Develop. Deploy. Boost",
  url: `${SITE_URL}`,
  logo: `${SITE_URL}/banner.png`,
  slogan: "Design. Develop. Deploy. Boost.",
  sameAs: [
    "https://www.malt.fr/profile/alexandredubar",
    "https://www.linkedin.com/in/alexandre-dubar/",
    "https://github.com/busshi",
    `${BLOG_URL}`,
  ],
};

/**
 * jsonLd Metadata
 * SEO - google rich snippet for organization rating
 */

export const jsonLdOrganizationRating = {
  "@context": "https://schema.org/",
  "@type": "EmployerAggregateRating",
  itemReviewed: {
    "@type": "Organization",
    name: "BusshiDev",
    sameAs: `${SITE_URL}`,
  },
  ratingValue: "5",
  bestRating: "5",
  worstRating: "0",
  ratingCount: "4",
};

/**
 * jsonLd Metadata
 * SEO - google rich snippet for FAQ
 */

export const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Open source contribution",
      acceptedAnswer: {
        "@type": "Answer",
        text: `<ul><li><a href="${OPENSOURCES[0].url}">${OPENSOURCES[0].name}</li><li><a href="${OPENSOURCES[1].url}">${OPENSOURCES[1].name}</a></li><li><a href="${OPENSOURCES[2].url}">${OPENSOURCES[2].name}</a></li></ul>`,
      },
    },
    {
      "@type": "Question",
      name: "Contacts",
      acceptedAnswer: {
        "@type": "Answer",
        text: `<ul><li><a href="${CONTACTS[0].url}">${CONTACTS[0].name}</li><li><a href="${CONTACTS[1].url}">${CONTACTS[1].name}</a></li><li><a href="${CONTACTS[2].url}">${CONTACTS[2].name}</a></li></ul>`,
      },
    },
  ],
};
