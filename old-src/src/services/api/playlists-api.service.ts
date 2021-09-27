import {ApiService} from './api-service'

interface PlaylistsApi {

  /**
   * GET: /v1/me/playlists
   * Get a List of Current User's Playlists.
   * @param token - A valid access token from the Spotify Accounts service.
   * @returns: playlists
   */
  getPlaylists(token: string): Promise<any>
}

export class PlaylistsApiService extends ApiService implements PlaylistsApi {

  protected readonly HOST = 'https://api.spotify.com'

  public async getPlaylists(token: string): Promise<any> {
    const url = `${this.HOST}/v1/me/playlists?limit=50`

    const method = 'GET'
    const headers = new Headers({Authorization: `Bearer ${token}`})

    const options = {method, headers}

    return await fetch(url, options)
  }
}
