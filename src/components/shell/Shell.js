import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import './Shell.css'
import { Sidebar } from '../sidebar/Sidebar'
import { Home } from '../home/Home'
import { TopBar } from '../top-bar/TopBar'
import { AuthorizationService } from '../../services/authorization.service'
import { Search } from '../search/Search'
import { Library } from '../library/Library'

export const Shell = () => {
  const [token, setToken] = useState()

  useEffect(() => {
    const savedToken = localStorage.getItem('access_token')

    console.log(savedToken)
    if (!savedToken && savedToken == null) {
      AuthorizationService.authorize()
    }

    setToken(savedToken)
  }, [])

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
            </>
          )
          : null
      }
    </div>
  )
}
