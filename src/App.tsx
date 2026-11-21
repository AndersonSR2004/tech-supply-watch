import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { Reports, Product } from './components/Reports'
import { About, Contact, Legal, NotFound } from './components/Information'
import type { PageId } from './data/site'

export function App({ page }: { page: PageId }) {
  const content =
    page === 'home' ? (
      <Home />
    ) : page === 'reports' ? (
      <Reports />
    ) : page === 'product' ? (
      <Product />
    ) : page === 'about' ? (
      <About />
    ) : page === 'contact' ? (
      <Contact />
    ) : page === 'privacy' || page === 'terms' || page === 'disclaimer' ? (
      <Legal type={page} />
    ) : (
      <NotFound />
    )
  return <Layout page={page}>{content}</Layout>
}
