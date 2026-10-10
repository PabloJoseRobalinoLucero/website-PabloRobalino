# Project Guidelines — Pablo Robalino Personal Website

## Project Overview
Personal portfolio/CV website for Pablo Robalino.
Stack: Astro (static output, no SSR) + Tailwind CSS v4 + TypeScript.
Bilingual (Spanish default, English) via runtime language toggle — NOT via localized routes.

## i18n — CRITICAL RULES
This project deliberately does NOT use Astro's native i18n routing. Do not
"fix" or align the project with Astro's default i18n conventions.

- ONE route per page. NEVER create localized subdirectories (`src/pages/en/`,
  `src/pages/es/`), locale prefixes, or enable the `i18n` routing option in
  `astro.config.mjs`.
- Supported languages: `"es"` (default) and `"en"`.
- UI strings (nav, buttons, labels, section titles) live in `src/i18n/ui.ts`.
- Structured content (projects, talks, events, experience) lives in
  `src/data/*.ts` with inline translatable fields: `title: { es: "", en: "" }`.
  Never put content in `ui.ts`.
- Never hardcode static text in `.astro` files or components.
- Every new translation key must be added to BOTH languages in the same
  change. TypeScript must enforce identical keys across languages.
- Runtime toggle: first visit detects `navigator.language` ("es*" → es,
  "en*" → en, anything else → es); choice persists in `localStorage`;
  `<html lang>` always reflects the active language; instant switch, no reload.
- Internal navigation links are plain and static (`/about`, `/portfolio`).
  One URL per page is a core design decision.
- Not translated (identical in both languages): tech stack, official
  organization/event names, original talk titles, place names.
- Dates stored in ISO format (`2025-10`), formatted per active language.
- Spanish text is ~15–25% longer than English: avoid fixed widths
  (`w-32`, `w-40`) on elements containing text.

## Folder Structure
```
src/
├── components/
├── i18n/          # ui.ts (dictionary), utils.ts (language helpers)
├── layouts/
├── pages/         # one page per section, English slugs
│   ├── index.astro
│   ├── about.astro
│   ├── portfolio/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── experience.astro
│   ├── talks.astro
│   ├── community.astro
│   └── contact.astro
├── data/          # structured content, es/en inline fields
└── styles/
```

## Branding
- Tagline ES: "Ingeniero de Software & Desarrollador IoT" (use the official
  UTN degree wording: "en" vs "de").
- Tagline EN: "Software Engineer & IoT Developer".
- Site `<title>`: "Pablo Robalino | <tagline>".

## Development
When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, `astro dev logs`.

## Documentation
Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Working with React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/) — ⚠️ WARNING: this guide describes the routing-based i18n approach that this project does NOT use. Read only for reference; never apply its conventions here.

## CV / Résumé Policy
- The website NEVER offers CV download buttons or links. The arrow points one way: PDF → website.
- Do not add "Download CV" / "Download résumé" features or PDF links anywhere.

## Styling & Tailwind CSS v4 Rules
- **Use Built-in Color Palette First:** Always leverage default Tailwind v4 colors (`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `blue`, `indigo`, etc.) using standard utility classes (e.g., `bg-slate-900`, `text-indigo-600`). Do NOT create custom color classes or use arbitrary hex values (`bg-[#1a1a1a]`) if an equivalent standard Tailwind color exists.
- **Tailwind CSS v4 CSS-First Architecture:** Tailwind CSS v4 uses CSS-first configuration via `@import "tailwindcss";`. Do NOT generate or look for a `tailwind.config.js` file.
- **Check Existing `@theme` Directives:** Before introducing new design tokens, check the primary CSS file (e.g., `src/styles/global.css`) for custom color definitions declared inside `@theme` blocks. Reuse existing theme variables (`--color-*`).
- **Arbitrary Values Restriction:** Avoid inline arbitrary values (e.g., `bg-[#0d1117]` or `w-[342px]`) unless specifically requested or strictly required by custom brand guidelines.
- **Tailwind v4 Syntax & Directives:** Strictly use v4 directives (`@theme`, `@utility`, `@import "tailwindcss";`) and avoid legacy v3 `@apply` patterns where standard utilities suffice.