import React, {useEffect} from 'react'
import './App.scss'
import {useDispatch} from 'react-redux'
import Navbar from './components/navbar/Navbar'
import {MainView} from './components/main-view/MainView'
import NowPlayingBar from './components/now-playing-bar/NowPlayingBar'
import {authorizationActions} from "./store/authorization";
import {Config} from "./services/api/authorization-api.service";
import {spotifyActions} from "./store/spotify";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const params = {
      client_id: Config.CLIENT_ID,
      response_type: 'code',
      redirect_uri: Config.REDIRECT_URI
    }
    dispatch(authorizationActions.authorize(params))
  }, [])

  return (
    <div className="top-container">
      <Navbar/>
      <NowPlayingBar/>
      <MainView/>
    </div>
  )
}

export default App
