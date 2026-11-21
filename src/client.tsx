import { hydrateRoot } from 'react-dom/client'
import { App } from './App'
import { routes, type PageId } from './data/site'
import './styles.css'

const page = document.documentElement.dataset.page
const pageId: PageId = routes.find((route) => route.id === page)?.id ?? 'not-found'
hydrateRoot(document.getElementById('root')!, <App page={pageId} />)
