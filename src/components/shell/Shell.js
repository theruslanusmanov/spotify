import React, { useEffect } from 'react'
import './Shell.css'
import { Sidebar } from '../sidebar/Sidebar'
import { Home } from '../home/Home'
import { TopBar } from '../top-bar/TopBar'
import { AuthorizationService } from '../../api/authorization.service'

export const Shell = () => {
  useEffect(() => {
    AuthorizationService.authorize();
    const token = window.location.hash.substr(1);
    console.log(token)
  })

  return (
    <div className="shell">
      <Sidebar/>
      <TopBar/>
      <div className="container">
        <Home/>
      </div>
    </div>
  )
}
