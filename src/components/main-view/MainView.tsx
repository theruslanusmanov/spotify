import React from 'react'
import './MainView.scss'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../../router/routes'
import { TopBar } from '../top-bar/TopBar'

export const MainView: React.FC = () => (
  <div className="main-view">
    <TopBar/>
    <Switch>
      {routes.map((route: any, i: any) => (
        <Route
          key={i}
          path={route.path}
          render={props => (
            <route.component {...props}/>
          )}
        />
      ))}
    </Switch>
  </div>
)
