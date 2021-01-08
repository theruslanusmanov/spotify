/**
 * Main view route paths.
 * @see `src/components/main-view`
 */
import {Home} from '../components/main-view/home/Home'
import {Search} from '../components/main-view/search/Search'
import {Library} from '../components/main-view/library/Library'
import {Tracks} from "../components/main-view/tracks/Tracks";

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
    path: '/tracks',
    component: Tracks,
  },
  {
    path: '/',
    component: Home,
  },
]
