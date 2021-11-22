export class GenresApi {

  /**
   * GET /recommendations/available-genre-seeds
   * Retrieve a list of available genres seed parameter values for recommendations.
   */
  static async getRecommendationGenres () {
    const url = `https://api.spotify.com/v1/recommendations/available-genre-seeds`

    const method = 'GET'
    const headers = new Headers({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    })

    const options = { method, headers }

    return (await fetch(url, options)).json()
  }
}
