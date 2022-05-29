# Astro Starter Kit: Docs Site

```bash
npm init astro -- --template docs
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/docs)

## Features

- ✅ **Full Markdown support**
- ✅ **Responsive mobile-friendly design**
- ✅ **Sidebar navigation**
- ✅ **Search (powered by Algolia)**
- ✅ **Multi-language i18n**
- ✅ **Automatic table of contents**
- ✅ **Automatic list of contributors**
- ✅ (and, best of all) **dark mode**

## Commands Cheatsheet

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

To deploy your site to production, check out our [Deploy an Astro Website](https://docs.astro.build/guides/deploy) guide.

## New to Astro?

Welcome! Check out [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).

## Customize This Theme

### Site metadata

`src/config.ts` contains several data objects that describe metadata about your site like title, description, default language, and Open Graph details. You can customize these to match your project.

### CSS styling

The theme's look and feel is controlled by a few key variables that you can customize yourself. You'll find them in the `public/theme.css` CSS file.

If you've never worked with CSS variables before, give [MDN's guide on CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) a quick read.

This theme uses a "cool blue" accent color by default. To customize this for your project, change the `--theme-accent` variable to whatever color you'd like:

```diff
/* public/theme.css */
:root {
  color-scheme: light;
-  --theme-accent: hsla(var(--color-blue), 1);
+  --theme-accent: hsla(var(--color-red), 1);   /* or: hsla(#FF0000, 1); */
```

