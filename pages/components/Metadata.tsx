import Head from "next/head";
import { SITE_URL } from "../../lib/constants";
import {
  jsonLdLogo,
  jsonLdOrganization,
  jsonLdOrganizationRating,
  jsonLdWebsite,
} from "../../lib/jsonLd";

export const Metadata: React.FC = () => (
  <Head>
    <meta charSet="utf-8" />
    <title>BusshiDev - Design. Develop. Deploy. Boost</title>
    <meta
      name="description"
      content="BusshiDev - Design. Develop. Deploy. Boost"
    />
    <meta name="author" content="busshiDev" />
    <meta
      name="keywords"
      content="busshiDev, Freelance, Fullstack developer, Developer, ReactJS, NextJS, NestJS, ExpressJS, SEO, Docker"
    />

    <meta name="color-scheme" content="dark light" />
    <meta property="og:image" content="https://busshidev.fr/banner.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:type" content="image" />
    <meta property="og:image:width" content="2220" />
    <meta property="og:image:height" content="456" />
    <meta property="og:url" content={SITE_URL} />
    <meta
      property="og:title"
      content="BusshiDev - Design. Develop. Deploy. Boost"
    />

    {/* Google search console verification code */}
    <meta
      name="google-site-verification"
      content="9zfrcdtOL120_Di_ZUTyg-Tce-YNx4ZA5PYx9yK4aJo"
    />

    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />

    {/* Website rich snippet */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdWebsite),
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
        __html: JSON.stringify(jsonLdOrganization),
      }}
    />

    {/* Organization Rating rich snippet  */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdOrganizationRating),
      }}
    />
  </Head>
);

export default Metadata;
