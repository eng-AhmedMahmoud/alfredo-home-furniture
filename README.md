This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

## Hosting

Static export (`output: "export"` in `next.config.ts`) on Cloudflare Pages: https://alfredo-home-furniture.pages.dev
(Pages project `alfredo-home-furniture`). The old Vercel URL redirects there.

- `bash scripts/ci-local.sh`: the merge gate (clean install, lint, build).
- `bash scripts/deploy-pages.sh`: production deploy from a clean `main` (needs a wrangler login on the Cloudflare account).
- Node 24 (`.nvmrc`), pnpm 10 (`packageManager` in `package.json`).
