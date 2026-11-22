import { useMemo, useState } from 'react'
import {
  categories,
  featuredReport,
  formatPrice,
  publishedReports,
  reportPath,
} from '../data/reports'
import { ButtonLink, Cover, Eyebrow, Icon, PurchaseButton } from './ui'

export function Reports() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const filtered = useMemo(
    () =>
      publishedReports.filter(
        (report) =>
          (category === 'all' || report.topics.some((topic) => topic === category)) &&
          `${report.title} ${report.subtitle} ${report.description} ${report.topics.join(' ')}`
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    [query, category],
  )
  return (
    <>
      <section className="container page-heading">
        <Eyebrow>THE RESEARCH LIBRARY</Eyebrow>
        <h1>
          Intelligence,
          <br />
          <span className="text-blue">in perspective.</span>
        </h1>
        <p>
          Independent briefs on technology, infrastructure, and the industrial systems shaping
          tomorrow. Focused research. A clearer view.
        </p>
      </section>
      <section className="container catalog-section" aria-label="Published reports">
        <div className="catalog-tools">
          <label className="search-input">
            <Icon name="search" size={19} />
            <span className="sr-only">Search reports</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the research library…"
            />
          </label>
          <label className="category-select">
            <span className="sr-only">Filter by research category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="all">All research areas</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="catalog-count" role="status" aria-live="polite">
          <span>
            {filtered.length} {filtered.length === 1 ? 'PUBLICATION' : 'PUBLICATIONS'}
          </span>
          <span>INDEPENDENT DIGITAL RESEARCH</span>
        </div>
        <div className="catalog-results">
          {filtered.map((report) => (
            <article className="catalog-report" key={report.slug}>
              <a
                href={reportPath(report)}
                className="catalog-art"
                aria-label={`View ${report.title}`}
              >
                <Cover report={report} eager />
                <span className="catalog-image-label">INTELLIGENCE BRIEF / #{report.issue}</span>
              </a>
              <div className="catalog-body">
                <span className="category-pill">{report.category}</span>
                <h2>
                  <a href={reportPath(report)}>
                    {report.title}
                    <span>ISSUE #{report.issue}</span>
                  </a>
                </h2>
                <h3>{report.subtitle}</h3>
                <p>{report.description}</p>
                <div className="report-meta">
                  <time dateTime={report.date}>{report.displayDate}</time>
                  <span>{report.pages}-page PDF</span>
                </div>
                <div className="catalog-bottom">
                  <span className="price">
                    {formatPrice(report)} <small>USD</small>
                  </span>
                  <ButtonLink href={reportPath(report)}>View report</ButtonLink>
                </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="empty-state">
              <Icon name="search" size={34} />
              <h2>No reports match this view.</h2>
              <p>Try another search or explore all currently published research.</p>
              <button
                className="button button-secondary"
                onClick={() => {
                  setCategory('all')
                  setQuery('')
                }}
              >
                Clear filters <Icon name="arrow" size={17} />
              </button>
            </div>
          )}
        </div>
        <div className="library-note">
          <Icon name="layers" size={22} />
          <div>
            <h2>A focused library. A broad research lens.</h2>
            <p>
              Only published reports appear here. Our coverage spans AI, semiconductors,
              infrastructure, energy, robotics, and emerging industrial technologies.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

const topics = [
  [
    '01',
    'The Terafab initiative',
    'The initiative’s stated ambitions and its place in the AI infrastructure landscape.',
  ],
  [
    '02',
    'Semiconductor manufacturing',
    'The fabrication capabilities and industrial dependencies behind advanced chips.',
  ],
  [
    '03',
    'Energy infrastructure',
    'The power systems and infrastructure needed to support compute-intensive development.',
  ],
  [
    '04',
    'Industrial dependencies',
    'The supply chains, equipment, and enabling systems that influence execution.',
  ],
  [
    '05',
    'Commercial opportunities',
    'The wider industrial opportunities associated with a developing infrastructure ecosystem.',
  ],
  [
    '06',
    'Execution risks',
    'The constraints and uncertainties to weigh alongside the opportunity.',
  ],
]

export function Product() {
  const report = featuredReport
  return (
    <>
      <div className="container breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/reports/">Reports</a>
        <span>/</span>
        <span>Terafab Watch #001</span>
      </div>
      <section className="container product-hero">
        <div className="product-visual">
          <div className="product-cover-frame">
            <div className="product-frame-top">
              <span>THE INTELLIGENCE SERIES</span>
              <span>001</span>
            </div>
            <Cover eager />
            <div className="product-frame-bottom">
              <Icon name="layers" size={16} />
              <span>8-PAGE DIGITAL INTELLIGENCE BRIEF</span>
            </div>
          </div>
          <p className="cover-caption">
            Terafab Watch — Issue #001. The AI Infrastructure Opportunity.
          </p>
        </div>
        <div className="product-copy">
          <Eyebrow dot>INDEPENDENT INTELLIGENCE BRIEF</Eyebrow>
          <h1>
            TERAFAB
            <br />
            WATCH<span className="issue-heading">ISSUE #001</span>
          </h1>
          <p className="product-subtitle">{report.subtitle}</p>
          <p className="product-quick-meta">
            <strong>{formatPrice(report)} USD</strong>
            <span>/</span>
            <span>{report.pages}-page PDF · English</span>
          </p>
          <p className="product-description">{report.description}</p>
          <div className="product-facts">
            <div>
              <span>PUBLICATION</span>
              <time dateTime={report.date}>{report.displayDate}</time>
            </div>
            <div>
              <span>FORMAT</span>
              <strong>{report.pages}-page PDF · English</strong>
            </div>
            <div>
              <span>CATEGORY</span>
              <strong>{report.category}</strong>
            </div>
          </div>
          <div className="product-buy-box">
            <div className="product-price">
              <span>
                {formatPrice(report)} <small>USD</small>
              </span>
              <span className="one-time">Listed price</span>
            </div>
            <PurchaseButton />
            <p>
              <Icon name="external" size={13} /> Secure checkout and digital delivery via Gumroad.
            </p>
            <p className="tax-note">
              Review the final price and terms at checkout.
            </p>
          </div>
        </div>
      </section>
      <div className="container product-content">
        <div className="product-main">
          <section className="article-section">
            <Eyebrow>THE OVERVIEW</Eyebrow>
            <h2>
              Behind the ambition.
              <br />
              Beyond the announcement.
            </h2>
            <p>
              Artificial intelligence depends on more than models. It depends on semiconductor
              manufacturing, power, and the industrial infrastructure that brings computing capacity
              into the real world.
            </p>
            <p>
              Terafab Watch examines these connections through the lens of Elon Musk’s Terafab
              initiative, considering the commercial opportunities alongside industrial dependencies
              and execution risks.
            </p>
            <p>
              This independent brief is designed to help readers frame the development, understand
              the enabling systems, and approach forward-looking claims with perspective.
            </p>
          </section>
          <section className="article-section" id="inside">
            <Eyebrow>INSIDE THE BRIEF</Eyebrow>
            <h2>Six angles. One connected picture.</h2>
            <p className="topics-note">
              Explore the themes covered in this independent intelligence brief.
            </p>
            <div className="inside-topics">
              {topics.map(([number, title, description]) => (
                <article key={number}>
                  <span className="mono">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="article-section">
            <Eyebrow>WHO IT’S FOR</Eyebrow>
            <h2>
              For curious minds
              <br />
              with a wider lens.
            </h2>
            <p>
              Written for technology and industry professionals, founders, researchers, students,
              and informed readers seeking context on the systems behind AI infrastructure.
            </p>
            <p>
              No specialist fabrication knowledge is assumed. The brief offers an analytical
              starting point, rather than personalized business, financial, or investment advice.
            </p>
          </section>
          <section className="source-statement">
            <Icon name="shield" size={27} />
            <div>
              <h2>Independent perspective. Transparent sourcing.</h2>
              <p>
                Our editorial standard is to ground analysis in publicly available information and
                distinguish reported facts from interpretation and projections. Readers are
                encouraged to consult original source material and evaluate forward-looking claims
                in the context of the publication date.
              </p>
              <p>
                Tech Supply Watch is not affiliated with, endorsed by, or sponsored by Elon Musk or
                the organizations and initiatives discussed.
              </p>
            </div>
          </section>
          <p className="product-disclaimer">
            For informational and educational purposes only. Not financial, investment, legal, or
            engineering advice. Forward-looking statements are uncertain, and project plans may
            change.{' '}
            <a href="/disclaimer/">
              Read the full disclaimer <Icon name="arrow" size={14} />
            </a>
          </p>
        </div>
        <aside className="product-sidebar">
          <Eyebrow>PUBLICATION DETAILS</Eyebrow>
          <dl>
            <div>
              <dt>Publisher</dt>
              <dd>Tech Supply Watch</dd>
            </div>
            <div>
              <dt>Series</dt>
              <dd>Terafab Watch</dd>
            </div>
            <div>
              <dt>Issue</dt>
              <dd>#001</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>{report.displayDate}</dd>
            </div>
            <div>
              <dt>Length</dt>
              <dd>{report.pages} pages</dd>
            </div>
            <div>
              <dt>File format</dt>
              <dd>PDF</dd>
            </div>
            <div>
              <dt>Language</dt>
              <dd>English</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>{formatPrice(report)} USD</dd>
            </div>
            <div>
              <dt>Checkout & delivery</dt>
              <dd>Gumroad</dd>
            </div>
          </dl>
          <ButtonLink href={report.purchaseUrl} variant="secondary" external>
            View on Gumroad
          </ButtonLink>
          <p>
            Purchase terms and any refund policy are displayed by Gumroad at checkout. For order
            support, use the contact options in your Gumroad receipt.
          </p>
        </aside>
      </div>
      <section className="purchase-band">
        <div className="container">
          <div>
            <Eyebrow>THE AI INFRASTRUCTURE OPPORTUNITY</Eyebrow>
            <h2>A clearer view starts here.</h2>
            <p>Terafab Watch — Issue #001. Eight pages. Independent analysis.</p>
          </div>
          <div>
            <PurchaseButton />
            <p>8-page PDF · {formatPrice(report)} USD · Via Gumroad</p>
          </div>
        </div>
      </section>
    </>
  )
}
