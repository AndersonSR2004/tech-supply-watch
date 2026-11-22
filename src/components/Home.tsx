import { coverage, featuredReport as report, formatPrice, reportPath } from '../data/reports'
import { ButtonLink, Cover, Eyebrow, Icon, PurchaseButton, SectionHeading } from './ui'

export function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <Eyebrow dot>CLARITY IN A COMPLEX WORLD</Eyebrow>
          <h1>
            Independent
            <br />
            intelligence on the
            <br />
            technologies <span>shaping tomorrow.</span>
          </h1>
          <p className="hero-description">
            Explore the semiconductor breakthroughs, energy infrastructure, and industrial
            technologies transforming the global economy.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/reports/">Explore intelligence reports</ButtonLink>
            <a className="text-link" href={reportPath(report)}>
              View latest brief <Icon name="arrow" size={17} />
            </a>
          </div>
          <a className="hero-latest" href={reportPath(report)}>
            LATEST: TERAFAB WATCH #{report.issue} <span>·</span> {formatPrice(report)} USD{' '}
            <Icon name="external" size={12} />
          </a>
          <div className="hero-proof">
            <span>
              <Icon name="shield" size={15} /> Independent analysis
            </span>
            <span>
              <Icon name="layers" size={15} /> Transparent sourcing
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-topline">
            <span className="eyebrow">THE LATEST INTELLIGENCE</span>
            <span className="live-indicator">ISSUE 001</span>
          </div>
          <div className="cover-stage">
            <span className="stage-cross cross-one" aria-hidden="true">
              +
            </span>
            <span className="stage-cross cross-two" aria-hidden="true">
              +
            </span>
            <a
              className="hero-cover-link"
              href={reportPath(report)}
              aria-label="Explore Terafab Watch Issue 001"
            >
              <Cover eager />
            </a>
            <span className="stage-label" aria-hidden="true">
              FIG. 001 — THE INFRASTRUCTURE OF AI
            </span>
          </div>
          <div className="visual-caption">
            <div>
              <span className="eyebrow">INDEPENDENT INTELLIGENCE BRIEF</span>
              <p>Big shifts. A clearer perspective.</p>
            </div>
            <span className="hero-price">
              {formatPrice(report)}
              <small>USD / PDF</small>
            </span>
          </div>
        </div>
      </section>
      <div className="topic-ticker">
        <div className="container">
          <span className="ticker-label">ON OUR RADAR</span>
          <span>SEMICONDUCTORS</span>
          <i aria-hidden="true" />
          <span>AI INFRASTRUCTURE</span>
          <i aria-hidden="true" />
          <span>ENERGY SYSTEMS</span>
          <i aria-hidden="true" />
          <span>INDUSTRIAL INNOVATION</span>
          <Icon name="arrow" size={17} />
        </div>
      </div>
      <section className="section container" id="featured-report">
        <SectionHeading
          eyebrow="01 / FEATURED RESEARCH"
          title={
            <>
              A closer look at
              <br className="desktop-break" /> the next industrial shift.
            </>
          }
          action={
            <a className="text-link" href="/reports/">
              View all reports <Icon name="arrow" size={17} />
            </a>
          }
        />
        <article className="featured-report">
          <a
            className="featured-art"
            href={reportPath(report)}
            aria-label="View Terafab Watch Issue 001"
          >
            <div className="art-issue">
              <span>TECH SUPPLY WATCH</span>
              <span>RESEARCH / 001</span>
            </div>
            <Cover />
            <div className="art-bottom">
              <span>THE SYSTEMS BEHIND THE SIGNAL.</span>
              <Icon name="external" size={20} />
            </div>
          </a>
          <div className="featured-body">
            <div className="report-kicker">
              <span className="category-pill">{report.category}</span>
              <span className="mono">ISSUE #{report.issue}</span>
            </div>
            <h3>
              <a href={reportPath(report)}>
                {report.title}
                <span>{report.subtitle}</span>
              </a>
            </h3>
            <p>{report.description}</p>
            <div className="topic-tags">
              <span>Semiconductors</span>
              <span>Energy</span>
              <span>Industrial strategy</span>
            </div>
            <div className="report-meta">
              <span>
                <Icon name="layers" size={15} /> {report.pages}-page PDF
              </span>
              <span>
                <time dateTime={report.date}>{report.displayDate}</time>
              </span>
            </div>
            <div className="featured-purchase">
              <div className="price">
                {formatPrice(report)} <small>USD</small>
              </div>
              <PurchaseButton />
            </div>
            <p className="checkout-note">Secure checkout and digital delivery via Gumroad.</p>
          </div>
        </article>
      </section>
      <section className="coverage-section" id="coverage">
        <div className="container section">
          <SectionHeading
            eyebrow="02 / OUR RESEARCH LENS"
            title="Connected technologies. A wider view."
          >
            Progress doesn’t happen in isolation. We follow the systems that make it possible.
          </SectionHeading>
          <div className="coverage-grid">
            {coverage.map((item) => (
              <article className="coverage-item" key={item.number}>
                <div className="coverage-top">
                  <Icon name={item.icon} size={27} />
                  <span>{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="coverage-footnote">
            <span className="tiny-square" /> Our editorial scope. Explore the catalog for currently
            published research.
          </p>
        </div>
      </section>
      <section className="section container why-section">
        <div className="why-intro">
          <Eyebrow>03 / WHY TECH SUPPLY WATCH</Eyebrow>
          <h2>
            Less noise.
            <br />
            More <span className="text-blue">understanding.</span>
          </h2>
          <p>
            Technology moves fast. Understanding what it depends on takes a different kind of
            attention.
          </p>
          <ButtonLink href="/about/" variant="text">
            Our approach to research
          </ButtonLink>
        </div>
        <div className="principles">
          {[
            [
              '01',
              'Independent by design',
              'Analysis guided by the evidence, with no affiliation to the companies or initiatives covered.',
            ],
            [
              '02',
              'Sources, not speculation',
              'Transparent sourcing and a clear distinction between reported facts, analysis, and projections.',
            ],
            [
              '03',
              'Context that connects',
              'A view beyond announcements, connecting technology to power, supply chains, and execution.',
            ],
            [
              '04',
              'Focused. Accessible. Useful.',
              'Concise digital briefs, built to bring complex industrial developments into sharper focus.',
            ],
          ].map(([number, title, description]) => (
            <article className="principle" key={number}>
              <span className="mono">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <Icon name="arrow" size={18} />
            </article>
          ))}
        </div>
      </section>
      <section className="latest-section">
        <div className="container section">
          <SectionHeading
            eyebrow="04 / LATEST PUBLICATIONS"
            title="The intelligence desk."
            action={
              <a className="text-link" href="/reports/">
                Browse the library <Icon name="arrow" size={17} />
              </a>
            }
          />
          <a href={reportPath(report)} className="publication-row">
            <Cover />
            <div className="publication-text">
              <Eyebrow>
                {report.category} <span className="muted">/ ISSUE #{report.issue}</span>
              </Eyebrow>
              <h3>
                {report.title} <span>— {report.subtitle}</span>
              </h3>
              <p>
                <time dateTime={report.date}>{report.displayDate}</time>
                <span>·</span>
                {report.pages}-page PDF
              </p>
            </div>
            <span className="publication-price">
              {formatPrice(report)} <small>USD</small>
            </span>
            <span className="round-arrow">
              <Icon name="external" size={20} />
            </span>
          </a>
        </div>
      </section>
      <section className="container about-band">
        <div>
          <Eyebrow>AN INDEPENDENT PUBLICATION</Eyebrow>
          <h2>
            Track the technologies
            <br />
            shaping tomorrow.
          </h2>
        </div>
        <div>
          <p>
            Tech Supply Watch follows emerging technologies, industrial infrastructure, and the
            global systems enabling technological progress.
          </p>
          <ButtonLink href="/about/" variant="text">
            Get to know Tech Supply Watch
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
