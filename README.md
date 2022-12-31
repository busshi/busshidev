# BUSSHIDEV

Coded in Typescript with NextJS
[Have a look here](https://busshidev.fr)

## Usage

- `yarn install` to install node modules
- `yarn run dev` to start in development mode
- `yarn run build` to create the production build ready to be deployed

## Challenges

- Using the latest version of the [NextJS](https://nextjs.org/docs/getting-started) framework, actually version 13.
- No installing existing libraries for some CSS effects or ready-to-use components available on NPM. I had to recreate my own. I used a lot [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), a very powerful and useful native API that provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
- Creating custom and reusable hooks (a release will come soon in the [Node Package Manager](https://npmjs.com))
- No Redux or other store library but create my own contexts and providers. For example there is one context for the highlighted colors and a provider that store variables values and functions to share with components.
