import {ApiService} from './api-service'

export enum QueryType {
  ALBUM = 'album',
  ARTIST = 'artist',
  PLAYLIST = 'playlist',
  TRACK = 'track',
  SHOW = 'show',
  EPISODE = 'episode'
}

type QueryParameters = {
  q: any;
  type: QueryType;
  market?: any;
  limit?: any;
  offset?: any;
  includeExternal?: any;
}

interface SearchApi {

  /**
   * GET: /v1/search
   *
   * Get Spotify Catalog information about albums, artists, playlists, tracks,
   * shows or episodes that match a keyword string.
   *
   * @param token - Required. A valid access token from the Spotify Accounts
   * service: see the Web API Authorization Guide for details.
   * @param params
   *
   * @returns: Search results.
   */
  search(token: string, params: QueryParameters): Promise<any>
}

export class SearchApiService extends ApiService implements SearchApi {

  protected readonly HOST = 'https://api.spotify.com'

  public async search(token: string, params: QueryParameters): Promise<any> {
    const url = `${this.HOST}/v1/search?limit=50&q=as&type=artist`

    const method = 'GET'
    const headers = new Headers({Authorization: `Bearer ${token}`})

    const options = {method, headers}

    return await fetch(url, options)
  }
}
