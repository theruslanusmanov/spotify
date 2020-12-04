import {ApiService} from './api-service'

interface PlayerApi {

  /**
   * GET: https://api.spotify.com/v1/me/player/recently-played
   * Get tracks from the current user’s recently played tracks..
   * @param token - A valid access token from the Spotify Accounts service.
   */
  getRecentlyPlayedTracks(token: string): Promise<any>
}

export class PlayerApiService extends ApiService implements PlayerApi {

  protected readonly HOST = 'https://api.spotify.com'

  public async getRecentlyPlayedTracks(token: string): Promise<any> {
    const url = `${this.HOST}/v1/me/player/recently-played`

    const method = 'GET'
    const headers = new Headers({Authorization: `Bearer ${token}`})

    const options = {method, headers}

    return await fetch(url, options)
  }
}
