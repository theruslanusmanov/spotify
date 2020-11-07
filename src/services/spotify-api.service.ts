export class SpotifyApiService {

  public static async fetchSongs (token: string): Promise<any> {
    return await fetch(`https://api.spotify.com/v1/me/tracks?limit=50`,
      {
        method: 'GET',
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
        }),
      }).then((res: Response) => res.json())
  }
}
