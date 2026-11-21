# Tech Supply Watch

Independent technology intelligence publication. The site is built with React, TypeScript and Vite and serves prerendered HTML for each route.

## Cloudflare Pages

- GitHub repository: `AndersonSR2004/tech-supply-watch`
- Production branch: `main`
- Root directory: repository root
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22, pinned in `.node-version`

The build derives the stable Pages hostname from Cloudflare's `CF_PAGES_URL` and uses it for canonical URLs, social previews and the production sitemap. Preview and local builds carry `noindex`. Cloudflare Pages applies the security and caching policies in `public/_headers`.

## Payhip

[Terafab Watch Issue #001](https://payhip.com/b/wVczO) was listed at US$3.00 on November 21, 2026. Payhip reported that payments were unavailable because the seller had not connected a payment processor. Purchase calls to action open the product listing and the product is marked unavailable in its structured data. The site has no payment form or payment credentials.

## Verification

Run `npm ci`, `npm run build` and `npm audit`. Smoke checks cover the eight indexed routes, the custom 404, local images and scripts, internal navigation targets, the Payhip product URL, structured data, canonical tags, robots.txt, sitemap and security headers. Check the Pages deployment's commit SHA and public HTTP responses before announcing launch.
