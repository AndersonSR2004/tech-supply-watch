export const categories = [
  'Artificial Intelligence',
  'Semiconductor Manufacturing',
  'AI Infrastructure',
  'Energy & Power Systems',
  'Robotics & Automation',
  'Emerging Industrial Technologies',
] as const

export type Category = (typeof categories)[number]

export interface Report {
  slug: string
  title: string
  issue: string
  subtitle: string
  date: string
  displayDate: string
  category: Category
  topics: Category[]
  description: string
  pages: number
  price: number
  currency: 'USD'
  cover: string
  coverWidth: number
  coverHeight: number
  purchaseUrl: string
  published: boolean
}

export const reports: Report[] = [
  {
    slug: 'terafab-watch-001',
    title: 'TERAFAB WATCH',
    issue: '001',
    subtitle: 'The AI Infrastructure Opportunity',
    date: '2026-11-21',
    displayDate: 'November 21, 2026',
    category: 'AI Infrastructure',
    topics: ['AI Infrastructure', 'Semiconductor Manufacturing', 'Energy & Power Systems'],
    description:
      'An independent intelligence brief examining Elon Musk’s Terafab initiative, semiconductor manufacturing, energy infrastructure, industrial dependencies, commercial opportunities, and execution risks.',
    pages: 8,
    price: 3.00,
    currency: 'USD',
    cover: '/img/terafab-watch-cover.png',
    coverWidth: 600,
    coverHeight: 600,
    purchaseUrl: 'https://techsupplywatch.gumroad.com/l/rlwyhl',
    published: true,
  },
]

export const publishedReports = reports.filter((report) => report.published)
export const featuredReport = publishedReports[0]!
export const reportPath = (report: Report) => `/reports/${report.slug}/`
export const formatPrice = (report: Report) => `$${report.price.toFixed(2)}`

export const coverage = [
  {
    number: '01',
    title: 'Artificial Intelligence',
    description: 'The models, compute, and capabilities moving AI forward.',
    icon: 'brain',
  },
  {
    number: '02',
    title: 'Semiconductor Manufacturing',
    description: 'From silicon wafers to the fabs behind global computing.',
    icon: 'chip',
  },
  {
    number: '03',
    title: 'AI Infrastructure',
    description: 'The physical foundations of an increasingly digital world.',
    icon: 'server',
  },
  {
    number: '04',
    title: 'Energy & Power Systems',
    description: 'The power generation and grids that progress depends on.',
    icon: 'energy',
  },
  {
    number: '05',
    title: 'Robotics & Automation',
    description: 'Intelligent machines and the changing industrial landscape.',
    icon: 'robot',
  },
  {
    number: '06',
    title: 'Emerging Industrial Technologies',
    description: 'The technologies connecting today’s industry to tomorrow.',
    icon: 'industry',
  },
] as const
