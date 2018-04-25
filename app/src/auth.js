import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'jschutzman.auth0.com',
    clientID: 'WydWhN4ps44IIyHYPsMWPGu15d5Q90ql',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://jschutzman.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })
  login() {
    this.auth0.authorize()
  }
}
