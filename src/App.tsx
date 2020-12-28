import React, {useEffect} from 'react'
import './App.scss'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './components/navbar/Navbar'
import {MainView} from './components/main-view/MainView'
import NowPlayingBar from './components/now-playing-bar/NowPlayingBar'
import {userActions} from "./store/user";
import {RootState} from "./store/root.state";

function App() {
  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.user.token)

  useEffect(() => {
    if (!token) {
      const hashParams: any = {}
      let e
      const r = /([^&;=]+)=?([^&;]*)/g
      const q = window.location.hash.substring(1)
      while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2])
      }

      if (!hashParams.access_token) {
        window.location.href = 'https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback'
      } else {
        dispatch(userActions.setToken(hashParams.access_token))
      }
    }
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
