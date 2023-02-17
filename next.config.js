/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
