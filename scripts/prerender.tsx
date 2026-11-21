import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { renderToString } from 'react-dom/server'
import { App } from '../src/App'
import { routes, site } from '../src/data/site'
import { featuredReport, formatPrice, reportPath } from '../src/data/reports'

const escape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
const safeJson = (value: unknown) => JSON.stringify(value).replaceAll('<', '\\u003c')

// Cloudflare injects the deployment URL. The stable Pages alias omits its deployment label.
const deploymentHost = process.env.CF_PAGES_URL ? new URL(process.env.CF_PAGES_URL).hostname : ''
const pagesAlias = deploymentHost.match(/^(?:[a-z0-9-]+\.)?([a-z0-9-]+\.pages\.dev)$/)?.[1]
const origin = pagesAlias ? `https://${pagesAlias}` : ''
const indexable = Boolean(origin && process.env.CF_PAGES_BRANCH === 'main')

for (const route of routes) {
  const filename =
    route.id === 'not-found'
      ? '404.html'
      : `${route.path === '/' ? '' : route.path.slice(1)}index.html`
  const canonical = `${origin}${route.path}`
  const structured =
    route.id === 'product'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: `${featuredReport.title} — ISSUE #${featuredReport.issue}`,
          description: featuredReport.description,
          image: `${origin}${featuredReport.cover}`,
          url: `${origin}${reportPath(featuredReport)}`,
          category: featuredReport.category,
          releaseDate: featuredReport.date,
          brand: { '@type': 'Brand', name: site.siteName },
          offers: {
            '@type': 'Offer',
            price: featuredReport.price.toFixed(2),
            priceCurrency: featuredReport.currency,
            url: featuredReport.purchaseUrl,
            availability: 'https://schema.org/OutOfStock',
            description: `${featuredReport.pages}-page English PDF. Listed price ${formatPrice(featuredReport)} USD; payments currently unavailable on Payhip.`,
          },
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: route.title,
          description: route.description,
          url: canonical,
          isPartOf: { '@type': 'WebSite', name: site.siteName, url: origin },
        }
  const body = renderToString(<App page={route.id} />)
  const html = `<!doctype html>
<html lang="en" data-page="${route.id}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#060D1C" />
    <meta name="application-name" content="${escape(site.siteName)}" />
    <title>${escape(route.title)}</title>
    <meta name="description" content="${escape(route.description)}" />
    <meta name="robots" content="${route.id === 'not-found' || !indexable ? 'noindex, follow' : 'index, follow'}" />
    ${origin && route.id !== 'not-found' ? `<link rel="canonical" href="${canonical}" />` : ''}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta property="og:site_name" content="${escape(site.siteName)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escape(route.title)}" />
    <meta property="og:description" content="${escape(route.description)}" />
    ${
      origin
        ? `<meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${origin}${featuredReport.cover}" />
    <meta property="og:image:width" content="${featuredReport.coverWidth}" />
    <meta property="og:image:height" content="${featuredReport.coverHeight}" />
    <meta property="og:image:alt" content="Terafab Watch, Issue 001 cover" />`
        : ''
    }
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(route.title)}" />
    <meta name="twitter:description" content="${escape(route.description)}" />
    ${origin ? `<meta name="twitter:image" content="${origin}${featuredReport.cover}" />` : ''}
    <meta name="twitter:image:alt" content="Terafab Watch — Issue 001. The AI Infrastructure Opportunity. Actual publication cover." />
    <script type="application/ld+json">${safeJson(structured)}</script>
    <noscript><style>@media(max-width:720px){.header-inner{flex-wrap:wrap;padding-block:20px}.menu-toggle{display:none}.navigation{display:flex;position:static;border:0;box-shadow:none;background:none;padding:0;width:100%}.navigation>a{min-height:44px}}</style></noscript>
  </head>
  <body>
    <div id="root">${body}</div>
    <script type="module" src="/src/client.tsx"></script>
  </body>
</html>
`
  await mkdir(dirname(filename), { recursive: true })
  await writeFile(filename, html)
}

const indexedRoutes = indexable ? routes.filter((route) => route.id !== 'not-found') : []
await mkdir('public', { recursive: true })
await writeFile(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexedRoutes.map((route) => `  <url><loc>${origin}${route.path}</loc></url>`).join('\n')}\n</urlset>\n`,
)
await writeFile(
  'public/robots.txt',
  `User-agent: *\nAllow: /\n${indexable ? `Sitemap: ${origin}/sitemap.xml\n` : ''}`,
)
