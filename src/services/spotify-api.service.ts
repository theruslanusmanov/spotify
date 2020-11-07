export class SpotifyApiService {

  public static fetchSongs (accessToken: string): Request {
    return new Request(`https://api.spotify.com/v1/me/tracks?limit=50`,
      {
        headers: new Headers({
          'Authorization': 'Bearer ' + accessToken,
        }),
      })
  }
}
