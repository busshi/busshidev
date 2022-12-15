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
