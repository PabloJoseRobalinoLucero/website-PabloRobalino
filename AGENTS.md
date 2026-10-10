## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Styling & Tailwind CSS v4 Rules

- **Use Built-in Color Palette First:** Always leverage default Tailwind v4 colors (`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `blue`, `indigo`, etc.) using standard utility classes (e.g., `bg-slate-900`, `text-indigo-600`). Do NOT create custom color classes or use arbitrary hex values (`bg-[#1a1a1a]`) if an equivalent standard Tailwind color exists.
- **Tailwind CSS v4 CSS-First Architecture:** Tailwind CSS v4 uses CSS-first configuration via `@import "tailwindcss";`. Do NOT generate or look for a `tailwind.config.js` file.
- **Check Existing `@theme` Directives:** Before introducing new design tokens, check the primary CSS file (e.g., `src/styles/global.css`) for custom color definitions declared inside `@theme` blocks. Reuse existing theme variables (`--color-*`).
- **Arbitrary Values Restriction:** Avoid inline arbitrary values (e.g., `bg-[#0d1117]` or `w-[342px]`) unless specifically requested or strictly required by custom brand guidelines.
- **Tailwind v4 Syntax & Directives:** Strictly use v4 directives (`@theme`, `@utility`, `@import "tailwindcss";`) and avoid legacy v3 `@apply` patterns where standard utilities suffice.
