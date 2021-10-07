import React from 'react'
import './Sidebar.css'
import { ReactComponent as SpotifyLogo } from './spotify-logo.svg'
import { ReactComponent as Home } from './home.svg'
import { ReactComponent as Search } from './search.svg'

export const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">
      <SpotifyLogo/>
    </div>
    <ul>
      <li>
        <a href="/"><Home/><span>Home</span></a>
      </li>
      <li>
        <a href="/search"><Search/><span>Search</span></a>
      </li>
    </ul>
  </div>
)
