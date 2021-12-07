const isProd = process.env.REACT_APP_ENV === 'prod'
const CLIENT_ID = '6e313238e1804ca3891543ae4f2b0ee3'
const REDIRECT_URI = isProd
  ? 'https://spotify-livid.vercel.app/auth'
  : 'http://localhost:3000/auth'

// Change the scopes to what you need
// https://developer.spotify.com/documentation/general/guides/scopes/
const scopes =
  'user-read-email user-top-read user-library-read user-read-recently-played'

export const spotifyUrl = (state) => {
  let url = 'https://accounts.spotify.com/authorize'
  url += '?response_type=token'
  url += '&show_dialog=true'
  // url += '&state=' + encodeURIComponent(state)
  url += '&client_id=' + encodeURIComponent(CLIENT_ID || '')
  url += '&redirect_uri=' + REDIRECT_URI
  url += '&scope=' + encodeURIComponent(scopes)
  return url
}

export class AuthorizationService {

  static authorize () {
    window.location.href = spotifyUrl()
  }
}
