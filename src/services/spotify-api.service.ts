import { ApiService } from './api-service'

interface SpotifyApi {

  /**
   * GET: /v1/me/tracks
   * Get Several Tracks.
   * @param token - A valid access token from the Spotify Accounts service.
   * @returns: tracks
   */
  getTracks (token: string): Promise<any>

  /**
   * GET: /v1/me/playlists
   * Get a List of Current User's Playlists.
   * @param token - A valid access token from the Spotify Accounts service.
   * @returns: playlists
   */
  getPlaylists (token: string): Promise<any>
}

export class SpotifyApiService implements ApiService, SpotifyApi {
  private static readonly HOST = 'https://api.spotify.com'

  public async getTracks (token: string): Promise<any> {
    const url = `${SpotifyApiService.HOST}/v1/me/tracks?limit=50`

    const method = 'GET'
    const headers = new Headers({ Authorization: `Bearer ${token}` })

    const options = { method, headers }

    return await fetch(url, options)
  }

  public async getPlaylists (token: string): Promise<any> {
    const url = `${SpotifyApiService.HOST}/v1/me/playlists?limit=50`

    const method = 'GET'
    const headers = new Headers({ Authorization: `Bearer ${token}` })

    const options = { method, headers }

    return await fetch(url, options)
  }
}
