export const site = {
  siteName: 'TECH SUPPLY WATCH',
  siteDescription:
    'Independent technology and infrastructure intelligence. Explore research on semiconductors, artificial intelligence, energy, and the industrial systems shaping tomorrow.',
  tagline: 'Track the technologies shaping tomorrow.',
  // Set a verified editorial address here to enable the contact link.
  contactEmail: '',
  updated: 'November 21, 2026',
}

export const routes = [
  {
    id: 'home',
    path: '/',
    title: 'TECH SUPPLY WATCH — Independent Technology Intelligence',
    description: site.siteDescription,
  },
  {
    id: 'reports',
    path: '/reports/',
    title: 'Intelligence Reports | TECH SUPPLY WATCH',
    description:
      'Explore independent technology intelligence reports. Read Terafab Watch Issue #001, an 8-page brief on AI infrastructure, semiconductors, and energy. $3.00 USD.',
  },
  {
    id: 'product',
    path: '/reports/terafab-watch-001/',
    title: 'TERAFAB WATCH — Issue #001: The AI Infrastructure Opportunity | $3.00',
    description:
      'An independent 8-page PDF on the Terafab initiative, semiconductor manufacturing, energy infrastructure, commercial opportunities, and execution risks. $3.00 USD.',
  },
  {
    id: 'about',
    path: '/about/',
    title: 'About the Publication | TECH SUPPLY WATCH',
    description:
      'An independent research publication covering emerging technologies, industrial infrastructure, and the global systems enabling technological progress.',
  },
  {
    id: 'contact',
    path: '/contact/',
    title: 'Contact & Purchase Support | TECH SUPPLY WATCH',
    description:
      'Contact information for Tech Supply Watch and guidance for purchases, PDF downloads, and support through Gumroad.',
  },
  {
    id: 'privacy',
    path: '/privacy/',
    title: 'Privacy Policy | TECH SUPPLY WATCH',
    description:
      'How Tech Supply Watch handles website information, hosting logs, aggregate traffic measurement, and external Gumroad purchases.',
  },
  {
    id: 'terms',
    path: '/terms/',
    title: 'Terms of Use | TECH SUPPLY WATCH',
    description:
      'Terms governing the use of Tech Supply Watch research, website content, and independent digital intelligence reports purchased on Gumroad.',
  },
  {
    id: 'disclaimer',
    path: '/disclaimer/',
    title: 'Research & Investment Disclaimer | TECH SUPPLY WATCH',
    description:
      'Independent research disclosures, sourcing limitations, forward-looking statements, and financial advice disclaimers for Tech Supply Watch.',
  },
  {
    id: 'not-found',
    path: '/404/',
    title: 'Page Not Found | TECH SUPPLY WATCH',
    description: 'Find your way back to Tech Supply Watch intelligence reports.',
  },
] as const

export type PageId = (typeof routes)[number]['id']
