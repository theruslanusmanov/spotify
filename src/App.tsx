import React from 'react'
import './App.scss'
import { Navbar } from './features/navbar/Navbar'
import { MainView } from './features/main-view/MainView'
import { TopBar } from './features/top-bar/TopBar'
import { NowPlayingBar } from './features/now-playing-bar/NowPlayingBar'

function App () {
  return (
    <div className="top-container">
      <TopBar></TopBar>
      <Navbar></Navbar>
      <NowPlayingBar></NowPlayingBar>
      <MainView></MainView>
    </div>
  )
}

export default App
