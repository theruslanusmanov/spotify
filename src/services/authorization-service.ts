const CLIENT_ID = '6e313238e1804ca3891543ae4f2b0ee3' // Your client id
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CLIENT_SECRET = '734d563063e94b3fa370e470ae885e06' // Your secret
const REDIRECT_URI = 'http://localhost:3000/' // Your redirect uri
const HOST = 'https://accounts.spotify.com'

class AuthorizationService {
  authorize(): Promise<any> {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
    })
    const requestOptions = {
      method: 'GET',
    }
    return fetch(`${HOST}/authorize?${params}`, requestOptions)
      .then((response) => response.json())
  }
}

export default AuthorizationService
