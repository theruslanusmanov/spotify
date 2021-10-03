export class UserProfileApi {

  static async getCurrentUsersProfile() {
    const url = `https://api.spotify.com/v1/me`;

    const method = 'GET';
    const headers = new Headers({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });

    const options = {method, headers};

    return (await fetch(url, options)).json();
  }
}
