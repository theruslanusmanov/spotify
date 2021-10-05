export class PersonalizationApi {

  static async getShortcuts() {
    const url = `https://api.spotify.com/v1/recommendations?market=US&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&limit=6`

    const method = 'GET'
    const headers = new Headers({Authorization: `Bearer ${localStorage.getItem('access_token')}`})

    const options = {method, headers}

    return (await fetch(url, options)).json()
  }
}
