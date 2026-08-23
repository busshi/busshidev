/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
