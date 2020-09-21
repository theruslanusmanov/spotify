import React from 'react'
import './App.scss'
import { NavBar } from './features/nav-bar/NavBar'
import { MainView } from './features/main-view/MainView'
import { TopBar } from './features/top-bar/TopBar'
import { NowPlayingBar } from './features/now-playing-bar/NowPlayingBar'

function App () {
  return (
    <div className="top-container">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <NowPlayingBar></NowPlayingBar>
      <MainView></MainView>
    </div>
  )
}

export default App
