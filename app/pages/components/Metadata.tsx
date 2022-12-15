import Head from "next/head";
import { jsonLdLogo, jsonLdWebsite } from "../lib/jsonLd";

export const Metadata: React.FC = () => (
  <Head>
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

    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />

    {/* Website */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdWebsite),
      }}
    />

    {/* Logo */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdLogo),
      }}
    />
  </Head>
);
