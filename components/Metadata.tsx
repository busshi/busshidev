import Head from "next/head";
import { useRouter } from "next/router";
import { GOOGLE_SITE_VERIFICATION, SITE_URL } from "../lib/constants";
import { getT, Lang } from "../lib/i18n";
import {
  buildJsonLdFAQ,
  jsonLdLogo,
  buildJsonLdOrganization,
  jsonLdOrganizationRating,
  buildJsonLdWebsite,
} from "../lib/jsonLd";

export const Metadata: React.FC = () => {
  const { locale, asPath } = useRouter();
  const lang = (locale as Lang) || "fr";
  const t = getT(lang);
  const path = asPath === "/" ? "" : asPath;

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <meta name="author" content="BusshiDev" />
      <meta name="keywords" content={t.meta.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="color-scheme" content="dark light" />
      <meta property="og:image" content={`${SITE_URL}/banner.png`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="2220" />
      <meta property="og:image:height" content="456" />
      <meta property="og:url" content={`${SITE_URL}${path}`} />
      <meta property="og:title" content={t.meta.title} />
      <meta property="og:description" content={t.meta.description} />
      <meta property="og:locale" content={lang === "fr" ? "fr_FR" : "en_US"} />

      <link rel="canonical" href={`${SITE_URL}${path}`} />
      <link rel="alternate" hrefLang="fr" href={`${SITE_URL}${path}`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />

      {/* Google search console verification code */}
      <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Website rich snippet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLdWebsite(lang)),
        }}
      />

      {/* Logo rich snippet  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdLogo),
        }}
      />

      {/* Organization rich snippet  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLdOrganization(lang)),
        }}
      />

      {/* Organization Rating rich snippet  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrganizationRating),
        }}
      />

      {/* FAQ rich snippet  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLdFAQ(lang)),
        }}
      />
    </Head>
  );
};

export default Metadata;
