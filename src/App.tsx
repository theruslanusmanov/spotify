import React, { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/navbar/Navbar'
import { MainView } from './components/main-view/MainView'
import { TopBar } from './components/top-bar/TopBar'
import NowPlayingBar from './components/now-playing-bar/NowPlayingBar'
import { RootState } from './store/root.state'
import getTrackSelector from './store/spotify/spotify.selectors'
import getAudioTrack from './store/player/player.selectors'
import { spotifyActions } from './store/spotify'
import { userActions } from './store/user'

function App () {
  const dispatch = useDispatch()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const token = useSelector((state: RootState) => state.user.token)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const song = useSelector((state: RootState) => getTrackSelector(state))
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying)
  const audioTrack = useSelector((state: RootState) => getAudioTrack(state))

  useEffect(() => {
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
      /*      playSong(hashParams.access_token)
            fetchSongs(hashParams.access_token)*/
      dispatch(spotifyActions.loadPlaylists(hashParams.access_token))
    }
  }, [])

  useEffect(() => {
    if (isPlaying) {
      audioTrack.play()
    } else {
      audioTrack.pause()
    }
  }, [isPlaying])

  return (
    <div className="top-container">
      <TopBar/>
      <Navbar/>
      <NowPlayingBar/>
      <MainView/>
    </div>
  )
}

export default App
