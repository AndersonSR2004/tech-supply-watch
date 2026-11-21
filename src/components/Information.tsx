import { featuredReport } from '../data/reports'
import { site } from '../data/site'
import { ButtonLink, Eyebrow, Icon } from './ui'

export function About() {
  return (
    <>
      <section className="container page-heading about-heading">
        <Eyebrow>ABOUT THE PUBLICATION</Eyebrow>
        <h1>
          Understand the systems.
          <br />
          <span className="text-blue">See the bigger picture.</span>
        </h1>
        <p>
          Tech Supply Watch is an independent digital research publication focused on emerging
          technologies, industrial infrastructure, and the global systems enabling technological
          progress.
        </p>
      </section>
      <section className="container about-mission">
        <div>
          <Eyebrow>OUR MISSION</Eyebrow>
          <h2>
            Context for a world
            <br />
            in transition.
          </h2>
        </div>
        <div>
          <p>
            Every major technology shift has a physical foundation. AI needs chips. Chips need
            factories. Factories need equipment, power, materials, and people.
          </p>
          <p>
            Tech Supply Watch follows these connections. Our purpose is to make complex
            technological and industrial developments more understandable through focused,
            accessible research.
          </p>
          <p>
            We cover artificial intelligence, semiconductor manufacturing, AI infrastructure, energy
            and power systems, robotics and automation, and emerging industrial technologies.
          </p>
        </div>
      </section>
      <section className="coverage-section">
        <div className="container section">
          <Eyebrow>THE EDITORIAL STANDARD</Eyebrow>
          <h2>Four principles behind every perspective.</h2>
          <div className="about-principles">
            {[
              [
                '01',
                'Evidence-based research',
                'Start with information that can be examined. Use source material to ground analysis and acknowledge what is unknown.',
              ],
              [
                '02',
                'Independent analysis',
                'Offer an independent perspective without suggesting affiliation with the companies, individuals, or initiatives covered.',
              ],
              [
                '03',
                'Transparent sourcing',
                'Make the basis of research clear and encourage readers to consult original sources and assess claims for themselves.',
              ],
              [
                '04',
                'Facts and projections, distinguished',
                'Separate reported information from interpretation and forward-looking scenarios. Treat uncertainty as part of the analysis.',
              ],
            ].map(([number, title, description]) => (
              <article key={number}>
                <span className="mono text-blue">{number} /</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container about-band">
        <div>
          <Eyebrow>RESEARCH YOU CAN READ</Eyebrow>
          <h2>
            Independent intelligence.
            <br />
            One brief at a time.
          </h2>
        </div>
        <div>
          <p>
            Explore the published research library, starting with Terafab Watch — an eight-page look
            at the AI infrastructure opportunity.
          </p>
          <ButtonLink href="/reports/">Explore intelligence reports</ButtonLink>
        </div>
      </section>
    </>
  )
}

export function Contact() {
  return (
    <>
      <section className="container page-heading">
        <Eyebrow>CONTACT & SUPPORT</Eyebrow>
        <h1>
          The right place
          <br />
          <span className="text-blue">to get in touch.</span>
        </h1>
        <p>
          Information for readers, editorial enquiries, and help with your digital report purchase.
        </p>
      </section>
      <section className="container contact-grid">
        <article className="contact-card">
          <Icon name="layers" size={29} />
          <Eyebrow>PURCHASES & DOWNLOADS</Eyebrow>
          <h2>Help with your report.</h2>
          <p>
            Reports are sold and delivered through Payhip. If you have already purchased a report,
            check your Payhip receipt for the download link and purchase support options.
          </p>
          <p>
            For payment, delivery, or refund questions, refer to the information shown on the
            Payhip product page and your order receipt.
          </p>
          <ButtonLink href={featuredReport.purchaseUrl} external variant="secondary">
            Open report on Payhip
          </ButtonLink>
        </article>
        <article className="contact-card">
          <Icon name="signal" size={29} />
          <Eyebrow>EDITORIAL & GENERAL ENQUIRIES</Eyebrow>
          <h2>Connect with the publication.</h2>
          {site.contactEmail ? (
            <>
              <p>
                For editorial questions, source corrections, and general enquiries, contact the
                publication by email.
              </p>
              <ButtonLink href={`mailto:${site.contactEmail}`} variant="secondary">
                {site.contactEmail}
              </ButtonLink>
            </>
          ) : (
            <>
              <p>
                A direct editorial contact address has not yet been published. This page is the
                designated location for verified contact details once available.
              </p>
              <div className="contact-status">
                <span className="tiny-square" />
                <span>Editorial contact details pending</span>
              </div>
            </>
          )}
          <p className="small-text">
            Please avoid sharing sensitive personal or financial information in general enquiries.
          </p>
        </article>
      </section>
      <div className="container contact-bottom">
        <p>Looking for information about the publication or how the research should be used?</p>
        <a className="text-link" href="/about/">
          About Tech Supply Watch <Icon name="arrow" size={17} />
        </a>
        <a className="text-link" href="/disclaimer/">
          Research disclaimer <Icon name="arrow" size={17} />
        </a>
      </div>
    </>
  )
}

const legalContent = {
  privacy: {
    title: 'Privacy policy.',
    introduction:
      'This policy explains how information may be handled when you visit Tech Supply Watch and follow links to purchase our digital reports.',
    sections: [
      [
        'The website',
        'Tech Supply Watch is a public research publication website. It does not offer user accounts, operate a checkout, or ask you to submit payment details. No advertising trackers, third-party analytics scripts, newsletter tools, or contact forms are included in the website code.',
      ],
      [
        'Hosting and traffic information',
        'The website is hosted by Cloudflare Pages. Hosting and infrastructure providers may process technical request information such as IP addresses, requested pages, browser details, and timestamps to deliver, secure, and operate the website. Cloudflare Pages may also provide aggregate traffic analytics from hosting activity. These platform capabilities do not depend on an analytics script in our pages. We do not claim that visiting the site involves no information processing.',
      ],
      [
        'Cookies and local storage',
        'The website code does not set analytics or advertising cookies, and it does not store visitor profiles in browser storage. Hosting, security, or external services may have their own cookie practices. Check their policies and your browser settings for details.',
      ],
      [
        'Payhip purchases',
        'Report links take you to the product page on payhip.com. Payhip operates the checkout and digital delivery and may collect your email address, payment and billing details, purchase information, and technical data under its own policies. Tech Supply Watch does not receive or store your full payment card information through this website. The publisher may receive purchaser and order information made available to sellers by Payhip for delivery, transaction records, and support.',
      ],
      [
        'External services and links',
        'External websites apply their own privacy policies. Opening a Payhip product page creates a connection to Payhip. Fonts and the report cover used on this website are hosted with the site, avoiding remote font and image provider requests during normal page viewing.',
      ],
      [
        'Use, retention, and choices',
        'Information provided through a purchase or support request may be used for order administration, responding to enquiries, legal obligations, and maintaining transaction records. Retention depends on the applicable purpose and the policies of the providers handling that information. Your rights may include access, correction, deletion, objection, or complaint to your local privacy authority, depending on your location and applicable law. For purchase information held by Payhip, use Payhip’s privacy and support channels.',
      ],
      [
        'Contact and changes',
        'The contact page lists the current status of editorial contact details and directs purchasers to their Payhip receipt for order support. This policy may change as the website’s features change. The date above identifies the latest revision.',
      ],
    ],
  },
  terms: {
    title: 'Terms of use.',
    introduction:
      'These terms govern your use of the Tech Supply Watch website and its published content. Please read them alongside the research disclaimer and any terms presented by Payhip when making a purchase.',
    sections: [
      [
        'Using this website',
        'You may browse the website and use its information for lawful purposes. Do not attempt to disrupt the service, bypass security measures, misrepresent your affiliation with the publication, or infringe the rights of others.',
      ],
      [
        'Research and intellectual property',
        'Website text, publication branding, report artwork, and original research are protected by applicable intellectual property laws. Purchasing a report provides access for your personal use, subject to any license terms shown with the product. It does not transfer copyright. Do not redistribute, publicly upload, resell, or commercially reproduce the PDF without permission, except where allowed by law. Third-party names and marks belong to their respective owners.',
      ],
      [
        'Purchases and delivery',
        'Reports are purchased through Payhip, an external checkout and digital delivery service. The product page states the report format and listed price in USD. Applicable taxes, local currency conversion, payment options, and the final amount are displayed by Payhip. Review the current product details and checkout terms before paying. This website does not process payments directly.',
      ],
      [
        'Refunds and purchase support',
        'Any refund policy is the policy displayed on the Payhip product or checkout page at the time of purchase, subject to applicable consumer law. Use the contact and support options in your Payhip receipt for order enquiries. These terms do not create a separate refund promise or limit mandatory consumer rights.',
      ],
      [
        'Informational content',
        'Research is provided for informational and educational purposes. It is not personalized professional advice or a recommendation to buy, sell, or hold an asset. You are responsible for your own decisions and should seek qualified advice where appropriate. Read the full disclaimer for details.',
      ],
      [
        'Accuracy and availability',
        'The publication aims to provide clear, careful analysis but cannot guarantee that all information is complete, current, or free from error. Project plans and source information may change. The website and publications are provided as available, subject to rights and warranties that cannot lawfully be excluded.',
      ],
      [
        'External links and independence',
        'External websites, including Payhip, operate under their own terms and policies. References to companies, individuals, products, and initiatives do not imply affiliation, endorsement, or sponsorship.',
      ],
      [
        'Liability, changes, and contact',
        'To the extent permitted by applicable law, Tech Supply Watch is not liable for losses arising from reliance on the website or its research. Nothing here excludes liability or rights that cannot legally be excluded. These terms may be updated as the service develops. See the contact page for current contact information and purchase support guidance.',
      ],
    ],
  },
  disclaimer: {
    title: 'Research disclaimer.',
    introduction:
      'Independent intelligence should support informed understanding. It should also be read with an understanding of its scope, sources, and limitations.',
    sections: [
      [
        'Information, not professional advice',
        'Tech Supply Watch publishes independent research for informational and educational purposes. Website content and reports are not financial, investment, legal, tax, or engineering advice. Nothing published is a personalized recommendation or an invitation to buy, sell, or hold securities or other assets.',
      ],
      [
        'No performance or investment promises',
        'Discussion of commercial opportunities or industrial developments is analysis, not a promise of returns or business outcomes. Technology projects and investments carry risks, including loss. Conduct your own due diligence and consult qualified professionals before making decisions.',
      ],
      [
        'Independent publication',
        'Tech Supply Watch is not affiliated with, endorsed by, or sponsored by Elon Musk, Terafab, or the companies and organizations discussed in its research. Names, trademarks, and references are used for identification and commentary.',
      ],
      [
        'Sources and verification',
        'Research may draw on public announcements, company statements, reporting, and other publicly available material. Sources may contain errors or change over time. Consult any references supplied with a report, together with original source material, when evaluating claims. The publication aims to distinguish reported facts from analysis and projections; readers should not treat an announcement or projection as a verified outcome.',
      ],
      [
        'Forward-looking statements',
        'Statements about future capacity, timelines, project scope, commercial potential, technology performance, infrastructure requirements, or execution are inherently uncertain. Such statements depend on assumptions and may not materialize. Actual outcomes may differ materially.',
      ],
      [
        'Publication date and limitations',
        'Each brief reflects information and analysis as of its publication date. A purchased PDF is a dated edition and does not include a promise of ongoing updates. While care is taken with research, completeness, timeliness, and accuracy are not guaranteed.',
      ],
      [
        'Commercial relationship',
        'Tech Supply Watch sells its own digital reports. Payhip handles the external purchase and delivery process. The presence of a purchase link does not mean the report is endorsed by Payhip or any organization discussed in the research.',
      ],
      [
        'Corrections and enquiries',
        'See the contact page for current editorial contact availability. For purchase and download support, refer to your Payhip receipt.',
      ],
    ],
  },
}

export function Legal({ type }: { type: keyof typeof legalContent }) {
  const content = legalContent[type]
  return (
    <div className="container legal-layout">
      <aside className="legal-navigation" aria-label="Legal pages">
        <Eyebrow>PUBLICATION POLICIES</Eyebrow>
        <a href="/privacy/" aria-current={type === 'privacy' ? 'page' : undefined}>
          Privacy policy <Icon name="arrow" size={15} />
        </a>
        <a href="/terms/" aria-current={type === 'terms' ? 'page' : undefined}>
          Terms of use <Icon name="arrow" size={15} />
        </a>
        <a href="/disclaimer/" aria-current={type === 'disclaimer' ? 'page' : undefined}>
          Disclaimer <Icon name="arrow" size={15} />
        </a>
      </aside>
      <article className="legal-content">
        <Eyebrow>THE FINE PRINT</Eyebrow>
        <h1>{content.title}</h1>
        <p className="legal-date">Last updated {site.updated}</p>
        <p className="legal-intro">{content.introduction}</p>
        {content.sections.map(([title, text], index) => (
          <section key={title}>
            <h2>
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              {title}
            </h2>
            <p>{text}</p>
          </section>
        ))}
        <div className="legal-links">
          <a href="/contact/">
            Contact & support <Icon name="arrow" size={15} />
          </a>
          {type === 'privacy' && (
            <a href="https://payhip.com/privacy" target="_blank" rel="noopener noreferrer">
              Payhip privacy policy <Icon name="external" size={15} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </article>
    </div>
  )
}

export function NotFound() {
  return (
    <section className="container not-found">
      <Eyebrow>404 / SIGNAL NOT FOUND</Eyebrow>
      <h1>A little off the radar.</h1>
      <p>This page could not be found. The latest intelligence is still within reach.</p>
      <ButtonLink href="/reports/">Explore intelligence reports</ButtonLink>
      <a href="/" className="text-link">
        Return to homepage <Icon name="arrow" size={17} />
      </a>
    </section>
  )
}
