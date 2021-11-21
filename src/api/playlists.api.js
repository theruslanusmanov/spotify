export class PlaylistsApi {

  /**
   * GET /me/playlist
   * Get a list of the playlists owned or followed by the current Spotify user.
   * @param limit - The maximum number of items to return.
   * Default: 20. Minimum: 1. Maximum: 50.
   * @param offset - 'The index of the first playlist to return.
   * Default: 0 (the first object). Maximum offset: 100.000. Use with limit to get the next set of playlists.'
   */
  static async getCurrentUserPlaylist (limit, offset) {
    const url = `https://api.spotify.com/v1/me/playlist`

    const method = 'GET'
    const headers = new Headers({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    })

    const options = { method, headers }

    return (await fetch(url, options)).json()
  }
}
