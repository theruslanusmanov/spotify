import React, { useEffect } from 'react'
import './Shell.css'
import { Sidebar } from '../sidebar/Sidebar'
import { Home } from '../home/Home'
import { TopBar } from '../top-bar/TopBar'
import { AuthorizationService } from '../../api/authorization.service'

export const Shell = () => {
  useEffect(() => {
    const userHasAccessToken = localStorage.getItem('access_token')
    if (!userHasAccessToken) {
      AuthorizationService.authorize();
    }
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
