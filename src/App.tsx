import React from 'react'
import './App.scss'
import { Navbar } from './features/navbar/Navbar'
import { MainView } from './features/main-view/MainView'

function App () {
  return (
    <div className="top-container">
      <Navbar></Navbar>
      <MainView></MainView>
    </div>
  )
}

export default App
