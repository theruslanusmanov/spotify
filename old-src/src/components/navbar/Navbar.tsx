import React, {useEffect, useState} from 'react'
import './Navbar.scss'
import {RootState} from '../../store/root.state'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'
import {playlistsActions} from "../../store/playlists";
import {getUserToken} from "../../store/user/user.selectors";

enum NavItem {
  HOME,
  SEARCH,
  LIBRARY,
  TRACKS
}

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const token = useSelector(
    (state: RootState) => getUserToken(state))

  const playlists = useSelector(
    (state: RootState) => state?.playlists?.playlists?.items)

  const [activeNavItem, setActiveNavItem] = useState<NavItem>(NavItem.HOME)

  useEffect(() => {
    dispatch(playlistsActions.loadPlaylists())
  }, [token])

  useEffect(() => {
    if (location.pathname !== "/callback") {
      switch (activeNavItem) {
      case NavItem.SEARCH:
        history.push('/search')
        break;
      case NavItem.LIBRARY:
        history.push('/library')
        break;
      case NavItem.TRACKS:
        history.push('/tracks')
        break;
      default:
        history.push('/')
      }
    }
  }, [activeNavItem])

  return (
    <div className="navbar">
      <svg viewBox="0 0 1134 340" className="spotify-logo--text">
        <title>Spotify</title>
        <path
          fill="#fff"
          d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
        />
      </svg>
      <div className="menu">
        <ul>
          <li
            className={activeNavItem === NavItem.HOME ? 'active' : ''}
            onClick={() => setActiveNavItem(NavItem.HOME)}
          >
            {activeNavItem === NavItem.HOME
              ? (
                <svg
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                    fill="#b3b3b3"
                  />
                </svg>
              )
              : (
                <svg
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                    fill="#b3b3b3"
                  />
                </svg>
              )}
            <span>Home</span>
          </li>
          <li
            className={activeNavItem === NavItem.SEARCH ? 'active' : ''}
            onClick={() => setActiveNavItem(NavItem.SEARCH)}
          >
            {
              activeNavItem === NavItem.SEARCH
                ? (
                  <svg
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z"
                      fill="#b3b3b3"
                    />
                  </svg>
                )
                : (
                  <svg
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                      fill="#b3b3b3"
                    />
                  </svg>
                )
            }
            <span>Search</span>
          </li>
          <li
            className={activeNavItem === NavItem.LIBRARY ? 'active' : ''}
            onClick={() => setActiveNavItem(NavItem.LIBRARY)}
          >
            {
              activeNavItem === NavItem.LIBRARY
                ? (
                  <svg
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
                      fill="#b3b3b3"
                    />
                  </svg>
                )
                : (
                  <svg
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                      fill="#b3b3b3"
                    />
                  </svg>
                )
            }
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <div className="playlists">
        <h1>
          Playlists
        </h1>
        <ul>
          <li>
            <div className="add">
              <svg
                shapeRendering="crispEdges"
                viewBox="0 0 36 36"
              >
                <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"/>
              </svg>
            </div>
            <span>Create Playlist</span>
          </li>
          {
            playlists?.map((value: any, index: any) => {
              return <li key={index}><h1>{value.name}</h1></li>
            })
          }
          <li className={activeNavItem === NavItem.TRACKS ? 'active' : ''}
            onClick={() => setActiveNavItem(NavItem.TRACKS)}>
            <div className="add">
              <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF">
                <path fill="none" d="M0 0h16v16H0z"></path>
                <path
                  d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
              </svg>
            </div>
            <span>Liked Songs</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
