import { SITE_URL } from "./constants";

export const jsonLdWebsite = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "busshiDev",
  alternateName: "BusshiDev - Design. Develop. Deploy. Boost",

  url: `${SITE_URL}`,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    "https://www.malt.fr/profile/alexandredubar",
    "https://www.linkedin.com/in/alexandre-dubar/",
    "https://github.com/busshi",
    "https://busshi.fr",
  ],
};

export const jsonLdLogo = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "busshiDev",
  email: "contact@busshidev.fr",
  url: `${SITE_URL}`,
  logo: `${SITE_URL}/logo.png`,
};

export const jsonLdOrganization = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "busshiDev",
  alternateName: "BusshiDev - Design. Develop. Deploy. Boost",
  url: `${SITE_URL}`,
  logo: `${SITE_URL}/logo.png`,
  slogan: "Design. Develop. Deploy. Boost.",
  sameAs: [
    "https://www.malt.fr/profile/alexandredubar",
    "https://www.linkedin.com/in/alexandre-dubar/",
    "https://github.com/busshi",
    "https://busshi.fr",
  ],
};

export const jsonLdOrganizationRating = {
  "@context": "https://schema.org/",
  "@type": "EmployerAggregateRating",
  itemReviewed: {
    "@type": "Organization",
    name: "busshiDev",
    sameAs: `${SITE_URL}`,
  },
  ratingValue: "5",
  bestRating: "5",
  worstRating: "0",
  ratingCount: "4",
};
