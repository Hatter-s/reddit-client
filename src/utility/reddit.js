import { v4 as uuidv4 } from 'uuid';

let accessToken = localStorage.getItem('accessToken');
let refreshToken = localStorage.getItem('refreshToken');
const clientID = 'Qw6-wJx07w7x6wwguYpABQ';
const clientSecret = 's_7-u34VDk7anfZCdgbAd8Qsp4wJmw';
const scope = 'account identity mysubreddits read history';
const redirectURI = 'http://localhost:3000';
const domain = 'https://www.reddit.com';
const oauthDomain = 'https://oauth.reddit.com';

export const Reddit = {
  authorization() {
    const randomString = uuidv4();
    let url = new URL(`${domain}/api/v1/authorize?`);
    const params = {
      'client_id': clientID,
      'response_type': 'code',
      state: randomString,
      'redirect_uri': redirectURI,
      duration: 'permanent',
      scope: scope
    };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    window.location.href = url;
  },
  getAccessToken() {
    // if(accessToken && accessToken !== 'undefined') {
    //   return accessToken;
    // }
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


    return fetch(`${domain}/api/v1/access_token`,
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

    return fetch(`${domain}/api/v1/access_token`, {
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
  },
  getIdentity() {
    return fetch(`${oauthDomain}/api/v1/me`, {
      headers: {
        //if have error it may be here in accessToken
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()
    ).then(jsonResponse => {
      const result = {
        coins: jsonResponse.coins,
        name: jsonResponse.name,
        'snoovatar_img': jsonResponse['snoovatar_img'],
        'total_karma': jsonResponse['total_karma']
      }

      return result;
    });
  },
  search(term, limit, sort) {
    return fetch(`${domain}/search.json?q=${term}&limit=${limit}&sort=${sort}`
    ).then(response => response.json()
    ).then(jsonResponse => console.log(jsonResponse));
  },
  emojis() {
    return fetch(`${oauthDomain}/api/v1/webdev/emojis/all.json`,{
      headers: {
        //if have error it may be here in accessToken
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }
    ).then(response => response.json()
    ).then(jsonResponse => {
      console.log(jsonResponse);
      let result = []
      for(let [key, value] of Object.entries(jsonResponse.snoomojis)) {
        result = [...result, {[key]: value.url}]
      }
      return result;
    }).catch(err => console.log(err))
  },
  historyUpvoted() {
    return fetch(`${oauthDomain}/user/More_Ad1099/upvoted.json`, {
      headers: {
        //if have error it may be here in accessToken
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()
    ).then(jsonResponse => console.log(jsonResponse));
  },
  best() {
    return fetch(`${oauthDomain}/best`, {
      headers: {
        //if have error it may be here in accessToken
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()
    ).then(jsonResponse => console.log(jsonResponse)
    ).catch(err => console.log(err));
  }
}

//note to change the path when we make a login