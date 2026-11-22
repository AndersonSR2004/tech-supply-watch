import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Bot,
  BrainCircuit,
  Cpu,
  Factory,
  Layers3,
  Menu,
  Search,
  Server,
  ShieldCheck,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useRef, type ReactNode } from 'react'
import { featuredReport, formatPrice, type Report } from '../data/reports'

export const icons: Record<string, LucideIcon> = {
  arrow: ArrowRight,
  external: ArrowUpRight,
  down: ArrowDown,
  menu: Menu,
  close: X,
  search: Search,
  brain: BrainCircuit,
  chip: Cpu,
  server: Server,
  energy: Zap,
  robot: Bot,
  industry: Factory,
  shield: ShieldCheck,
  layers: Layers3,
  signal: AudioLines,
}

export function Icon({
  name,
  size = 20,
  className = '',
}: {
  name: string
  size?: number
  className?: string
}) {
  const Component = icons[name] ?? ArrowRight
  return <Component size={size} strokeWidth={1.5} className={className} aria-hidden="true" />
}

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="/"
      className={`brand ${footer ? 'brand-footer' : ''}`}
      aria-label="Tech Supply Watch homepage"
    >
      <svg width="34" height="36" viewBox="0 0 34 36" fill="none" aria-hidden="true">
        <path d="M2 6h29M2 15h21M10 24h21M19 33h12" stroke="currentColor" strokeWidth="4" />
        <path d="M2 24h5M10 33h5" stroke="#39A9FF" strokeWidth="4" />
      </svg>
      <span>
        TECH SUPPLY
        <span className="brand-line">
          WATCH<span className="brand-dot">.</span>
        </span>
      </span>
    </a>
  )
}

export function Eyebrow({ children, dot = false }: { children: ReactNode; dot?: boolean }) {
  return <p className={`eyebrow ${dot ? 'with-dot' : ''}`}>{children}</p>
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text'
  external?: boolean
  className?: string
}) {
  return (
    <a
      className={`button button-${variant} ${className}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <Icon name={external ? 'external' : 'arrow'} size={18} />
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}

export function Cover({
  report = featuredReport,
  className = '',
  eager = false,
}: {
  report?: Report
  className?: string
  eager?: boolean
}) {
  const imageRef = useRef<HTMLImageElement>(null)
  // A development CDN request can fail before hydration attaches onError.
  useEffect(() => {
    const img = imageRef.current
    if (img?.complete && img.naturalWidth === 0 && img.getAttribute('src') !== report.cover) {
      img.src = report.cover
    }
  }, [report.cover])
  return (
    <img
      ref={imageRef}
      className={`report-cover ${className}`}
      src={report.cover}
      width={report.coverWidth}
      height={report.coverHeight}
      alt={`${report.title}, issue #${report.issue}: ${report.subtitle}. Published ${report.displayDate}; blue semiconductor wafer on a navy technical grid.`}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
      onError={(event) => {
        const img = event.currentTarget
        if (img.getAttribute('src') !== report.cover) img.src = report.cover
      }}
    />
  )
}

export function PurchaseButton({
  report = featuredReport,
  className = '',
}: {
  report?: Report
  className?: string
}) {
  return (
    <ButtonLink href={report.purchaseUrl} external className={className}>
      Buy on Gumroad — {formatPrice(report)}
    </ButtonLink>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {children && <p className="section-intro">{children}</p>}
      </div>
      {action}
    </div>
  )
}
