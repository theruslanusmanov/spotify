/**
 * Main view route paths.
 * @see `src/components/main-view`
 */
import { Home } from '../views/home/Home'
import { Search } from '../views/search/Search'
import { Library } from '../views/library/Library'

export const routes = [
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/library',
    component: Library,
  },
  {
    path: '/',
    component: Home,
  },
]
