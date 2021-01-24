/**
 * Main view route paths.
 * @see `src/components/main-view`
 */
import {Home} from '../components/main-view/home/Home'
import {Search} from '../components/main-view/search/Search'
import {Library} from '../components/main-view/library/Library'

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
