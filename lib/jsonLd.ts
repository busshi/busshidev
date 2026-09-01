import { BLOG_URL, EMAIL, SITE_URL } from "./constants";
import { getT, Lang } from "./i18n";

/**
 * jsonLd Metadata
 * SEO - google rich snippet for website
 */

export const buildJsonLdWebsite = (lang: Lang) => ({
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "BusshiDev",
  alternateName: getT(lang).meta.title,
  url: `${SITE_URL}`,
  logo: `${SITE_URL}/banner.png`,
  sameAs: [
    "https://www.malt.fr/profile/alexandredubar",
    "https://www.linkedin.com/in/alexandre-dubar/",
    "https://github.com/busshi",
    `${BLOG_URL}`,
  ],
});

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

export const buildJsonLdOrganization = (lang: Lang) => ({
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "BusshiDev",
  alternateName: getT(lang).meta.title,
  description: getT(lang).meta.description,
  url: `${SITE_URL}`,
  logo: `${SITE_URL}/banner.png`,
  slogan: `${getT(lang).hero.headlineBefore} ${getT(lang).hero.headlineAccent}.`,
  sameAs: [
    "https://www.malt.fr/profile/alexandredubar",
    "https://www.linkedin.com/in/alexandre-dubar/",
    "https://github.com/busshi",
    `${BLOG_URL}`,
  ],
});

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

export const buildJsonLdFAQ = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: getT(lang).faq.items.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
});

/**
 * jsonLd Metadata
 * SEO - google rich snippet for breadcrumb trail
 *
 * `path` is the current route without locale prefix or query string
 * (e.g. "/mentions-legales"), matching next/router's `asPath` once
 * cleaned. Returns null on the homepage, where a one-item trail isn't
 * meaningful.
 */

const BREADCRUMB_LABELS: Record<string, (lang: Lang) => string> = {
  "/contact": () => "Contact",
  "/mentions-legales": (lang) => getT(lang).footer.legalNotice,
  "/cgu": (lang) => getT(lang).footer.terms,
};

export const buildJsonLdBreadcrumb = (lang: Lang, path: string) => {
  const segments = path.split("?")[0].split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const base = lang === "en" ? `${SITE_URL}/en` : SITE_URL;

  const itemListElement = [
    { "@type": "ListItem", position: 1, name: getT(lang).nav.home, item: base },
  ];

  let currentPath = "";
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    itemListElement.push({
      "@type": "ListItem",
      position: itemListElement.length + 1,
      name: BREADCRUMB_LABELS[currentPath]?.(lang) ?? segment,
      item: `${base}${currentPath}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
};
