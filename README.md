![build](https://github.com/busshi/busshidev/actions/workflows/build.yml/badge.svg)

# BUSSHIDEV

Coded in TypeScript with Next.js.
[Have a look here](https://busshidev.fr)

## Usage

- `yarn` to install node modules
- `yarn dev` to start in development mode
- `yarn build` to create the production build ready to be deployed

## Stack

- [Next.js](https://nextjs.org/docs/getting-started) 15 (Pages Router) with built-in i18n routing (French / English)
- [React](https://react.dev/) 19 + TypeScript
- [styled-components](https://styled-components.com/) for styling and light/dark theming
- [react-globe.gl](https://github.com/vasturiano/react-globe.gl) for the animated 3D globe on the contact page
- [sharp](https://sharp.pixelplumbing.com/) for build-time image processing
- [@vercel/analytics](https://vercel.com/analytics) for privacy-friendly analytics
- Hosted on [Vercel](https://vercel.com)

## Challenges

- No off-the-shelf UI libraries for the custom CSS effects and components — built from scratch, leaning heavily on the native [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API for scroll-based animations. See the [testimonials](/components/Testimonials.tsx) component for an example.
- Custom, reusable hooks published as their own package: [@busshi/react-hooks](https://www.npmjs.com/package/@busshi/react-hooks).
- No Redux or other state library — just React Context and custom providers (e.g. one for the theme, one for the accent color shared across sections).
- A themed 3D globe on the contact page, built with [react-globe.gl](https://github.com/vasturiano/react-globe.gl) (which wraps [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)), matching light/dark mode.
- Two SaaS integrations:
  - [Calendly](https://calendly.com), for booking calls
  - [Crisp](https://crisp.chat), for live chat
