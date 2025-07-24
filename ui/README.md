This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Daily Papers UI

This is a Next.js webapp that displays daily paper recommendations from markdown files in the `../archive` directory. The homepage shows the latest list, and you can browse past lists. The UI is clean, modern, and renders markdown as HTML.

## Features
- Reads markdown files from the `archive` directory (one per day)
- Renders the latest paper list on the homepage
- Navigation to past lists
- Clean, modern UI with Tailwind CSS
- Static export for GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Static Export (for GitHub Pages)

```bash
npm run build
npm run export
```


The static site will be in the `out/` directory.

## Deploy to GitHub Pages

1. Set your repo name in `next.config.ts` (see `repoName` variable).
2. Build and export the static site:
   ```bash
   npm run build
   npm run export
   ```
3. Commit and push the contents of the `out/` directory to your `gh-pages` branch.
4. In your repo settings, set GitHub Pages to serve from the `gh-pages` branch (root).

If your repo is not at the root domain, set the `GITHUB_PAGES=1` environment variable when building/exporting:
```bash
GITHUB_PAGES=1 npm run build && GITHUB_PAGES=1 npm run export
```

---

This project was bootstrapped with Next.js, TypeScript, Tailwind CSS, and ESLint.
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
