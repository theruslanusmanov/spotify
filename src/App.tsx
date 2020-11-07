import React, { useEffect } from 'react'
import './App.scss'
import { Navbar } from './components/navbar/Navbar'
import { MainView } from './components/main-view/MainView'
import { TopBar } from './components/top-bar/TopBar'
import { NowPlayingBar } from './components/now-playing-bar/NowPlayingBar'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from './store/root.state'
import { setToken } from './store/user/user.actions'
import { fetchSongs, playSong } from './store/spotify/spotify.actions'

const mapState = (state: RootState) => ({
  token: state.user.token,
})

const mapDispatch = {
  setToken: (token: string) => setToken(token),
  playSong: (token: string) => playSong(token),
  fetchSongs: (token: string) => fetchSongs(token),
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

// TODO: new Audio() - get from store
// url - https://p.scdn.co/mp3-preview/f5d7783ee0193444b6277ce67a51d20af0e8426c?cid=230be2f46909426b8b80cac36446b52a
function App (props: Props) {

  useEffect(() => {
    /*const authService = new AuthorizationService();
    authService.authorize().then(r => console.log(r));*/
    let hashParams: any = {}
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1)
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2])
    }

    if (!hashParams.access_token) {
      window.location.href =
        'https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback'
    } else {
      props.setToken(hashParams.access_token)
      props.playSong(hashParams.access_token)
      props.fetchSongs(hashParams.access_token)
      const audio = new Audio('https://p.scdn.co/mp3-preview/f5d7783ee0193444b6277ce67a51d20af0e8426c?cid=230be2f46909426b8b80cac36446b52a');
      // audio.play();
    }
  }, [])

  return (
    <div className="top-container">
      <TopBar/>
      <Navbar/>
      <NowPlayingBar/>
      <MainView/>
    </div>
  )
}

export default connector(App)
