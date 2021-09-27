import {ApiService} from './api-service'

export enum QueryType {
  ALBUM = 'album',
  ARTIST = 'artist',
  PLAYLIST = 'playlist',
  TRACK = 'track',
  SHOW = 'show',
  EPISODE = 'episode'
}

export type QueryParameters = {
  q: string;
  type: QueryType;
  market?: string;
  limit?: string;
  offset?: string;
  includeExternal?: string;
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
    let queryString = new URLSearchParams()
    queryString.append('q', params.q);
    queryString.append('type', params.type);
    console.log(queryString);

    const url = `${this.HOST}/v1/search?limit=50&q=as&type=artist`

    const method = 'GET'
    const headers = new Headers({Authorization: `Bearer ${token}`})

    const options = {method, headers}

    return await fetch(url, options)
  }
}
