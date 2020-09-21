import React from 'react'
import './App.scss'
import { NavBar } from './features/nav-bar/NavBar'
import { MainView } from './features/main-view/MainView'

function App () {
  return (
    <div className="top-container">
      <NavBar></NavBar>
      <MainView></MainView>
    </div>
  )
}

export default App
