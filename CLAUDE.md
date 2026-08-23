# Project Instructions

## Project

This project is a showcase / marketing website built with Next.js.

There is no database and no backend application logic unless explicitly required.

The main goals are:

- Clean and maintainable code
- Good performance
- Excellent SEO
- Responsive design
- Accessibility
- Good user experience
- Simple architecture

---

## Tech Stack

- Next.js
- React
- TypeScript
- CSS / styled-components
- Package manager: yarn

Before introducing a new library, check whether the existing stack already provides a suitable solution.

Do not install a dependency without a clear reason.

---

## Next.js

Follow the conventions of the Next.js version already installed in the project.

Prefer Server Components by default.

Use Client Components only when client-side interactivity or browser APIs require them.

Avoid unnecessary `"use client"` directives.

Use Next.js features when appropriate instead of implementing equivalent functionality manually.

Examples:

- `next/image` for images
- `next/link` for internal navigation
- Next.js metadata APIs for SEO
- Server Components when possible

---

## TypeScript

Use TypeScript throughout the project.

Avoid `any` unless there is a very specific reason.

Prefer explicit and meaningful types.

Do not duplicate types unnecessarily.

Reuse existing types when possible.

---

## Components

Keep components:

- Small
- Reusable when appropriate
- Easy to understand
- Focused on one responsibility

Before creating a new component, check whether an existing component can be reused or extended.

Do not create abstractions just for the sake of abstraction.

Avoid over-engineering simple UI elements.

---

## Styling

Follow the existing styling conventions of the project.

- Keep styles close to the component when appropriate.
- Avoid inline styles unless they are genuinely useful.
- Reuse existing design tokens and variables.
- Avoid unnecessary duplication.
- Maintain consistent spacing, typography and responsive behavior.

Do not introduce a new styling solution without asking first.

---

## Responsive Design

The website must work well on:

- Mobile
- Tablet
- Desktop
- Large screens

Do not design only for desktop and add mobile support as an afterthought.

When modifying a component, consider its behavior at different viewport sizes.

---

## Accessibility

Follow good accessibility practices.

- Use semantic HTML.
- Images must have meaningful `alt` text when appropriate.
- Interactive elements must be keyboard accessible.
- Buttons should be used for actions.
- Links should be used for navigation.
- Maintain sufficient color contrast.
- Do not rely only on color to communicate information.

Do not add unnecessary ARIA attributes when semantic HTML already provides the required accessibility behavior.

---

## SEO

SEO is an important requirement for this project.

When creating or modifying pages, consider:

- Page title
- Meta description
- Open Graph metadata
- Canonical URLs when relevant
- Semantic HTML
- Heading hierarchy
- Internal links
- Image optimization
- Structured data when appropriate

Do not add SEO content or metadata that is not supported by the actual website content.

---

## Performance

Prioritize performance.

Prefer:

- Server Components
- Optimized images
- Appropriate image sizes
- Lazy loading when appropriate
- Minimal JavaScript sent to the client
- Existing Next.js optimizations

Avoid unnecessary client-side rendering.

Avoid adding libraries for functionality that can be implemented simply with the existing stack or native browser APIs.

---

## Content

Do not invent business information, claims, statistics, testimonials, customer names, prices or other factual content.

If required information is missing, clearly indicate what needs to be provided.

Keep content separate from presentation when this improves maintainability.

---

## Code Changes

Before modifying code:

1. Understand the existing implementation.
2. Search for existing components, utilities and patterns.
3. Follow the project's existing conventions.
4. Make the smallest reasonable change.

Do not rewrite working code unnecessarily.

Do not refactor unrelated code while implementing a feature.

---

## Before Creating New Files

Check whether the functionality can reasonably be added to an existing file or component.

Create a new file when it improves organization, reuse or maintainability.

Avoid creating multiple files for trivial functionality.

---

## Dependencies

Do not install new npm packages without asking first.

Before suggesting a dependency:

1. Check whether the functionality already exists in the project.
2. Check whether it can reasonably be implemented using native APIs.
3. Consider the impact on bundle size and maintenance.

---

## Git

Never commit changes unless explicitly requested.

Never push changes to a remote repository.

Never reset, revert, delete or overwrite existing user changes without explicit permission.

Keep changes focused on the requested task.

---

## Working Method

For non-trivial tasks:

1. Analyze the existing code.
2. Explain the proposed approach.
3. Identify the files that will be modified.
4. Implement the change.
5. Review the resulting code.
6. Run relevant checks or tests when available.
7. Report any remaining issues.

For small and obvious changes, do not over-explain or create an unnecessary plan.

---

## Important Rule

When uncertain about an architectural, business or design decision, ask before making a significant assumption.

Do not invent requirements.

Prefer consistency with the existing project over introducing a new pattern.
