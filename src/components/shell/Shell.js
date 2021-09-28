import React from 'react'
import './Shell.css';
import { Sidebar } from '../sidebar/Sidebar'
import { Home } from '../home/Home'

export const Shell = () => (
  <div className="shell">
    <Sidebar />
    <div className="container">
      <Home/>
    </div>
  </div>
)
