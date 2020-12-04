import {ApiService} from './api-service'

export enum Config {
  CLIENT_ID = '6e313238e1804ca3891543ae4f2b0ee3', // Your client id
  CLIENT_SECRET = '734d563063e94b3fa370e470ae885e06', // Your secret
  REDIRECT_URI = 'http://localhost:3000/', // Your redirect uri
  HOST = 'https://accounts.spotify.com'
}

export type AuthorizeParams = {

  /**
   * When you register your application, Spotify provides you a Client ID.
   */
  client_id: string;

  /**
   * Set to code.
   */
  response_type: string;

  /**
   * The URI to redirect to after the user grants or
   * denies permission. This URI needs to have been entered in the Redirect URI whitelist
   * that you specified when you registered your application.
   * The value of redirect_uri here must exactly match one of the values you entered
   * when you registered your application, including upper or lowercase, terminating slashes,
   * and such.
   */
  redirect_uri: string;
}

export type TokenParams = {

  /**
   * As defined in the OAuth 2.0 specification,
   * this field must contain the value "authorization_code".
   */
  grant_type: string;

  /**
   * The authorization code returned from the initial request to the
   * Account /authorize endpoint.
   */
  code: string;

  /**
   * This parameter is used for validation only (there is no actual redirection).
   * The value of this parameter must exactly match the value of redirect_uri
   * supplied when requesting the authorization code.
   */
  redirect_uri: string;
}

interface AuthorizationApi {

  /**
   * GET https://accounts.spotify.com/authorize
   *
   * Your application sends a request to the Spotify Accounts service.
   */
  authorize(params: AuthorizeParams): Promise<any>

  /**
   * POST https://accounts.spotify.com/api/token
   *
   * When the authorization code has been received,
   * you will need to exchange it with an access token by making a POST request
   * to the Spotify Accounts service, this time to its /api/token endpoint
   */
  token(params: TokenParams): Promise<any>
}

export class AuthorizationApiService extends ApiService implements AuthorizationApi {

  readonly HOST = 'https://accounts.spotify.com'

  public async authorize(params: AuthorizeParams): Promise<any> {
    console.log(this)
    const url = new URL(`${this.HOST}/authorize`);

    // @ts-ignore
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const method = 'GET'
    const headers = new Headers()

    const options = {method, headers}

    return await fetch(url.toString(), options)
  }

  public async token(params: TokenParams): Promise<any> {
    const url = `${this.HOST}/api/token`

    const method = 'POST'
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    const options = {method, headers}

    return await fetch(url, options)
  }
}
