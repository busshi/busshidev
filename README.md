# BUSSHIDEV

Coded in Typescript with NextJS
[Have a look here](https://busshidev.fr)

## Usage

- `yarn install` to install node modules
- `yarn run dev` to start in development mode
- `yarn run build` to create the production build ready to be deployed

## Challenges

- Using the latest version of the [NextJS](https://nextjs.org/docs/getting-started) framework, actually version 13.
- No installing existing libraries for some CSS effects or ready-to-use components available on NPM. I had to recreate my own. I used a lot [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), a very powerful and useful native API that provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. Check the [testimonials](/components/Testimonials.tsx) component for an example.
- Creating custom and reusable hooks (a release will come soon in the [Node Package Manager](https://npmjs.com))
- No Redux or other store library but I create my own contexts and providers. For example there is one context for the highlighted colors and a provider that store variables values and functions to share with components.
- Create a 3D globe representating the Earth. To achieve that, I first used a powerful 3D javascript library to create and animate the globe: [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene). It was working well but because I was using an existing library, I decided to used the appropriate library to represent the globe: [Globe.gl](https://github.com/vasturiano/react-globe.gl). The only problem was to import dynamically the library in order to make it works with NextJS.
- 2 SaaS used:
  - Calendly: powerful online calendar with various options like reminders, synchronizable with all calendars
  - Crisp.chat: easy ready-to-use chat with lots of options. I just used the chat one!
