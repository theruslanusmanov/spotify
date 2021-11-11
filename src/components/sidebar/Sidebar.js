import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { ReactComponent as SpotifyLogo } from './spotify-logo.svg'
import { ReactComponent as Home } from './home.svg'
import { ReactComponent as Search } from './search.svg'
import { ReactComponent as Library } from './library.svg'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <SpotifyLogo/>
      </div>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active"><Home/><span>Home</span></NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="active"><Search/><span>Search</span></NavLink>
        </li>
        <li>
          <NavLink to="/collection" activeClassName="active"><Library/><span>Your Library</span></NavLink>
        </li>
      </ul>
    </div>
  )
}
