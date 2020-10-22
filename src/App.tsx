import React, { useEffect } from 'react'
import './App.scss'
import { Navbar } from './components/navbar/Navbar'
import { MainView } from './components/main-view/MainView'
import { TopBar } from './components/top-bar/TopBar'
import { NowPlayingBar } from './components/now-playing-bar/NowPlayingBar'
import AuthorizationService from './services/authorization-service'

function App () {

  useEffect(() => {
    const authService = new AuthorizationService();
    authService.authorize().then(r => console.log(r));
  }, [])

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
