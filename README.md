# Storybook + Lit + Vite — Stories docblock duplicating stories


The `<Stories/>` docblock duplicates the stories whenever a global option is ticked (e.g. background grid, outline).

This happens when using custom MDX docs. When using autodocs, the stories are not duplicated.

## Prerequisites:

- [pnpm](https://pnpm.io/) 

## Steps to reproduce:

1. Clone this repo:

```bash
git clone https://github.com/xsu1010/storybook-lit-vite-docs-duplicating.git
```

2. Install dependencies:

```bash
cd storybook-lit-vite-docs-duplicating && pnpm install
```

3. Run Storybook:

```bash
pnpm storybook
```

4. On the sidebar, you'll find a category named **Docs**. Click on any of the docs inside it and toggle through the global options on top (background grid, outline).
   1. The Auto MDX doc will work just fine when toggling the global options.
   2. The Custom MDX docs will duplicate the stories when toggling the global options.

## Notes:
- This issue also happens with a static build (`pnpm build-storybook`).
- On any of the docs in the Docs category, I noticed that, when toggling through the global options, the page sort of refreshes fully,
sometimes throwing me to the top of the page.
  - However, this does not happen with the example docs (left them there for comparison). I'm not sure if this is related to the issue.