import Auth from './pages/Auth'
import Home from './pages/Home'
import PlaceAdd from './pages/PlaceAdd'
import PlacePage from './pages/PlacePage'
import SearchResult from './pages/SearchResult'
import {
  ADD_ROUTE,
  HOME_ROUTE,
  PLACE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SEARCH_ROUTE,
} from './utils/consts'

export const authRoutes = [
  {
    path: ADD_ROUTE,
    Component: PlaceAdd,
  },
  {
    path: SEARCH_ROUTE,
    Component: SearchResult,
  },
  {
    path: PLACE_ROUTE + '/:id',
    Component: PlacePage,
  },
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
]
