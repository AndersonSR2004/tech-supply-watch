import { useEffect, useRef, useState, type ReactNode } from 'react'
import { featuredReport, reportPath } from '../data/reports'
import { type PageId, site } from '../data/site'
import { ButtonLink, Icon, Logo } from './ui'

export function Layout({ page, children }: { page: PageId; children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!menuOpen) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    function outside(event: MouseEvent) {
      if (!header.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', outside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', outside)
    }
  }, [menuOpen])
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="edition-bar">
        <div className="container">
          <span>INDEPENDENT TECHNOLOGY & INFRASTRUCTURE INTELLIGENCE</span>
          <span className="edition-date">
            A GLOBAL PERSPECTIVE <span className="tiny-square" />
          </span>
        </div>
      </div>
      <header className="site-header" ref={header}>
        <div className="container header-inner">
          <Logo />
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={25} />
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={menuOpen ? 'navigation is-open' : 'navigation'}
            onClick={() => setMenuOpen(false)}
          >
            <a
              href="/reports/"
              aria-current={page === 'reports' || page === 'product' ? 'page' : undefined}
            >
              Reports
            </a>
            <a href="/#coverage">Our coverage</a>
            <a href="/about/" aria-current={page === 'about' ? 'page' : undefined}>
              About
            </a>
            <a href="/contact/" aria-current={page === 'contact' ? 'page' : undefined}>
              Contact
            </a>
            <ButtonLink
              href={reportPath(featuredReport)}
              variant="secondary"
              className="header-cta"
            >
              Latest brief
            </ButtonLink>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Logo footer />
            <p>{site.tagline}</p>
            <p className="footer-description">
              Independent perspectives on technology,
              <br />
              infrastructure, and the systems behind progress.
            </p>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <a href="/reports/">Intelligence reports</a>
            <a href="/#coverage">Research coverage</a>
            <a href="/about/">About the publication</a>
            <a href="/contact/">Contact</a>
          </div>
          <div className="footer-column">
            <h2>The fine print</h2>
            <a href="/privacy/">Privacy policy</a>
            <a href="/terms/">Terms of use</a>
            <a href="/disclaimer/">Disclaimer</a>
            <a href={featuredReport.purchaseUrl} target="_blank" rel="noopener noreferrer">
              View on Payhip <Icon name="external" size={13} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="footer-note">
            <span className="eyebrow">RESEARCH WITH PERSPECTIVE.</span>
            <p>
              Evidence first.
              <br />
              Independent always.
            </p>
            <span className="footer-cross" aria-hidden="true">
              +
            </span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Tech Supply Watch. All rights reserved.</span>
          <span>Independent research. Not investment advice.</span>
        </div>
      </footer>
    </>
  )
}
