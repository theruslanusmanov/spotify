import {ApiService} from './api-service'

interface HomeApi {

  /**
   * GET: /v1/views/desktop-home?timestamp=2021-01-26T10%3A55%3A43.508Z&platform=web&content_limit=10&limit=20&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&image_style=gradient_overlay&country=RU&market=from_token&locale=en
   * Get a shortcuts
   * @params:
   * timestamp: 2021-01-26T10:55:43.508Z
   * platform: web
   * content_limit: 10
   * limit: 20
   * types: album,playlist,artist,show,station
   * image_style: gradient_overlay
   * country: RU
   * market: from_token
   * locale: en
   */
  getShortcuts(token: string): Promise<any>
}

export class HomeApiService extends ApiService implements HomeApi {

  protected readonly HOST = 'https://api.spotify.com'

  public async getShortcuts(token: string): Promise<any> {
    const url = `${this.HOST}/v1/me/views?timestamp=2021-01-26T10%3A55%3A43.508Z&platform=web&content_limit=10&limit=20&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&image_style=gradient_overlay&country=RU&market=from_token&locale=en`

    const method = 'GET'
    const headers = new Headers({Authorization: `Bearer ${token}`})

    const options = {method, headers}

    return await fetch(url, options)
  }
}
