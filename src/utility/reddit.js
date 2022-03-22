import { v4 as uuidv4 } from 'uuid';

let accessToken = localStorage.getItem('accessToken');
let refreshToken = localStorage.getItem('refreshToken');
const clientID = 'Qw6-wJx07w7x6wwguYpABQ';
const clientSecret = 's_7-u34VDk7anfZCdgbAd8Qsp4wJmw';
const redirectURI = 'http://192.168.1.2:3000/';

export const Reddit = {
  authorization() {
    const randomString = uuidv4();
    let url = new URL('https://www.reddit.com/api/v1/authorize?');
    const params = {
      'client_id': clientID,
      'response_type': 'code',
      state: randomString,
      'redirect_uri': redirectURI,
      duration: 'permanent',
      scope: 'account'
    };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    window.location.href = url;
  },
  getAccessToken() {
    if(accessToken && accessToken !== 'undefined') {
      return accessToken;
    }
    //find params
    const search = window.location.search;
    // don't access authentication
    if (search === '') {
      Reddit.authorization();
    }
    const params = {};
    search.match(/[^?&=]+/g).forEach((element, index, array) => {
      if(index % 2 === 0) {
        params[element] = array[index+ 1];
      }
    });
    
    //handle error
    // we will add 1 element (tag) html to display this
    if(params.error) {
      console.log(`We have error, name: ${params.error}`);
      return
    }
    //get accesstoken in server
    let headersAuthorization =  btoa(`${clientID}:${clientSecret}`);
    //body request
    let body = `grant_type=authorization_code&code=${params.code}&redirect_uri=${redirectURI}`;


    return fetch('https://www.reddit.com/api/v1/access_token',
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${headersAuthorization}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
      }
    ).then(response => response.json()
    ).then(jsonResponse => {
      if(jsonResponse.error === 'invalid_grant') {
        Reddit.authorization()
      }
      localStorage.setItem('accessToken', jsonResponse['access_token']);
      localStorage.setItem('refreshToken', jsonResponse['refresh_token']);
      localStorage.setItem('expiresIn', jsonResponse['expires_in'])
      accessToken = jsonResponse['access_token'];
      refreshToken = jsonResponse['refresh_token'];
      return accessToken;
    }
    ).catch(error => {
      console.log(error.error);
      if(error.error === 'invalid_grant') {
        Reddit.authorization()
      }
    });
  },
  getRefreshToken() {
    //body request
    const body = `grant_type=refresh_token&refresh_token=${refreshToken}`;

    fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    }).then( response => response.json()
    ).then(jsonResponse => {
      //don't have refresh token
      if(jsonResponse.error === 400) {
        return Reddit.getAccessToken();
      }
      localStorage.setItem('accessToken', jsonResponse['access_token']);
      localStorage.setItem('expiresIn', jsonResponse['expires_in'])
      accessToken = jsonResponse['access_token'];
      return accessToken;
    })
  }
}

//note to change the path when we make a login