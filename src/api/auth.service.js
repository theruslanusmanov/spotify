const CLIENT_ID = 'CLIENT_ID';
const CLIENT_SECRET = 'CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000/callback';
const queryString = '';

export class AuthService {

  /**
   * Request Access Token.
   * @param req
   * @param res
   * @see https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
   */
  login(req, res) {
    const code = req.query.code || null;
    const state = req.query.state || null;

    if (state === null) {
      res.redirect('/#' +
        queryString.stringify({
          error: 'state_mismatch'
        }));
    } else {
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: REDIRECT_URI,
          grant_type: 'authorization_code'
        },
        headers: {
          'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
        json: true
      };
    }
  }
}