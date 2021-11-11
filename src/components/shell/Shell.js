import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import './Shell.css'
import { Sidebar } from '../sidebar/Sidebar'
import { Home } from '../home/Home'
import { TopBar } from '../top-bar/TopBar'
import { AuthorizationService } from '../../services/authorization.service'
import { Search } from '../search/Search'
import { Library } from '../library/Library'
import { Footer } from '../footer/Footer'

export const Shell = () => {
  const [token, setToken] = useState()

  useEffect(() => {
    loadAuthToken();
    checkExpiredToken();
  }, [])

  function loadAuthToken() {
    const token = localStorage.getItem('access_token')

    if (!token && token == null) {
      AuthorizationService.authorize()
    }

    setToken(token)
  }

  function checkExpiredToken() {
    const expiresTime = localStorage.getItem('expires_time')

    if (expiresTime < Date.now()) {
      localStorage.removeItem('access_token');
      AuthorizationService.authorize()
    }
  }

  return (
    <div className="shell">
      {
        token
          ? (
            <>
              <Sidebar/>
              <TopBar/>
              <div className="container">
                <Route path="/collection" component={Library}/>
                <Route path="/search" component={Search}/>
                <Route exact path="/" component={Home}/>
              </div>
              <Footer/>
            </>
          )
          : null
      }
    </div>
  )
}
