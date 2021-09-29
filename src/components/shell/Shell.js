import React from 'react'
import './Shell.css';
import { Sidebar } from '../sidebar/Sidebar'
import { Home } from '../home/Home'
import { TopBar } from '../top-bar/TopBar'

export const Shell = () => (
  <div className="shell">
    <Sidebar />
    <TopBar/>
    <div className="container">
      <Home/>
    </div>
  </div>
)
