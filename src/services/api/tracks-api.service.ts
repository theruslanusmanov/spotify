import {ApiService} from './api-service'

interface TracksApi {

  /**
   * GET: /v1/me/tracks
   * Get Several Tracks.
   * @param token - A valid access token from the Spotify Accounts service.
   * @returns: tracks
   */
  getTracks(token: string): Promise<any>
}

export class TracksApiService extends ApiService implements TracksApi {

  protected readonly HOST = 'https://api.spotify.com'

  public async getTracks(token: string): Promise<any> {
    const url = `${this.HOST}/v1/me/tracks?limit=50`

    const method = 'GET'
    const headers = new Headers({Authorization: `Bearer ${token}`})

    const options = {method, headers}

    return await fetch(url, options)
  }
}
